function loadInitialMovies() {
  $.get(
    "http://www.omdbapi.com/?s=horror&apikey=798c6fd",
    function (data, status) {
      console.log(data.Search[0]);
      let filteredMovies = jQuery.map(data.Search, function (item) {
        return ` <div class="w-10/12 md:w-3/12 h-3/12 bg-white mr-8 mb-8 transform hover:scale-110 transition-transform cursor-pointer" id=${item.imdbID}>
        <img src="${item.Poster}" width="100%" height="60%"/>
        <div class="text-center text-2xl font-mono font-bold">${item.Title}<br/><span class="text-red-600"> ${item.Year}</span></div>
      </div>`;
      });
      $("#movies-container").html(filteredMovies);
    }
  );
}
