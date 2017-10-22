API.prototype.renderFM = function(
    header,
    imgUrl,
    imgUrl2,
    imgUrl3,
    name,
    listeners,
    playcount,
    url,
    formattedHTMLContent
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].artists.artist);
    dom.$content.html('');
    self.header = '<h2>Last FM Top 50 Search</h2>';
    dom.$content.append(self.header);
    if (this.responseArray[0].artists.artist === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        $('#section-aside-menu').fadeIn();
        $('#aside-controler').fadeIn();
        $('#aside-menu').html('');
        this.responseArray[0].artists.artist.forEach(function(item) {
            self.imgUrl = item.image[0]['#text'];
            self.imgUrl2 = item.image[2]['#text'];
            self.imgUrl3 = item.image[3]['#text'];
            self.name = item.name;
            self.listeners = item.listeners;
            self.playcount = item.playcount;
            self.url = item.url;
            self.formattedHTMLContent = '<section id="' +
                self.name +
                '" class="row overview-padding">' + // row 1

                // col 1
                '<div class="col-lg-4">' +
                '<img class="img-fluid img-thumbnail" alt="Picture of ' +
                self.name +
                '" src="' +
                self.imgUrl +
                '" />' +
                '<h4>' +
                self.name +
                '</h4>' +
                '<p>Last FM page:</p>' +
                '<a class="btn btn-outline-info" href="' +
                self.url +
                '">' +
                self.name +
                '</a>' +
                '</div>' +

                // col 2
                '<div class="col">' +
                '<span class="red">Listeners: ' +
                '<em class="blue">' +
                self.listeners +
                '</em> Playcount: <em class="blue">' +
                self.playcount +
                '</em></span><div style="padding:10%;">' +
                '<img class="rounded-circle shadow" alt="Picture of ' +
                self.name +
                '" src="' +
                self.imgUrl2 +
                '">' +
                '</div>' +

                // col 3
                '<div class="col">' +
                '<img class=" img-thumbnail" alt="Picture of ' +
                self.name +
                '" src="' +
                self.imgUrl3 +
                '"><br />' +
                '</div>' +

                '</section>';

            var btn = '<a href="#' +
                self.name +
            '" class="btn btn-outline-success" id="aside-menu-btn-' +
                self.name +
                '">' +
                self.name +
                '</a>';

            $('#aside-menu').append(btn);


            dom.$content.append(self.formattedHTMLContent);
        });
        $('#aside-menu').prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
};