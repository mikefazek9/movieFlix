const key = '8fb056b5e1aacc42a4a28516def83ddb';
const searchUrl= `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=page+1`;
const inputValue = document.querySelector("input")

//pass response array 
let dataArray =[];

const getResponse= async ()=>{
   const res = await fetch(searchUrl);
      dataArray = await res.json();
      

      
            Object.values(dataArray).forEach(data=>{
                  //create div for movies
                  let div = document.createElement('div')
                        div.className.add='movie_container';
                  //create titles and overview about movies
                  let h1= document.createElement('h1')
                  h1.className.add='movie-titles'
                  h1.textContent = data.original_title;

                  console.log(data) //returns 80 undefined rule

                  

            })
      }

 
getResponse();


