        API.prototype.renderCarousel = function(
            carouselVideosPart1,
            carouselVideosPart2,
            carouselVideosPart3,
            videoCarouselBuilt
        ) {
            dom.$loader.show();
            var self = this;
            // videos created from response array.
            // Carousel
            self.carouselVideosPart1 = '<!-- carousel part 1-->' +
                '<div id="carousel" class="carousel slide animate" data-ride="carousel">' +
                '<div class="carousel-inner" id="video-carousel">';
            self.carouselVideosPart3 = '</div>' +
                '<a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">' +
                '<span class="carousel-control-prev-icon" aria-hidden="true">' +
                '</span>' +
                '<span class="sr-only">Previous</span>' +
                '</a>' +
                '<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">' +
                '<span class="carousel-control-next-icon" aria-hidden="true">' +
                '</span><span class="sr-only">Next</span>' +
                '</a>' +
                '</div>';
            self.videoCarouselBuilt = self.carouselVideosPart1 +
                self.carouselVideosPart3;

            dom.$content.prepend(self.videoCarouselBuilt);

            var i = 0;
            this.responseArray[0].results.forEach(function(item) {
                if (item.id === undefined) {
                    return
                };
                self.idVideoSearch(item.id, i);
                i++
            });
            dom.$loader.hide();
        };