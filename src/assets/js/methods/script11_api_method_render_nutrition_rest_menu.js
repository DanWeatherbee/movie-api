API.prototype.renderNutritionRestMenu = function(
    responseArray,
    content,
    card,
    name,
    calories,
    score
) {
    var self = this;
    console.log(this.callType);
    console.log(this.responseArray);
    self.content = $('#content');
    self.content.html('');
    self.content.append('<div id="movie-container"></div>');
    self.card = $('#movie-container');
    if (this.responseArray[0].hits === undefined) {
        return;
    } else {
        $('#error-msg').hide();
        self.card.append(
            '<div class="row text-left">' +
            '<div class="col-sm-12">' +
            '<h3>' +
            this.responseArray[0].hits[0].fields.brand_name +
            '</h3>' +
            '</div>' +
            '</div>'
        );
        this.responseArray[0].hits.forEach(function(item) {
            self.name = item.fields.item_name;
            self.calories = item.fields.nf_calories;
            self.score = item._score;

            self.card.append(
                '<div class="row text-left border shadow overview-padding">' +
                '<div class="col-sm-4 blue">' +
                self.name +
                '</div>' +
                '<div class="col-sm-4 red">' +
                'Calories: ' +
                self.calories +
                '</div>' +
                '<div class="col-sm-4 green">' +
                'Score: ' +
                self.score +
                '</div>'
            );
        });

    };
};