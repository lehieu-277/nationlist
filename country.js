fetch('https://restcountries.eu/rest/v2/all')
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
    const flag = document.getElementById("flag");
    var searchBar = document.getElementById('searchBar');
    document.getElementById("nations").addEventListener('click',()=>{
        var name= sea
     })
    })
