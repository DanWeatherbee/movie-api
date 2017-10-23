API.prototype.renderNutritionRestMenu = function(
    name,
    calories,
    score,
    formmatedHeader,
    formmatedContent,
    convertText,
    convertedTextName
) {
    var self = this;
    console.log(this.callType);
    console.log(this.responseArray);
    $('#section-aside-menu').fadeOut();
    if (this.responseArray[0].hits === undefined) {
        return;
    } else {
        dom.$err.hide();


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

                self.convertText = self.name.replace(/\s/g, "-");
                self.convertedTextName = self.convertText.toLowerCase();


            self.calories = item.fields.nf_calories;
            self.score = item._score;
            self.formmatedContent = '<section class="row text-left border-10 shadow overview-padding" id="' +
            self.convertedTextName +
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

            self.buttonsAsideMenu = '<a href="#' +
                self.convertedTextName +
                '" class="btn btn-outline-success" id="aside-menu-btn-' +
                self.convertedTextName +
                '">' +
                self.name +
                '</a>';

            dom.$asideMenu.append(self.buttonsAsideMenu);
            dom.$content.append(self.formmatedContent);
        });

        dom.$asideMenu.prepend('<a href="#root" class="btn btn-outline-info">Top</a>');
    };
};