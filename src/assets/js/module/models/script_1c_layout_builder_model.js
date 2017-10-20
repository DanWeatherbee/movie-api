//Model

var LAYOUT_BUILDER_OBJ = function(
    card,
    row,
    col,
    nav,
    carousel
) {
    'use strict';
    this.card = card;
    this.row = row;
    this.col = col;
    this.nav = nav;
    this.carousel = carousel;
};

var card = '<!-- card col-->' + // card col
    '<div class="container card col" id="card-1" style="border: 5px solid;color:green;">' +
    '<em>Card Collum</em>' +
    '</div>';

var row = '<!-- row 1-->' + //  row 1
    '<div class="row" id="card-1-row1" style="border: 2px solid;color:blue;">' +
    '<em>Row</em>' +
    '</div>';

var col = '<!-- col 1-->' + //  col 1
    '<div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;">' +
    '<em>Collum</em>' +
    '</div>';

var nav = '<!-- dark inverse -->' +
    '<nav class="navbar navbar-expand-sm bg-dark navbar-dark gradient-blue-bar border fixed-nav" id="nav-1">' +
    '<a href="/" class="navbar-brand">Developer Dan Weatherbee</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar3">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="navbar-collapse collapse" id="navbar3">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item active">' +
    '<a class="nav-link btn btn-outline-success" href="#">Link <span class="sr-only">Home</span></a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link btn btn-outline-success" href="//danweatherbee-front-end-web-developer.com">My Profile</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link btn btn-outline-success" href="#">Link</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</nav>';


var carousel = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' +
    '<ol class="carousel-indicators">' +
    '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' +
    '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
    '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>' +
    '</ol>' +
    '<div class="carousel-inner">' +
    '<div class="carousel-item active">' +
    '<img class="d-block w-100" src="http://lorempixel.com/output/city-q-c-640-480-4.jpg" alt="First slide">' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Dans Code Generator V 1.0</h1>' +
    '<h3>Create Bootstrap Components</h3>' +
    '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '<img class="d-block w-100" src="http://lorempixel.com/output/animals-q-c-640-480-5.jpg" alt="Second slide">' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Object Oriented Javascript</h1>' +
    '<h3>builder.createCard(), builder.createRow(), builder.createNav(), builder.createNav()</h3>' +
    '</div>' +
    '</div>' +
    '<div class="carousel-item">' +
    '<img class="d-block w-100" src="http://lorempixel.com/output/business-q-c-640-480-6.jpg" alt="Third slide">' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Model -> Objects-> Methods</h1>' +
    '<h3>var LAYOUT_BUILDER_OBJ = function(card, row, col, nav, carousel) {"use strict";this.card ' +
    '= card;this.row = row;this.col = col;this.nav = nav;this.carousel = carousel;};</h3>' +
    '</div>' +
    '</div>' +
    '</div>' +
    ' <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>';


