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
    dom.$loader.show();
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
        self.renderCarousel();
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
            self.formattedHTMLPoster = '<img class="card-img-top img-thumbnail black-background" ' +
                'id="popular-lg" src="' +
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
            dom.$content.append(self.formattedHTMLContent);
            // aside menu for movies and fm.
            self.buttonsAsideMenu = '<a href="#section-' +
                self.id +
                '" class="btn btn-outline-success" id="aside-menu-btn-' +
                self.id +
                '">' +
                self.name +
                '</a>';
            dom.$asideMenu.append(self.buttonsAsideMenu);
            self.elemIdArray.push(self.elemId);
            self.id++;
        });
        self.renderCarouselBottom();
        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
    dom.$loader.hide();
};
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