# Pocket Guide PhoneGap App
PhoneGap Day EU workshop - Amsterdam Pocket Tour Guide. Simple mobile application built showing popular tourist destinations
 in Amsterdam with info, reviews and ratings. This app uses using Google Maps, social sharing, toast notifications features
 and implements mobile best practices such as single page architecture, hardware accelerated transitions, click delay handling, 
 and native notifications.
 
### [Workshop Guide with Step by Step Modules](http://hollyschinsky.github.io/pocket-guide)

Requirements
============
- Ratchet.js  
- Fastclick.js
- Handlebars.js
- jQuery.js
- Handlebars.js
- fontawesome (icons)

Google Maps API Key
===================
The Google Maps JavaScript API is used to map locations in this app. To use it you will need to set up a developer key
 [here](https://developers.google.com/). Once obtained, open index.html within the www folder and replace the following 
  *key* attribute with yours:
   
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=your-dev-key-here&libraries=geometry"></script>

**Google Maps Developer Guides [here](https://developers.google.com/maps/documentation/javascript/)** 

Required Plugins
================
 **NOTE:** These plugins will automatically get added into your projects when a platform is added if you use the config.xml located within the 
project repo. Simply create a PhoneGap project then replace the config.xml and www folder with this one. ` $ phonegap create myPocketGuide`

- cordova-plugin-console 1.0.0 "Console"
        
        $ phonegap plugin add cordova-plugin-console
        
- cordova-plugin-device 1.0.0 "Device"
        
        $ phonegap plugin add cordova-plugin-device
        
- cordova-plugin-whitelist 1.0.0 "Whitelist"
        
        $ phonegap plugin add cordova-plugin-whitelist
        
- cordova-plugin-statusbar 1.0.0 "StatusBar"
        
        $ phonegap plugin add cordova-plugin-statusbar

- cordova-plugin-dialogs 1.1.0 "Notification"
        
        $ phonegap plugin add cordova-plugin-dialogs
        
- cordova-plugin-geolocation 1.0.0 "Geolocation"
        
        $ phonegap plugin add cordova-plugin-geolocation

- cordova-plugin-network-information 1.0.0 "Network Information"

        $ phonegap plugin add cordova-plugin-network-information

- nl.x-services.plugins.socialsharing 4.3.18 "SocialSharing"
        
        $ phonegap plugin add nl.x-services.plugins.socialsharing

- nl.x-services.plugins.toast 2.0.5 "Toast"
        
        $ phonegap plugin add nl.x-services.plugins.toast

- com.ionic.keyboard 1.0.4 "Keyboard"
    
        $ phonegap plugin add com.ionic.keyboard




        
        
        
        
        
        
        


