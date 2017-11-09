
        API.prototype.idVideoSearch = async function(
            movieId,
            i
        ) {
            var dom = new DOM_OBJ_ELEM();
            dom.$loader.show();
            var self = this
            self.movieId = movieId;
            self.i = 0;
            var KEY = "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3";
            var API_CALL_MOVIE_VIDEOS = new API(
                "https://api.themoviedb.org/3/movie/",
                self.movieId,
                "?",
                KEY,
                "&append_to_response=videos&",
                "format=json"
            );
            this.callType = API_CALL_MOVIE_VIDEOS;
            try {
                const response = await fetch(this.callType.url);
                const text = await response.json()
                this.idArray.push(text);
                self.carouselVideosPart2 = '<!-- carousel item -->' +
                    '<div class="carousel-item" id="item-' +
                    i +
                    '">' +
                    '<iframe class="iframe-videos" ' +
                    'src="https://www.youtube.com/embed/' +
                    this.idArray[i].videos['results'][0].key +
                    '">' +
                    '</iframe>' +
                    '</div>';
                dom.$videoCarousel.append(self.carouselVideosPart2);
            } catch (err) {
                console.log('fetch failed', err);
                dom.$err.show();
            }
            dom.$loader.hide();
        };