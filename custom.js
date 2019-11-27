let search = document.getElementById('searchText');
search.addEventListener('keypress', e=>{
    console.log(e);
let searchText = e.target.value;
getMovies(searchText); // calling getmovies function as callback function
});
function getMovies(searchText) {
    let api =`http://www.omdbapi.com/?s=${searchText}&apikey=10f9f9ad`;
    window
    .fetch(api)
    .then(data => {
        console.log(data); //  next step is converting response  into json object..
        //how to convert res obj into json objects
         let jsonData =data.json();
         //console.log(jsonData);
         jsonData
         .then(movie =>{
            //  //executing if  resolved then block..
            //  console.log(movie.Search);
            let movies = movie.Search;
            let output = '';
            for( let imdbMovie of movies){
                output +=`
                <h1>${imdbMovie.Title}</h1>
                <p>${imdbMovie.Year}</p>
                <p>${imdbMovie.imdbID}</p>
                <p>${imdbMovie.Type}</p>
                <img src="${imdbMovie.Poster}" />
                `;
                document.getElementById('template').innerHTML = output;
            }
         })
         .catch(err=>console.log(err)); // if rejects executing catch block
    })
    .catch( err => console.log(err)); // fetching data from omdb server..
}
    