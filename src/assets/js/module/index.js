// ==============================================================>

var buttonId,
    divToCollapse,
    buttonName,
    formattedHTMLLinkControlerLayoutBuilder,
    formattedHTMLLinkControlerLayoutMethods,
    formattedHTMLLinkControlerLayoutTweets,
    errPanel,
    appEntryPoint,
    formattedHTMLHeadRoot,
    formattedHTMLContentRow1c,
    formattedHTMLContentRow2,
    formattedHTMLContentRow3,
    formattedHTMLContentRow4,
    formattedHTMLMethodsSection,
    formattedHTMLContentRow5,
    formattedHTMLContentRow7,
    formattedHTMLContentRow8;


// TODO build a model and panel with inputs for this.
// Link Controler Prefab ==>  Add the id you wish to be the controler.
buttonId = 'btn-layout-controler';
// Add the Id of the container or div you wish to collapse.
divToCollapse = 'section-row-7-layout-builder';
buttonName = 'Layout Builder';
// Format the HTML.
formattedHTMLLinkControlerLayoutBuilder = '<!-- link controler  -->' + // Link Controler
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" ' +
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
    buttonName +
    '</i>';
// ==============================================================>
buttonId = 'btn-method-controler';
// Add the Id of the container or div you wish to collapse.
divToCollapse = 'section-methods-row';
buttonName = 'Available Methods';
// Format the HTML.
formattedHTMLLinkControlerLayoutMethods = '<!-- link controler  -->' + // Link Controler
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" ' +
    'id="' +
    buttonId +
    '" data-toggle="collapse"' +
    ' href="#' +
    divToCollapse +
    '" ' +
    'aria-expanded="false" ' +
    'aria-controls="' +
    buttonId +
    '">' +
    buttonName +
    '</i>';
// ==============================================================>
buttonId = 'timeline-controler';
// Add the Id of the container or div you wish to collapse.
divToCollapse = 'content-row6';
buttonName = 'Tweets by danFrontEndWebD';
// Format the HTML.
formattedHTMLLinkControlerLayoutTweets = '<!-- link controler  -->' + // Link Controler
    '<i class="fa fa-chevron-circle-down" aria-hidden="true" ' +
    'id="' +
    buttonId +
    '" data-toggle="collapse"' +
    ' href="#' +
    divToCollapse +
    '" ' +
    'aria-expanded="false" ' +
    'aria-controls="' +
    buttonId +
    '">' +
    buttonName +
    '</i>';
// ==============================================================>
errPanel = '<section class="container card col green black-background border opacity-9 fixed-err-panel" id="section-err-panel">' +

    '<!-- err-panel row 1-->' +
    '<div class="row" id="err-panel-row1">' +

    '<!-- err-panel-row-1-col-1 -->' +
    '<div class="col animate" id="err-panel-row-1-col-1">' +

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

appEntryPoint = '<!--  main -->' +

    '<section id="root" class="container">' +

    '<!-- row root1a -->' + // row 1a
    '<div class="row gradient-blue-bar">' +

    '<!-- col 1 -->' + // col 1
    '<section class="col" id="section-row-1a">' +
    '<!-- head  -->' +
    '<section id="main">' +
    '<!--  content -->' +
    '</section>' +

    '</section>' +

    '<!-- row footer -->' + // footer
    '<section id="footer" class="row container text-center">' +

    '<!-- col 1 -->' + // col 1
    '<section class="col" id="section-footer-col-1">' +
    '<a href="https://www.linkedin.com/in/danweatherbee-web-developer/" class="btn btn-linkedin">' +
    '<span class="fa fa-linkedin"></span> linkedin</a>' +
    '</section>' +

    '<!-- col 2 -->' + // col 2
    '<section class="col" id="section-footer-col-2">' +
    '<a href="https://www.facebook.com/danweatherbeeDeveloper" class="btn btn-facebook">' +
    '<span class="fa fa-facebook"></span> Facebook</a>' +
    '</section>' +


    '<!-- col 3 -->' + // col 3
    '<section class="col" id="section-footer-col-3">' +
    '<a href="https://github.com/DanWeatherbee" class="btn btn-github">' +
    '<span class="fa fa-github"></span> Github</a>' +
    '</section>' +

    '</section>' +

    '<!-- aside-menu section-->' + // aside-menu section
    '<section class="col fixed-aside-menu gradient-black border maximize-menu" id="section-aside-menu">' +

    '<i class="fa fa-chevron-circle-down border black-background" aria-hidden="true" id="aside-controler" ' +
    ' data-toggle="collapse" href="#aside-menu" aria-expanded="false" ' +
    'aria-controls="aside-controler"><h5>Menu</h5>' +
    '</i><br /><br />' +
    '<aside id="aside-menu" class="black-background collapse overflow-aside-menu padding-2">' +
    '</aside>' +

    '<a id="section-aside-menu-close">' +
    '<i class="fa fa-window-minimize border overview-padding black-background" aria-hidden="true">' +
    '</i>' +
    '</a>' +
    '<a id="section-aside-menu-open">' +
    '<i class="fa fa-bars border overview-padding black-background" aria-hidden="true">' +
    '</i>' +
    '</a>' +

    '</section>' +

    '</section>';

