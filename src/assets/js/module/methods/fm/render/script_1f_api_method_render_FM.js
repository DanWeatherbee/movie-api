API.prototype.renderFM = function(
    header,
    imgUrl,
    imgUrl2,
    imgUrl3,
    name,
    listeners,
    playcount,
    url,
    formattedHTMLContent,
    convertText,
    convertedTextName,
    buttonsAsideMenu
) {
    dom.$loader.fadeIn();
    const self = this;
    dom.$content.html('');
    self.header = '<h2>Last FM Top 50 Search</h2>';
    dom.$content.append(self.header);
    if (this.responseArray[0].artists.artist === undefined) {
        return;
    } else {
        dom.$err.hide();
        dom.$sectionAsideMenu.fadeIn();
        dom.$asideControler.fadeIn();
        dom.$asideMenu.html('');
        this.responseArray[0].artists.artist.forEach(function(item) {
            self.imgUrl = item.image[0]['#text'];
            self.imgUrl2 = item.image[2]['#text'];
            self.imgUrl3 = item.image[3]['#text'];
            self.name = item.name;
            self.listeners = item.listeners;
            self.playcount = item.playcount;
            self.url = item.url;
            self.convertText = self.name.replace(/\s/g, "-");
            self.convertedTextName = self.convertText.toLowerCase();


            self.formattedHTMLContent = '<section id="' +
                self.convertedTextName +
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

            // aside menu for movies and fm.

            self.buttonsAsideMenu = '<a href="#' +
                self.convertedTextName +
                '" class="btn btn-outline-success" id="aside-menu-btn-' +
                self.convertedTextName +
                '">' +
                self.name +
                '</a>';

            dom.$asideMenu.append(self.buttonsAsideMenu);


            dom.$content.append(self.formattedHTMLContent);
        });
        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
    dom.$loader.fadeOut();
};