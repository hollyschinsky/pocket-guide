// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope.
// There is no need for a name, because it will be self-invoked once when encountered, not specifically called.

(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    ListView.prototype.template = Handlebars.compile($("#list-tpl").html());
    ItemView.prototype.template = Handlebars.compile($("#item-tpl").html());

    // Handlebars Helper for iterating stars for rating
    Handlebars.registerHelper('for', function(from, to, incr, block) {
        var str = '';
        for(var i = from; i < to; i += incr)
            str += block.fn(i);
        return str;
    });

    var service = new DataService();
    var slider = new PageSlider($('body'));

    service.initialize().done(function () {
        // blank route (ie: http://localhost:63342/pocket-guide/www/index.html
        router.addRoute('', function() {
            slider.slidePage(new HomeView(service).render().$el);
        });

        router.addRoute('items/:id', function(id) {
            // #items/:id route (ie: http://localhost:63342/pocket-guide/www/index.html#items/1)
            service.findById(parseInt(id)).done(function(item) {
                slider.slidePage(new ItemView(item).render().$el);
            });
        });

        router.start();
    });

    /* -------------- Handle Cordova deviceready event - indicates the device API's are ready for use ------------------- */
    document.addEventListener('deviceready', function () {
        FastClick.attach(document.body);

        if (navigator.notification) {
            window.alert = function (message) {
                navigator.notification.alert(
                    message,                // message
                    null,                   // callback
                    "Pocket Guide",         // title
                    'OK'                    // buttonName
                );
            };
        } else console.log("Notification plugin not found or not supported.");

       // Moved statusbar code to preferences to ensure fix appears prior to display

        // Hide the keyboard accessory bar from popping up with search input
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        else console.log("Keyboard plugin not found or not supported.");

    }, false);

}());