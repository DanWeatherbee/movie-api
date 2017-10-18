//Model

var DOM_OBJ_ELEM = function($body, $content) {
    'use strict';
    this.$body = $body;
    this.$content = $content;
};

var dom = new DOM_OBJ_ELEM(
        $('body'),
        $('#content')
        );