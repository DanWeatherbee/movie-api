API.prototype.renderYouTube = function(
    srcID,
    formattedHTMLContent
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].items[0].snippet['title']);
    dom.$content.html('');
    $('#section-aside-menu').fadeOut();
    if (this.responseArray[0] === undefined) {
        return;
    } else {
        dom.$err.hide();
        if (this.responseArray[0].items[0].id['videoId'] === undefined) {
            dom.$err.show();
        } else {
            dom.$err.hide();
            // TODO foreach all videos available.
            self.srcID = '<iframe src="https://www.youtube.com/embed/' +
                this.responseArray[0].items[0].id['videoId'] +
                '" frameborder="0" allowfullscreen></iframe>';
            self.formattedHTMLContent = '<br />' +
                '<div class="container overview-padding border green-background">' +
                // row 1
                '<div class="row white-background overview-padding">' +
                '<div class="col">' +
                // col 1
                '<h3>You Tube Video Search</h3>' +
                '</div>' +
                '</div>' +
                // row 2
                '<div class="row overview-padding">' +
                '<div class="col">' +
                '<i class="fa fa-file-video-o" aria-hidden="true"></i>' +
                '<h4>' +
                this.responseArray[0].items[0].snippet['title'] +
                '</h4>' +
                '</div>' +
                '<div class="col">' +
                self.srcID +
                '</div>' +
                '<div class="col">' +
                '<i class="fa fa-chevron-circle-down" ' +
                'aria-hidden="true" ' +
                'id="video-description-controler" ' +
                'data-toggle="collapse" ' +
                'href="#video-description" ' +
                'aria-expanded="false" ' +
                'aria-controls="video-description-controler">' +
                'Description' +
                '</i>' +
                '<section class="collapse" ' +
                'id="video-description">' +
                this.responseArray[0].items[0].snippet['description'] +
                '</section>' +
                '</div>' +
                '</div>' +
                '</div>';
            dom.$content.append(self.formattedHTMLContent);
        }
        console.log('you tube render method running');
    };
};