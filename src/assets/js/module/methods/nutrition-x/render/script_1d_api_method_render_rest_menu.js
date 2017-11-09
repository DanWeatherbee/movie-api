API.prototype.renderNutritionRestMenu = function(
    name,
    calories,
    score,
    formmatedHeader,
    formmatedContent,
    linkId
) {
    var self = this;
    dom.$loader.fadeIn();
    self.linkId = 1;
    dom.$sectionAsideMenu.fadeOut();
    if (this.responseArray[0].hits === undefined) {
        return;
    } else {
        dom.$err.hide();
        dom.$content.html('');
        dom.$sectionAsideMenu.fadeIn();
        dom.$asideControler.fadeIn();
        dom.$asideMenu.html('');

        self.formmatedHeader = '<div class="row text-left">' +
            '<div class="col-sm-12">' +
            '<h3>' +
            this.responseArray[0].hits[0].fields.brand_name + ' menu: ' +
            '</h3>' +
            '</div>' +
            '</div>';
        dom.$content.append(self.formmatedHeader);
        this.responseArray[0].hits.forEach(function(item) {
            self.name = item.fields.item_name;
            self.calories = item.fields.nf_calories;
            self.score = item._score;
            self.formmatedContent = '<section class="row text-left border-10 shadow overview-padding" id="' +
                'aside-' + self.linkId +
                '">' +
                '<div class="col-sm-4 blue border black-background overview-padding">' +
                '<h4>' +
                self.name +
                '</h4>' +
                '</div>' +
                '<div class="col-sm-4 red border black-background overview-padding">' +
                '<h4>' +
                'Calories: ' +
                self.calories +
                '</h4>' +
                '</div>' +
                '<div class="col-sm-4 green border black-background overview-padding">' +
                '<h4>' +
                'Score: ' +
                self.score +
                '</h4>' +
                '</div>';


            // aside menu for movies and fm.

            self.buttonsAsideMenu = '<a href="#aside-' +
                self.linkId +
                '" class="btn btn-outline-success" id="btn-aside-' +
                self.linkId + '">' +
                self.name +
                '</a>';
                self.linkId++
            dom.$asideMenu.append(self.buttonsAsideMenu);
            dom.$content.append(self.formmatedContent);
        });

        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
};
var dom = new DOM_OBJ_ELEM();
// Allow enter key vrs btn to call the API.
dom.$restMenuSearch.on("keypress", function(e) {
    dom.$goRest.fadeIn();
});
dom.$loader.fadeOut();
