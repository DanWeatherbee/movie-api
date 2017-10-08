API.prototype.renderYouTube = function(
    card,
    content,
    responseArray,
    header,
    srcID
) {
    const self = this;
    console.log(this.callType);
    console.log(this.responseArray[0].items[0].id['channelId']);
    self.content = $('.content');
    self.content.html('');
    self.content.append('<div class="container" id="movie-container"></div>');
    self.card = $('#movie-container');
    self.header = '<h2>You Tube Search</h2>';


    self.card.append(self.header);

    if (this.responseArray[0] === undefined) {
        return;
    } else {


            self.srcID = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.responseArray[0].items[0].id['channelId'] + '" frameborder="0" allowfullscreen></iframe>';


           // self.imgUrl = this.responseArray[0].items[0].snippet['thumbnails'].high.url


            self.card.append(self.srcID);


        console.log('you tube render method running');

    };
};