#!/usr/bin/env python3
"""Turn a wget mirror of www.arcsuspension.in into a safe, static TEST COPY.
- noindex meta on every page, robots.txt Disallow: /
- fixed TEST COPY banner
- blocks all POST / .php XHR + POST form submits (no orders/enquiries from the copy)
- cart / wishlist / compare / checkout / pincode buttons -> send user to the real product page on www.arcsuspension.in
- removes ads/analytics/push/chat scripts
- rebuilds catalog product grids (normally loaded by POST ajax) statically from crawled product pages
Usage: postprocess.py <wget_mirror_dir> <out_dir>
"""
import os, re, sys, shutil, html, json, posixpath

SRC, OUT = sys.argv[1], sys.argv[2]
HOST = 'www.arcsuspension.in'
LIVE = 'https://www.arcsuspension.in'
EXT = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net']

if os.path.exists(OUT):
    shutil.rmtree(OUT)
shutil.copytree(os.path.join(SRC, HOST), OUT)
for e in EXT:
    if os.path.isdir(os.path.join(SRC, e)):
        shutil.copytree(os.path.join(SRC, e), os.path.join(OUT, '_ext', e))

ext_re = re.compile(r'\.\./((?:\.\./)*)(' + '|'.join(re.escape(e) for e in EXT) + r')/')

def rel(from_file, to_file):
    return posixpath.relpath(to_file, posixpath.dirname(from_file) or '.')

pages = {}  # url path (no ext) -> relative file path
for root, _, files in os.walk(OUT):
    for f in files:
        full = os.path.join(root, f)
        r = os.path.relpath(full, OUT).replace(os.sep, '/')
        if r.startswith('_ext/'):
            continue
        if f.endswith(('.html', '.css', '.js')):
            with open(full, encoding='utf-8', errors='replace') as fh:
                s = fh.read()
            s2 = ext_re.sub(lambda m: m.group(1) + '_ext/' + m.group(2) + '/', s)
            if s2 != s:
                with open(full, 'w', encoding='utf-8') as fh:
                    fh.write(s2)
        if f.endswith('.html'):
            p = '/' + r[:-5]
            if p.endswith('/index'):
                p = p[:-5]
            pages[p.rstrip('/') or '/'] = r

# ---- product data from product pages ----
products = {}
for p, r in pages.items():
    s = open(os.path.join(OUT, r), encoding='utf-8', errors='replace').read()
    m = re.search(r'<h1 class="singal-prod-title">(.*?)</h1>', s, re.S)
    if not m:
        continue
    title = re.sub(r'\s+', ' ', re.sub('<[^>]+>', '', m.group(1))).strip()
    pid = re.search(r'name="productid" value="(\d+)"', s)
    price = re.search(r'id="change_price">\s*([\d,\.]+)', s)
    mrp = re.search(r'id="off_change_price">\s*([\d,\.]+)', s)
    img = re.search(r'<meta property="og:image" content="([^"]+)"', s)
    imgurl = img.group(1) if img else ''
    local_img = None
    if imgurl.startswith(LIVE + '/'):
        cand = imgurl[len(LIVE) + 1:]
        thumb = re.sub(r'^img/productimg/', 'img/productimg/thumb1/', cand)
        for c in (thumb, cand):
            if os.path.exists(os.path.join(OUT, c)):
                local_img = c
                break
    products[p] = dict(file=r, title=title, pid=pid.group(1) if pid else '0',
                       price=price.group(1).strip() if price else '', mrp=mrp.group(1) if mrp else '',
                       img=local_img, imgurl=imgurl)

