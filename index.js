// https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast

const ratedmoviesElem = document.querySelector('.movies')

async function main() {
    const movies = await fetch( `https://www.omdbapi.com/?i=tt3896198&apikey=26015f09&s=fast`);
    const moviesData = await movies.json();
    console.log(moviesData)
    moviesData.Search.map((movies) => `<div class="movies">
    <div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="./assets/guardians of the galaxy.jpg" width="77%">
    </figure>
    <div class="movie__des">
        <div class="movie__title"></div>
        <h3 class="year"></h3>
        <a href="" class="omdb"></a>
    </div>
</div>
</div>`);
}

main();