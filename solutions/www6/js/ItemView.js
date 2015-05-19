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
        if (navigator.connection && navigator.connection.type == Connection.NONE) {
            alert("Mapping requires a network connection but we have detected you are currently offline. ");
        }
        else {
            var there = new google.maps.LatLng(place.latitude, place.longitude);

            var mapOptions = {
                center: {lat: place.latitude, lng: place.longitude},
                zoom: 20
            };

            // Use existing empty map canvas element to show new map at that position and set a height
            $('#map_canvas').css('height', '400px');
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            // When the tiles load, add a marker to denote title and address of location
            google.maps.event.addListener(map, 'tilesloaded', function () {

                var marker = new google.maps.Marker({
                    position: there,
                    map: map,
                    title: place.name + " " + place.location
                });

                navigator.geolocation.getCurrentPosition(function (position) {
                    var here = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                    // Use Google Maps Geometry library to compute distance between two points and produce a message
                    var distance = (google.maps.geometry.spherical.computeDistanceBetween(here, there) / 1000).toFixed(2);
                    var msg = "You are " + distance + "KM away from here";

                    if (window.cordova && window.plugins && window.plugins.toast)
                        window.plugins.toast.showShortCenter(msg);
                    else alert(msg);

                }, function (error) {
                    console.log("Error retrieving location " + error.code + " " + error.message)
                });

                google.maps.event.removeListener(map, 'tilesloaded');

            });
        }
    }

    // Use the social sharing plugin to share on the native OS
    this.share = function() {

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
