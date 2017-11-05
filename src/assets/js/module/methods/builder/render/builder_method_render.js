var fadeFactor500 = 500;

LAYOUT_BUILDER_OBJ.prototype.createCard = function() {
    dom.$loader.fadeIn();
    dom.$content.html('');
    dom.$sectionAsideMenu.fadeOut();
    dom.$layoutBuilderContent.append(this.card);
    dom.$codeBox.html(this.card);
    dom.$btnCardCreate.fadeOut(fadeFactor500);
    dom.$btnRowCreate.fadeIn(fadeFactor500);
    dom.$sectionErrPanel.fadeIn(fadeFactor500);
    dom.$sectionErrPanelCardText.prepend(
        '<h4>Create Card Method </h4>' +
        indexRender.pass
    );
    dom.$loader.fadeOut();
};

LAYOUT_BUILDER_OBJ.prototype.createRow = function() {
    var dom = new DOM_OBJ_ELEM();
    dom.$loader.fadeIn();
    dom.$sectionCardDemo.append(this.row);
    dom.$codeBox.html(this.row);
    dom.$btnRowCreate.fadeOut(fadeFactor500);
    dom.$btnColCreate.fadeIn(fadeFactor500);
    dom.$sectionErrPanel.fadeIn(fadeFactor500);
    dom.$sectionErrPanelCardText.prepend(
        '<h4>Create Row Method </h4>' +
        indexRender.pass
    );
    dom.$loader.fadeOut();
};

LAYOUT_BUILDER_OBJ.prototype.createCol = function() {
    var dom = new DOM_OBJ_ELEM();
    dom.$loader.fadeIn();
    dom.$cardDemoRow1.append(this.col);
    dom.$codeBox.html(this.col);
    dom.$btnColCreate.fadeOut(fadeFactor500);
    dom.$btnNavbarCreate.fadeIn(fadeFactor500);
    dom.$sectionErrPanel.fadeIn(fadeFactor500);
    dom.$sectionErrPanelCardText.prepend(
        '<h4>Create Col Method </h4>' +
        indexRender.pass
    );
    dom.$loader.fadeOut();
};

LAYOUT_BUILDER_OBJ.prototype.createNav = function() {
    var dom = new DOM_OBJ_ELEM();
    dom.$loader.fadeIn();
    dom.$codeBox.html(this.nav);
    dom.$sectionCardDemo.prepend(this.nav);
    dom.$body.prepend(this.navBody);
    dom.$btnNavbarCreate.fadeOut(fadeFactor500);
    dom.$btnCarouselCreate.fadeIn(fadeFactor500);
    dom.$sectionErrPanel.fadeIn(fadeFactor500);
    dom.$sectionErrPanelCardText.prepend(
        '<h4>Create Nav Method </h4>' +
        indexRender.pass
    );
    dom.$loader.fadeOut();
};

LAYOUT_BUILDER_OBJ.prototype.createCarousel = function() {
    var dom = new DOM_OBJ_ELEM();
    dom.$loader.fadeIn();
    dom.$sectionCardDemo.prepend(this.carousel);
    dom.$body.prepend(this.carouselBody);
    dom.$codeBox.html(this.carousel);
    dom.$btnCarouselCreate.fadeOut(fadeFactor500);
    dom.$sectionErrPanel.fadeIn(fadeFactor500);
    dom.$sectionErrPanelCardText.prepend(
        '<h4>Create Carousel Method </h4>' +
        indexRender.pass
    );
    dom.$loader.fadeOut();
};