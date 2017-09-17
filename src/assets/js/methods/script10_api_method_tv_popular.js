API.prototype.renderTvPopular = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";

    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);

    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Popular Tv</h2>');

    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        this.responseArray[0].results.forEach(function(item) {

            $(card).append('<h3>' + item.name + '</h3>');
            $(card).append('<img id="popular" src="' + self.imgUrl + item.backdrop_path + '">');
            $(card).append('<br /><img id="popular" src="' + self.imgUrl + item.poster_path + '">');
            $(card).append('<br /><label>Overview:</label><p>' + item.overview + '</p>');
            $(card).append('<br /><label>ID:</label><p>' + item.id + '</p>');
            $(card).append('<label>Votes:</label><p>' + item.vote_count + '</p>');
            $(card).append('<label>Vote average:</label><p>' + item.vote_average + '</p>');
            $(card).append('<label>Popularity:</label><p>' + item.popularity + '</p>');
            $(card).append('<label>First Air Date:</label><p>' + item.first_air_date + '</p>');
            $(card).append('<hr>');
            console.log(self.imgUrl);
        })
    };




};