API.prototype.renderYouTube = function(
    formattedHTMLContent,
    videoTitles,
    id,
    videoArray,
    dataVideoIframe,
    titleArray,
    dataTitles,
    descriptionArray,
    dataFormattedContainer,
    elemId,
    elemIdArray
) {
    dom.$loader.fadeIn();
    const self = this
    self.titleArray = [];
    self.descriptionArray = [];
    self.videoArray = [];
    self.elemIdArray = [];
    dom.$content.html('');
    dom.$sectionAsideMenu.fadeIn();
    dom.$asideControler.fadeIn();
    dom.$asideMenu.html('');
    if (this.responseArray[0] === undefined) {
        return;
    } else {
        dom.$err.hide();
        if (this.responseArray[0].items[0].id['videoId'] === undefined) {
            dom.$err.show();
        } else {
            dom.$err.hide();
            self.id = 1;
            this.responseArray[0].items.forEach(function(item) {
                self.elemId = '#section-card-youtube-video-' +
                    self.id;

                self.dataVideoIframe = '<iframe src="https://www.youtube.com/embed/' +
                    item.id['videoId'] +
                    '" frameborder="0" allowfullscreen></iframe>';

                self.dataFormattedContainer = '<!-- section-card-youtube-video col-->' +
                    '<section class="container card card-width col overview-padding border" ' +
                    'id="section-card-youtube-video-' +
                    self.id +
                    '">' +
                    self.dataVideoIframe +
                    '<!--  card-demo-body -->' +
                    '<div class="card-body green-background ">' +

                    '<h4 class="card-title">' +
                    item.snippet['title'] +
                    '</h4>' +

                    '<p class="card-text">' +
                    item.snippet['description'] +
                    '</p>' +

                    '</div>' +

                    '</section>' +
                    '<br />';
                self.elemIdArray.push(self.elemId);
                dom.$asideMenu.append(self.dataFormattedContainer);
                self.id++;
            });
        };
        self.elemIdArray.forEach(function(item) {
            $(item).on("click", function() {
                if (this.children[0] === undefined) {
                    $(this).fadeOut();
                    return;
                };
                dom.$content.append(this.children[0]);
            });

        });
    };
    dom.$loader.fadeOut();
};

var domVideo = new DOM_OBJ_ELEM();
// Allow enter key vrs btn to call the API.
domVideo.$videoSearch.on("keypress", function(e) {
    dom.$goVideo.fadeIn();
});