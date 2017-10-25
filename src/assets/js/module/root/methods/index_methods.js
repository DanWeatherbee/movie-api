// Render panel and append to body.
dom.$body.prepend(indexRender.errPanel);
var $panel = $('#section-err-panel-card-text');

if (indexRender.errPanel) {
    $panel.html('');
    $panel.append('<h4>Panel has been rendered.</h4>' + indexRender.pass);
};

if (indexRender.row1 === "<!-- row1 -->") {
    $panel.append('<h4>row1 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row1 appEntryPoint has been rendered.<h4>' + indexRender.pass);
    $('body').append(appEntryPoint);
};

if (indexRender.row2 === "<!-- row2 -->") {
    $panel.append('<h4>row2 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row2 formattedHTMLHeadRoot has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLHeadRoot);
};

if (indexRender.row3 === "<!-- row3 -->") {
    $panel.append('<h4>row3 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row3 formattedHTMLContentRow1c has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLContentRow1c);
};

if (indexRender.row4 === "<!-- row4 -->") {
    $panel.append('<h4>row4 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row4 formattedHTMLMethodsSection has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLMethodsSection);
};

if (indexRender.row5 === "<!-- row5 -->") {
    $panel.append('<h4>row5 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row5 formattedHTMLContentRow2 has been rendered.</h4>' + indexRender.pass);
    $('#section-methods-row').append(formattedHTMLContentRow2);
};

if (indexRender.row6 === "<!-- row6 -->") {
    $panel.append('<h4>row6 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row6 formattedHTMLContentRow3 has been rendered.</h4>' + indexRender.pass);
    $('#section-methods-row').append(formattedHTMLContentRow3);
};

if (indexRender.row7 === "<!-- row7 -->") {
    $panel.append('<h4>row7 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row7 formattedHTMLContentRow4 has been rendered.</h4>' + indexRender.pass);
    $('#section-methods-row').append(formattedHTMLContentRow4);
};

if (indexRender.row8 === "<!-- row8 -->") {
    $panel.append('<h4>row8 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row7 formattedHTMLContentRow5 has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLContentRow5);
};

if (indexRender.row9 === "<!-- row9 -->") {
    $panel.append('<h4>row9 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row9 formattedHTMLContentRow6 has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLContentRow6);
};

if (indexRender.row10 === "<!-- row10 -->") {
    $panel.append('<h4>row10 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row10 formattedHTMLContentRow7 has been rendered.</h4>' + indexRender.pass);
    $('#main').append(formattedHTMLContentRow7);
    $('#aside-menu-col').hide();
    $('#aside-controler').hide();
    $('#section-aside-menu').fadeOut();
};

if (indexRender.row11 === "<!-- row11 -->") {
    $panel.append('<h4>row11 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row11 has been rendered.</h4>' + indexRender.pass);
};

if (indexRender.row12 === "<!-- row12 -->") {
    $panel.append('<h4>row12 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row12 has been rendered.</h4>' + indexRender.pass);
};

if (indexRender.row13 === "<!-- row13 -->") {
    $panel.append('<h4>row13 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row13 has been rendered.</h4>' + indexRender.pass);
};

if (indexRender.row14 === "<!-- row14 -->") {
    $panel.append('<h4>row14 is empty.</h4>' + indexRender.fail);
} else {
    $panel.append('<h4>row14 has been rendered.</h4>' + indexRender.pass);
};

$('#section-err-panel').on("click", function() {
    $(this).fadeOut();
});