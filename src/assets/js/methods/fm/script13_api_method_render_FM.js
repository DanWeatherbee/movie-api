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
    url,
    formattedHTMLContent,
    formattedHTMLLink
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
            self.formattedHTMLContent = '<section id="' +
                self.name +
                '" class="row overview-padding">' +
                '<div class="col">' +
                '<img class="img-fluid img-thumbnail" alt="Picture of ' + self.name + '" src="' + self.imgUrl + '" />' +
                '<h4>' + self.name + '</h4>' +
                '</div>' +
                '<div class="col">' +
                '<span class="red">Listeners: ' +
                '<em class="blue">' +
                self.listeners +
                '</em> Playcount: <em class="blue">' +
                self.playcount +
                '</em></span><div style="padding:10%;">' +
                '<img class="rounded-circle shadow" alt="Picture of ' + self.name + '" src="' + self.imgUrl2 + '"></div>' +
                'Last FM Home Page: <a href="' +
                self.url +
                '">' +
                self.name +
                '</a>' +
                '</div>' +
                '<div class="col">' +
                '<img class=" img-thumbnail" alt="Picture of ' + self.name + '" src="' + self.imgUrl3 + '"><br />' +
                '</div>' +
                '</section>';
            self.card.append(self.formattedHTMLContent);
        });

        $('body').prepend(
            '<div class="container fixed border" id="menu-list">' +
            '</div>'
        );
        $('#menu-list').append(

            '<div class="col" id="artists-list">' +
            '</div>'

        );
        self.formattedHTMLLink = '<a class=' +
            '"btn btn-outline-primary" ' +
            'href="#' +
            'root' + // section id
            '">' +
            'Top' +
            '</a><br />';
        $('#artists-list').append(self.formattedHTMLLink);



        this.responseArray[0].artists.artist.forEach(function(item) {
            $('#artists-list').append(
                '<a class="btn btn-outline-info black menu-links" href="#' +
                item.name +
                '">' +
                item.name +
                '</a>');
        });
        /*
                self.formattedHTMLCollapseLink = '<a class=' +
                    '"btn btn-primary" ' +
                    'data-toggle="collapse"' +
                    ' href="#' +
                    'root' + // link address
                    '" aria-expanded="false" ' +
                    'aria-controls="root">' + // link address
                    'Collapse' +
                    '</a>';
                    $('#artists-list').append(self.formattedHTMLCollapseLink);

                self.formattedHTMLCollapseButton = '<button class=' +
                    '"btn btn-primary" ' +
                    'type="button" ' +
                    'data-toggle="collapse" ' +
                    'data-target="#collapseExample" ' +
                    'aria-expanded="false" ' +
                    'aria-controls="collapseExample">' +
                    '</button>'
        */
    };
};