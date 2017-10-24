// $('body').prepend(indexRender.errPanel);
if (indexRender.errPanel) {
    $('#section-err-panel-card-text').html('');
    $('#section-err-panel-card-text').append('Panel has loaded.' + indexRender.pass);
};

if (indexRender.row1 === "<!-- row1 -->") {
    $('#section-err-panel-card-text').append('row1 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row1 has content.' + indexRender.pass);
};

if (indexRender.row2 === "<!-- row2 -->") {
    $('#section-err-panel-card-text').append('row2 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row2 has content.' + indexRender.pass);
};

if (indexRender.row3 === "<!-- row3 -->") {
    $('#section-err-panel-card-text').append('row3 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row3 has content.' + indexRender.pass);
};

if (indexRender.row4 === "<!-- row4 -->") {
    $('#section-err-panel-card-text').append('row4 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row4 has content.' + indexRender.pass);
};

if (indexRender.row5 === "<!-- row5 -->") {
    $('#section-err-panel-card-text').append('row5 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row5 has content.' + indexRender.pass);
};

if (indexRender.row6 === "<!-- row6 -->") {
    $('#section-err-panel-card-text').append('row6 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row6 has content.' + indexRender.pass);
};

if (indexRender.row7 === "<!-- row7 -->") {
    $('#section-err-panel-card-text').append('row7 is empty.' + indexRender.fail);
} else {
    $('#section-err-panel-card-text').append('row7 has content.' + indexRender.pass);
};
