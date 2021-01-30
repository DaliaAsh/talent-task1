function searchMovies() {
  let searchQuery = $("#search-input").val();
  console.log(searchQuery);
  if (searchQuery === "") {
    loadInitialMovies();
    return;
  }
  $.get(
    `https://www.omdbapi.com/?s=${searchQuery}&apikey=798c6fd`,
    function (data, status) {
      if (data.Response === "False") {
        showErrorMessage();
        return;
      }
      let filteredMovies = jQuery.map(data.Search, function (item) {
        return ` <div class="w-10/12 md:w-3/12 h-3/12 bg-white mr-8 mb-8 transform hover:scale-110 transition-transform cursor-pointer" id=${item.imdbID}>
        <img src="${item.Poster}" width="100%" height="60%" />
        <div class="text-center text-2xl font-mono font-bold">${item.Title}<br/><span class="text-red-600"> ${item.Year}</span></div>
      </div>`;
      });
      $("#movies-container").html(filteredMovies);
    }
  );
}
