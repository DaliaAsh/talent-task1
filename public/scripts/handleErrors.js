function showErrorMessage() {
  $("#movies-container").html(
    `<h1 class="text-white text-4xl font-mono">Their is no matching movies!!</h1>`
  );
}
try {
  $(document).ready(function () {
    loadInitialMovies();
  });
} catch (err) {
  $("#movies-container").html(
    `<h1 class="text-4xl  text-red-600 font-mono">Network Error ,Please Check your connection!</h1>`
  );
}
