function loadInitialMovies() {
  $.get(
    "http://www.omdbapi.com/?s=horror&apikey=798c6fd",
    function (data, status) {
      console.log(data.Search[0]);
      let filteredMovies = jQuery.map(data.Search, function (item) {
        return ` <div class="w-10/12 md:w-3/12 h-3/12 bg-white mr-8 mb-8 transform hover:scale-110 transition-transform cursor-pointer">
        <img src="${item.Poster}" width="100%" height="60%"/>
        <div class="text-center text-2xl font-sans font-bold">${item.Title}</div>
      </div>`;
      });
      document.getElementById("movies-container").innerHTML = filteredMovies;
      console.log(filteredMovies);
    }
  );
}
$(document).ready(loadInitialMovies);
