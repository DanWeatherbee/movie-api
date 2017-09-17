API.prototype.renderLatest = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Latest Movie</h2>');
    $(card).append('<h3>' + this.responseArray[0].title + '</h3>');

    // Warn user content is adult.
    if (this.responseArray[0].adult === true) {
        alert("Warning this movie is ADULT");
        $(card).append('<p>Movie is rated adult.</p>');
    };

    // Check if there is a poster.
    if (this.responseArray[0].poster_path === null) {
        $(card).append('<p>Poster not available.</p>');

    } else {
        $(card).append('<img id="latest" src="' + self.imgUrl + this.responseArray[0].poster_path + '">');
    };

    // Check if there is a Home Page.
    if (this.responseArray[0].homepage === null || this.responseArray[0].homepage === "") {
        $(card).append('<p>Home page not available.</p>');

    } else {
        $(card).append('<br /><label>Home Page:</label><br /><a href="' + this.responseArray[0].homepage + '">Website</a>');
    };

    // Check if there is a overview.
    if (this.responseArray[0].overview === null) {
        $(card).append('<p>Over View not available.</p>');

    } else {
        $(card).append('<br /><label>Overview:</label><p>' + this.responseArray[0].overview + '</p>')
    };

    // Check if there is a status.
    if (this.responseArray[0].status === null) {
        $(card).append('<p>Over View not available.</p>');

    } else {
        $(card).append('<label>Status:</label><p>' + this.responseArray[0].status + '</p>')
    };

    $(card).append('<hr>');
};