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
    self.content = $('.content');
    self.content.html('');
    self.content.append('<div class="container" id="movie-container"></div>');
    self.card = $('#movie-container');
    if (this.responseArray[0].hits === undefined) {
        return;
    } else {
        self.card.append('<h3>' + this.responseArray[0].hits[0].fields.brand_name + '</h3>');
        this.responseArray[0].hits.forEach(function(item) {
            self.name = item.fields.item_name;
            self.calories = item.fields.nf_calories;
            self.score = item._score;
            self.card.append('<span>' +
                self.name +
                ' - Calories: ' +
                self.calories +
                ' - Score: ' +
                self.score +
                '</span><hr />');
        })
    };
};