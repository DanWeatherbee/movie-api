//Model

var DOM_OBJ_ELEM = function(
    $body,
    $main,
    $content,
    $err,
    $videoSearch,
    $asideMenu,
    $asideControler,
    $sectionAsideMenu,
    $sectionMethodsRow,
    $asideMenuCol,
    $sectionAsideMenuClose,
    $restMenuSearch,
    $goRest,
    $goVideo
) {
    'use strict';
    this.$body = $('body');
    this.$main = $('#main');
    this.$content = $('#content');
    this.$err = $('#error-msg');
    this.$videoSearch = $("#video-search");
    this.$asideMenu = $('#aside-menu');
    this.$asideControler = $('#aside-controler');
    this.$sectionAsideMenu = $('#section-aside-menu');
    this.$sectionMethodsRow = $('#section-methods-row');
    this.$asideMenuCol = $('#aside-menu-col');
    this.$sectionAsideMenuClose = $('#section-aside-menu-close');
    this.$restMenuSearch = $('#rest-menu-search');
    this.$goRest = $('#go-rest');
    this.$goVideo = $('#go-video');
};
