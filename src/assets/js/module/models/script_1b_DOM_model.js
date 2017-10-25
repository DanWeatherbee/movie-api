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
    $asideMenuCol
) {
    'use strict';
    this.$body = $body;
    this.$main = $main;
    this.$content = $content;
    this.$err = $err;
    this.$videoSearch = $videoSearch;
    this.$asideMenu = $asideMenu;
    this.$asideControler = $asideControler;
    this.$sectionAsideMenu = $sectionAsideMenu;
    this.$sectionMethodsRow = $sectionMethodsRow;
    this.$asideMenuCol = $asideMenuCol;
};

// var dom = new DOM_OBJ_ELEM(
//     $('body'),
//     $('#main'),
//     $('#content'),
//     $('#error-msg'),
//     $("#video-search"),
//     $('#aside-menu'),
//     $('#aside-controler'),
//     $('#section-aside-menu'),
//     $('#section-methods-row'),
//     $('#aside-menu-col')
// );