LAYOUT_BUILDER_OBJ.prototype.createCard = function() {
    $('#layout-builder-content').append(this.card);
    $('#code-box').html(
        '<div class="container card col" id="card-1" style="border: 5px solid;color:green;">' +
        '<em>Card Collum</em></div>'
    );
    $('#btn-card-create').hide();
    $('#btn-row-create').show();
    console.log('create card is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createRow = function() {
    $('#card-1').append(this.row);
    $('#code-box').html(
        '<div class="container card col" id="card-1" style="border: 5px solid;color:green;">' +
        '<em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border:' +
        ' 2px solid;color:blue;"><em>Row</em></div></div>'
    );
    $('#btn-row-create').hide();
    $('#btn-col-create').show();
    console.log('create row is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createCol = function() {
    $('#card-1-row1').append(this.col);
    $('#code-box').html(
        '<div class="container card col" id="card-1" style="border: 5px solid;color:green;">' +
        '<em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color' +
        ':blue;"><em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: ' +
        '1px solid;color:red;"><em>Collum</em></div></div></div>'
    );
    $('#content').prepend(
        '<div class="container card col" id="card-1" style="border: 5px solid;color:green;">' +
        '<em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;">' +
        '<em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;">' +
        '<em>Collum</em></div></div></div>'
    );
    $('#btn-col-create').hide();
    $('#btn-navbar-create').show();
    console.log('create col is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createNav = function() {
    console.log('create nav is working.');
    $('body').prepend(this.nav);
    $('#code-box').html(
        '<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><!-- dark inverse -->' +
        '<nav class="navbar navbar-expand-sm bg-dark navbar-dark"><a href="/" class="navbar-brand">dark</a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar3"><span ' +
        'class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbar3">' +
        '<ul class="navbar-nav"><li class="nav-item active"><a class="nav-link btn btn-outline-success" href="#">' +
        'Link <span class="sr-only">Home</span></a></li><li class="nav-item"><a class="nav-link btn btn-outline-success" ' +
        'href="//danweatherbee-front-end-web-developer.com">My Profile</a></li>' +
        '<li class="nav-item"><a class="nav-link btn btn-outline-success" href="#">Link</a></li></ul></div></nav>' +
        '<em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;">' +
        '<em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;">' +
        '<em>Collum</em></div></div></div>'
    );

    $('#btn-navbar-create').hide();
    $('#btn-carousel-create').show();
};

LAYOUT_BUILDER_OBJ.prototype.createCarousel = function() {
    console.log('create carousel is working.');
    $('body').prepend(this.carousel);

    $('#code-box').html('<div id="content"><div id="carouselExampleIndicators" class="carousel slide" data-ride' +
        '="carousel"><ol class="carousel-indicators"><li data-target="#carouselExampleIndicators" data-slide-to="' +
        '0" class="active"></li><li data-target="#carouselExampleIndicators" data-slide-to="1"></li><li data-target' +
        '="#carouselExampleIndicators" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carous' +
        'el-item active"><img class="d-block w-100" src="http://lorempixel.com/output/city-q-c-6' +
        '00-280-4.jpg" alt="First slide"><div class="carousel-caption d-none d-md-block txt-shadow-black"><h3>Da' +
        'ns Code Generator V 1.0</h3><p>Create Bootstrap Components</p></div></div><div class="carousel-it' +
        'em"><img class="d-block w-100" src="http://lorempixel.com/output/nature-q-c-600-280-4.jpg" alt="Second ' +
        'slide"><div class="carousel-caption d-none d-md-block txt-shadow-black"><h3>Object Oriented Java' +
        'script</h3><p>builder.createCard(), builder.createRow(), builder.createNav(), builder.createNav()</p></d' +
        'iv></div><div class="carousel-item"><img class="d-block w-100" src="http://lorempixel.com/output/food-q-' +
        'c-600-280-4.jpg" alt="Third slide"><div class="carousel-caption d-none d-md-block txt-shadow-black"><h3' +
        '>Model Object Methods</h3><p>var LAYOUT_BUILDER_OBJ = function(card, row, col, nav, carousel' +
        ') {"use strict";this.card = card;this.row = row;this.col = col;this.nav = nav;this.carousel = carousel;};</p></d' +
        'iv></div></div> <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-sli' +
        'de="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span cla' +
        'ss="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleIndicators" role="butto' +
        'n" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></sp' +
        'an><span class="sr-only">Next</span></a></div><div class="container card col" id="card-1" style="border: 5p' +
        'x solid;color:green;"><!-- dark inverse --><nav class="navbar navbar-expand-sm bg-dark navbar-dark grad' +
        'ient-blue-bar border" id="nav-1"><a href="/" class="navbar-brand">Developer Dan Weatherbee<' +
        '/a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar3"><span clas' +
        's="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbar3"><u' +
        'l class="navbar-nav"><li class="nav-item active"><a class="nav-link btn btn-outline-success" href="#">Link' +
        ' <span class="sr-only">Home</span></a></li><li class="nav-item"><a class="nav-link btn btn-outline-su' +
        'ccess" href="//danweatherbee-front-end-web-developer.com">My Profile</a></li><li class="nav-' +
        'item"><a class="nav-link btn btn-outline-success" href="#">Link</a></li></ul></div></nav><em>Card Collum</' +
        'em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;">' +
        '<em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;"><em>Collu' +
        'm</em></div></div></div></div>');
    $('#btn-carousel-create').hide();
};

var builder = new LAYOUT_BUILDER_OBJ(
    card,
    row,
    col,
    nav,
    carousel
);


console.log(builder);