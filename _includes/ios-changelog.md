# iOS Changelog

### 4.5.2

* Release Date: 20 May. 2016
* Build Number: 02506102
* Improve performance and user experience
* Support the interactive web on video ads

### 4.5.1

* Release Date: 15 Apr. 2016
* Build Number: 51406102
* Improve user experience
* Fix build error for iOS 7.3+
* Fix few bugs

### 4.5.0

* Rlease Date: 14 Mar. 2016
* Build Number: 41306102
* Decrease unecessary log
* Fix pop-out video sound bug
* Add vertical video to interstitial ads

### 4.2.19

* Build Number: 32215102
* Minor bug fixed.
* Excessive log trimmed.

### 4.2.18

* Build Number: 71115102
* localStorage bug fixed.
* PresentView bug fixed.

### 4.2.17

* Build Num 62015102
* Optimize for iOS9.
* Bitcode problem fixed.
* Add new framework for easier integration.
* Minor bugs fixed.


### 4.2.16

* Optimize for iOS9.
* Enhance version stability.
* Bugs fixed.
* Release date: 2015/09/14

## 4.2.14

* Build Number: 40605102
* Fixed: in app 開啟 app store 廣告時, 會無法連接出去
* 針對 AdMob adapter 的 crash 問題做了相關修正

## 4.2.12

* Build Number: 61205102
* Fixed Video UI error.

## 4.2.9

* Build Number: 12114102
Fixed: show multiple banner

## 4.2.8

* Build Number: 70804102
* Fixed: prevent cache crash which happens in the sdk 4.2.7
* Fixed: crash issues on iOS8
* Removed: relevant framework of addressBook and addressBookUI for uploading app to Applestore

## 4.2.7

* Build Number: 21604102
* 修正插頁式廣告顯示問題


## 4.2.6

* Build Number: 60604102
* 修正 iOS6 以下取用權限造成 crash


## 4.2.5

* Build Number: 51504102
* 新增 64 bit 版本

## 4.2.3

* Build Number: 62304102
* 修正 Video tracking 機制

## 4.2.2

* Build Number: 62304102

#### Major Build Change
* Video Ad New features:
* 加強 native video view 上的 UI component
* 增加 native video view 和 web view 同時出現的廣告型態
* 增加 video interstitial ad 可以先將video 暫存到手機，減少播放影片後 buffering 的機會
* 增加 native video view 後 web view 之間的互動機制，web view 可以控制影片的播放行為並可以得知影片播放的狀態

#### Enhance:
* 大量減少開啟 GPS 的時間
* 調整遮蔽偵測效率

#### Updates:
* 改成Vpadn開頭，也更改class name及protocol function name

## 4.1.0

* Build Number: 821131024 & 821131025
* Release Date: 28 Nov. 2013
* Added support for rich media Ads
* Added support for interstitial Ads in Landscape
* Fixed for disable GPS action after the home button had been pressed

## 309031024 & 309031025
* Build Number: 309031024 & 309031025
* Fixed view position due to coordinate system changes in iOS 7.
* Modify internal static variable name to prevent name conflict with other 3rd party libraries (for ex. Google Analytics)
* Add 2 branches of library. One for XCode4, the other for XCode5.

## 42703102

* Build Number: 42703102
* Fixed: bug with ad can't open

## 71703102

* Build Number: 71703102
* Fixed: resolve function naming conflict

## 30703102

* Build Number: 30703102
* Fixed: resolve lower network connection can't get Vpon banner

## 82603102

* Build Number: 82603102
* Fixed: in app webView can't show on the view
* Removed: removeed UDID in any possible place

## 21603102

* Build Number: 21603102
* Fixed: interstitial Ad position error
