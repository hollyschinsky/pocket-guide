# Pocket Guide PhoneGap App
PhoneGap Day EU workshop - Amsterdam Pocket Tour Guide. Simple mobile application built showing popular tourist destinations
 info and ratings. Project using Google Maps, social sharing, toast notifications.

Requirements
============
- Ratchet.js / fonts from font-awesome 
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
   
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIraSnA_ljX-8zj5FNULQ3jwrzHSTCCdb0OqZTI"></script>

**Developer Guides here** https://developers.google.com/maps/documentation/javascript/

Required Plugins
================
The following plugins are used in this project. 

*** Note: The plugins will be automatically added when a platform is added if you use the config.xml located within the 
project repo. Simply create a PhoneGap project then replace the config.xml and www folder with this one. ` $ phonegap create myPocketGuide`

-cordova-plugin-console 1.0.0 "Console"
        
        phonegap plugin add cordova-plugin-console
        
-cordova-plugin-device 1.0.0 "Device"
        
        phonegap plugin add cordova-plugin-device
        
-cordova-plugin-dialogs 1.1.0 "Notification"
        
        phonegap plugin add cordova-plugin-notification
        
-cordova-plugin-statusbar 1.0.0 "StatusBar"
        
        phonegap plugin add cordova-plugin-statusbar

-cordova-plugin-whitelist 1.0.0 "Whitelist"
        
        phonegap plugin add cordova-plugin-whitelist

-nl.x-services.plugins.socialsharing 4.3.18 "SocialSharing"
        
        phonegap plugin add nl.x-services.plugins.socialsharing

-nl.x-services.plugins.toast 2.0.5 "Toast"
        
        phonegap plugin add nl.x-services.plugins.toast

-com.ionic.keyboard 1.0.4 "Keyboard"
    
        phonegap plugin add com.ionic.keyboard


       

        
        
        
        
        
        
        


