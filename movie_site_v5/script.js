//http://www.omdbapi.com/?i=tt3896198&apikey=6ad0be6f
//https://www.omdbapi.com/?apikey=6ad0be6f&s=fast

const container = document.querySelector('.movie__list');
// const paginationContainer = document.querySelector('.pagination-container'); 

// let movies = [];
// let currentPage = 1;
// const resultsPerPage = 6;

// // Event listener for form submission
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const query = form.querySelector('input').value;

//     endPointApi(query);
// });

// Fetch movies from API
async function searchMovies() {
    const title = document.querySelector('.search-input').value
    console.log(title);
    const req = await fetch(`https://www.omdbapi.com/?apikey=6ad0be6f&s=blue`);
    const movies = await req.json();
    const result = movies.Search
    console.log(result);
    container.innerHTML = result.map((item) => getMovies(item)).join("");   
  
}

searchMovies();

function getMovies(item){
    return `<div class="movie__wrapper">
            <h3 class="title">${item.Title}</h3>
            <img src="${item.Poster}" alt="">
            <h4>${item.Year}</h4>
            <h5>${item.Type}</h5>
          </div>`
}
// Render images for the current page
// function renderPage() {
//     container.innerHTML = ''; // Clear existing content

//     const startIndex = (currentPage - 1) * resultsPerPage;
//     const endIndex = startIndex + resultsPerPage;
//     const currentMovies = movies.slice(startIndex, endIndex);

//     for (let movie of currentMovies) {
//         if (movie.show.image) { // Check if image exists
//             const src = movie.show.image.medium;
//             const img = document.createElement('img');
//             img.src = src;

//             container.appendChild(img);
//         }
//     }

//     renderPagination();
// }

// Render pagination controls
// function renderPagination() {
//     paginationContainer.innerHTML = ''; // Clear existing pagination

//     const totalPages = Math.ceil(movies.length / resultsPerPage);

//     // Previous button
//     if (currentPage > 1) {
//         const prevButton = document.createElement('button');
//         prevButton.textContent = 'Previous';
//         prevButton.addEventListener('click', () => {
//             currentPage--;
//             renderPage();
//         });
//         paginationContainer.appendChild(prevButton);
//     }

//     // Next button
//     if (currentPage < totalPages) {
//         const nextButton = document.createElement('button');
//         nextButton.textContent = 'Next';
//         nextButton.addEventListener('click', () => {
//             currentPage++;
//             renderPage();
//         });
//         paginationContainer.appendChild(nextButton);
//     }
// }
