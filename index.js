// https://www.omdbapi.com/?i=tt3896198&apikey=26015f09

const ratedmoviesElem = document.querySelector('.movies')

async function main(movie) {
    const users = await fetch( `https://www.omdbapi.com/?i=tt3896198&apikey=${movie}`);
    const moviesData = await movie.json();
    console.log(usersData);

    ratedmoviesElem.innerHTML = moviesData.map(
        (movie) => 
        
    )
}