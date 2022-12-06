const key = "8fb056b5e1aacc42a4a28516def83ddb";
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=page+1`;
const inputValue = document.querySelector("input");
//pass response array 
let dataArray = [];
const getResponse = async ()=>{
    const res = await fetch(searchUrl);
    dataArray = await res.json();
    console.log(dataArray.results);
    for(let i = 0; i < dataArray.results.length; i++)console.log(dataArray.results[i].original_title);
};
getResponse();

//# sourceMappingURL=index.816e7b21.js.map