CARD = '''<div class="col-6 col-sm-4 col-md-6 col-lg-4 col-xl-4 mb-0 mb-md-3 pl-0 pl-md-3 pr-0 pro-col-listing "><div class="pro-thumb-col card text-center">
    <div class="prod-pic-fig position-relative d-flex flex-wrap align-content-center"><a href="{href}" hreflang="en"><img src="{img}" alt="product-thumb" class="img-fluid" width="220" height="300"></a></div>
    <div class="prod-des-figcap pb-0 px-3 py-md-3 p-md-3">
        <h2 class="prod-name h6 mb-1"><a href="{href}" hreflang="en">{title}</a></h2>
        <div class="prod-total-price">
            <span class="mr-2 pro-actual-price"><i class="fa fa-inr"></i>{price}</span>{mrp}
        </div>
        <div class="prod-varient p-3">
            <div class="prod-over-action mb-2">
                <span class="p-0 pro-compare cc-cursor-pointer btn btn-sm thumb-hov-btn text-center cc-cursor-pointer rounded-circle btn-primary" title="Compare"><label class="mb-0 cc-cursor-pointer"><input type="checkbox" class="compare_{pid}" onchange="add_to_compare({pid})" value ="0" > <i class="fa fa-random" aria-hidden="true"></i></label></span>
                <button type="button" class="p-0 btn btn-sm thumb-hov-btn pdod-wish text-center rounded-circle wishlist_btn_{pid} btn-primary" onclick="add_to_wishlist({pid},1)" title="Wishlist"><i class="fa fa-heart" aria-hidden="true"></i></button>
                <button type="button" class="p-0 btn btn-sm thumb-hov-btn text-center rounded-circle cart_btn_{pid} btn-primary" onclick="add_to_cart({pid},1)" title="Cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</div></div>
'''

HEAD_INJECT = '''<meta name="robots" content="noindex,nofollow">
<meta name="googlebot" content="noindex,nofollow">
<script>/* TEST COPY safety guard: nothing on this copy can place an order, log in or send a form. */
(function(){
  var LIVE='https://www.arcsuspension.in';
  function liveUrl(){var p=location.pathname.replace(/^\\/[^\\/]*\\.github\\.io/,'');p=p.replace(/index\\.html$/,'').replace(/\\.html$/,'');return LIVE+(p||'/');}
  function note(){var d=document.getElementById('arc-test-toast');if(!d){d=document.createElement('div');d.id='arc-test-toast';d.style.cssText='position:fixed;left:50%;top:20px;transform:translateX(-50%);z-index:2147483647;background:#222;color:#fff;padding:10px 16px;border-radius:6px;font:14px/1.4 Arial,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.4)';document.body.appendChild(d);}d.innerHTML='This is a TEST COPY. Opening the live shop <b>www.arcsuspension.in</b> for cart, orders and enquiries&hellip;';d.style.display='block';}
  function goLive(){note();setTimeout(function(){location.href=liveUrl();},1200);}
  var O=XMLHttpRequest.prototype.open,S=XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open=function(m,u){this.__arcBlock=(String(m).toUpperCase()!=='GET')||/\\.php|arcsuspension\\.in/i.test(String(u));return O.apply(this,arguments);};
  XMLHttpRequest.prototype.send=function(){if(this.__arcBlock){try{this.abort();}catch(e){}return;}return S.apply(this,arguments);};
  if(window.fetch){var F=window.fetch;window.fetch=function(u,o){var m=(o&&o.method||'GET').toUpperCase();if(m!=='GET'||/\\.php|arcsuspension\\.in/i.test(String(u&&u.url||u)))return Promise.reject(new Error('blocked on test copy'));return F.apply(this,arguments);};}
  if(navigator.sendBeacon){navigator.sendBeacon=function(){return false;};}
  document.addEventListener('submit',function(e){var f=e.target;var m=(f.getAttribute('method')||'get').toLowerCase();var a=f.getAttribute('action')||'';
    if(m==='get'&&/^https:\\/\\/www\\.arcsuspension\\.in\\/search/.test(a))return; /* search goes to the live site */
    e.preventDefault();e.stopImmediatePropagation();goLive();},true);
  document.addEventListener('click',function(e){var el=e.target;while(el&&el!==document){var oc=el.getAttribute&&el.getAttribute('onclick')||el.getAttribute&&el.getAttribute('onchange')||'';
    if(/add_to_cart|add_to_wishlist|add_to_compare|checkdelivery|clearcompare|bulk|review|enquiry|subscri|completeprofile|submit/i.test(oc)||(el.tagName==='BUTTON'&&/submit/i.test(el.getAttribute('type')||'')&&el.form)){e.preventDefault();e.stopImmediatePropagation();goLive();return;}
    el=el.parentNode;}},true);
})();</script>
'''

