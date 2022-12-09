// https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast


const ratedmoviesElem = document.querySelector('.movies')

async function main(movie) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast`);
    const moviesData = await movies.json();
    console.log(moviesData)
    ratedmoviesElem.innerHTML = moviesData.Search.slice(0,6).map(
        (movie) =>                      `
        <div class="movie__container">
        <div class="movie__wrapper">
            <div class="movies">
                <img class="poster" img src="${movie.Poster}">
                <div class="movie__des">
                    <h3 class="movie__header"></h3>
                    <h5 class="year"></h5>
                </div>
            </div>
        </div>
    </div>`).join("");
}

main();