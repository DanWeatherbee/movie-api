API.prototype.renderYouTube = function(
    content,
    responseArray,
    srcID,
    formattedHTMLContent
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].items[0].snippet['title']);
    self.content = $('#content');
    self.content.html('');
    $('#artists-list').remove();
    $('#movie-card').append('<div id="video-box"></div>');
    if (this.responseArray[0] === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        if (this.responseArray[0].items[0].id['videoId'] === undefined) {
            $('#error-msg').show();
        } else {
            $('#error-msg').hide();
            self.content.html('');
            $('#video-box').html('');
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
                '</div>'
            $('#video-box').html('');
            $('#video-box').append(self.formattedHTMLContent);
        }
        console.log('you tube render method running');
    };
};