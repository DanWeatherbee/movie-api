API.prototype.renderPopular = function(
    responseArray,
    imgUrl,
    card,
    formattedHTMLName,
    formattedHTMLPoster,
    formattedHTMLOverview,
    formattedHTMLVotes,
    formattedHTMLContainer,
    content
) {
    console.log(this.callType);
    console.log(this.responseArray);
    var self = this;
    self.imgUrl = "https://image.tmdb.org/t/p/w500";
    self.formattedHTMLContainer = '<div class="container" id="movie-container"></div>';
    self.content = $('.content');
    self.content.html('');
    self.content.append(self.formattedHTMLContainer);
    self.card = $('#movie-container');
    self.card.append('<h2>Popular Movies</h2>');
    if (this.responseArray[0].results === undefined) {
        return;
    } else {
        this.responseArray[0].results.forEach(function(item) {
            self.formattedHTMLName = '<h3>' + item.title + '</h3>';
            self.formattedHTMLPoster = '<div id="poster-container"><img id="popular-lg" src="' +
                self.imgUrl +
                item.poster_path +
                '">';
            self.formattedHTMLOverview = '<p id="item-overview">' + item.overview + '</p></div>';
            self.formattedHTMLVotes = '<div id="votes"><span>Votes: ' +
                item.vote_count + ' | Vote Average: ' +
                item.vote_average +
                '% | Air Date: ' +
                item.release_date +
                '</span></div>';
            self.card.append(self.formattedHTMLName +
                self.formattedHTMLPoster +
                self.formattedHTMLOverview +
                self.formattedHTMLVotes);
        })
    };
};