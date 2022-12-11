// https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast


const ratedmoviesElem = document.querySelector('.movie-list')

async function main(movie) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast`);
    const moviesData = await movies.json();
    console.log(moviesData)
    ratedmoviesElem.innerHTML = moviesData.Search.slice(0,6).map((movie) =>  movieHTML(movie)).join("");
}

main();

function movieHTML(movie) {
    return   `<div class="movie-list">
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

