---
layout:         "android"
title:          "Android - Advanced"
lead:           "Optimizing your ads performance from advanced skills here."
description:    ""
keywords:       "Keywords for this page, in the meta data"
permalink:       android/advanced/
lang:           "en"
---
# VpadnAdRequest
  -----------------------------
Before being passed to `VpadnBanner.loadAd`, a `VpadnAdRequest` may be customized to allow Vpon to better target banners.

## Assign Ads for devices

You can use these properties to specify a device or set of devices that will receive test banner.
You should utilize this property during development to avoid generating false impressions.
To verify that you've integrated the SDK correctly, add your test device, run your application, and click on the displayed test banner.

```java
  VpadnAdRequest request = new VpadnAdRequest();
  request.addTestDevice("your test device advertising id");
  //TODO: fill in your device advertising id
```

## Targeting

Location and demographic targeting information may also be specified. Out of respect for user privacy, please only specify location and demographic data if the information is already required by your app.

```java
  VpadnAdRequest request = new VpadnAdRequest();
  request.setGender(VpadnAdRequest.Gender.FEMALE);
  request.setBirthday("1977-08-23");
```
where the user's location is obtained by a suitable method.


# VpadnAdListener
---

You may optionally track ad lifecycle events like request failures or "click-through" by implementing `com.vpadn.ads.VpadnAdListener` in an object you pass to `VpadnBanner.setAdListener`.

```java
   public interface VpadnAdListener {
     void onVpadnReceiveAd(VpadnAd ad);
     void onVpadnFailedToReceiveAd(VpadnAd ad, VpadnAdRequest.VpadnErrorCode errorCode);
     void onVpadnPresentScreen(VpadnAd ad);
     void onVpadnDismissScreen(VpadnAd ad);
     void onVpadnLeaveApplication(VpadnAd ad);
   }
```

This interface may be implemented by your activity or any other object:

```java
  import com.vpadn.ads.*;
  public class VpadnBannerExample extends Activity implements VpadnAdListener {
  //TODO: Implements all interface methods }
}
```

and then passed to the `VponBanner`:

```java
  vponBanner.setAdListener(this);
```

`public void onVpadnReceiveAd(VpadnAd ad)`
  Sent when VpadnBanner.loadAd has succeeded.
`public void onFailedToReceiveAd(VpadnAd ad, VpadnAdRequest.VpadnErrorCode error)`
  Sent when loadAd has failed, typically because of network failure, an application configuration error, or a lack of ad inventory.

  You may wish to log these events for debugging:


```java
  @Override public void onFailedToReceiveAd(VpadnAd ad, VpadnAdRequest.VpadnErrorCode errorCode) { Log.d(MY_LOG_TAG, "failed to receive ad (" + errorCode + ")"); }
```

`public void onVpadnPresentScreen(VpadnAd ad)`
   Called when an Activity is created in front of your app, presenting the user with a full-screen ad UI in response to their touching banner.
`public void onVpadnDismissScreen(VpadnAd ad)`
   Called when the full-screen Activity presented with onPresentScreen has been dismissed and control is returning to your app.
`public void onVpadnLeaveApplication(VpadnAd ad)`
   Called when a banner touch will launch a new application.



# Crazy Ad
---
Banner expands to take over the whole screen and automatically closes after 5-7 seconds.
<img src="{{site.imgurl}}/Crazyad.png" alt="" class="width-300" />


## Setting
---
Choose whether or not to use crazy advertisement from License Key Application.

Enter in <http://cn.pub.vpon.com/> for China Vpon Platform.

Enter in <http://tw.pub.vpon.com/> for Taiwan Vpon Platform.

Example:
![CrazyadSetting]


# Proguard Configuration
---
If your app need obfuscateed before release, please add settings below：<br>
-dontwarn c.\*\* <br>
-dontwarn com.vpon.\*\* <br>
-dontwarn vpadn.\*\* <br>
-keep class c.\*\*{ \*; } <br>
-keep class com.vpon.\*\* { \*; } <br>
-keep class vpon.\*\* { \*; } <br>
-keep class com.vpadn.\*\* { \*; } <br>
-keep class vpadn.\*\* { \*; } <br>


# Corona User
---
This guid shows how to use Corona SDK and display Vpon ads. We suggest you use Web SDK method. To use ad services:
You can load local html files using this API like webView:request( "localfile.html", system.ResourceDirectory ).

You can see the contents of html from Vpon wiki: [Web SDK]
See more Corona SDK Document: [Corona Document]





[CrazyadSetting]: {{site.imgurl}}/CrazyadSetting_En.png
[Web SDK]: {{site.baseurl}}/web/
[Corona Document]: http://docs.coronalabs.com/api/library/native/newWebView.html
