//Model

var LAYOUT_BUILDER_OBJ = function(
    card,
    row,
    col,
    nav
) {
    'use strict';
    this.card = card;
    this.row = row;
    this.col = col;
    this.nav = nav;
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
    '<nav class="navbar navbar-expand-sm bg-dark navbar-dark gradient-blue-bar border">' +
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


LAYOUT_BUILDER_OBJ.prototype.createCard = function() {
    $('#layout-builder-content').append(this.card);
    $('#code-box').html('<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><em>Card Collum</em></div>');
    $('#btn-card-create').hide();
    $('#btn-row-create').show();
    console.log('create card is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createRow = function() {
    $('#card-1').append(this.row);
    $('#code-box').html('<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;"><em>Row</em></div></div>');
    $('#btn-row-create').hide();
    $('#btn-col-create').show();
    console.log('create row is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createCol = function() {
    $('#card-1-row1').append(this.col);
    $('#code-box').html('<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;"><em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;"><em>Collum</em></div></div></div>');
    $('#content').prepend('<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;"><em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;"><em>Collum</em></div></div></div>');
    $('#btn-col-create').hide();
    $('#btn-navbar-create').show();
    console.log('create col is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createNav = function() {
    console.log('create nav is working.');
    $('#card-1').prepend(this.nav);
    $('#root').prepend(this.nav);
    $('#code-box').html('<div class="container card col" id="card-1" style="border: 5px solid;color:green;"><!-- dark inverse --><nav class="navbar navbar-expand-sm bg-dark navbar-dark"><a href="/" class="navbar-brand">dark</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar3"><span class="navbar-toggler-icon"></span></button><div class="navbar-collapse collapse" id="navbar3"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link btn btn-outline-success" href="#">Link <span class="sr-only">Home</span></a></li><li class="nav-item"><a class="nav-link btn btn-outline-success" href="//danweatherbee-front-end-web-developer.com">My Profile</a></li><li class="nav-item"><a class="nav-link btn btn-outline-success" href="#">Link</a></li></ul></div></nav><em>Card Collum</em><!-- row 1--><div class="row" id="card-1-row1" style="border: 2px solid;color:blue;"><em>Row</em><!-- col 1--><div class="col-sm-2" id="card-1-row-1-col-1" style="border: 1px solid;color:red;"><em>Collum</em></div></div></div>');

    $('#btn-navbar-create').hide();
};


var builder = new LAYOUT_BUILDER_OBJ(
    card,
    row,
    col,
    nav
);


console.log(builder);