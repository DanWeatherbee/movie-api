
// ==============================================================>
// TODO build panel with inputs for this.
// Link Controler Prefab ==>  Add the id you wish to be the controler.
var buttonId = 'btn-layout-controler';
// Add the Id of the container or div you wish to collapse.
var divToCollapse = 'section-row-7-layout-builder';
var buttonName = 'Layout Builder Beta V 1.0 by Dan Weatherbee';
// Format the HTML.
var formattedHTMLLinkControlerLayoutBuilder = '<!-- link controler  -->' + // Link Controler
    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" ' +
    'id="' +
    buttonId +
    '" data-toggle="collapse"' +
    ' href="#' +
    divToCollapse +
    '" ' +
    'aria-expanded="false" ' +
    'aria-controls="' +
    buttonId +
    '"> ' +
    '<h3>' +
    buttonName +
    '</h3>' +
    '</i>';
// ==============================================================>

var buttonId = 'btn-method-controler';
// Add the Id of the container or div you wish to collapse.
var divToCollapse = 'section-methods-row';
var buttonName = 'Choose Search Type';

var formattedHTMLLinkControlerMethods = '<!-- link controler  -->' + // Link Controler
    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" ' +
    'id="' +
    buttonId +
    '" data-toggle="collapse"' +
    ' href="#' +
    divToCollapse +
    '" ' +
    'aria-expanded="false" ' +
    'aria-controls="' +
    buttonId +
    '"> ' +
    '<h3>' +
    buttonName +
    '</h3>' +
    '</i>';

var errPanel = '<section class="container card col green black-background border opacity-9 fixed-err-panel" id="section-err-panel">' +

    '<!-- err-panel row 1-->' +
    '<div class="row" id="err-panel-row1">' +

    '<!-- err-panel-row-1-col-1 -->' +
    '<div class="col" id="err-panel-row-1-col-1">' +

    '<!--  err-panel -->' +
    '<div class="card-body">' +

    '<h4 class="card-title">' +
    'Error Panel' +
    '</h4>' +

    '</div>' +

    '<section id="err-panel" class="overview-padding txt-shadow-black red-background white border">' +

    '<article class="card-text" id="section-err-panel-card-text">Error checking for content existence.</article>' +

    '</section>' +

    '</div>' +
    '<a class="btn btn-outline-primary txt-bold">X</a>' +
    '</div>' +

    '</section>';

var appEntryPoint = '<!--  main -->' +

    '<section id="root" class="container">' +

    '<!-- row 1a -->' + // row 1a
    '<div class="row gradient-blue-bar">' +

    '<!-- col 1 -->' + // col 1
    '<section class="col border" id="section-row-1a">' +
    '<!-- head  -->' +
    '<section id="main">' +
    '<!--  content -->' +
    '</section>' +
    '</section>' +

    '<!-- aside-menu section-->' + // aside-menu section
    '<section class="col fixed-aside-menu" id="section-aside-menu">' +

    '<i class="fa fa-chevron-circle-down border black-background" aria-hidden="true" id="aside-controler" ' +
    ' data-toggle="collapse" href="#aside-menu" aria-expanded="false" ' +
    'aria-controls="aside-controler"><h1>Menu</h1>' +
    '</i>' +

    '<aside id="aside-menu" class="black-background collapse overflow-aside-menu padding-2">' +
    '</aside>' +

    '</section>' +

    '</section>';

var formattedHTMLHeadRoot = '<!-- head  -->' +
    '<!-- row 1b -->' + // row 1b
    '<div class="row overview-padding gradient-linear-green border-5-color-dark-green-rad-15">' +

    '<!-- col 1 -->' + // col 1
    '<a href="/"><div class="col txt-shadow-black white">' +
    '<h4>' +
    'Developer Dan Weatherbee' +
    '</h4>' +
    '<h1>' +
    'Api Prefab Class BETA V 1.0' +
    '</h1>' +
    '</div></a>' +

    '</div>' +

    '<!-- row 2 -->' + // row 2
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +
    '<a class="btn btn-success" href="http://danweatherbee-front-end-web-developer.com">' +
    'My React Website' +
    '</a>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col">' +
    '<a class="btn btn-success" href="https://github.com/DanWeatherbee/movie-api">' +
    'Project Code' +
    '</a>' +
    '</div>' +

    '</div>';

