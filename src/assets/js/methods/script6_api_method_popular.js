API.prototype.renderPopular = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";

    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);

    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Popular Movies</h2>');

    this.responseArray[0].results.forEach(function(item) {

        $(card).append('<h3>' + item.title + '</h3>');
        $(card).append('<label>ID:</label><p>' + item.id + '</p>');
        $(card).append('<label>Votes:</label><p>' + item.vote_count + '</p>');
        $(card).append('<label>Vote average:</label><p>' + item.vote_average + '</p>');
        $(card).append('<label>Overview:</label><p>' + item.overview + '</p>');
        $(card).append('<label>Popularity:</label><p>' + item.popularity + '</p>');
        $(card).append('<label>Release Date:</label><p>' + item.release_date + '</p>');
        $(card).append('<img id="popular" src="' + self.imgUrl + item.backdrop_path + '">');
        console.log(self.imgUrl);
    })

    $(card).append('<hr>');
};