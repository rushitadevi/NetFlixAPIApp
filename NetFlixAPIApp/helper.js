let username = 'user8';
let password = 'eAqd2ZPk3Rbtm8Mw';
let url = "https://strive-school-testing-apis.herokuapp.com/api/movies/";
let authString = `${username}:${password}`

let headers = new Headers({
    "Content-Type": "application/json",
});
headers.set('Authorization', 'Basic ' + btoa(authString))

submitMovieToserver=async movie =>{
    var response=await fetch(url,{method: 'POST', body:JSON.stringify(movie), headers: headers});     
     var jSon=await response.json();         
}

getAllCategories = async() => {
    
    var response = await fetch(url,{method: 'GET', headers: headers});
    return await response.json();
    
  };

  getMoviesByCategory = async category=>{
    var response = await fetch(url+category,{method: 'GET', headers: headers});
    return await response.json();
  }

  getMovieById =async id=>{
    var response = await fetch(url+id,{method: 'GET', headers: headers});
    return await response.json();
  }


//   submitProductToserver=async products => {
//       console.log(products);
//     var response=await fetch(url,{method: 'POST', body:JSON.stringify(products), headers: headers});     
//     var jSon=await response.json();         
//     }

//   updateProductToserver=async (products,id) => {
//     console.log(products);
//   var response=await fetch(url+id,{method: 'PUT', body:JSON.stringify(products), headers: headers});     
//   var jSon=await response.json();  
//   }