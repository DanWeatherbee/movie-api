//Model

var DOM_OBJ_ELEM = function(
    $body,
    $main,
    $content,
    $restMenuSearch,
    $goRest,
    $err,
    $fdaSearch,
    $goFda,
    $goVideo,
    $videoSearch
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
    this.$goVideo = $goVideo;
    this.$videoSearch = $videoSearch;
};

var dom = new DOM_OBJ_ELEM(
    $('body'),
    $('#main'),
    $('#content'),
    $("#rest-menu-search"),
    $("#go-rest"),
    $('#error-msg'),
    $("#fda-search"),
    $("#go-fda"),
    $("#go-video"),
    $("#video-search")
);