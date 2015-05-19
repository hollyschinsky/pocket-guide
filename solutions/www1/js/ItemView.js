var ItemView = function(place) {
    var favorites = [];

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('click', '.mapBtn', this.mapIt);
        this.$el.on('click', '.favoriteBtn', this.favorite);
        this.$el.on('click', '.shareBtn', this.share);
     };

    this.render = function() {
        this.$el.html(this.template(place));
        return this;
    };

    this.mapIt = function() {
            var there = new google.maps.LatLng(place.latitude, place.longitude);

            var mapOptions = {
                center: {lat: place.latitude, lng: place.longitude},
                zoom: 20
            };

            // Use existing empty map canvas element to show new map at that position and set a height
            $('#map_canvas').css('height', '400px');
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            // When the tiles load, add a marker to denote title and address of location
            google.maps.event.addListener(map, 'tilesloaded', function() {

                var marker = new google.maps.Marker({
                    position: there,
                    map: map,
                    title: place.name + " " + place.location
                });               

                google.maps.event.removeListener(map, 'tilesloaded');

            });
    }

    // Use the social sharing plugin to share on the native OS
    this.share = function() {
        if (window.cordova && window.plugins && window.plugins.socialsharing) {
            window.plugins.socialsharing.share("Hey look where I'm going next: " + place.name + ".",
                'My Amsterdam Trip', null, place.website,
                function () {
                    console.log("Success")
                },
                function (error) {
                    console.log("Share fail " + error)
                });
        }
        else alert("Social sharing plugin not found or not supported.");
    }


    // Implemented for future use to show a list of favorites
    this.favorite = function() {
        favorites.push(place);

        if (window.cordova && window.plugins && window.plugins.toast)
            window.plugins.toast.showShortCenter(place.name + " at " + place.location + " has been added to your favorites.");
        else alert(place.name + " at " + place.location + " has been added to your favorites.");
    }

    this.initialize();

}
