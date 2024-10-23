async function movies(){
    try {
      let film = await fetch("https://www.omdbapi.com/?s=don&apikey=13888bcb");
      film = await film.json();
  
      console.log(film);
      if (film) {
        let movielist = Object.values(film.Search);
        console.log(movielist);
        let filmBody = document.getElementById("filmBody");
        filmBody.innerHTML="";

        movielist.map(({ Year, Title, Poster }) => {

            
            let movie = document.createElement("div");
            let imgDiv = document.createElement("div");
            // let movieDescription= document.createElement("div")
            let movieTitle = document.createElement("div");
            let year = document.createElement("div");

            movie.className = "movie";
            imgDiv.className = "img";
            movieTitle.className = "movieTitle";
            year.className = "rYear";

            let img = document.createElement("img");
            img.src = Poster;

            movieTitle.innerHTML = `<h2>${Title}</h2>`;
            year.innerHTML = `<h4>${Year}</h4>`;

            imgDiv.append(img);

            // movieDescription.append(movieTitle, year);

            movie.append(imgDiv, movieTitle , year);
            filmBody.append(movie);
        });
      }
    }
    catch (err) 
    {
        console.log(err.message);
    }
}
movies()


