        API.prototype.renderCarouselBottom = function() {
            var dom = new DOM_OBJ_ELEM();
            dom.$loader.show();
            var self = this;
            dom.$videoCarousel.prepend('<!-- carousel item -->' +
                '<div class="carousel-item active" id="item-' +
                'first' +
                '">' +
                '<img id="tv-bg" ' +
                'src="assets/images/tv.png">' +
                '</div>' +
                '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
                '<h1>Video Trailers</h1>' +
                '</div>');

            dom.$videoCarousel.append(self.carouselVideosPart2);
            dom.$loader.hide();
        };