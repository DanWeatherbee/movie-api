//Model

var DOM_OBJ_ELEM = function(
    $body,
    $main,
    $content,
    $restMenuSearch,
    $goRest,
    $err,
    $fdaSearch,
    $goFda
) {
    'use strict';
    this.$body = $body;
    this.$main = $main;
    this.$content = $content;
    this.$restMenuSearch = $restMenuSearch;
    this.$goRest = $goRest;
    this.$err = $err;
    this.$fdaSearch = $fdaSearch;
    this.$goFda = $goFda;
};

var dom = new DOM_OBJ_ELEM(
    $('body'),
    $('#main'),
    $('#content'),
    $("#rest-menu-search"),
    $("#go-rest"),
    $('#error-msg'),
    $("#fda-search"),
    $("#go-fda")
);