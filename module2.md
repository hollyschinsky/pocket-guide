---
layout: module
title: Module 2&#58; 
---

### Using Native Alerts 

#### Requirements:

Cordova dialogs plugin

A default JavaScript alert gives away the fact that your application is not native. In this section, we set up the basic infrastructure to display 
native alerts when the application is running on a device, and simply fall back to default JavaScript alerts when it is running in the browser.
 
1. To illustrate the issue, click on the circle i button on the main screen header. You should see an alert like the following:

    The underlying code is simply:
    
        alert("PhoneGap Day Workshop App version 1.0"); 


1. We can handle all alerts globally with some code that will override it to use the native plugin in one piece of code. Open the **app.js** file 
located within www/js and add the following into the `deviceready` handling section:        


        if (navigator.notification) {      
            window.alert = function (message) {         
                navigator.notification.alert( message, // message             
                null,                                 // callback             
                "Pocket Guide",                       // title             
                'OK'                                  // buttonName             
            ); 
            };
         } else console.log("Notification plugin not found or not supported.");

2. Now test out the info button again once you have added the above code and it should look like a native alert:   
        
        
