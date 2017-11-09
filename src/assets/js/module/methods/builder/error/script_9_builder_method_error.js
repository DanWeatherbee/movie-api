//  Error checking
var i;
API.prototype.errChecking = function(check) {
    if (!check) {
        alert(varNameArray[i] + ' variable is not ' +
            check +
            ' on obj_builder.js, Layout Builder will not work!');
    }
};
var varify = new API();
var varNameArray = [
    "this.card",
    "this.row",
    "this.col",
    "this.nav",
    "this.carousel",
    "this.cardBody",
    "this.navBody",
    "this.carouselBody"
];
var varArray = [
    this.card,
    this.row,
    this.col,
    this.nav,
    this.carousel,
    this.cardBody,
    this.navBody,
    this.carouselBody
];
i = 0;
varArray.forEach(function(item) {
    varify.errChecking(item);
    i++;
});
var builder = new LAYOUT_BUILDER_OBJ(
    card,
    row,
    col,
    nav,
    carousel,
    cardBody,
    navBody,
    carouselBody
);
