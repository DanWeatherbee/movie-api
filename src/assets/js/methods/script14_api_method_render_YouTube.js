API.prototype.renderYouTube = function(
    card,
    content,
    responseArray,
    header,
    srcID
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].items[0].snippet['title']);
    self.content = $('.content');
    self.content.html('');
    self.content.append('<div class="container" id="movie-container"></div>');
    self.card = $('#movie-container');
    self.header = '<h2>You Tube Search</h2>';


    self.card.append(self.header);

    if (this.responseArray[0] === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        if (this.responseArray[0].items[0].id['videoId'] === undefined) {
            return alert('no videos')
        } else {

            // TODO foreach all videos available.
            self.srcID = '<iframe src="https://www.youtube.com/embed/' +
                this.responseArray[0].items[0].id['videoId'] +
                '" frameborder="0" allowfullscreen></iframe>';


            $('#root').append(
                '<br />' +
                '<div class="container overview-padding border green-background">' +
                // row 1
                '<div class="row white-background overview-padding">' +
                '<div class="col">' +
                '<h3>Api layout builder - BETA - V1.0</h3>' +
                '<p>Header</p>' +
                '<textarea class="form-control form-rounded" rows="6">' +
                'Call Type: ' +
                this.callType.url +
                '</textarea>' +
                '</div>' +
                '</div>' +
                // row 2
                '<div class="row blue-background white txt-shadow-black overview-padding">' +
                '<div class="col">' +
                '<p>col 1</p>' +
                '<i class="fa fa-file-video-o" aria-hidden="true"></i>' +
                '<h2>' +
                this.responseArray[0].items[0].snippet['title'] +
                '</h2>' +
                '</div>' +
                '<div class="col">' +
                '<p>col 2</p>' +
                self.srcID +
                '</div>' +
                '<div class="col">' +
                '<p>col 3</p>' +
                '<h4>Description</h4>' +
                '<textarea class="form-control form-rounded" rows="6">' +
                this.responseArray[0].items[0].snippet['description'] +
                '</textarea>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
        console.log('you tube render method running');

    };
};