var formattedHTMLContentRow1c = '<!-- row 1c -->' + // row 1c
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +
    '<h2>Available Methods</h2>' +
    formattedHTMLLinkControlerMethods +
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

var formattedHTMLContentRow2 = '<!-- row 2 methods-1-->' + // row 2
    '<section class="row overview-padding" id="methods-1">' +
    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" ' +
    'id="btn-search-col-controler" data-toggle="collapse" href="#input-search-col" ' +
    'aria-expanded="false" aria-controls="btn-search-col-controler"><h2>US FDA</h2>' +
    '</i>' +

    '<!-- col 1 -->' + // col 1
    '<section class="col collapse" id="input-search-col">' +
    '<div class="form-group">' +
    '<label for="fda-search">US FDA Search by food name:</label>' +
    '<span class="input-group-addon" id="basic-addon1">e.g. milk</span>' +
    '<input type="text" class="form-control" id="fda-search" placeholder="Enter or click to search...">' +
    '<button id="go-fda" class="btn btn-outline-primary" type="button" onClick="API_CALLER.callSearch()">Search</button>' +
    '</section>' +
    '</section>' +
    '</section>';

var formattedHTMLContentRow3 = '<!-- row 3 methods-2-->' + // row 3
    '<section class="row overview-padding" id="methods-2">' +

    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" id="btn-rest-search-col-controler" ' +
    ' data-toggle="collapse" href="#rest-search-col" aria-expanded="false" ' +
    'aria-controls="btn-rest-search-col-controler"><h2>Nutrition X</h2>' +
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

    '</section>';

var formattedHTMLContentRow4 = '<!-- row 4 methods-3-->' + // row 4
    '<section class="row overview-padding" id="methods-3">' +

    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" id="btn-video-search-col-controler" ' +
    'data-toggle="collapse" href="#video-search-col" aria-expanded="false" aria-controls="' +
    'btn-video-search-col-controler"><h2>Youtube</h2>' +
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

    '</section>';

var formattedHTMLMethodsSection = '<!-- row 2 section-methods-row Begin -->' +
    '<section class="row overview-padding collapse" id="section-methods-row">' + // section-methods-row Begin
    '</section>' + // section-methods-row End ================>
    '<!-- section-methods-row End ================> -->';

var formattedHTMLContentRow5 = '<!-- row 5 -->' + // row 5
    '<div class="row overview-padding white-background">' +

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

    '<i class="fa fa-chevron-circle-down border" aria-hidden="true" id="timeline-controler" ' +
    ' data-toggle="collapse" href="#content-row6" aria-expanded="false" ' +
    'aria-controls="timeline-controler"><h3>Tweets by danFrontEndWebD</h3>' +
    '</i>' +

    '</div>';

var formattedHTMLContentRow7 = '<!-- row 7 -->' + // row 7
    formattedHTMLLinkControlerLayoutBuilder +
    '<section class="row collapse overview-padding" id="section-row-7-layout-builder">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col card collapse black" id="row6-col1-content">' +

    '<h6 class="card-title">' +
    'Code Generator Beta V1.0' +
    ' by Dan Weatherbee' +
    '</h6>' +

    '<p class="card-text">Create column, row, nav, carousel.' +
    '</p>' +

    '<a class="btn btn-outline-success black" id="btn-card-create" ' +
    'onClick="builder.createCard()"' +
    '>Step 1 Create card</a>' +

    '<a class="btn btn-outline-success black" id="btn-row-create" ' +
    'onClick="builder.createRow()"' +
    '>Step 2 Create row</a>' +

    '<a class="btn btn-outline-success black" id="btn-col-create" ' +
    'onClick="builder.createCol()"' +
    '>Step 3 Create col</a>' +

    '<a class="btn btn-outline-success black" id="btn-navbar-create" ' +
    'onClick="builder.createNav()"' +
    '>Step 4 Create navbar</a>' +

    '<a class="btn btn-outline-success black" href="#top" id="btn-carousel-create" ' +
    'onClick="builder.createCarousel()"' +
    '>Step 5 Create carousel</a>' +

    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col" id="layout-builder-content">' +
    '<textarea class="form-control" rows="3" id="code-box">' +
    'Code Rendering Container' +
    '</textarea>' +
    '</div>' +

    '</section>';
