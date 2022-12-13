// https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=movie

const ratedmoviesElem = document.querySelector(".movie-list");
const searchBar = document.querySelector(".homepage__keyword--input");
const searchButton = document.querySelector(".homepage__button--absolute");

async function main(movie) {
  const movies = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=${movie}`
  );
  const moviesData = await movies.json();
  console.log(moviesData);
  ratedmoviesElem.innerHTML = moviesData.Search.slice(0, 6)
    .map((movie) => movieHTML(movie))
    .join("");
}

main(localStorage.getItem("searchBarValue") || "");
localStorage.removeItem("searchBarValue");

function movieHTML(movie) {
  return `<div class="movie-list">
    <div class="movie-card">
        <div class="user-card__container">
            <figure>
                <img src="${movie.Poster}">
                <h3 class="">${movie.Title}</h3>
                <h4 class="year">${movie.Year}</h4>
            </figure>
        </div>
    </div>
</div>`;
}

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    main(searchBar.value);

    if (!window.location.href.includes("movie__page.html")) {
      localStorage.setItem("searchBarValue", searchBar.value);
      window.location.href += "/movie__page.html";
    }
  }
});

searchButton.addEventListener("click", (e) => {
  main(searchBar.value);
});