//function giphyURLWithSearchTerm(searchTerm) {
    //var url = "https://api.soundcloud.com/tracks?q=beyonce&client_id=513158665";
 //   var url = "https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344";
  //  console.log("The url is: " + url);
  //  return url;
//}

//function displayTitle(title) {
//    $("#result").html("<h1>" + title + "</h1>");
//}

//function callGiphyAPIWithSearchTerm(searchTerm) {
  //  var apiUrl = giphyURLWithSearchTerm(searchTerm);
    
 //   $.ajax({
  //    url: apiUrl,
  //    method: "GET",
  //    success: function(response) {
  //        console.log(response);
   //       var title = response[0].title;
  //        //var imageUrl = response.data[0].images.original.url;
  //        console.log("The song title is: " + title);
  //        displayTitle(title);
   //   },
   // }); 
//}

$(document).ready(function() {
    $("#search").click(function() {
        console.log("Search Button clicked");
        var search= $("#search-term").val();
        callGiphyAPIWithSearchTerm(search);
    });
});


// /*global $*/
  
 $(document).ready(function() {
     var counter = 0;
     var currentInput = '';
     function fetchGiphy(i) {
         $.ajax({
             url: "https://api.soundcloud.com/tracks?q=" + i + "&client_id=5aa8e389ba4e24b6106af5159ab3e344",
             method: "GET",
            success: function(response) {
                //Log the orignal image to the console    
                 var image = response[0].artwork_url;
                 var title = response[0].title;
                 var duration = response[0].duration;
                
                 var image2 = response[1].artwork_url;
                 var title2 = response[1].title;
                 var duration2 = response[1].duration;
             console.log(response);
                 //Log the url from the orignial gif to the console  
                 $('#album_cover').html('<img src=' + image + '>');
                 $('#title').html(title);
                 $('#duration').html(millisToMinutesAndSeconds(duration));
                
                 $('#album_cover2').html('<img src=' + image2 + '>');
                 console.log(image2);
                 $('#title2').html(title2);
                 $('#duration2').html(millisToMinutesAndSeconds(duration2));
                 ////// TURN THIS INTO  A FOR LOOP ONLY UPTO 4 SPACES ADDD PICS FOR THE GENRES 
              for (var i = 0; i < response.Search.length; i++) {
					if (response.Search[i].Poster !== "N/A") {
						$('.result').append(
							'<img data-toggle="modal" data-target="#modal-' + i + '" class="col-md-3 songs" src=' + response.Search[i].Poster + '>'
						);
						console.log("The amount of Songs being displayed to the screen: " + response.Search.length);
						console.log("The total amount of possible Songs " + response.Search[1].totalResults);
					}
				}
                 // $('#gif').html('<img src=' + image + '>');
                 //adding info from gif to urls
             },
         });
     }
     $("#searchButton").click(function() {
        var input = $("#searchInput").val();
        fetchGiphy(input);
     });
 });

 function millisToMinutesAndSeconds(millis) {
   var minutes = Math.floor(millis / 60000);
   var seconds = ((millis % 60000) / 1000).toFixed(0);
   return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
 }