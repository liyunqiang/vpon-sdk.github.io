---
layout:         "ios"
title:          "iOS - Interstitial Ad"
lead:           ""
description:    ""
keywords:       "Keywords for this page, in the meta data"
permalink:       ios/interstitial/
lang:            "en"
---

## Finished Integration Guide
---
If you haven't finished the previous integration guide, please check all the [settings here](../integration-guide/).

# Overview
---
Interstitials, on the other hand, immediately present rich HTML5 experiences or "web apps" at natural app transition points such as launch, video pre-roll or game level load. Web apps are in-app browsing experiences with a simple close button rather than any navigation bar—the content provides its own internal navigation scheme. Interstitial ads are typically more expensive and subject to impression constraints.
![]({{site.imgurl}}/Interstitial.png)

> **Note**:
> We suggest that the interstitial ads running in portrait mode for the best visual effects.


# Vpon Interstitial Ad
---
The richer, more heavyweight nature of Vpadn interstitial is reflected by its definition not as a UIView but rather an NSObject requiring more distinct instantiation, load and display steps.

Usage is nevertheless very similar to Vpadn banner:

* Import lib file and head file
* Declare instance
* Create the object and set Vpadn interstitial banner ID (do not use the same ID as banner)


Once again, the best place to do this is in your app's UIViewController

```objc
@implementation ViewController

- (void)viewDidLoad
{
    vpadnInterstitial = [[VpadnInterstitial alloc] init];
    vpadnInterstitial.strBannerId = @"";   // Write your Interstitial BannerId
    vpadnInterstitial.platform = @"TW";       // Taiwan: TW China: CN
    vpadnInterstitial.delegate = self;
    [vpadnInterstitial getInterstitial:[self getTestIdentifiers]];
}
@end
```

There is no item can be add to ViewController now and you must wait this request success before displaying the creative. The simplest way is showing ad `[vpadnInterstitial show]` once onVpadnInterstitialAdReceived load succeeds.

Once load succeeds the full-screen ad is ready for presentation:

```objc
#pragma mark VpadnInterstitial Delegate Only when you want to show interstitial ad can add this one
- (void)onVpadnInterstitialAdReceived:(UIView *)bannerView{
   NSLog(@"interstitial ad received");
   [vpadnInterstitial show];
}
```

The interstitial then takes over the screen until the user dismisses it, at which point control returns to your app and the view controller passes to this method.
Vpadn Interstitial Delegate [advanced setting] provides many callback methods for you.


# Test Ads
---

```objc
//Use testDevices to enable test ads. You should utilize test ads during development to avoid generating false impressions. Here is a sample snippet:
-(NSArray*)getTestIdentifiers
{
  return [NSArray arrayWithObjects:
      // add your test UUID
      @"your_UUID",
      nil];
}
```

# Download Sample Code
---
You can download an example project containing SDK 4 lib file in VpadnAd folder:

[Go to Download Page]




[Go to Download Page]:{{site.baseurl}}/ios/download
[advanced setting]: ../advanced/
