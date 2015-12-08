---
layout:         "default"
title:          "Integration with SSP"
lead:           ""
description:    ""
keywords:       "Keywords for this page, in the meta data"
permalink:       /ssp/
lang:           "en"
---


# Overview
---
This article will give you basic knowlegde to integrate with Vpon SSP.

# Setup
---
If you have recieved the SSP Mobile Web interstitial placement tag, please follow the guide below. If not, please contact our [BD](mailto: bd.tw@vpon.com) for placement tag.

## Placement Tag
Please insert the code below into your websites.

``` html
<div id="your_placement_tag" type="int"></div>
<script type="text/javascript" src="//m.vpadn.com/ssp/vat.js"></script>
<script>vat.addPlacement('your_placement_tag');vat.load();</script>
```

## Test ads
### test attribute
To fetch test ads, please add `test` attribute into your `<div>`. For example:<br>

```html
<div id="your_placement_tag" type="int" test="1"></div>
```

* Normal ads when `test='0'`.(Default: test="0")
* Test ads when `test='1'`.




# APIs for Publishers
---
Method Name	| Description	| Usage
:-------------: | :------------:|:-------------: |
addPlacement |	Add Placement (Ready for Request)	| vat.addPlacement(placement_id)
load |	Invoke the ad request and display all ads.(Executing fetchAds and showPlacement) |	vat.load()
fetchAds|Ad request for specific ad|	vat.fetchAds(placement_id)
showPlacement|	Display specified ads in the anchor locations.|	vat.showPlacement(placement_id)
addCallback	| Callback depends on the type (impCallback, clkCallback, loadCallback) impCallback \& clkCallback NOT SUPPORT AT CURRENT VERSION | vat.addCallback(placement_id, "loadCallback", fn(empty))
addVariable	| A key-value pair to add to ad requests for the ad tag |	vat.addVariable('gender', 'male')