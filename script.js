/*Sign up for an OMDb API key at http://www.omdbapi.com.
Write an arrow function called getMoviesByName that takes a string as input and uses fetch and async/await to get an array of movies with a matching title from OMDb API.
Write another arrow function called getMovieDetailsById that takes a valid OMDb movie id as input and uses fetch and async/await to get an object of detailed information about the specified movie.*/

const getMovies = async () => {
    let movieTitle = document.querySelector('input').value;
console.log(movieTitle)
const URL =`http://www.omdbapi.com/?t=${movieTitle}&apikey=10afb4be`;

  const result = await fetch(URL);
  const json = await result.json();
  const title = json.Title;
  const director = json.Director;
  const year = json.Year;
  const plot = json.Plot;
  let posterBox = document.getElementById('poster');
  const img = document.createElement('img');
  img.style.height = '20rem';
  img.style.width = '15rem'
  img.src = json.Poster;
  posterBox.append(img);
  let info = document.getElementById('info');
  info.innerHTML = `Directed by:${director} /  Released:${year} `
  let plotInfo = document.getElementById('plot');
  plotInfo.innerHTML = `${plot}`;
  let resetBtn = document.getElementById('sub');
  resetBtn.innerHTML = ' New Movie';
  resetBtn.addEventListener('click', ()=> {
   window.location.reload()
  })
};












//api key
// 10afb4be