formattedHTMLHeadRoot = '<!-- head  -->' +
    '<!-- row head 1b -->' + // row 1b
    '<div class="row overview-padding gradient-linear-green border-5-color-dark-green-rad-15">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col">' +

    '<h1 class="txt-shadow-black">' +
    'Api Prefab Class BETA V 1.0' +
    '</h1>' +

    '<small class="text-muted white-background">' +
    'Developer Dan Weatherbee' +
    '</small>' +
    '<img id="profile-pic" class="rounded-circle shadow" src="assets/images/profile-pic.jpg" />' +
    '<br />' +
    '<a class="btn btn-success" href="http://danweatherbee-front-end-web-developer.com">My Website</a>' +
    '<br /><br />' +
    '<a class="btn btn-success" href="https://github.com/DanWeatherbee/movie-api">Github</a>' +
    '</div>' +
    '<!-- col 2 -->' + // col 2
    '<div class="col">' +

    '<img src="assets/images/desktop.png" class="img-responsive" />' +

    '<br />' +

    '<p class="txt-shadow-black">This App is Mobile friendly.' +
    '<i class="fa fa-check-square" aria-hidden="true"></i></p>' +
    '</div>' +

    '</div>' +

    '<!-- row 2 -->' + // row 2
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col animate overview-padding">' +

    '<a class="btn btn-success" href="http://danweatherbee-front-end-web-developer.com">' +
    'My React Website' +
    '</a>' +
    '</div>' +
    '<div class="loader gradient-blue-circle"></div>' +
    '<!-- col 2 -->' + // col 2
    '<div class="col animate overview-padding">' +
    '<a class="btn btn-success" href="https://github.com/DanWeatherbee/movie-api">' +
    'Project Code' +
    '</a>' +
    '</div>' +

    '</div>';

formattedHTMLContentRow1c = '<!-- row methods dropdown list 1c -->' + // row 1c
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col-6 animate">' +
    '<select autofocus class="form-control" id="calltype" name="call" onChange="API_CALLER.call()">' +
    '<option value="none">Choose Call Type</option>' +
    '<option value="API_CALL_MOVIES_THEATERS">Movies in Theaters</option>' +
    '<option value="API_CALL_TV_POPULAR">Popular Tv</option>' +
    '<option value="API_FM">Top Artists</option>' +
    '</select>' +
    '</div>' +

    '<!-- col 2 -->' + // col 2
    '<div class="col-6 animate">' +
    formattedHTMLLinkControlerLayoutMethods +
    '</div>' +

    '</div>';

formattedHTMLContentRow2 = '<!-- row 2 methods-1-->' + // row 2

    '<div class="form-group">' +
    '<label for="fda-search">US FDA Search by food name:</label>' +
    '<span class="input-group-addon" id="basic-addon1">e.g. milk</span>' +
    '<input type="text" class="form-control" id="fda-search" placeholder="Enter or click to search...">' +
    '<button id="go-fda" class="btn btn-outline-primary" type="button" onClick="API_CALLER.callSearch()">Search</button>';


formattedHTMLContentRow3 = '<!-- row 3 methods-2-->' + // row 3

    '<div class="form-group">' +
    '<label for="rest-menu-search">Nutrition X Restaurant Menu/Food Search:</label>' +
    '<span class="input-group-addon" id="basic-addon2">e.g. Tim Hortons</span>' +
    '<input type="text" class="form-control" id="rest-menu-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-rest" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_RESAURANT_LOCATIONS.callSearchRest()">Search</button>';

formattedHTMLContentRow4 = '<!-- row 4 methods-3-->' + // row 4

    '<div class="form-group">' +
    '<label for="video-search">Search for videos:</label>' +
    '<span class="input-group-addon" id="basic-addon3">e.g. 2017 trailers</span>' +
    '<input type="text" class="form-control" id="video-search" placeholder="Enter or click to search...">' +
    '</a>' +
    '<button id="go-video" class="btn btn-outline-primary" type="button" ' +
    'onClick="API_CALLER.callSearchYouTube()">Search</button>' +
    '<p style="color:red;display:none;font-size:1.5em;" id="error-msg">' +
    'No results were found, please try again.</p>';


formattedHTMLMethodsSection = '<!-- row 2 section-methods-row Begin -->' +
    '<section class="row overview-padding">' + // section-methods-row Begin
    '<div class="col animate collapse" id="section-methods-row"></div>' +
    '</section>' + // section-methods-row End ================>
    '<!-- section-methods-row End ================> -->';

formattedHTMLContentRow5 = '<!-- row 5 -->' + // row 5
    '<div class="row overview-padding white-background">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col animate" id="content-row5">' +
    '<div id="content"></div>' +
    '</div>' +

    '</div>';

formattedHTMLContentRow7 = '<!-- row 7 code generator -->' + // row 7
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
    '<div class="col animate" id="layout-builder-content">' +
    '<textarea class="form-control" rows="3" id="code-box">' +
    'Code Rendering Container' +
    '</textarea>' +
    '</div>' +

    '</section>' +
    formattedHTMLLinkControlerLayoutBuilder;

formattedHTMLContentRow8 = '<!-- row twitter 8 -->' + // row 6
    '<div class="row overview-padding">' +

    '<!-- col 1 -->' + // col 1
    '<div class="col animate collapse" id="content-row6">' +
    '<a id="twitter-link" class="twitter-timeline"' +
    ' data-theme="dark" data-link-color="#19CF86" ' +
    'href="https://twitter.com/danFrontEndWebD?ref_src=twsrc%5Etfw">' +
    'Tweets by danFrontEndWebD' +
    '</a>' +
    '</div>' +

    formattedHTMLLinkControlerLayoutTweets +
    '</div>';