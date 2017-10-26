API.prototype.renderYouTube = function(
    formattedHTMLContent,
    videoTitles,
    id,
    videoArray,
    dataVideoIframe,
    titleArray,
    dataTitles,
    descriptionArray,
    dataFormattedContainer
) {

    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].items[0].snippet['title']);
    self.titleArray = [];
    self.descriptionArray = [];
    self.videoArray = [];
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

                self.dataVideoIframe = '<iframe src="https://www.youtube.com/embed/' +
                    item.id['videoId'] +
                    '" alt="Card image cap"' +
                    '" frameborder="0" allowfullscreen></iframe>';

                self.dataFormattedContainer = '<!-- section-card-youtube-video col-->' +
                    '<section class="container card card-width col overview-padding border" id="section-card-youtube-video">' +

                    // '<img class="card-img-top" src="..." alt="Card image cap">' +
                    self.dataVideoIframe +
                    '<!--  card-demo-body -->' +
                    '<div class="card-body green-background ">' +

                    '<h4 class="card-title">' +
                    item.snippet['title'] +
                    '</h4>' +

                    '<p class="card-text">' +
                    item.snippet['description'] +
                    '</p>' +

                    // '<a class="btn btn-outline-primary">' +
                    // 'Card Demo Button' +
                    // '</a>' +

                    '</div>' +

                    '</section>' +
                    '<br />';

                dom.$asideMenu.append(self.dataFormattedContainer);
                self.id++;
            });
        };
        console.log('you tube render method running');
    };
};

// Allow enter key vrs btn to call the API.
$('#video-search').on("keypress", function(e) {
    $('#go-video').fadeIn();
    if (e.which == 13) {
        $('#go-video').click();
        $('#go-video').fadeToggle(300);
    }
});