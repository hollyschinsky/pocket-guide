---
layout: module
title: Module 3&#58; Setting Up the Workshop Files
---
## Steps

1. Delete the contents of your project's **pg-workshop/www** folder.

1. Download the supporting files for this tutorial [here](https://github.com/hollyschinsky/pocket-guide/archive/master.zip), 
or clone the repository:

    ```
    git clone https://github.com/hollyschinsky/pocket-guide
    ```

1. If you downloaded the zip file, unzip it anywhere on your file system.

1. Copy the contents of **starter-www** into your project's **pg-workshop/www** folder. ***Be sure to keep your project folder name www.***


1. Build and test your application using ANY of the following:
            
    1. Open **www/index.html** in a browser on your computer.
        
    2. Using PhoneGap Developer App with PhoneGap CLI        
    - Run `$ phonegap serve`
    - Connect to the URL reported from the `serve` command in the PhoneGap Developer app on a mobile device
 
    3. Using PhoneGap Developer App with PhoneGap Desktop
    - Click the play **>** button if your project is not active 
    - Connect to the URL reported in the green bar at the bottom of PhoneGap Desktop (eg: Server is running on http://...)
        
    4. On Device/Emulator with PhoneGap CLI 
        
            $ phonegap run ios
     or
            
            $ phonegap run android                
      
          > This option requires a mobile SDK setup. If you have Mac and Xcode you should be able to use iOS, 
   Android requires [additional SDK installation and setup](http://developer.android.com/sdk). The `run` command will automatically 
   do a build.

1. Ensure that you see the application load with a listing of Amsterdam's most popular locations. Try typing in a few characters to see the filtering
 on name. Clicking a list item doesn't produce any result at this time.


> Part-by-Part solutions are available in the [**solutions** directory](http://github.com/hollyschinsky/pocket-guide/www/solutions) under **pocket-guide**. 
The [**www-final**](http://github.com/hollyschinsky/pocket-guide/www-final) folder contains the final project. 


<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="build-project.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> 
Previous</a>
<a href="data-storage.html" class="btn btn-default pull-right">Next <i class="glyphicon 
glyphicon-chevron-right"></i></a>
</div>
</div>


