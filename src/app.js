const key = '8fb056b5e1aacc42a4a28516def83ddb';
const searchUrl= `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=page+1`;
const inputValue = document.querySelector("input")
let movieContainer = document.querySelector(".movie_container")
//pass response array 
let dataArray =[];

const getResponse=()=>{
   fetch(searchUrl)
   .then(res =>{
      if(!res.ok){
            throw Error("Error")
      }
      return res.json()
   })
   .then(data=>{
      console.log(data.results)

      const html = data.results.map(movies =>{
            return ` <div class="flex flex-col justify-center align-center columns-2 w-1/3 text-center p-4">
            <h2 class="movie_title text-2xl font-bold pb-4">${movies.original_title}</h2>
            <img src="https://image.tmdb.org/t/p/original/${movies.poster_path}" alt="Movie poster" class="mx-auto w-1/3 "/>
                  <span class="overview-text">${movies.overview}</span>
            </div>
                  `

      }).join("")
      console.log(html)
      document.querySelector("#movie_container").insertAdjacentHTML("afterbegin", html)
   })
}


getResponse()