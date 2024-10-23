async function searchMovies(e){
    try {
        let filmBody = document.getElementById("filmBody");
        
        let searchmovie = document.getElementById("search-input").value;
        console.log(searchmovie);
        
        
        
        let film = await fetch(`https://www.omdbapi.com/?s=${searchmovie}&apikey=13888bcb`);
        film = await film.json();
        film= await film.Search
        filmBody.innerHTML="";
        
        if(film===undefined && !filmBody.innerHTML){
          filmBody.innerHTML="<h1 style=color:red>Movie not found!!!</h1> ";
        }
        
        console.log(film);
        if (film) {
          // let movielist = Object.values(film.Search);
          // console.log(movielist);
          
          
          film.map(({ Year, Title, Poster }) => {
            
            // let filmBody = document.getElementById("filmBody");

            let movie = document.createElement("div");
            let imgDiv = document.createElement("div");
            let movieDescription= document.createElement("div")
            let movieTitle = document.createElement("div");
            let year = document.createElement("div")

            movie.className = "movie";
            imgDiv.className = "img";
            movieTitle.className = "movieTitle";
            year.className = "rYear";

            let img = document.createElement("img");
            // img.src = Poster;
            if(Poster==="N/A")
              {
                img.src="data:image/png;base64,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"
              } 
            else{
              img.src= Poster
            }

            movieTitle.innerHTML = `<h2>${Title}</h2>`;
            year.innerHTML = `<h4>${Year}</h4>`;

            imgDiv.append(img);
            movieDescription.append(movieTitle, year);
            movie.append(imgDiv, movieDescription);
          
            filmBody.prepend(movie);
        });
      }
    }
    catch (err) 
    {
        console.log(err.message);
    }
}
// searchMovies()