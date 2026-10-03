/* ARC Suspension Client Parity Script */
/* Version: Phase 013 Functional Workflow Parity */
/* Scoped under .arc-source-parity */

(function() {
    const SEARCH_CATALOG = [
  {
    "title": "Chevrolet",
    "category": "Make",
    "make": "Chevrolet",
    "model": "",
    "url": "https://www.arcsuspension.in/chevrolet",
    "local_url": "generation-catalog.html?make=Chevrolet"
  },
  {
    "title": "Captiva",
    "category": "Model",
    "make": "Chevrolet",
    "model": "Captiva",
    "url": "https://www.arcsuspension.in/chevrolet/captiva",
    "local_url": "generation-catalog.html?make=Chevrolet&model=Captiva"
  },
  {
    "title": "Captiva 2012 2016",
    "category": "Generation",
    "make": "Chevrolet",
    "model": "Captiva",
    "url": "https://www.arcsuspension.in/chevrolet/captiva/captiva-2012-2016",
    "local_url": "generation-catalog.html?make=Chevrolet&model=Captiva&gen=captiva-2012-2016"
  },
  {
    "title": "Chevrolet Captiva Arc Rear Shock Absorber Suspension Upgrade Kit",
    "category": "Product",
    "make": "Chevrolet",
    "model": "Captiva",
    "url": "https://www.arcsuspension.in/chevrolet/captiva/captiva-2012-2016/chevrolet-captiva-arc-rear-shock-absorber-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=chevrolet-captiva-arc-rear-shock-absorber-suspension-upgrade-kit"
  },
  {
    "title": "Tavera",
    "category": "Model",
    "make": "Chevrolet",
    "model": "Tavera",
    "url": "https://www.arcsuspension.in/chevrolet/tavera",
    "local_url": "generation-catalog.html?make=Chevrolet&model=Tavera"
  },
  {
    "title": "Tavera 2004 2017",
    "category": "Generation",
    "make": "Chevrolet",
    "model": "Tavera",
    "url": "https://www.arcsuspension.in/chevrolet/tavera/tavera-2004-2017",
    "local_url": "generation-catalog.html?make=Chevrolet&model=Tavera&gen=tavera-2004-2017"
  },
  {
    "title": "Chevrolet Tavera Arc Comfort Series Suspension Kit Rear Composite Leaf Spring Front And Rear Shock Absorber",
    "category": "Product",
    "make": "Chevrolet",
    "model": "Tavera",
    "url": "https://www.arcsuspension.in/chevrolet/tavera/tavera-2004-2017/chevrolet-tavera-arc-comfort-series-suspension-kit-rear-composite-leaf-spring-front-and-rear-shock-absorber",
    "local_url": "product-detail.html?slug=chevrolet-tavera-arc-comfort-series-suspension-kit-rear-composite-leaf-spring-front-and-rear-shock-absorber"
  },
  {
    "title": "Chevrolet Tavera Arc Shock Absorber Suspension Upgrade Kit",
    "category": "Product",
    "make": "Chevrolet",
    "model": "Tavera",
    "url": "https://www.arcsuspension.in/chevrolet/tavera/tavera-2004-2017/chevrolet-tavera-arc-shock-absorber-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=chevrolet-tavera-arc-shock-absorber-suspension-upgrade-kit"
  },
  {
    "title": "Composite Fiber Antenna Flagpoles",
    "category": "Make",
    "make": "Composite Fiber Antenna Flagpoles",
    "model": "",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles",
    "local_url": "generation-catalog.html?make=Composite Fiber Antenna Flagpoles"
  },
  {
    "title": "Composite Fiber Antenna Flagpoles Composite Fiber Antenna Flagpoles",
    "category": "Model",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite Fiber Antenna Flagpoles Composite Fiber Antenna Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles",
    "local_url": "generation-catalog.html?make=Composite-Fiber-Antenna-Flagpoles&model=Composite Fiber Antenna Flagpoles Composite Fiber Antenna Flagpoles"
  },
  {
    "title": "Composite Fiber Antenna Flagpoles Composite Fiber Antenna Flagpoles Composite Fiber Antenna Flagpoles",
    "category": "Generation",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles",
    "local_url": "generation-catalog.html?make=Composite-Fiber-Antenna-Flagpoles&model=Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles&gen=composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Black 2 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-2-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-2-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Black 4 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-4-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-4-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Black 6 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-6-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-black-6-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Stripe Design 2 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-2-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-2-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Stripe Design 4 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-4-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-4-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries Stripe Design 6 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-6-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-stripe-design-6-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries White 2 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-2-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-2-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries White 4 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-4-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-4-feet"
  },
  {
    "title": "Flexible Composite Fiber Antenna Flagpoles By Arc Industries White 6 Feet",
    "category": "Product",
    "make": "Composite-Fiber-Antenna-Flagpoles",
    "model": "Composite-Fiber-Antenna-Flagpoles-Composite-Fiber-Antenna-Flagpoles",
    "url": "https://www.arcsuspension.in/composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles-composite-fiber-antenna-flagpoles/flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-6-feet",
    "local_url": "product-detail.html?slug=flexible-composite-fiber-antenna-flagpoles-by-arc-industries-white-6-feet"
  },
  {
    "title": "Force",
    "category": "Make",
    "make": "Force",
    "model": "",
    "url": "https://www.arcsuspension.in/force",
    "local_url": "generation-catalog.html?make=Force"
  },
  {
    "title": "Tempo Traveller",
    "category": "Model",
    "make": "Force",
    "model": "Tempo Traveller",
    "url": "https://www.arcsuspension.in/force/tempo-traveller",
    "local_url": "generation-catalog.html?make=Force&model=Tempo Traveller"
  },
  {
    "title": "Gurkha",
    "category": "Generation",
    "make": "Force",
    "model": "Tempo-Traveller",
    "url": "https://www.arcsuspension.in/force/tempo-traveller/gurkha",
    "local_url": "generation-catalog.html?make=Force&model=Tempo-Traveller&gen=gurkha"
  },
  {
    "title": "Tempo Traveller Tempo Traveller",
    "category": "Generation",
    "make": "Force",
    "model": "Tempo-Traveller",
    "url": "https://www.arcsuspension.in/force/tempo-traveller/tempo-traveller-tempo-traveller",
    "local_url": "generation-catalog.html?make=Force&model=Tempo-Traveller&gen=tempo-traveller-tempo-traveller"
  },
  {
    "title": "Force Tempo Traveller Arc Suspension Kit Front And Rear Composite Leaf Springs And Shock Absorbers",
    "category": "Product",
    "make": "Force",
    "model": "Tempo-Traveller",
    "url": "https://www.arcsuspension.in/force/tempo-traveller/tempo-traveller-tempo-traveller/force-tempo-traveller-arc-suspension-kit-front-and-rear-composite-leaf-springs-and-shock-absorbers",
    "local_url": "product-detail.html?slug=force-tempo-traveller-arc-suspension-kit-front-and-rear-composite-leaf-springs-and-shock-absorbers"
  },
  {
    "title": "Force Tempo Traveller Arc Suspension Kit Front And Rear Composite Leaf Springs And Shock Absorbers Full Kit Front And Rear",
    "category": "Product",
    "make": "Force",
    "model": "Tempo-Traveller",
    "url": "https://www.arcsuspension.in/force/tempo-traveller/tempo-traveller-tempo-traveller/force-tempo-traveller-arc-suspension-kit-front-and-rear-composite-leaf-springs-and-shock-absorbers-full-kit-front-and-rear",
    "local_url": "product-detail.html?slug=force-tempo-traveller-arc-suspension-kit-front-and-rear-composite-leaf-springs-and-shock-absorbers-full-kit-front-and-rear"
  },
  {
    "title": "Ford",
    "category": "Make",
    "make": "Ford",
    "model": "",
    "url": "https://www.arcsuspension.in/ford",
    "local_url": "generation-catalog.html?make=Ford"
  },
  {
    "title": "Ecosport",
    "category": "Model",
    "make": "Ford",
    "model": "Ecosport",
    "url": "https://www.arcsuspension.in/ford/ecosport",
    "local_url": "generation-catalog.html?make=Ford&model=Ecosport"
  },
  {
    "title": "Ford Ecosport B515 Bk",
    "category": "Generation",
    "make": "Ford",
    "model": "Ecosport",
    "url": "https://www.arcsuspension.in/ford/ecosport/ford-ecosport-b515-bk",
    "local_url": "generation-catalog.html?make=Ford&model=Ecosport&gen=ford-ecosport-b515-bk"
  },
  {
    "title": "Ford Ecosport Rear Shock Absorber Suspension Upgrade Kit",
    "category": "Product",
    "make": "Ford",
    "model": "Ecosport",
    "url": "https://www.arcsuspension.in/ford/ecosport/ford-ecosport-b515-bk/ford-ecosport-rear-shock-absorber-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=ford-ecosport-rear-shock-absorber-suspension-upgrade-kit"
  },
  {
    "title": "Ford Ecosport Rear Shock Absorber Suspension Upgrade Kit Rear Shocks",
    "category": "Product",
    "make": "Ford",
    "model": "Ecosport",
    "url": "https://www.arcsuspension.in/ford/ecosport/ford-ecosport-b515-bk/ford-ecosport-rear-shock-absorber-suspension-upgrade-kit-rear-shocks",
    "local_url": "product-detail.html?slug=ford-ecosport-rear-shock-absorber-suspension-upgrade-kit-rear-shocks"
  },
  {
    "title": "Endeavour",
    "category": "Model",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour",
    "local_url": "generation-catalog.html?make=Ford&model=Endeavour"
  },
  {
    "title": "Endeavour 1St Gen 2003 2014",
    "category": "Generation",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/endeavour-1st-gen-2003-2014",
    "local_url": "generation-catalog.html?make=Ford&model=Endeavour&gen=endeavour-1st-gen-2003-2014"
  },
  {
    "title": "Ford Endeavour 2003 2015 Arc Composite Leaf Springs",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/endeavour-1st-gen-2003-2014/ford-endeavour-2003-2015-arc-composite-leaf-springs",
    "local_url": "product-detail.html?slug=ford-endeavour-2003-2015-arc-composite-leaf-springs"
  },
  {
    "title": "Ford Endeavour 2003 2015 Arc Composite Leaf Springs Rear Leaf Springs",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/endeavour-1st-gen-2003-2014/ford-endeavour-2003-2015-arc-composite-leaf-springs-rear-leaf-springs",
    "local_url": "product-detail.html?slug=ford-endeavour-2003-2015-arc-composite-leaf-springs-rear-leaf-springs"
  },
  {
    "title": "Ford Endeavour Arc Suspension Kit Front Rear Shock Absorbers Rear Composite Leaf Springs",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/endeavour-1st-gen-2003-2014/ford-endeavour-arc-suspension-kit-front-rear-shock-absorbers-rear-composite-leaf-springs",
    "local_url": "product-detail.html?slug=ford-endeavour-arc-suspension-kit-front-rear-shock-absorbers-rear-composite-leaf-springs"
  },
  {
    "title": "Ford Endeavour Arc Suspension Kit Front Rear Shock Absorbers Rear Composite Leaf Springs Ford Endeavour 2003 2014",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/endeavour-1st-gen-2003-2014/ford-endeavour-arc-suspension-kit-front-rear-shock-absorbers-rear-composite-leaf-springs-ford-endeavour-2003-2014",
    "local_url": "product-detail.html?slug=ford-endeavour-arc-suspension-kit-front-rear-shock-absorbers-rear-composite-leaf-springs-ford-endeavour-2003-2014"
  },
  {
    "title": "Ford Endeavour 2Nd Gen 2015 2022",
    "category": "Generation",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/ford-endeavour-2nd-gen-2015-2022",
    "local_url": "generation-catalog.html?make=Ford&model=Endeavour&gen=ford-endeavour-2nd-gen-2015-2022"
  },
  {
    "title": "Ford Endeavour 2Nd Gen Rear Shock Absorber Arc Suspension Upgrade Kit Anti Roll",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/ford-endeavour-2nd-gen-2015-2022/ford-endeavour-2nd-gen-rear-shock-absorber-arc-suspension-upgrade-kit-anti-roll",
    "local_url": "product-detail.html?slug=ford-endeavour-2nd-gen-rear-shock-absorber-arc-suspension-upgrade-kit-anti-roll"
  },
  {
    "title": "Ford Endeavour 2Nd Gen Rear Shock Absorber Arc Suspension Upgrade Kit Anti Roll 2015 2016 2017 2018 2019 2020 2021 2022",
    "category": "Product",
    "make": "Ford",
    "model": "Endeavour",
    "url": "https://www.arcsuspension.in/ford/endeavour/ford-endeavour-2nd-gen-2015-2022/ford-endeavour-2nd-gen-rear-shock-absorber-arc-suspension-upgrade-kit-anti-roll-2015-2016-2017-2018-2019-2020-2021-2022",
    "local_url": "product-detail.html?slug=ford-endeavour-2nd-gen-rear-shock-absorber-arc-suspension-upgrade-kit-anti-roll-2015-2016-2017-2018-2019-2020-2021-2022"
  },
  {
    "title": "Figo",
    "category": "Model",
    "make": "Ford",
    "model": "Figo",
    "url": "https://www.arcsuspension.in/ford/figo",
    "local_url": "generation-catalog.html?make=Ford&model=Figo"
  },
  {
    "title": "Ford Figo B562 2015 2021",
    "category": "Generation",
    "make": "Ford",
    "model": "Figo",
    "url": "https://www.arcsuspension.in/ford/figo/ford-figo-b562-2015-2021",
    "local_url": "generation-catalog.html?make=Ford&model=Figo&gen=ford-figo-b562-2015-2021"
  },
  {
    "title": "Ford Figo 2015 2021 Arc Rear Shock Absorber Bolt On Replacement Suspension Upgrade Kit",
    "category": "Product",
    "make": "Ford",
    "model": "Figo",
    "url": "https://www.arcsuspension.in/ford/figo/ford-figo-b562-2015-2021/ford-figo-2015-2021-arc-rear-shock-absorber-bolt-on-replacement-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=ford-figo-2015-2021-arc-rear-shock-absorber-bolt-on-replacement-suspension-upgrade-kit"
  },
  {
    "title": "Ford Figo 2015 2021 Arc Rear Shock Absorber Bolt On Replacement Suspension Upgrade Kit Rear Shock Absorbers",
    "category": "Product",
    "make": "Ford",
    "model": "Figo",
    "url": "https://www.arcsuspension.in/ford/figo/ford-figo-b562-2015-2021/ford-figo-2015-2021-arc-rear-shock-absorber-bolt-on-replacement-suspension-upgrade-kit-rear-shock-absorbers",
    "local_url": "product-detail.html?slug=ford-figo-2015-2021-arc-rear-shock-absorber-bolt-on-replacement-suspension-upgrade-kit-rear-shock-absorbers"
  },
  {
    "title": "Gmc Hummer",
    "category": "Make",
    "make": "Gmc Hummer",
    "model": "",
    "url": "https://www.arcsuspension.in/gmc-hummer",
    "local_url": "generation-catalog.html?make=Gmc Hummer"
  },
  {
    "title": "Hummer H3",
    "category": "Model",
    "make": "Gmc-Hummer",
    "model": "Hummer H3",
    "url": "https://www.arcsuspension.in/gmc-hummer/hummer-h3",
    "local_url": "generation-catalog.html?make=Gmc-Hummer&model=Hummer H3"
  },
  {
    "title": "Hummer H3 Hummer H3",
    "category": "Generation",
    "make": "Gmc-Hummer",
    "model": "Hummer-H3",
    "url": "https://www.arcsuspension.in/gmc-hummer/hummer-h3/hummer-h3-hummer-h3",
    "local_url": "generation-catalog.html?make=Gmc-Hummer&model=Hummer-H3&gen=hummer-h3-hummer-h3"
  },
  {
    "title": "Hummer H3 Rear Arc Supension Kit Composite Leaf Springs And Shock Absorbers",
    "category": "Product",
    "make": "Gmc-Hummer",
    "model": "Hummer-H3",
    "url": "https://www.arcsuspension.in/gmc-hummer/hummer-h3/hummer-h3-hummer-h3/hummer-h3-rear-arc-supension-kit-composite-leaf-springs-and-shock-absorbers",
    "local_url": "product-detail.html?slug=hummer-h3-rear-arc-supension-kit-composite-leaf-springs-and-shock-absorbers"
  },
  {
    "title": "Hindustan Motors",
    "category": "Make",
    "make": "Hindustan Motors",
    "model": "",
    "url": "https://www.arcsuspension.in/hindustan-motors",
    "local_url": "generation-catalog.html?make=Hindustan Motors"
  },
  {
    "title": "Hindustan Ambassador",
    "category": "Model",
    "make": "Hindustan-Motors",
    "model": "Hindustan Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador",
    "local_url": "generation-catalog.html?make=Hindustan-Motors&model=Hindustan Ambassador"
  },
  {
    "title": "Ambassador 1958 2014",
    "category": "Generation",
    "make": "Hindustan-Motors",
    "model": "Hindustan-Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador/ambassador-1958-2014",
    "local_url": "generation-catalog.html?make=Hindustan-Motors&model=Hindustan-Ambassador&gen=ambassador-1958-2014"
  },
  {
    "title": "Ambassador Arc Composite Leaf Spring Rear",
    "category": "Product",
    "make": "Hindustan-Motors",
    "model": "Hindustan-Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador/ambassador-1958-2014/ambassador-arc-composite-leaf-spring-rear",
    "local_url": "product-detail.html?slug=ambassador-arc-composite-leaf-spring-rear"
  },
  {
    "title": "Ambassador Arc Composite Leaf Spring Rear Leaf Spring",
    "category": "Product",
    "make": "Hindustan-Motors",
    "model": "Hindustan-Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador/ambassador-1958-2014/ambassador-arc-composite-leaf-spring-rear-leaf-spring",
    "local_url": "product-detail.html?slug=ambassador-arc-composite-leaf-spring-rear-leaf-spring"
  },
  {
    "title": "Ambassador Arc Suspension Kit Rear Composite Leaf Springs Front And Rear Shock Absorbers",
    "category": "Product",
    "make": "Hindustan-Motors",
    "model": "Hindustan-Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador/ambassador-1958-2014/ambassador-arc-suspension-kit-rear-composite-leaf-springs-front-and-rear-shock-absorbers",
    "local_url": "product-detail.html?slug=ambassador-arc-suspension-kit-rear-composite-leaf-springs-front-and-rear-shock-absorbers"
  },
  {
    "title": "Ambassador Arc Suspension Kit Rear Composite Leaf Springs Front And Rear Shock Absorbers Ambassador",
    "category": "Product",
    "make": "Hindustan-Motors",
    "model": "Hindustan-Ambassador",
    "url": "https://www.arcsuspension.in/hindustan-motors/hindustan-ambassador/ambassador-1958-2014/ambassador-arc-suspension-kit-rear-composite-leaf-springs-front-and-rear-shock-absorbers-ambassador",
    "local_url": "product-detail.html?slug=ambassador-arc-suspension-kit-rear-composite-leaf-springs-front-and-rear-shock-absorbers-ambassador"
  },
  {
    "title": "Honda",
    "category": "Make",
    "make": "Honda",
    "model": "",
    "url": "https://www.arcsuspension.in/honda",
    "local_url": "generation-catalog.html?make=Honda"
  },
  {
    "title": "Amaze",
    "category": "Model",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze",
    "local_url": "generation-catalog.html?make=Honda&model=Amaze"
  },
  {
    "title": "Amaze 2013 2017",
    "category": "Generation",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze/amaze-2013-2017",
    "local_url": "generation-catalog.html?make=Honda&model=Amaze&gen=amaze-2013-2017"
  },
  {
    "title": "Honda Amaze Arc Rear Shock Absorbers Suspension Upgrade Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze/amaze-2013-2017/honda-amaze-arc-rear-shock-absorbers-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=honda-amaze-arc-rear-shock-absorbers-suspension-upgrade-kit"
  },
  {
    "title": "Honda Amaze 2Nd Gen 2018 2024",
    "category": "Generation",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze/honda-amaze-2nd-gen-2018-2024",
    "local_url": "generation-catalog.html?make=Honda&model=Amaze&gen=honda-amaze-2nd-gen-2018-2024"
  },
  {
    "title": "Honda Amaze 2018 2024 Arc Suspension Upgrade Kit Rear Shock Absorbers Rear 15Mm Lift Spacer",
    "category": "Product",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze/honda-amaze-2nd-gen-2018-2024/honda-amaze-2018-2024-arc-suspension-upgrade-kit-rear-shock-absorbers-rear-15mm-lift-spacer",
    "local_url": "product-detail.html?slug=honda-amaze-2018-2024-arc-suspension-upgrade-kit-rear-shock-absorbers-rear-15mm-lift-spacer"
  },
  {
    "title": "Honda Amaze 2018 2024 Arc Suspension Upgrade Kit Rear Shock Absorbers Rear 15Mm Lift Spacer Rear Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Amaze",
    "url": "https://www.arcsuspension.in/honda/amaze/honda-amaze-2nd-gen-2018-2024/honda-amaze-2018-2024-arc-suspension-upgrade-kit-rear-shock-absorbers-rear-15mm-lift-spacer-rear-kit",
    "local_url": "product-detail.html?slug=honda-amaze-2018-2024-arc-suspension-upgrade-kit-rear-shock-absorbers-rear-15mm-lift-spacer-rear-kit"
  },
  {
    "title": "Brio",
    "category": "Model",
    "make": "Honda",
    "model": "Brio",
    "url": "https://www.arcsuspension.in/honda/brio",
    "local_url": "generation-catalog.html?make=Honda&model=Brio"
  },
  {
    "title": "Brio Brio",
    "category": "Generation",
    "make": "Honda",
    "model": "Brio",
    "url": "https://www.arcsuspension.in/honda/brio/brio-brio",
    "local_url": "generation-catalog.html?make=Honda&model=Brio&gen=brio-brio"
  },
  {
    "title": "Honda Brio Arc Rear Shock Absorbers Suspension Upgrade Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Brio",
    "url": "https://www.arcsuspension.in/honda/brio/brio-brio/honda-brio-arc-rear-shock-absorbers-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=honda-brio-arc-rear-shock-absorbers-suspension-upgrade-kit"
  },
  {
    "title": "City",
    "category": "Model",
    "make": "Honda",
    "model": "City",
    "url": "https://www.arcsuspension.in/honda/city",
    "local_url": "generation-catalog.html?make=Honda&model=City"
  },
  {
    "title": "City 2014 2020",
    "category": "Generation",
    "make": "Honda",
    "model": "City",
    "url": "https://www.arcsuspension.in/honda/city/city-2014-2020",
    "local_url": "generation-catalog.html?make=Honda&model=City&gen=city-2014-2020"
  },
  {
    "title": "Honda City 2014 2020 Arc Front And Rear Shock Absorbers Suspension Kit With 20Mm Lift",
    "category": "Product",
    "make": "Honda",
    "model": "City",
    "url": "https://www.arcsuspension.in/honda/city/city-2014-2020/honda-city-2014-2020-arc-front-and-rear-shock-absorbers-suspension-kit-with-20mm-lift",
    "local_url": "product-detail.html?slug=honda-city-2014-2020-arc-front-and-rear-shock-absorbers-suspension-kit-with-20mm-lift"
  },
  {
    "title": "Honda City Type 5 2008 2013",
    "category": "Generation",
    "make": "Honda",
    "model": "City",
    "url": "https://www.arcsuspension.in/honda/city/honda-city-type-5-2008-2013",
    "local_url": "generation-catalog.html?make=Honda&model=City&gen=honda-city-type-5-2008-2013"
  },
  {
    "title": "Honda City 2008 2013 Arc Suspension Kit Front Strut Rear Shock Absorber With Link And Lift Spacers 20Mm",
    "category": "Product",
    "make": "Honda",
    "model": "City",
    "url": "https://www.arcsuspension.in/honda/city/honda-city-type-5-2008-2013/honda-city-2008-2013-arc-suspension-kit-front-strut-rear-shock-absorber-with-link-and-lift-spacers-20mm",
    "local_url": "product-detail.html?slug=honda-city-2008-2013-arc-suspension-kit-front-strut-rear-shock-absorber-with-link-and-lift-spacers-20mm"
  },
  {
    "title": "Jazz",
    "category": "Model",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz",
    "local_url": "generation-catalog.html?make=Honda&model=Jazz"
  },
  {
    "title": "Honda Jazz 2009 2012 Arc Rear Shock Absorber",
    "category": "Generation",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz/honda-jazz-2009-2012-arc-rear-shock-absorber",
    "local_url": "generation-catalog.html?make=Honda&model=Jazz&gen=honda-jazz-2009-2012-arc-rear-shock-absorber"
  },
  {
    "title": "Honda Jazz Arc Rear Shock Absorbers Suspension Upgrade Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz/honda-jazz-2009-2012-arc-rear-shock-absorber/honda-jazz-arc-rear-shock-absorbers-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=honda-jazz-arc-rear-shock-absorbers-suspension-upgrade-kit"
  },
  {
    "title": "Honda Jazz 2014 2020 Honda Fit Gk",
    "category": "Generation",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz/honda-jazz-2014-2020-honda-fit-gk",
    "local_url": "generation-catalog.html?make=Honda&model=Jazz&gen=honda-jazz-2014-2020-honda-fit-gk"
  },
  {
    "title": "Honda Jazz Honda Fit Gk 2014 2020 Arc Suspension Upgrade Kit With Front Struts Rear Shock Absorbers Lift Spacers",
    "category": "Product",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz/honda-jazz-2014-2020-honda-fit-gk/honda-jazz-honda-fit-gk-2014-2020-arc-suspension-upgrade-kit-with-front-struts-rear-shock-absorbers-lift-spacers",
    "local_url": "product-detail.html?slug=honda-jazz-honda-fit-gk-2014-2020-arc-suspension-upgrade-kit-with-front-struts-rear-shock-absorbers-lift-spacers"
  },
  {
    "title": "Honda Jazz Honda Fit Gk 2014 2020 Arc Suspension Upgrade Kit With Front Struts Rear Shock Absorbers Lift Spacers Full Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Jazz",
    "url": "https://www.arcsuspension.in/honda/jazz/honda-jazz-2014-2020-honda-fit-gk/honda-jazz-honda-fit-gk-2014-2020-arc-suspension-upgrade-kit-with-front-struts-rear-shock-absorbers-lift-spacers-full-kit",
    "local_url": "product-detail.html?slug=honda-jazz-honda-fit-gk-2014-2020-arc-suspension-upgrade-kit-with-front-struts-rear-shock-absorbers-lift-spacers-full-kit"
  },
  {
    "title": "Mobilio",
    "category": "Model",
    "make": "Honda",
    "model": "Mobilio",
    "url": "https://www.arcsuspension.in/honda/mobilio",
    "local_url": "generation-catalog.html?make=Honda&model=Mobilio"
  },
  {
    "title": "Mobilio Mobilio",
    "category": "Generation",
    "make": "Honda",
    "model": "Mobilio",
    "url": "https://www.arcsuspension.in/honda/mobilio/mobilio-mobilio",
    "local_url": "generation-catalog.html?make=Honda&model=Mobilio&gen=mobilio-mobilio"
  },
  {
    "title": "Honda Mobilio Arc Rear Shock Absorbers Suspension Upgrade Kit",
    "category": "Product",
    "make": "Honda",
    "model": "Mobilio",
    "url": "https://www.arcsuspension.in/honda/mobilio/mobilio-mobilio/honda-mobilio-arc-rear-shock-absorbers-suspension-upgrade-kit",
    "local_url": "product-detail.html?slug=honda-mobilio-arc-rear-shock-absorbers-suspension-upgrade-kit"
  },
  {
    "title": "Hyundai",
    "category": "Make",
    "make": "Hyundai",
    "model": "",
    "url": "https://www.arcsuspension.in/hyundai",
    "local_url": "generation-catalog.html?make=Hyundai"
  },
  {
    "title": "Alcazar",
    "category": "Model",
    "make": "Hyundai",
    "model": "Alcazar",
    "url": "https://www.arcsuspension.in/hyundai/alcazar",
    "local_url": "generation-catalog.html?make=Hyundai&model=Alcazar"
  },
  {
    "title": "Hyundai Alcazar",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Alcazar",
    "url": "https://www.arcsuspension.in/hyundai/alcazar/hyundai-alcazar",
    "local_url": "generation-catalog.html?make=Hyundai&model=Alcazar&gen=hyundai-alcazar"
  },
  {
    "title": "Hyundai Alcazar Arc Suspension Lift Stability Kit Front Coil Springs Rear Gas Nitro Shock Absorbers With 15Mm Rear Coil Spring Spacers 15Mm Lift",
    "category": "Product",
    "make": "Hyundai",
    "model": "Alcazar",
    "url": "https://www.arcsuspension.in/hyundai/alcazar/hyundai-alcazar/hyundai-alcazar-arc-suspension-lift-stability-kit-front-coil-springs-rear-gas-nitro-shock-absorbers-with-15mm-rear-coil-spring-spacers-15mm-lift",
    "local_url": "product-detail.html?slug=hyundai-alcazar-arc-suspension-lift-stability-kit-front-coil-springs-rear-gas-nitro-shock-absorbers-with-15mm-rear-coil-spring-spacers-15mm-lift"
  },
  {
    "title": "Hyundai Alcazar Arc Suspension Lift Stability Kit Front Coil Springs Rear Gas Nitro Shock Absorbers With 15Mm Rear Coil Spring Spacers 15Mm Lift Full Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Alcazar",
    "url": "https://www.arcsuspension.in/hyundai/alcazar/hyundai-alcazar/hyundai-alcazar-arc-suspension-lift-stability-kit-front-coil-springs-rear-gas-nitro-shock-absorbers-with-15mm-rear-coil-spring-spacers-15mm-lift-full-kit",
    "local_url": "product-detail.html?slug=hyundai-alcazar-arc-suspension-lift-stability-kit-front-coil-springs-rear-gas-nitro-shock-absorbers-with-15mm-rear-coil-spring-spacers-15mm-lift-full-kit"
  },
  {
    "title": "Aura",
    "category": "Model",
    "make": "Hyundai",
    "model": "Aura",
    "url": "https://www.arcsuspension.in/hyundai/aura",
    "local_url": "generation-catalog.html?make=Hyundai&model=Aura"
  },
  {
    "title": "Hyundai Aura 2020 Present",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Aura",
    "url": "https://www.arcsuspension.in/hyundai/aura/hyundai-aura-2020-present",
    "local_url": "generation-catalog.html?make=Hyundai&model=Aura&gen=hyundai-aura-2020-present"
  },
  {
    "title": "Hyundai Aura 2020 Onwards Arc Rear Shock Absorber 15Mm Rear Spacer Enhanced Stability Performance Bolt On Replacement Upgrade Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Aura",
    "url": "https://www.arcsuspension.in/hyundai/aura/hyundai-aura-2020-present/hyundai-aura-2020-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit",
    "local_url": "product-detail.html?slug=hyundai-aura-2020-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit"
  },
  {
    "title": "Hyundai Aura 2020 Onwards Arc Rear Shock Absorber 15Mm Rear Spacer Enhanced Stability Performance Bolt On Replacement Upgrade Kit Rear Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Aura",
    "url": "https://www.arcsuspension.in/hyundai/aura/hyundai-aura-2020-present/hyundai-aura-2020-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear-kit",
    "local_url": "product-detail.html?slug=hyundai-aura-2020-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear-kit"
  },
  {
    "title": "Creta",
    "category": "Model",
    "make": "Hyundai",
    "model": "Creta",
    "url": "https://www.arcsuspension.in/hyundai/creta",
    "local_url": "generation-catalog.html?make=Hyundai&model=Creta"
  },
  {
    "title": "Creta 2014 2020 1St Generation Gs Gc",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Creta",
    "url": "https://www.arcsuspension.in/hyundai/creta/creta-2014-2020-1st-generation-gs-gc",
    "local_url": "generation-catalog.html?make=Hyundai&model=Creta&gen=creta-2014-2020-1st-generation-gs-gc"
  },
  {
    "title": "Creta 2021 2Nd Generation Su2",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Creta",
    "url": "https://www.arcsuspension.in/hyundai/creta/creta-2021-2nd-generation-su2",
    "local_url": "generation-catalog.html?make=Hyundai&model=Creta&gen=creta-2021-2nd-generation-su2"
  },
  {
    "title": "Hyundai Creta 2020 Onwards Rear Shock Absorber Rear Height Increase Spacer 22Mm Front Coil Springs Arc Suspension Stability Upgrade Bolt On Installation",
    "category": "Product",
    "make": "Hyundai",
    "model": "Creta",
    "url": "https://www.arcsuspension.in/hyundai/creta/creta-2021-2nd-generation-su2/hyundai-creta-2020-onwards-rear-shock-absorber-rear-height-increase-spacer-22mm-front-coil-springs-arc-suspension-stability-upgrade-bolt-on-installation",
    "local_url": "product-detail.html?slug=hyundai-creta-2020-onwards-rear-shock-absorber-rear-height-increase-spacer-22mm-front-coil-springs-arc-suspension-stability-upgrade-bolt-on-installation"
  },
  {
    "title": "Hyundai Creta 2020 Onwards Rear Shock Absorber Rear Height Increase Spacer 22Mm Front Coil Springs Arc Suspension Stability Upgrade Bolt On Installation Full Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Creta",
    "url": "https://www.arcsuspension.in/hyundai/creta/creta-2021-2nd-generation-su2/hyundai-creta-2020-onwards-rear-shock-absorber-rear-height-increase-spacer-22mm-front-coil-springs-arc-suspension-stability-upgrade-bolt-on-installation-full-kit",
    "local_url": "product-detail.html?slug=hyundai-creta-2020-onwards-rear-shock-absorber-rear-height-increase-spacer-22mm-front-coil-springs-arc-suspension-stability-upgrade-bolt-on-installation-full-kit"
  },
  {
    "title": "Elantra",
    "category": "Model",
    "make": "Hyundai",
    "model": "Elantra",
    "url": "https://www.arcsuspension.in/hyundai/elantra",
    "local_url": "generation-catalog.html?make=Hyundai&model=Elantra"
  },
  {
    "title": "Hyundai Elantra 5Th Gen 2010 2015",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Elantra",
    "url": "https://www.arcsuspension.in/hyundai/elantra/hyundai-elantra-5th-gen-2010-2015",
    "local_url": "generation-catalog.html?make=Hyundai&model=Elantra&gen=hyundai-elantra-5th-gen-2010-2015"
  },
  {
    "title": "Hyundai Elantra 5Th Gen 2010 2015 Arc Rear Shock Absorber Suspension Upgrade Replacement Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Elantra",
    "url": "https://www.arcsuspension.in/hyundai/elantra/hyundai-elantra-5th-gen-2010-2015/hyundai-elantra-5th-gen-2010-2015-arc-rear-shock-absorber-suspension-upgrade-replacement-kit",
    "local_url": "product-detail.html?slug=hyundai-elantra-5th-gen-2010-2015-arc-rear-shock-absorber-suspension-upgrade-replacement-kit"
  },
  {
    "title": "Exter",
    "category": "Model",
    "make": "Hyundai",
    "model": "Exter",
    "url": "https://www.arcsuspension.in/hyundai/exter",
    "local_url": "generation-catalog.html?make=Hyundai&model=Exter"
  },
  {
    "title": "Exter 2023 Present",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Exter",
    "url": "https://www.arcsuspension.in/hyundai/exter/exter-2023-present",
    "local_url": "generation-catalog.html?make=Hyundai&model=Exter&gen=exter-2023-present"
  },
  {
    "title": "Hyundai Exter Arc Rear Shock Absorbers With 15Mm Rear Lift Spacer Suspension Upgrade Kit For Stability Performance Ground Clearance",
    "category": "Product",
    "make": "Hyundai",
    "model": "Exter",
    "url": "https://www.arcsuspension.in/hyundai/exter/exter-2023-present/hyundai-exter-arc-rear-shock-absorbers-with-15mm-rear-lift-spacer-suspension-upgrade-kit-for-stability-performance-ground-clearance",
    "local_url": "product-detail.html?slug=hyundai-exter-arc-rear-shock-absorbers-with-15mm-rear-lift-spacer-suspension-upgrade-kit-for-stability-performance-ground-clearance"
  },
  {
    "title": "I10",
    "category": "Model",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10",
    "local_url": "generation-catalog.html?make=Hyundai&model=I10"
  },
  {
    "title": "Grand I10 2Nd Gen 2013 2017",
    "category": "Generation",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-2nd-gen-2013-2017",
    "local_url": "generation-catalog.html?make=Hyundai&model=I10&gen=grand-i10-2nd-gen-2013-2017"
  },
  {
    "title": "Hyundai Grand I10 2Nd Gen 2013 2019 Arc Rear Shock Absorber Enhanced Stability Performance Bolt On Replacement Upgrade Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-2nd-gen-2013-2017/hyundai-grand-i10-2nd-gen-2013-2019-arc-rear-shock-absorber-enhanced-stability-performance-bolt-on-replacement-upgrade-kit",
    "local_url": "product-detail.html?slug=hyundai-grand-i10-2nd-gen-2013-2019-arc-rear-shock-absorber-enhanced-stability-performance-bolt-on-replacement-upgrade-kit"
  },
  {
    "title": "Hyundai Grand I10 2Nd Gen 2013 2019 Arc Rear Shock Absorber Enhanced Stability Performance Bolt On Replacement Upgrade Kit Rear",
    "category": "Product",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-2nd-gen-2013-2017/hyundai-grand-i10-2nd-gen-2013-2019-arc-rear-shock-absorber-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear",
    "local_url": "product-detail.html?slug=hyundai-grand-i10-2nd-gen-2013-2019-arc-rear-shock-absorber-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear"
  },
  {
    "title": "Grand I10 Nios 2019 Onwards Arc Suspension Kit",
    "category": "Generation",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-nios-2019-onwards-arc-suspension-kit",
    "local_url": "generation-catalog.html?make=Hyundai&model=I10&gen=grand-i10-nios-2019-onwards-arc-suspension-kit"
  },
  {
    "title": "Hyundai Grand I10 Nios 2019 Onwards Arc Rear Shock Absorber 15Mm Rear Spacer Enhanced Stability Performance Bolt On Replacement Upgrade Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-nios-2019-onwards-arc-suspension-kit/hyundai-grand-i10-nios-2019-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit",
    "local_url": "product-detail.html?slug=hyundai-grand-i10-nios-2019-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit"
  },
  {
    "title": "Hyundai Grand I10 Nios 2019 Onwards Arc Rear Shock Absorber 15Mm Rear Spacer Enhanced Stability Performance Bolt On Replacement Upgrade Kit Rear",
    "category": "Product",
    "make": "Hyundai",
    "model": "I10",
    "url": "https://www.arcsuspension.in/hyundai/i10/grand-i10-nios-2019-onwards-arc-suspension-kit/hyundai-grand-i10-nios-2019-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear",
    "local_url": "product-detail.html?slug=hyundai-grand-i10-nios-2019-onwards-arc-rear-shock-absorber-15mm-rear-spacer-enhanced-stability-performance-bolt-on-replacement-upgrade-kit-rear"
  },
  {
    "title": "I20",
    "category": "Model",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20",
    "local_url": "generation-catalog.html?make=Hyundai&model=I20"
  },
  {
    "title": "I20 2008 2014",
    "category": "Generation",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-2008-2014",
    "local_url": "generation-catalog.html?make=Hyundai&model=I20&gen=i20-2008-2014"
  },
  {
    "title": "Hyundai I20 Rear Arc Shock Absorber Suspension Upgrade Kit For Stability 2008 2009 2010 2011 2012 2013 2014",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-2008-2014/hyundai-i20-rear-arc-shock-absorber-suspension-upgrade-kit-for-stability-2008-2009-2010-2011-2012-2013-2014",
    "local_url": "product-detail.html?slug=hyundai-i20-rear-arc-shock-absorber-suspension-upgrade-kit-for-stability-2008-2009-2010-2011-2012-2013-2014"
  },
  {
    "title": "I20 2014 2020",
    "category": "Generation",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-2014-2020",
    "local_url": "generation-catalog.html?make=Hyundai&model=I20&gen=i20-2014-2020"
  },
  {
    "title": "Hyundai I20 Elite 2014 2020 Front Rear Arc Shock Absorber Suspension Stability Upgrade Kit 2014 2015 2016 2017 2018 2019 2020",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-2014-2020/hyundai-i20-elite-2014-2020-front-rear-arc-shock-absorber-suspension-stability-upgrade-kit-2014-2015-2016-2017-2018-2019-2020",
    "local_url": "product-detail.html?slug=hyundai-i20-elite-2014-2020-front-rear-arc-shock-absorber-suspension-stability-upgrade-kit-2014-2015-2016-2017-2018-2019-2020"
  },
  {
    "title": "Hyundai I20 Elite 2014 2020 Front Rear Arc Shock Absorber Suspension Stability Upgrade Kit 2014 2015 2016 2017 2018 2019 2020 Elite",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-2014-2020/hyundai-i20-elite-2014-2020-front-rear-arc-shock-absorber-suspension-stability-upgrade-kit-2014-2015-2016-2017-2018-2019-2020-elite",
    "local_url": "product-detail.html?slug=hyundai-i20-elite-2014-2020-front-rear-arc-shock-absorber-suspension-stability-upgrade-kit-2014-2015-2016-2017-2018-2019-2020-elite"
  },
  {
    "title": "I20 Third Generation Bc3 Bi3 2020",
    "category": "Generation",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-third-generation-bc3-bi3-2020",
    "local_url": "generation-catalog.html?make=Hyundai&model=I20&gen=i20-third-generation-bc3-bi3-2020"
  },
  {
    "title": "Hyundai I20 Bi3 Arc Suspension Kit Rear Shock Absorber Rear 15Mm Lift Kit By Arc Suspension Bolt On Fitment",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-third-generation-bc3-bi3-2020/hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment",
    "local_url": "product-detail.html?slug=hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment"
  },
  {
    "title": "Hyundai I20 Bi3 Arc Suspension Kit Rear Shock Absorber Rear 15Mm Lift Kit By Arc Suspension Bolt On Fitment I20 N Line",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-third-generation-bc3-bi3-2020/hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment-i20-n-line",
    "local_url": "product-detail.html?slug=hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment-i20-n-line"
  },
  {
    "title": "I20 Third Generation Bc3 Bi3 2020 Hyundai I20 Bi3 Arc Suspension Kit Rear Shock Absorber Rear 15Mm Lift Kit By Arc Suspension Bolt On Fitment I20 Standard",
    "category": "Product",
    "make": "Hyundai",
    "model": "I20",
    "url": "https://www.arcsuspension.in/hyundai/i20/i20-third-generation-bc3-bi3-2020/i20-third-generation-bc3-bi3-2020-hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment-i20-standard",
    "local_url": "product-detail.html?slug=i20-third-generation-bc3-bi3-2020-hyundai-i20-bi3-arc-suspension-kit-rear-shock-absorber-rear-15mm-lift-kit-by-arc-suspension-bolt-on-fitment-i20-standard"
  },
  {
    "title": "Santa Fe",
    "category": "Model",
    "make": "Hyundai",
    "model": "Santa Fe",
    "url": "https://www.arcsuspension.in/hyundai/santa-fe",
    "local_url": "generation-catalog.html?make=Hyundai&model=Santa Fe"
  },
  {
    "title": "Hyundai Santa Fe 2009 2013",
    "category": "Generation",
    "make": "Hyundai",
    "model": "Santa-Fe",
    "url": "https://www.arcsuspension.in/hyundai/santa-fe/hyundai-santa-fe-2009-2013",
    "local_url": "generation-catalog.html?make=Hyundai&model=Santa-Fe&gen=hyundai-santa-fe-2009-2013"
  },
  {
    "title": "Hyundai Santa Fe 2009 2013 Arc Rear Shock Absorber Upgrade Kit",
    "category": "Product",
    "make": "Hyundai",
    "model": "Santa-Fe",
    "url": "https://www.arcsuspension.in/hyundai/santa-fe/hyundai-santa-fe-2009-2013/hyundai-santa-fe-2009-2013-arc-rear-shock-absorber-upgrade-kit",
    "local_url": "product-detail.html?slug=hyundai-santa-fe-2009-2013-arc-rear-shock-absorber-upgrade-kit"
  }
];

    const VEHICLE_DATA = {
        "Toyota": {
            "Fortuner": ["Fortuner 1st Gen 2009-2016", "Fortuner 2nd Gen 2016-2023"],
            "Innova": ["Innova 1st Gen", "Innova Crysta 2nd Gen 2016-2021"],
            "Hilux": ["Hilux 8th Gen AN110/AN120/AN130"]
        },
        "Mahindra": {
            "Thar": ["Thar ROXX", "Thar CRDe", "Thar 2020+"],
            "Bolero": ["Bolero Neo", "Bolero 2020-2023", "Bolero 4WD 4x4", "Bolero Power Plus"],
            "Scorpio": ["Scorpio N ARC Suspension", "Scorpio Classic", "Scorpio 2014-2023 S Series"],
            "XUV": ["XUV 700", "XUV 500", "XUV 300"]
        },
        "Kia": {
            "Carens": ["Kia Carens Since 2022"],
            "Sonet": ["Kia Sonet ARC Suspension"],
            "Seltos": ["Kia Seltos"]
        },
        "Honda": {
            "City": ["Honda City 4th Gen", "Honda City 5th Gen"],
            "Civic": ["Honda Civic 8th Gen FD2", "Honda Civic 10th Gen FC/FK"],
            "CR-V": ["Honda CR-V 3rd Gen", "Honda CR-V 4th Gen", "Honda CR-V 5th Gen"]
        },
        "Volkswagen": {
            "Polo": ["Volkswagen Polo 6R/6C"],
            "Vento": ["Volkswagen Vento"],
            "Taigun": ["Volkswagen Taigun"]
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        initVehicleFinder();
        initSearchAutocomplete();
        initPincodeValidator();
        initPdpInteractions();
        initCatalogPage();
        initSearchPage();
        initSafeCommerceHandoff();
    });

    // 1. Cascading Vehicle Finder
    function initVehicleFinder() {
        const makeSelect = document.getElementById("vehicle-make-select");
        const modelSelect = document.getElementById("vehicle-model-select");
        const genSelect = document.getElementById("vehicle-gen-select");
        const findBtn = document.getElementById("vehicle-find-btn");
        let alertBox = document.getElementById("vehicle-finder-alert");

        if (!makeSelect || !modelSelect || !genSelect) return;

        if (!alertBox && findBtn && findBtn.parentNode) {
            alertBox = document.createElement("div");
            alertBox.id = "vehicle-finder-alert";
            alertBox.style.cssText = "color:#DC3545; font-size:13px; font-weight:600; margin-top:8px; display:none;";
            findBtn.parentNode.appendChild(alertBox);
        }

        makeSelect.addEventListener("change", () => {
            const make = makeSelect.value;
            modelSelect.innerHTML = '<option value="">Select Model</option>';
            genSelect.innerHTML = '<option value="">Select Generation</option>';
            genSelect.disabled = true;
            if (alertBox) alertBox.style.display = "none";

            if (make && VEHICLE_DATA[make]) {
                modelSelect.disabled = false;
                Object.keys(VEHICLE_DATA[make]).forEach(model => {
                    const opt = document.createElement("option");
                    opt.value = model;
                    opt.textContent = model;
                    modelSelect.appendChild(opt);
                });
            } else {
                modelSelect.disabled = true;
            }
        });

        modelSelect.addEventListener("change", () => {
            const make = makeSelect.value;
            const model = modelSelect.value;
            genSelect.innerHTML = '<option value="">Select Generation</option>';
            if (alertBox) alertBox.style.display = "none";

            if (make && model && VEHICLE_DATA[make][model]) {
                genSelect.disabled = false;
                VEHICLE_DATA[make][model].forEach(gen => {
                    const opt = document.createElement("option");
                    opt.value = gen;
                    opt.textContent = gen;
                    genSelect.appendChild(opt);
                });
            } else {
                genSelect.disabled = true;
            }
        });

        if (findBtn) {
            findBtn.addEventListener("click", (e) => {
                e.preventDefault();
                const make = makeSelect.value;
                const model = modelSelect.value;
                const gen = genSelect.value;

                if (!make || !model || !gen) {
                    if (alertBox) {
                        alertBox.innerHTML = '<i class="fa fa-exclamation-circle"></i> Please select Make, Model, and Generation to find compatible suspension.';
                        alertBox.style.display = "block";
                    }
                    return;
                }

                window.location.href = "generation-catalog.html?make=" + encodeURIComponent(make) + "&model=" + encodeURIComponent(model) + "&gen=" + encodeURIComponent(gen);
            });
        }
    }

    // 2. Real-Time Search Autocomplete
    function initSearchAutocomplete() {
        const searchForms = document.querySelectorAll(".search-product form");

        searchForms.forEach(form => {
            const input = form.querySelector('input[name="q"]');
            if (!input) return;

            let dropdown = form.querySelector(".search-suggestions-dropdown");
            if (!dropdown) {
                dropdown = document.createElement("div");
                dropdown.className = "search-suggestions-dropdown";
                dropdown.style.display = "none";
                form.appendChild(dropdown);
            }

            let debounceTimer = null;
            let activeIndex = -1;

            input.addEventListener("input", () => {
                clearTimeout(debounceTimer);
                const q = input.value.trim().toLowerCase();
                activeIndex = -1;

                if (q.length < 2) {
                    dropdown.style.display = "none";
                    dropdown.innerHTML = "";
                    return;
                }

                debounceTimer = setTimeout(() => {
                    const matches = SEARCH_CATALOG.filter(item => 
                        item.title.toLowerCase().includes(q) ||
                        (item.make && item.make.toLowerCase().includes(q)) ||
                        (item.model && item.model.toLowerCase().includes(q))
                    ).slice(0, 8);

                    if (matches.length === 0) {
                        dropdown.innerHTML = '<div style="padding:12px; font-size:13px; color:#888888; text-align:center;">No matching vehicles or components found.</div>';
                        dropdown.style.display = "block";
                        return;
                    }

                    dropdown.innerHTML = "";
                    matches.forEach((item, idx) => {
                        const row = document.createElement("div");
                        row.className = "search-suggestion-item";
                        row.dataset.index = idx;
                        row.innerHTML = "<span>" + escapeHtml(item.title) + "</span><span class='search-suggestion-badge'>" + escapeHtml(item.category) + "</span>";
                        row.addEventListener("click", () => {
                            input.value = item.title;
                            window.location.href = item.local_url;
                        });
                        dropdown.appendChild(row);
                    });
                    dropdown.style.display = "block";
                }, 150);
            });

            input.addEventListener("keydown", (e) => {
                const items = dropdown.querySelectorAll(".search-suggestion-item");
                if (dropdown.style.display === "none" || items.length === 0) return;

                if (e.key === "ArrowDown") {
                    e.preventDefault();
                    activeIndex = (activeIndex + 1) % items.length;
                    updateActiveSuggestion(items, activeIndex);
                } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    activeIndex = (activeIndex - 1 + items.length) % items.length;
                    updateActiveSuggestion(items, activeIndex);
                } else if (e.key === "Enter") {
                    if (activeIndex >= 0 && items[activeIndex]) {
                        e.preventDefault();
                        items[activeIndex].click();
                    }
                } else if (e.key === "Escape") {
                    dropdown.style.display = "none";
                }
            });

            document.addEventListener("click", (e) => {
                if (!form.contains(e.target)) {
                    dropdown.style.display = "none";
                }
            });
        });
    }

    function updateActiveSuggestion(items, activeIndex) {
        items.forEach((item, idx) => {
            if (idx === activeIndex) {
                item.classList.add("active");
                item.scrollIntoView({ block: "nearest" });
            } else {
                item.classList.remove("active");
            }
        });
    }

    // 3. Pincode Syntax Validator
    function initPincodeValidator() {
        const pinInput = document.getElementById("pincode-input");
        const pinBtn = document.getElementById("pincode-check-btn");
        const pinResult = document.getElementById("pincode-result");

        if (!pinBtn || !pinInput || !pinResult) return;

        pinBtn.addEventListener("click", () => {
            const val = pinInput.value.trim();
            if (/^[1-9][0-9]{5}$/.test(val)) {
                pinResult.innerHTML = '<span style="color:#28A745; font-weight:600;"><i class="fa fa-check-circle"></i> Pincode format accepted. Confirm delivery availability and transit time on arcsuspension.in.</span>';
            } else {
                pinResult.innerHTML = '<span style="color:#DC3545; font-weight:600;"><i class="fa fa-times-circle"></i> Please enter a valid 6-digit Indian PIN code.</span>';
            }
        });
    }

    // 4. PDP Variant, High-Density Tabs & Sandbox Checkout
    function initPdpInteractions() {
        // A. Tab Switching Module
        const tabButtons = document.querySelectorAll('.arc-tab-btn');
        const tabPanes = document.querySelectorAll('.arc-tab-pane');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = 'tab-' + btn.getAttribute('data-tab');
                tabButtons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                tabPanes.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                const targetPane = document.getElementById(targetId);
                if (targetPane) targetPane.classList.add('active');
            });
        });

        // B. Variant Selector & Live Price Sync
        const variantInputs = document.querySelectorAll('input[name="suspension_variant"]');
        const displayPrice = document.getElementById('display-total-price');
        const whatsappLink = document.getElementById('whatsapp-consult-link');
        const qtyInput = document.getElementById('product-qty');
        const qtyPlus = document.getElementById('qty-plus');
        const qtyMinus = document.getElementById('qty-minus');

        function updateCartTelemetry() {
            const selected = document.querySelector('input[name="suspension_variant"]:checked');
            if (!selected) return;

            const unitPrice = parseInt(selected.getAttribute('data-price'), 10) || 42500;
            const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
            const total = unitPrice * qty;

            if (displayPrice) {
                displayPrice.textContent = total.toLocaleString('en-IN');
            }

            if (whatsappLink) {
                const variantName = selected.getAttribute('data-variant-name') || 'Fortuner Upgrade Kit';
                const text = encodeURIComponent(
                    `Hello ARC Suspension Engineering,\n\nI am reviewing the Toyota Fortuner 2nd Gen Kit.\n` +
                    `- Variant: ${variantName}\n` +
                    `- Quantity: ${qty}\n` +
                    `- Total Quoted: ₹${total.toLocaleString('en-IN')} (Incl. 28% GST)\n\n` +
                    `Please confirm stock availability and fitment guidance for my vehicle.`
                );
                whatsappLink.href = `https://api.whatsapp.com/send?phone=+919922099292&text=${text}`;
            }
        }

        variantInputs.forEach(input => input.addEventListener('change', updateCartTelemetry));

        if (qtyPlus && qtyMinus && qtyInput) {
            qtyPlus.addEventListener('click', () => {
                let val = parseInt(qtyInput.value, 10) || 1;
                if (val < 5) qtyInput.value = val + 1;
                updateCartTelemetry();
            });
            qtyMinus.addEventListener('click', () => {
                let val = parseInt(qtyInput.value, 10) || 1;
                if (val > 1) qtyInput.value = val - 1;
                updateCartTelemetry();
            });
        }

        // C. Razorpay Sandbox Checkout Modal Simulation
        const sandboxBtn = document.getElementById('btn-razorpay-sandbox');
        if (sandboxBtn) {
            sandboxBtn.addEventListener('click', () => {
                const selected = document.querySelector('input[name="suspension_variant"]:checked');
                const variantName = selected ? selected.getAttribute('data-variant-name') : 'Full 4-Damper Kit + 1-Inch (25mm) Leveling Lift';
                const price = displayPrice ? displayPrice.textContent : '42,500';
                const qty = qtyInput ? qtyInput.value : '1';
                const orderRef = 'ARC-SBX-' + Math.floor(1000 + Math.random() * 9000);

                const modalHtml = `
                    <div class="arc-source-parity safe-commerce-modal-backdrop" id="razorpay-sandbox-modal">
                        <div class="safe-commerce-modal-dialog" style="border-top:4px solid #0052CC; max-width:460px;">
                            <div class="safe-commerce-modal-header">
                                <h3 class="safe-commerce-modal-title" style="display:flex; align-items:center; gap:8px;">
                                    <i class="fa fa-shield" style="color:#0052CC;"></i> Razorpay Sandbox Checkout
                                </h3>
                                <button type="button" class="safe-commerce-modal-close" onclick="document.getElementById('razorpay-sandbox-modal').remove()">&times;</button>
                            </div>
                            <div class="safe-commerce-modal-body" style="font-size:13px; line-height:1.6;">
                                <div style="background:#F4F5F7; border:1px solid #DFE1E6; padding:10px 14px; border-radius:6px; margin-bottom:12px;">
                                    <div><strong>Item:</strong> Toyota Fortuner 2nd Gen Upgrade</div>
                                    <div><strong>Configuration:</strong> ${escapeHtml(variantName)}</div>
                                    <div><strong>Quantity:</strong> ${escapeHtml(qty)}</div>
                                    <div style="font-size:15px; font-weight:800; color:#0F172A; margin-top:4px;">
                                        <strong>Total Payable:</strong> ₹${price} <span style="font-size:11px; font-weight:normal; color:#64748B;">(Incl. 28% GST &amp; Freight)</span>
                                    </div>
                                </div>
                                <div style="margin-bottom:12px; padding:10px 12px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:4px;">
                                    <div style="font-weight:700; color:#334155; margin-bottom:4px;">Simulated Customer Details:</div>
                                    <div style="font-size:12px; color:#475569;">Name: Rahul Pawar (Test Buyer)</div>
                                    <div style="font-size:12px; color:#475569;">Delivery: Maharashtra, India (Pincode: 416115)</div>
                                    <div style="font-size:12px; color:#475569;">Gateway: Razorpay Sandbox (rzp_test_mode)</div>
                                </div>
                                <div style="background:#ECFDF5; color:#065F46; padding:8px 12px; border-radius:4px; font-size:12px; font-weight:600;">
                                    <i class="fa fa-lock"></i> Absolute Zero Discount Policy Verified. No coupon discounts or margin cuts permitted.
                                </div>
                            </div>
                            <div class="safe-commerce-modal-footer">
                                <button type="button" class="btn-primary" style="background:#0052CC; border-color:#0052CC; font-size:13px; padding:8px 16px; cursor:pointer;" id="modal-sim-pay-btn">
                                    Simulate Success (Sandbox UPI/Card)
                                </button>
                                <button type="button" class="btn-primary" style="background:#6B778C; border-color:#6B778C; font-size:13px; padding:8px 16px; cursor:pointer;" onclick="document.getElementById('razorpay-sandbox-modal').remove()">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', modalHtml);

                document.getElementById('modal-sim-pay-btn').addEventListener('click', () => {
                    const modalBody = document.querySelector('#razorpay-sandbox-modal .safe-commerce-modal-body');
                    const modalFooter = document.querySelector('#razorpay-sandbox-modal .safe-commerce-modal-footer');
                    if (modalBody && modalFooter) {
                        modalBody.innerHTML = `
                            <div style="text-align:center; padding:16px 0;">
                                <div style="font-size:48px; color:#10B981; margin-bottom:8px;"><i class="fa fa-check-circle"></i></div>
                                <h4 style="font-size:18px; font-weight:800; color:#0F172A; margin-bottom:6px;">Sandbox Payment Authorized!</h4>
                                <div style="font-size:13px; color:#475569; margin-bottom:12px;">Test Order Reference: <strong class="font-mono" style="color:#0052CC;">${orderRef}</strong></div>
                                <div style="background:#F1F5F9; border:1px solid #CBD5E1; padding:10px 12px; border-radius:6px; font-size:12px; text-align:left; line-height:1.5;">
                                    <div><strong>Order Status:</strong> PENDING_FACTORY_APPROVAL</div>
                                    <div><strong>Target Vehicle:</strong> Toyota Fortuner 2nd Gen (Coil Rear)</div>
                                    <div><strong>Webhook Relay:</strong> Simulated payload passed to ARC Dispatch Cloud Run</div>
                                    <div><strong>Dispatch Desk:</strong> Notification sent to SuperAdmin approval queue</div>
                                </div>
                            </div>
                        `;
                        modalFooter.innerHTML = `
                            <button type="button" class="btn-primary" style="background:#10B981; border-color:#10B981; font-size:13px; padding:8px 20px; cursor:pointer;" onclick="document.getElementById('razorpay-sandbox-modal').remove()">
                                Done (Test Complete)
                            </button>
                        `;
                    }
                });
            });
        }
    }

    // 5. Generation Catalog Page Dynamic Filter
    function initCatalogPage() {
        if (!window.location.pathname.includes("generation-catalog.html")) return;

        const params = new URLSearchParams(window.location.search);
        const make = params.get("make");
        const model = params.get("model");
        const gen = params.get("gen");

        if (make || model || gen) {
            const heading = document.querySelector(".container h1");
            const breadcrumb = document.querySelector(".breadcrumb");

            if (heading) {
                heading.textContent = [make, model, gen].filter(Boolean).join(" ") + " Suspension";
            }

            if (breadcrumb) {
                let bHtml = '<li><a href="index.html">Home</a></li>';
                if (make) bHtml += '<li><a href="generation-catalog.html?make=' + encodeURIComponent(make) + '">' + escapeHtml(make) + '</a></li>';
                if (model) bHtml += '<li><a href="generation-catalog.html?make=' + encodeURIComponent(make) + '&model=' + encodeURIComponent(model) + '">' + escapeHtml(model) + '</a></li>';
                if (gen) bHtml += '<li>' + escapeHtml(gen) + '</li>';
                breadcrumb.innerHTML = bHtml;
            }
        }
    }

    // 6. Search Page Dynamic Results
    function initSearchPage() {
        if (!window.location.pathname.includes("search.html")) return;

        const params = new URLSearchParams(window.location.search);
        const q = params.get("q");
        if (!q) return;

        const heading = document.querySelector(".container h1");
        const subtitle = document.querySelector('.container div[style*="color:#666666"]');
        const resultsRow = document.querySelector(".container .row");

        if (heading) {
            heading.textContent = 'Search Results for "' + q + '"';
        }

        const matches = SEARCH_CATALOG.filter(item => 
            item.title.toLowerCase().includes(q.toLowerCase()) ||
            (item.make && item.make.toLowerCase().includes(q.toLowerCase())) ||
            (item.model && item.model.toLowerCase().includes(q.toLowerCase()))
        );

        if (subtitle) {
            subtitle.textContent = "Found " + matches.length + ' matching vehicles and components for "' + q + '"';
        }

        if (resultsRow && matches.length === 0) {
            resultsRow.innerHTML = '<div class="col-12 py-5 text-center"><i class="fa fa-search fa-3x text-muted mb-3" style="color:#CCCCCC; font-size:48px;"></i><h4 style="font-size:18px; font-weight:700;">No exact matches found for "' + escapeHtml(q) + '"</h4><p style="color:#888888; font-size:14px; margin-bottom:20px;">Try searching by verified vehicle brand or popular models:</p><div style="display:flex; justify-content:center; flex-wrap:wrap; gap:8px;"><a href="search.html?q=Toyota" class="btn-primary" style="padding:6px 14px; font-size:13px;">Toyota</a><a href="search.html?q=Fortuner" class="btn-primary" style="padding:6px 14px; font-size:13px;">Fortuner</a><a href="search.html?q=Mahindra" class="btn-primary" style="padding:6px 14px; font-size:13px;">Mahindra</a><a href="search.html?q=Thar" class="btn-primary" style="padding:6px 14px; font-size:13px;">Thar</a><a href="search.html?q=Scorpio" class="btn-primary" style="padding:6px 14px; font-size:13px;">Scorpio</a><a href="search.html?q=Kia" class="btn-primary" style="padding:6px 14px; font-size:13px;">Kia</a></div></div>';
        }
    }

    // 7. Safe Commerce Modal / Handoff
    function initSafeCommerceHandoff() {
        const commerceTriggers = document.querySelectorAll('.pdp-actions-row a, .pro-thumb-col .thumb-hov-btn a, .pro-thumb-col a[href*="arcsuspension.in"]');

        commerceTriggers.forEach(el => {
            el.addEventListener("click", (e) => {
                // Allow normal opening in new tab since all hrefs point to verified arcsuspension.in canonical URLs!
                // Enforce rel="noopener noreferrer"
                el.setAttribute("target", "_blank");
                el.setAttribute("rel", "noopener noreferrer");
            });
        });
    }

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
})();
