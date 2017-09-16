API.prototype.renderLatestTv = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);
    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Latest Tv</h2>');
    $(card).append('<h3>' + this.responseArray[0].name + '</h3>');
    $(card).append('<br /><label>ID:</label><p>' + this.responseArray[0].id + '</p>');

    // Check if there is a poster.
    if (this.responseArray[0].backdrop_path === null) {
        $(card).append('<p>Poster not available.</p>');

    } else {
        $(card).append('<img id="latest" src="' + self.imgUrl + this.responseArray[0].backdrop_path + '">');
    };

    // Check if there is a Home Page.
    if (this.responseArray[0].homepage === "") {
        $(card).append('<p>Home page not available.</p>');

    } else {
        $(card).append('<br /><label>Home Page:</label><br /><a href="' + this.responseArray[0].homepage + '">Website</a>');
    };

    // Check if there is a Created by.
    if (this.responseArray[0].created_by[0] === undefined) {

        $(card).append('<p>Creators not available.</p>');

    } else {
        $(card).append('<br /><label>Creators:</label><p>' + this.responseArray[0].created_by[0].name + '</p>');

    };

    // Check if there is a overview.
    if (this.responseArray[0].overview === null) {
        $(card).append('<p>Over View not available.</p>');

    } else {
        $(card).append('<label>Overview:</label><p>'  + this.responseArray[0].overview + '</p>')
    };

    // Check if there is a status.
    if (this.responseArray[0].status === null) {
        $(card).append('<p>Over View not available.</p>');

    } else {
        $(card).append('<label>Status:</label><p>'  + this.responseArray[0].status + '</p>')
    };

        $(card).append('<label>Last Air Date:</label><p>'  + this.responseArray[0].last_air_date + '</p>')


    $(card).append('<hr>');
};