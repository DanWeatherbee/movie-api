Movie reducer using async functions  PREFAB for React

Methods.
https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

2. Query For Details

With the item above in hand, you can see the id of the movie is 343611. You can use that id to query the movie details method:

https://api.themoviedb.org/3/movie/343611?api_key={api_key}

This will return all of the main movie details as outlined in the movie details documentation.
 I would also suggest taking a read through the append to response document as it outlines
  how you can make multiple sub requests in one. For example, with videos:

https://api.themoviedb.org/3/movie/343611?api_key={api_key}&append_to_response=videos

Popular TV.
https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1

Latest TV
https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US

Videos
https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US
Discover API Examples

Our discover methods can be very powerful tools when you're looking for specific data. Below are some examples to showcase some of the powerful things you can do.

What movies are in theatres?

URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

What are the most popular movies?

URL: /discover/movie?sort_by=popularity.desc

What are the highest rated movies rated R?

URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&

What are the most popular kids movies?

URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&

What is are the best movies from 2010?

URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc&

What are the best dramas that were released this year?

URL: /discover/movie?with_genres=18&primary_release_year=2014&

What are the highest rated science fiction movies that Tom Cruise has been in?

URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&

What are the Will Ferrell's highest grossing comedies?

URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&

Have Brad Pitt and Edward Norton ever been in a movie together?

URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc&

Has David Fincher ever worked with Rooney Mara?

URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc&

What are the best drama's?

URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&

What are Liam Neeson's highest grossing rated 'R' movies?

URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&



Query syntax
Queries to the openFDA API are made up of parameters joined by an ampersand &. Each parameter is followed by an equals sign = and an argument.

Searches have a special syntax: search=field:term. Note that there is only one equals sign = and there is a colon : between the field to search, and the term to search for.

Here are a few syntax patterns that may help if you’re new to this API.

search=field:term: Search within a specific field for a term.

search=field:term+AND+field:term: Search for records that match both terms.

search=field:term+field:term: Search for records that match either of two terms.

search=field:term&count=another_field: Search for matching records. Then within that set of records, count the number of times that the unique values of a field appear. Instead of looking at individual records, you can use the count parameter to count how often certain terms (like drug names 

e.g. https://api.fda.gov/drug/event.json?search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1


