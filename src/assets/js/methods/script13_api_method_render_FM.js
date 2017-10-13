API.prototype.renderFM = function(
    card,
    content,
    responseArray,
    header,
    imgUrl,
    imgUrl2,
    imgUrl3,
    name,
    listeners,
    playcount,
    url
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
            self.imgUrl = item.image[0]['#text'];
            self.imgUrl2 = item.image[2]['#text'];
            self.imgUrl3 = item.image[3]['#text'];
            self.name = item.name;
            self.listeners = item.listeners;
            self.playcount = item.playcount;
            self.url = item.url;
            self.card.append(
                '<div class="row overview-padding border text-center">' +
                '<div class="col-sm-1">' +
                '<img class="img-responsive img-thumbnail" src="' + self.imgUrl + '" />' +
                '<h4>' + self.name + '</h4>' +
                '</div>' +
                '<div class="col-sm-2">' +
                /*
                TODO Youtube video search.
                                    '<div class="form-group">' +
                                        '<label for="fda-search">US FDA Search by food item:</label>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-sm-4">' +
                                    '<a data-toggle="tooltip" data-placement="right" title="Single words only.">' +
                                        '<input type="text" class="form-control" id="fda-search" placeholder="milk">' +
                                    '</a>' +

                */

                '</div>' +
                '<div class="col-sm-4">' +
                '<span class="red">Listeners: ' +
                '<em class="blue">' +
                self.listeners +
                '</em> Playcount: <em class="blue">' +
                self.playcount +
                '</em></span><div style="padding:10%;">' +
                '<img class="img-circle shadow" src="' + self.imgUrl2 + '"></div>' +
                'Last FM Home Page: <a href="' +
                self.url +
                '">' +
                self.name +
                '</a>' +
                '</div>' +
                '<div class="col-sm-6">' +
                '</div>' +
                '<img class=" img-thumbnail" src="' + self.imgUrl3 + '"><br />' +
                '</div>'
            );
        });
    };
};