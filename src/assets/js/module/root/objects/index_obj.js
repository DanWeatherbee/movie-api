
// TODO Build catch list.
try {
    formattedHTMLContentRow6;
}
catch(err) {
    formattedHTMLContentRow6 = '<h1>formattedHTMLContentRow6 was not defined!</h1>';
};

var indexRender = new INDEX_RENDER_ROWS(
    errPanel,
    '<!-- row1 -->' +
    appEntryPoint,
    '<!-- row2 -->' +
    formattedHTMLHeadRoot,
    '<!-- row3 -->' +
    formattedHTMLContentRow1c,
    '<!-- row4 -->' +
    formattedHTMLMethodsSection,
    '<!-- row5 -->' +
    formattedHTMLContentRow2,
    '<!-- row6 -->' +
    formattedHTMLContentRow3,
    '<!-- row7 -->' +
    formattedHTMLContentRow4,
    '<!-- row8 -->' +
    formattedHTMLContentRow5,
    '<!-- row9 -->',
    '<!-- row10 -->' +
    formattedHTMLContentRow7,
    '<!-- row11 -->' +
    formattedHTMLContentRow8,
    '<!-- row12 -->',
    '<!-- row13 -->',
    '<!-- row14 -->',
    '<h5 class="green-background txt-shadow-black white">&#10004; <em class="blue overview-padding">Passed.</em></h5>',
    '<h5 class="black-background txt-shadow-black white">X <em class="red overview-padding">Failed!</em></h5>'
);