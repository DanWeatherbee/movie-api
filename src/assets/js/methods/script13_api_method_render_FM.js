API.prototype.renderFM = function(
    card,
    content,
    responseArray,
    header,
    imgUrl,
    name
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].artists.artist);
    self.content = $('#content');
    self.content.html('');
    self.content.append('<div id="movie-container"></div>');
    self.card = $('#movie-container');
    self.header = '<h2>Last FM Top 50 Search</h2>';

    self.card.append(self.header);

    if (this.responseArray[0].artists.artist === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        this.responseArray[0].artists.artist.forEach(function(item) {
            self.imgUrl = item.image[4]['#text'];
            self.name = item.name;

            self.card.append(
                '<div><h4>' +
                self.name +
                '</h4><img src="' +
                self.imgUrl +
                '" /><hr /></div>'
            );
        });

    };
};