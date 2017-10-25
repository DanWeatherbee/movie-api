var dom = new DOM_OBJ_ELEM(
    $('body'),
    $('#main'),
    $('#content'),
    $('#error-msg'),
    $("#video-search"),
    $('#aside-menu'),
    $('#aside-controler'),
    $('#section-aside-menu'),
    $('#section-methods-row'),
    $('#aside-menu-col')
);

API.prototype.renderMovies = function(
    imgUrl,
    formattedHTMLName,
    formattedHTMLPoster,
    formattedHTMLOverview,
    formattedHTMLVotes,
    formattedHTMLContent,
    formattedHTMLCollapseLink,
    role,
    convertText,
    convertedTextName,
    name
) {

    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
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

        this.responseArray[0].results.forEach(function(item) {

            if (item.title === undefined) {

                self.name = item.name;
                self.convertText = self.name.replace(/\s/g, "-");
                self.convertedTextName = self.convertText.toLowerCase();
                self.formattedHTMLName = '<h3 class="green">' +
                    // TODO do this id fix on aside menu ids.
                    self.name +
                    '</h3>';
                self.role = self.convertedTextName;
            } else {
                self.name = item.title;



                self.convertText = self.name.replace(/\s/g, "-");
                self.convertedTextName = self.convertText.toLowerCase();


                self.role = self.convertedTextName;
                self.formattedHTMLName = '<h3 class="green">' +
                    self.name +
                    '</h3>';
            };
            self.formattedHTMLCollapseLink = '<a class=' +
                '"btn btn-outline-info" ' +
                'id="btn-toggle-overview-' +
                self.role + '" ' +
                'data-toggle="collapse"' +
                ' href="#' +
                'item-overview-' +
                self.role + // target div to collapse
                '" aria-expanded="false" ' + // default closed
                'aria-controls="btn-toggle-overview-' +
                self.role + '">' + // collapse controler
                'Description' +
                '</a>';
            self.formattedHTMLPoster = '<img class="img-fluid img-thumbnail" id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';

            self.formattedHTMLOverview = '<p class="collapse" id="item-overview-' +
                self.role +
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
            self.formattedHTMLContent = '<section id="' + self.convertedTextName + '" class="row overview-padding">' +

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

            self.buttonsAsideMenu = '<a href="#' +
                self.convertedTextName +
                '" class="btn btn-outline-success" id="aside-menu-btn-' +
                self.convertedTextName +
                '">' +
                self.name +
                '</a>';

            dom.$asideMenu.append(self.buttonsAsideMenu);

            dom.$content.append(self.formattedHTMLContent);

        });

        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
};