        /*
                                                                                                                                                                self.elemIdArray.forEach(function(item) {
                                                                                                                                                                    $(item).on("click", function() {
                                                                                                                                                                        $(item).animate({
                                                                                                                                                                            width: '100%',
                                                                                                                                                                            opacity: 0.1
                                                                                                                                                                        }, 10, function() {
                                                                                                                                                                            // Animation complete.
                                                                                                                                                                            $(item).animate({
                                                                                                                                                                                width: '80%',
                                                                                                                                                                                opacity: 0.9
                                                                                                                                                                            }, "slow");
                                                                                                                                                                        });
                                                                                                                                                                    });
                                                                                                                                                                });
                                                                                                                                                                */
        API.prototype.renderMovies = function(
            imgUrl,
            formattedHTMLName,
            formattedHTMLPoster,
            formattedHTMLOverview,
            formattedHTMLVotes,
            formattedHTMLContent,
            formattedHTMLCollapseLink,
            id,
            elemId,
            elemIdArray,
            name,
            idArray,
            videoIframeArray
        ) {
            console.log(this.callType);
            console.log(this.responseArray);

            var self = this;
            self.imgUrl = "https://image.tmdb.org/t/p/w500";
            self.elemIdArray = [];
            self.idArray = [];
            self.videoIframeArray = [];
            dom.$content.html('');
            dom.$sectionAsideMenu.fadeOut();
            if (this.responseArray[0].results === undefined) {
                alert('this.responseArray[0].results === undefined');
                return;
            } else {
                dom.$err.hide();
                dom.$sectionAsideMenu.fadeIn();
                dom.$asideControler.fadeIn();
                dom.$asideMenu.html('');
                self.id = 1;

                // videos created from response array.
                var i = 0;
                this.responseArray[0].results.forEach(function(item) {

                    self.idVideoSearch(item.id, i);
                    i++
                });


                this.responseArray[0].results.forEach(function(item) {

                    self.elemId = '#section-' + self.id;
                    if (item.title === undefined) {
                        self.name = item.name;
                        self.formattedHTMLName = '<h3 class="green">' +
                            self.name +
                            '</h3>';
                    } else {
                        self.name = item.title;
                        self.formattedHTMLName = '<h4 class="card-title">' +
                            self.name +
                            '</h4>';
                    };
                    self.formattedHTMLCollapseLink = '<a class=' +
                        '"btn btn-outline-info" ' +
                        'id="btn-toggle-overview-' +
                        self.id + '" ' +
                        'data-toggle="collapse"' +
                        ' href="#' +
                        'item-overview-' +
                        self.id + // target div to collapse
                        '" aria-expanded="false" ' + // default closed
                        'aria-controls="btn-toggle-overview-' +
                        self.id + '">' + // collapse controler
                        'Description' +
                        '</a>';
                    self.formattedHTMLPoster = '<img class="card-img-top img-thumbnail black-background" id="popular-lg" src="' +
                        self.imgUrl +
                        item.poster_path +
                        '">';

                    self.formattedHTMLOverview = '<p class="card-text collapse" id="item-overview-' +
                        self.id +
                        '">' +
                        item.overview +
                        '</p>';
                    if (item.release_date === undefined) {
                        self.formattedHTMLVotes = '<span class="blue">Votes: ' +
                            item.vote_count + ' | Vote Average: ' +
                            item.vote_average +
                            '% | Air Date: ' +
                            item.first_air_date +
                            '</span>';
                    } else {
                        self.formattedHTMLVotes = '<span class="blue">Votes: ' +
                            item.vote_count + ' | Vote Average: ' +
                            item.vote_average +
                            '% | Air Date: ' +
                            item.release_date +
                            '</span>';
                    };

                    self.formattedHTMLContent = '<section class="container card gradient-black row" id="' +
                        'section-' + self.id +
                        '">' +
                        '<!--  card-body -->' +

                        '<div class="card-body">' +
                        self.formattedHTMLPoster +
                        self.formattedHTMLName +
                        self.formattedHTMLOverview +
                        self.formattedHTMLVotes +
                        '<br />' +
                        self.formattedHTMLCollapseLink +
                        '</div>' +

                        '</section>';

                    // aside menu for movies and fm.
                    self.buttonsAsideMenu = '<a href="#section-' +
                        self.id +
                        '" class="btn btn-outline-success" id="aside-menu-btn-' +
                        self.id +
                        '">' +
                        self.name +
                        '</a>';
                    dom.$asideMenu.append(self.buttonsAsideMenu);
                    dom.$content.append(self.formattedHTMLContent);
                    self.elemIdArray.push(self.elemId);
                    console.log('this.idVideoSearch(item.id) line 128 video search.')

                    self.id++;
                });

                console.log(self.elemIdArray);
                console.log('this.idArray line 135 render movies.');
                console.log(this.idArray);
                dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
            };
        };

        API.prototype.idVideoSearch = async function(
            movieId,
            i
        ) {
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
            console.log('this.callType line 158 render movies.');
            console.log(this.callType);
            try {
                const response = await fetch(this.callType.url);
                const text = await response.json()
                this.idArray.push(text);

                var carouselVideosPart1 = '<!-- carousel part 1-->' +
                    '<div id="carousel" class="carousel slide animate" data-ride="carousel">' +
                    '<ol class="carousel-indicators">' +
                    '<li data-target="#carousel" data-slide-to="0" class="active">' +
                    '</li><li data-target="#carousel" data-slide-to="1">' +
                    '</li>' +
                    '<li data-target="#carousel" data-slide-to="2">' +
                    '</li>' +
                    '</ol>' +
                    '<div class="carousel-inner">';

                var carouselVideosPart2 = '<!-- carousel item -->' +


                    '<div class="carousel-item active">' +
                    '<iframe width="420" height="315" ' +
                    'src="https://www.youtube.com/embed/' +
                    this.idArray[0].videos['results'][0].key +
                    '">' +
                    '</iframe>' +
                    '</div>' +



                    '<div class="carousel-item">' +
                    '<iframe width="420" height="315" ' +
                    'src="https://www.youtube.com/embed/' +
                    this.idArray[1].videos['results'][0].key +
                    '">' +
                    '</iframe>' +
                    '</div>';

                var carouselVideosPart3 = '</div>' +
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



                var videoCarouselBuilt = carouselVideosPart1 +
                    carouselVideosPart2 +
                    carouselVideosPart3;
                console.log('this.idArray line 226 render movies.');
                console.log(this.idArray[i].videos['results'][0].key);
                // dom.$content.prepend(videoCarouselBuilt);















            } catch (err) {
                console.log('fetch failed', err);
                dom.$err.show();
            }
        };