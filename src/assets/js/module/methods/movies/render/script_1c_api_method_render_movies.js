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
    name
) {

    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    self.elemIdArray = [];
    dom.$content.html('');
    $('#section-aside-menu').fadeOut();
    if (this.responseArray[0].results === undefined) {
        alert('this.responseArray[0].results === undefined');
        return;
    } else {
        dom.$err.hide();

        dom.$sectionAsideMenu.fadeIn();
        dom.$asideControler.fadeIn();
        dom.$asideMenu.html('');
        self.id = 1;
        this.responseArray[0].results.forEach(function(item) {
            self.elemId = '#section-' + self.id;


            if (item.title === undefined) {

                self.name = item.name;
                self.formattedHTMLName = '<h3 class="green">' +
                    // TODO do this id fix on aside menu ids.
                    self.name +
                    '</h3>';
            } else {
                self.name = item.title;
                self.formattedHTMLName = '<h3 class="green">' +
                    self.name +
                    '</h3>';
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
            self.formattedHTMLPoster = '<img class="img-fluid img-thumbnail" id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';

            self.formattedHTMLOverview = '<p class="collapse" id="item-overview-' +
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
            self.formattedHTMLContent = '<section id="section-' + self.id + '" class="row overview-padding">' +

                '<div class="col col-sm-10 shadow border overview-padding">' +
                self.formattedHTMLName +
                self.formattedHTMLCollapseLink + '<br />' +
                self.formattedHTMLOverview +
                self.formattedHTMLVotes +
                '</div>' +
                '<div class="col col-sm-2 center-block">' +
                self.formattedHTMLPoster +
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
            self.id++;
        });
        console.log(self.elemIdArray);

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

        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
};