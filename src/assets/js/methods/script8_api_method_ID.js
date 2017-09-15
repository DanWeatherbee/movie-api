API.prototype.renderID = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Movie by ID</h2>');
    $(card).append('<h3>' + this.responseArray[0].title + '</h3>');


    // Check if there is a poster.
    if (this.responseArray[0].poster_path === null) {
        $(card).append('<p>Poster not available.</p>');

    } else {
        $(card).append('<img id="latest" src="' + self.imgUrl + this.responseArray[0].poster_path + '">');
    };

    $(card).append('<p>' + this.responseArray[0].overview + '</p>')

    $(card).append('<p>' + this.responseArray[0].status + '</p>')

    $(card).append('<hr>');
};