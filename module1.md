---
layout: module
title: Module 1&#58; Setup the project
---

### Create a new Project
1. Create a PhoneGap project using either the PhoneGap CLI or the PhoneGap Desktop Application you learned in the first workshop. For example:

        phonegap create pg-workshop com.yourname.workshop PGWorkshop 
      
2. Navigate into the newly created project folder:

        cd pg-workshop        

### Replace Contents
1. Download the supporting files for this tutorial as a zip file [here](https://github.com/hollyschinsky/pocket-guide/archive/master.zip), 
or clone the repository:

        git clone https://github.com/hollyschinsky/pocket-guide

1. Delete the contents of your project's **www** folder.

1. Unzip (if needed) and copy the contents of **www-begin** into your project's **www** folder.<br><br> 
    **NOTE:** Your project folder name must remain www, so it's better to copy in just the contents rather than the folder itself. 
    If you copy the www-begin folder itself in then you will need to rename it to www.

1. Try out the application. Depending on the method chosen, you may or may not be able to access every feature. 
            
    1. Open **www/index.html** in a browser on your computer.
        
    2. Using PhoneGap Developer App with the PhoneGap CLI        
    
    - Run `$ phonegap serve`
    - Connect to the URL reported from the `serve` command in the PhoneGap Developer app on a mobile device
 
    3. Using PhoneGap Developer App with PhoneGap Desktop
    - Click the play **>** button if your project is not active 
    - Connect to the URL reported in the green bar at the bottom of PhoneGap Desktop (eg: Server is running on http://...)
        
    4. On Device/Emulator with PhoneGap CLI 
        
            $ phonegap run ios
     or
            
            $ phonegap run android                
      
          > This option requires a mobile SDK setup. If you have Mac and Xcode you should be able to use iOS, but Android requires [additional SDK installation and setup](http://developer.android.com/sdk). 
                    
1. Ensure that you see the application load with a listing of Amsterdam's most popular locations. Try typing in a few characters to see the filtering
 on the name. 

> Part-by-Part solutions are available in the [**solutions** directory](http://github.com/hollyschinsky/pocket-guide/www/solutions) under **pocket-guide**. 
The [**www-final**](http://github.com/hollyschinsky/pocket-guide/www-final) folder contains the final project. 
 

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="module2.html" class="btn btn-default pull-right">Next <i class="glyphicon
glyphicon-chevron-right"></i></a>
</div>
</div>

