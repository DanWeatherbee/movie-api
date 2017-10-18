API.prototype.renderNutritionRestMenu = function(
    name,
    calories,
    score,
    formmatedHeader,
    formmatedContent
) {
    var self = this;
    console.log(this.callType);
    console.log(this.responseArray);
    dom.$content = $('#content');
    if (this.responseArray[0].hits === undefined) {
        return;
    } else {
        $('#error-msg').hide();
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
            self.formmatedContent = '<div class="row text-left border-10 shadow overview-padding">' +
                '<div class="col-sm-4 blue border">' +
                self.name +
                '</div>' +
                '<div class="col-sm-4 red border">' +
                'Calories: ' +
                self.calories +
                '</div>' +
                '<div class="col-sm-4 green border">' +
                'Score: ' +
                self.score +
                '</div>';
            dom.$content.append(self.formmatedContent);
        });
    };
};