BANNER = ('<div id="arc-test-banner" style="position:fixed;left:8px;bottom:8px;z-index:2147483646;'
          'background:#c00;color:#fff;font:bold 12px/1.3 Arial,sans-serif;padding:5px 9px;border-radius:4px;'
          'box-shadow:0 1px 4px rgba(0,0,0,.35);pointer-events:auto">TEST COPY &mdash; live shop: '
          '<a href="https://www.arcsuspension.in/" style="color:#fff;text-decoration:underline">www.arcsuspension.in</a></div>')

strip_patterns = [
    re.compile(r'<script[^>]*src="[^"]*(googlesyndication|googletagmanager|onesignal|tawk\.to|getbutton\.io|google-analytics)[^"]*"[^>]*>\s*</script>', re.I),
    re.compile(r'<script[^>]*>(?:(?!</script>).)*?(gtag\(|OneSignal|Tawk_API|adsbygoogle|fbq\(|embed\.tawk|googletagmanager|gtm\.js)(?:(?!</script>).)*?</script>', re.I | re.S),
    re.compile(r'<meta\s+name="robots"[^>]*>', re.I),
    re.compile(r'<noscript>\s*<iframe[^>]*googletagmanager[^>]*>\s*</iframe>\s*</noscript>', re.I),
]

grids = 0
for p, r in pages.items():
    fp = os.path.join(OUT, r)
    s = open(fp, encoding='utf-8', errors='replace').read()
    for pat in strip_patterns:
        s = pat.sub('', s)
    # static product grid for catalog pages
    if 'class="row products pro-list-view-row' in s:
        pref = p.rstrip('/') + '/'
        items = [v for k, v in sorted(products.items()) if k.startswith(pref) or p == '/']
        cards = []
        items = [v for v in items if v['price'] not in ('', '0')]  # live site hides 0-price parent items
        for v in items:
            img = rel(r, v['img']) if v['img'] else v['imgurl']
            mrp = ''
            if v['mrp'] and v['mrp'] != v['price']:
                mrp = '<span class="mr-1 dist-price text-muted"><del><i class="fa fa-inr"></i>%s</del></span>' % v['mrp']
            cards.append(CARD.format(href=rel(r, v['file']), img=img, title=html.escape(v['title']),
                                     price=v['price'], mrp=mrp, pid=v['pid']))
        count = '<div class="col-md-12 d-none"><span class="page-list-count total-request">%d Items</span></div>' % len(items)
        s = s.replace('<div class="row products pro-list-view-row mr-0"></div>',
                      '<div class="row products pro-list-view-row mr-0">' + count + ''.join(cards) + '</div>', 1)
        s = s.replace('displayprod(siteurl,where, 1);', '/* listing is static on the test copy */ $(".itmtocount").html("%d Items");' % len(items))
        grids += 1
    s = re.sub(r'(<head[^>]*>)', lambda m: m.group(1) + '\n' + HEAD_INJECT, s, count=1, flags=re.I)
    s = re.sub(r'(<body[^>]*>)', lambda m: m.group(1) + BANNER, s, count=1, flags=re.I)
    s = re.sub(r'<title>', '<title>[TEST COPY] ', s, count=1)
    open(fp, 'w', encoding='utf-8').write(s)

open(os.path.join(OUT, 'robots.txt'), 'w').write('User-agent: *\nDisallow: /\n')
open(os.path.join(OUT, '.nojekyll'), 'w').write('')
if os.path.exists(os.path.join(OUT, 'index.html')):
    s = open(os.path.join(OUT, 'index.html'), encoding='utf-8').read()
    open(os.path.join(OUT, '404.html'), 'w', encoding='utf-8').write(s.replace('<head>', '<head><base href="/">', 1))
print(json.dumps(dict(pages=len(pages), products=len(products), grids=grids)))
