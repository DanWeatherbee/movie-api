/*
What movies are in theatres?

URL: https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=06f6d11f6cf9b366cb459ecbdfdc75a3&format=json
*/
var KEY = "api_key=06f6d11f6cf9b366cb459ecbdfdc75a3";
var API_CALL_MOVIES_THEATERS = new API(
    "https://api.themoviedb.org/3/discover/",
    "movie",
    "?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&",
    KEY,
    "&",
    "format=json"
);
