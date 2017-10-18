var appEntryPoint = '<!--  main -->' +
    '<section id="root" class="container gradient-blue-bar border">' +
    '<div class="row overview-padding gradient-linear-green">' +
    '<!-- head  -->' +
    '<div id="main">' +
    '<!--  content -->' +
    '</div>' +
    '</section>';

var formattedHTMLHead = '<div class="row overview-padding gradient-linear-green">' +
    '<!-- head  -->' +
    '<div class="col-sm-3 txt-shadow-white">' +
    '<h4>' +
    'Developer Dan Weatherbee' +
    '</h4>' +
    '</div>' +
    '<div class="col-sm-5 text-center txt-shadow-white">' +
    '<h1>' +
    'Api Prefab Class BETA V 1.0' +
    '</h1>' +
    '</div>' +
    '<div class="col-sm-4 text-right">' +
    '<a class="btn btn-success" href="http://danweatherbee-front-end-web-developer.com">Home</a>' +
    '<a class="btn btn-success" href="https://github.com/DanWeatherbee/movie-api">Project Code</a>' +
    '</div>' +
    '</div>';

var formattedHTMLContentRow1 = '<!-- row 1 -->' +
    '<div class="row overview-padding">' +
    '<div class="col">' +
    '<!--   col 1-->' +
    '<h2>Available Methods</h2>' +
    '</div>' +
    '<div class="col">' +
    '<!--   col 2-->' +
    '<select autofocus id="calltype" name="call" onChange="API_CALLER.call()">' +
    '<option value="none">Choose Call Type</option>' +
    '<option value="API_CALL_MOVIES_THEATERS">Movies in Theaters</option>' +
    '<option value="API_CALL_TV_POPULAR">Popular Tv</option>' +
    '<option value="API_FM">Top Artists</option>' +
    '</select>' +
    '</div>' +
    '</div>';

var formattedHTMLContentRow2 = '<!-- row 2 -->' +
    '<div class="row overview-padding">' +
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" ' +
    'id="btn-search-col-controler" data-toggle="collapse" href="#input-search-col" ' +
    'aria-expanded="false" aria-controls="btn-search-col-controler"> US FDA' +
    '</i>' +
    '<section class="col collapse" id="input-search-col">' +
    '<!-- col 1 -->' +
    '<div class="form-group">' +
    '<label for="fda-search">US FDA Search by food name:</label>' +
    '<span class="input-group-addon" id="basic-addon1">e.g. milk</span>' +
    '<input type="text" class="form-control" id="fda-search" placeholder="Enter or click to search...">' +
    '<button id="go" class="btn btn-outline-primary" type="button" onClick="API_CALLER.callSearch()">Search</button>' +
    '</div>' +
    '</section>' +
    '</div>';

var formattedHTMLContentRow3 = '<!-- row 3 -->' +
    '<div class="row overview-padding">' +
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="btn-rest-search-col-controler" ' +
    ' data-toggle="collapse" href="#rest-search-col" aria-expanded="false" ' +
    'aria-controls="btn-rest-search-col-controler"> Nutrition X' +
    '</i>' +
    '<section class="col collapse" id="rest-search-col">' +
    '<!-- col 1 -->' +
    '<div class="form-group">' +
    '<label for="rest-menu-search">Nutrition X Restaurant Menu/Food Search:</label>' +
    '<span class="input-group-addon" id="basic-addon2">e.g. Tim Hortons</span>' +
    '<input type="text" class="form-control" id="rest-menu-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-rest" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_RESAURANT_LOCATIONS.callSearchRest()">Search</button>' +
    '</div>' +
    '</section>' +
    '</div>';

var formattedHTMLContentRow4 = '<!-- row 4 -->' +
    '<div class="row overview-padding">' +
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="btn-video-search-col-controler" ' +
    'data-toggle="collapse" href="#video-search-col" aria-expanded="false" aria-controls="' +
    'btn-video-search-col-controler"> Youtube' +
    '</i>' +
    '<section class="col collapse" id="video-search-col">' +
    '<!-- col 1 -->' +
    '<div class="form-group">' +
    '<label for="video-search">Search artist for videos:</label>' +
    '<span class="input-group-addon" id="basic-addon3">e.g. Cold Play</span>' +
    '<input type="text" class="form-control" id="video-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-video" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_CALLER.callSearchYouTube()">Search</button>' +
    '<p style="color:red;display:none;font-size:1.5em;" id="error-msg">' +
    'No results were found, please try again.</p>' +
    '</div>' +
    ' </section>' +
    '</div>';

var formattedHTMLContentRow5 = '<!-- row 5 -->' +
    '<div class="row overview-padding">' +
    '<div class="col">' +
    '<!-- col 1 -->' +
    '<div class="col-sm-12 text-center" id="content">' +
    '<div id="content"></div>' +
    '</div>' +
    '</div>' +
    '</div>';

var formattedHTMLArray = [
    formattedHTMLHead,
    formattedHTMLContentRow1,
    formattedHTMLContentRow2,
    formattedHTMLContentRow3,
    formattedHTMLContentRow4,
    formattedHTMLContentRow5

];
$('body').append(appEntryPoint);
formattedHTMLArray.forEach(function(item) {
    $('#main').append(item);
});