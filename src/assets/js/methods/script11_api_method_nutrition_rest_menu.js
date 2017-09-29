API.prototype.renderNutritionRestMenu = function(responseArray, imgUrl) {
    const self = this;
    self.imgUrl = "";

    console.log(self.imgUrl);
    console.log(this.callType);
    console.log(this.responseArray);

    $('.content').html('');
    $('.content').append('<div class="container" id="movie-container"></div>');
    const card = $('#movie-container');

    $(card).append('<h2>Restaurant Menu</h2>');

    if (this.responseArray[0].hits === undefined) {
        return;
    } else {

        $(card).append('<h3>' + this.responseArray[0].hits[0].fields.brand_name + '</h3>');
        this.responseArray[0].hits.forEach(function(item) {


            // $(card).append('<img id="popular" src="' + self.imgUrl + item.backdrop_path + '">');
            // $(card).append('<br /><img id="popular" src="' + self.imgUrl + item.poster_path + '">');
            $(card).append('<br /><label>Item:</label><p>' + item.fields.item_name + '</p>');
            $(card).append('<br /><label>Calories:</label><p>' + item.fields.nf_calories + '</p>');
            $(card).append('<br /><label>Serving:</label><p>' + item.fields.nf_serving_size_qty + '</p>');
            $(card).append('<br /><label>Score:</label><p>' + item._score + '</p>');
            $(card).append('<br /><label>ID:</label><p>' + item._id + '</p>');
            $(card).append('<hr>');
            console.log(self.imgUrl);
        })


    };




};