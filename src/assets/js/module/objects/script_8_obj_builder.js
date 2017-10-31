// https://getbootstrap.com/docs/4.0/components/card/
this.card = '<!-- section-card-demo root col-->' + // section-card-demo col
    '<section class="container card col green border" id="section-card-demo">' +
    '<!--  card-demo-body -->' +
    '<div class="card-body gradient-blue-bar">' +
    '<img class="card-img-top img-thumbnail black-background" src="assets/images/desktop.png" alt="Card image profile pic">' +
    '<h4 class="card-title">' +
    'Card Demo Title' +
    '</h4>' +
    '<p class="card-text">Card Demo Content text goes here...</p>' +
    '<a href="https://getbootstrap.com/docs/4.0/components/card/" class="btn btn-outline-primary">Bootstrap 4 Card Code</a>' +

    '</div>' +

    '</section>';

this.cardBody = '<!-- section-card-body root col-->' + // section-card-body col
    '<section class="container card col green border" id="section-card-body">' +
    '<em>Card Collum</em>' +
    '</section>';

this.row = '<!-- card-demo row 1-->' + //  card-demo row 1
    '<div class="row blue border" id="card-demo-row1">' +
    '<em>Row</em>' +
    '</div>';


this.col = '<!-- card-demo-row-1-col-1 -->' + //  card-demo-row-1-col-1
    '<div class="col-sm-2 red border" id="card-demo-row-1-col-1">' +
    '<em>Collum</em>' +
    '</div>';


this.nav = '<!-- nav-demo -->' + // nav-demo
    '<nav class="navbar navbar-expand-sm bg-dark navbar-dark' +
    ' gradient-blue-bar border padding-2 animate" id="nav-demo">' +
    '<a href="/" class="navbar-brand">' +
    '<img class="img-thumbnail" id="profile-pic" src="assets/images/profile-pic.jpg" alt="My Profile Pic" />' +
    ' Developer Dan Weatherbee</a>' +
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

this.navBody = '<!-- nav-body -->' + // nav-body
    '<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-nav' +
    ' gradient-blue-bar border padding-2 animate" id="nav-demo">' +
    '<a href="/" class="navbar-brand">' +
    '<img class="img-thumbnail" id="profile-pic" src="assets/images/profile-pic.jpg" alt="My Profile Pic" />' +
    ' Developer Dan Weatherbee</a>' +
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

this.carousel = '<!-- carousel -->' + // carousel
    '<div id="carousel" class="carousel slide animate" data-ride="carousel">' +
    '<ol class="carousel-indicators">' +
    '<li data-target="#carousel" data-slide-to="0" class="active"></li>' +
    '<li data-target="#carousel" data-slide-to="1"></li>' +
    '<li data-target="#carousel" data-slide-to="2"></li>' +
    '</ol>' +
    '<div class="carousel-inner">' +

    '<div class="carousel-item active">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-6.jpg" alt="First slide">' +
    '</a>' +

    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Dans Code Generator V 1.0</h1>' +
    '<h3>Create Bootstrap Components</h3>' +
    '</div>' +
    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-1.jpg" alt="Second slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Object Oriented Javascript</h1>' +
    '<h3>builder.createCard(), builder.createRow(), builder.createNav(), builder.createCarousel()</h3>' +
    '</div>' +
    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-2.jpg" alt="Third slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Model -> Objects-> Methods</h1>' +
    '<h3>varLAYOUT_BUILDER_OBJ = function(card, row, col, nav, carousel) {"use strict";this.card ' +
    '= card;this.row = row;this.col = col;this.nav = nav;this.carousel = carousel;};</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-3.jpg" alt="Fourth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Coded according to Best Practice Style guides.</h1>' +
    '<h3>Javascript, HTML, CSS, Bootstrap 4 Beta and jQuery Power this App.</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-4.jpg" alt="Fifth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Running on a Node Server</h1>' +
    '<h3>Backend consists of several rest apis.</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +

    '<img class="d-block w-100" src="assets/images/bg-5.jpg" alt="Sixth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Html Created with Javascript and injected into the page.</h1>' +
    '<h3>Row by row added to an array and for looped into the index.</h3>' +
    '</div>' +

    '</div>' +

    '</div>' +
    ' <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carousel" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>';

this.carouselBody = '<!-- carousel-body -->' + // carousel-body
    '<div id="carousel-body" class="carousel slide animate" data-ride="carousel-body">' +
    '<ol class="carousel-indicators">' +
    '<li data-target="#carousel-body" data-slide-to="0" class="active"></li>' +
    '<li data-target="#carousel-body" data-slide-to="1"></li>' +
    '<li data-target="#carousel-body" data-slide-to="2"></li>' +
    '</ol>' +
    '<div class="carousel-inner">' +

    '<div class="carousel-item active">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-6.jpg" alt="First slide">' +
    '</a>' +

    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Dans Code Generator V 1.0</h1>' +
    '<h3>Create Bootstrap Components</h3>' +
    '</div>' +
    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-1.jpg" alt="Second slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Object Oriented Javascript</h1>' +
    '<h3>builder.createCard(), builder.createRow(), builder.createNav(), builder.createCarousel()</h3>' +
    '</div>' +
    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-2.jpg" alt="Third slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Model -> Objects-> Methods</h1>' +
    '<h3>varLAYOUT_BUILDER_OBJ = function(card, row, col, nav, carousel) {"use strict";this.card ' +
    '= card;this.row = row;this.col = col;this.nav = nav;this.carousel = carousel;};</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-3.jpg" alt="Fourth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Coded according to Best Practice Style guides.</h1>' +
    '<h3>Javascript, HTML, CSS, Bootstrap 4 Beta and jQuery Power this App.</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +
    '<img class="d-block w-100" src="assets/images/bg-4.jpg" alt="Fifth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Running on a Node Server</h1>' +
    '<h3>Backend consists of several rest apis.</h3>' +
    '</div>' +

    '</div>' +

    '<div class="carousel-item">' +
    '<a href="#root">' +

    '<img class="d-block w-100" src="assets/images/bg-5.jpg" alt="Sixth slide">' +
    '</a>' +
    '<div class="carousel-caption d-none d-md-block txt-shadow-black">' +
    '<h1>Html Created with Javascript and injected into the page.</h1>' +
    '<h3>Row by row added to an array and for looped into the index.</h3>' +
    '</div>' +

    '</div>' +

    '</div>' +
    ' <a class="carousel-control-prev" href="#carousel-body" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
    '</a>' +
    '<a class="carousel-control-next" href="#carousel-body" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
    '</a>' +
    '</div>';
