

LAYOUT_BUILDER_OBJ.prototype.createCard = function() {
    dom.$content.html('');
    dom.$sectionAsideMenu.fadeOut();
    $('#layout-builder-content').append(this.card);
    $('#code-box').html(this.card);
    $('#btn-card-create').hide();
    $('#btn-row-create').show();
    console.log('create card is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createRow = function() {
    $('#section-card-demo').append(this.row);
    $('#code-box').html(this.row);
    $('#btn-row-create').hide();
    $('#btn-col-create').show();
    console.log('create row is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createCol = function() {
    $('#card-demo-row1').append(this.col);
    $('#code-box').html(this.col);
    $('#btn-col-create').hide();
    $('#btn-navbar-create').show();
    console.log('create col is working.');
};

LAYOUT_BUILDER_OBJ.prototype.createNav = function() {
    console.log('create nav is working.');
    $('#code-box').html(this.nav);
    $('#section-card-demo').prepend(this.nav);
    dom.$body.prepend(this.navBody);
    $('#btn-navbar-create').hide();
    $('#btn-carousel-create').show();
};

LAYOUT_BUILDER_OBJ.prototype.createCarousel = function() {
    console.log('create carousel is working.');
    $('#section-card-demo').prepend(this.carousel);
    dom.$body.prepend(this.carouselBody);
    $('#code-box').html(this.carousel);
    $('#btn-carousel-create').hide();
};
