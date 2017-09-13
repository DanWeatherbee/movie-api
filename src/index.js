// Movie reducer using async functions:

//Model

var API = function(prefix, request, q, k, amp, format) {

    this.prefix = prefix;
    this.request = request;
    this.q = q;
    this.k = k;
    this.amp = amp;
    this.format = format;
    this.url = this.prefix + this.request + this.q + this.k + this.amp + this.format;
}

var API_CALL_POPULAR = new API(
    "https://api.themoviedb.org/3/movie/",
    "popular",
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3",
    "&",
    "format=json"
);

var ID = "550";
var API_CALL_ID = new API(
    "https://api.themoviedb.org/3/movie/",
    ID,
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3",
    "&",
    "format=json"
);

var API_CALL_LATEST = new API(
    "https://api.themoviedb.org/3/movie/",
    "latest",
    "?",
    "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3",
    "&",
    "format=json"
);


API.prototype.call = async function(response, responseArray, callType) {
    var txt = $("#calltype option:selected").text();
    console.log(txt);
    var caller;
        if(txt == "latest") {
            caller = API_CALL_LATEST;
    } else {
        alert("not hooked up.");
    }
    this.responseArray = [];
    this.callType = caller;

    try {
        const response = await fetch(this.callType.url);
        const text = await response.json()
        this.responseArray.push(text);

        this.renderLatest();


    } catch (err) {
        console.log('fetch failed', err);
    }
};

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

    $(card).append('<p>' + this.responseArray[0].overview + '</p>')

    $(card).append('<p>' + this.responseArray[0].status + '</p>')

    $(card).append('<hr>');
};
