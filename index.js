function getAPIdata() {

	
	fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d4e6e882a9c64e119a257def3a0300fe')
	// get recent bbc news
	// key: 02ea4633-c2cc-4e71-9e5c-7183d99e6d7c
	
	.then(function(response) {
		return response.json();
	})
	// parse to JSON format
	// render weather per day
	.then(function(response) {
		//console.log(response.articles[0].title);

		for(var i = 0; i < response.articles.length; i ++){
			//console.log(response.articles[i]);
			document.getElementById('news').innerHTML +=
				'<div class="news-article">'+
					'<h2><a href="'+ response.articles[i].url +'">'+ response.articles[i].title + '</a></h2></br>'+
					'<p>'+ response.articles[i].description + '<p>' +'</br>'+ 

					'<img src=" '+ response.articles[i].urlToImage+ '"> '+

				'</div>';
		}
	})
}

// init data stream
getAPIdata();


//https://newsapi.org/s/bbc-news-api
function getAPI() {

	
	fetch('https://www.food2fork.com/api/search?key=525d68dc8a95f5c6d63c12ea3ad7d7cc&q=chicken%20breast&page=2')
	//get food recipe
	//key: 525d68dc8a95f5c6d63c12ea3ad7d7cc
	
	.then(function(response) {
		return response.json();
	})
	// parse to JSON format
	// render weather per day
	.then(function(response) {
		console.log(response);

		for(var i = 0; i < 9; i ++){
			console.log(response.recipes[i]);
			
			document.getElementById('recipe').innerHTML +=
				'<div class="food-article">'+
					'<h2><a href="'+ response.recipes[i].f2f_url +'">'+ response.recipes[i].title + '</a></h2></br>'+
					'<p>Published by:</p>' + '<p>' +response.recipes[i].publisher + '<p>'+'</br>'+ 

					'<img src=" '+ response.recipes[i].image_url+ '"> '+

				'</div>';
		}
	})
}

// init data stream
getAPI();