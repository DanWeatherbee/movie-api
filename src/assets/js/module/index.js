var appEntryPoint = '<!--  main -->' +

    '<section id="root" class="container">' +

    '<!-- row 1a -->' + // row 1a
    '<div class="row gradient-blue-bar">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col-sm-10 border">' +
    '<!-- head  -->' +
    '<div id="main">' +
    '<!--  content -->' +
    '</div>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col-sm-2">' +

    '<i class="fa fa-chevron-circle-down">Menu - not hooked up.' +
    '</i>' +

    // '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="timeline-controler" ' +
    // ' data-toggle="collapse" href="#row6-col1-content" aria-expanded="false" ' +
    // 'aria-controls="timeline-controler">Tweets by danFrontEndWebD' +
    // '</i>' +

    '</div>' +

    '</section>';

var formattedHTMLHeadRoot = '<!-- head  -->' +
    '<!-- row 1b -->' + // row 1b
    '<div class="row overview-padding gradient-linear-green border-5-color-dark-green-rad-15">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col txt-shadow-white">' +
    '<h4>' +
    'Developer Dan Weatherbee' +
    '</h4>' +
    '<h1>' +
    'Api Prefab Class BETA V 1.0' +
    '</h1>' +
    '</div>' +

    '</div>' +

    '<!-- row 2 -->' + // row 2
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +
    '<a class="btn btn-success" href="http://danweatherbee-front-end-web-developer.com">Home</a>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col">' +
    '<a class="btn btn-success" href="https://github.com/DanWeatherbee/movie-api">Project Code</a>' +
    '</div>' +

    '</div>';


var formattedHTMLContentRow1c = '<!-- row 1c -->' + // row 1c
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +
    '<h2>Available Methods</h2>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col">' +
    '<select autofocus id="calltype" name="call" onChange="API_CALLER.call()">' +
    '<option value="none">Choose Call Type</option>' +
    '<option value="API_CALL_MOVIES_THEATERS">Movies in Theaters</option>' +
    '<option value="API_CALL_TV_POPULAR">Popular Tv</option>' +
    '<option value="API_FM">Top Artists</option>' +
    '</select>' +
    '</div>' +

    '</div>';

var formattedHTMLContentRow2 = '<!-- row 2 -->' + // row 2
    '<div class="row overview-padding">' +

    '<i class="fa fa-chevron-circle-down" aria-hidden="true" ' +
    'id="btn-search-col-controler" data-toggle="collapse" href="#input-search-col" ' +
    'aria-expanded="false" aria-controls="btn-search-col-controler"> US FDA' +
    '</i>' +

    '<!-- col 1 -->' + // col 1
    '<section class="col collapse" id="input-search-col">' +
    '<div class="form-group">' +
    '<label for="fda-search">US FDA Search by food name:</label>' +
    '<span class="input-group-addon" id="basic-addon1">e.g. milk</span>' +
    '<input type="text" class="form-control" id="fda-search" placeholder="Enter or click to search...">' +
    '<button id="go-fda" class="btn btn-outline-primary" type="button" onClick="API_CALLER.callSearch()">Search</button>' +
    '</section>' +

    '</div>';

var formattedHTMLContentRow3 = '<!-- row 3 -->' + // row 3
    '<div class="row overview-padding">' +

    '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="btn-rest-search-col-controler" ' +
    ' data-toggle="collapse" href="#rest-search-col" aria-expanded="false" ' +
    'aria-controls="btn-rest-search-col-controler"> Nutrition X' +
    '</i>' +

    '<!-- col 1 -->' + // col 1
    '<section class="col collapse" id="rest-search-col">' +
    '<div class="form-group">' +
    '<label for="rest-menu-search">Nutrition X Restaurant Menu/Food Search:</label>' +
    '<span class="input-group-addon" id="basic-addon2">e.g. Tim Hortons</span>' +
    '<input type="text" class="form-control" id="rest-menu-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-rest" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_RESAURANT_LOCATIONS.callSearchRest()">Search</button>' +
    '</section>' +

    '</div>';

var formattedHTMLContentRow4 = '<!-- row 4 -->' + // row 4
    '<div class="row overview-padding">' +

    '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="btn-video-search-col-controler" ' +
    'data-toggle="collapse" href="#video-search-col" aria-expanded="false" aria-controls="' +
    'btn-video-search-col-controler"> Youtube' +
    '</i>' +

    '<section class="col collapse" id="video-search-col">' +
    '<!-- col 1 -->' + // col 1
    '<div class="form-group">' +
    '<label for="video-search">Search artist for videos:</label>' +
    '<span class="input-group-addon" id="basic-addon3">e.g. Cold Play</span>' +
    '<input type="text" class="form-control" id="video-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-video" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_CALLER.callSearchYouTube()">Search</button>' +
    '<p style="color:red;display:none;font-size:1.5em;" id="error-msg">' +
    'No results were found, please try again.</p>' +
    '</section>' +

    '</div>';

var formattedHTMLContentRow5 = '<!-- row 5 -->' + // row 5
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col" id="content-row5">' +
    '<div id="content"></div>' +
    '</div>' +

    '</div>';

var formattedHTMLContentRow6 = '<!-- row 6 -->' + // row 6
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +

    '<div class="collapse" id="content-row6">' +
    '<a id="twitter-link" class="twitter-timeline"' +
    ' data-theme="dark" data-link-color="#19CF86" ' +
    'href="https://twitter.com/danFrontEndWebD?ref_src=twsrc%5Etfw">' +
    'Tweets by danFrontEndWebD' +
    '</a>' +
    '</div>' +

    '</div>' +

    '<i class="fa fa-chevron-circle-down" aria-hidden="true" id="timeline-controler" ' +
    ' data-toggle="collapse" href="#content-row6" aria-expanded="false" ' +
    'aria-controls="timeline-controler">Tweets by danFrontEndWebD' +
    '</i>' +

    '</div>';

var formattedHTMLContentRow7 = '<!-- row 7 -->' + // row 7
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col card collapse" id="row6-col1-content">' +
    '<h5 class="card-title">' +
    'Layout builder using Bootstrap 4 Beta V1.0' +
    ' by Dan Weatherbee' +
    '</h5>' +
    '<p class="card-text">Create code for collums and rows inside a bootstrap 4 card class.' +
    '</p>' +
    '<button class="btn btn-outline-success" id="btn-card-create" onClick="builder.createCard()">Step 1 Create card</a>' +
    '<button class="btn btn-outline-success" id="btn-row-create" onClick="builder.createRow()">Step 2 Create row</a>' +
    '<button class="btn btn-outline-success" id="btn-col-create" onClick="builder.createCol()">Step 3 Create col</a>' +
    '<button class="btn btn-outline-success" id="btn-navbar-create" onClick="builder.createNav()">Step 4 Create navbar</a>' +
    '<button class="btn btn-outline-success" id="btn-carousel-create" onClick="builder.createCarousel()">Step 5 Create carousel</a>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col" id="layout-builder-content">' +
    '<textarea class="form-control" rows="10" id="code-box">' +
    'Code Rendering Container' +
    '</textarea>' +
    '</div>' +

    '</div>';

var formattedHTMLArray = [
    formattedHTMLHeadRoot,
    formattedHTMLContentRow1c,
    formattedHTMLContentRow2,
    formattedHTMLContentRow3,
    formattedHTMLContentRow4,
    formattedHTMLContentRow5,
    formattedHTMLContentRow6,
    formattedHTMLContentRow7

];


$('body').append(appEntryPoint);
formattedHTMLArray.forEach(function(item) {
    $('#main').append(item);
});