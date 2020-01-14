fetch('https://restcountries.eu/rest/v2/all')
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
    
    const nations = document.querySelector('#nations');
    for (let i in data) {
      let content = ` <a href="country.html">
                      <img src="${data[i].flag}" alt="">
                      <p class="name">${data[i].name}</p>
                    </a>`;
      nations.insertAdjacentHTML('beforeend', content);
      
      console.log(document.getElementById('nations').childNodes.values);
    }

    var searchBar = document.getElementById('searchBar');
    console.log(searchBar);
    const searchButton = document.getElementById('searchButton');
    console.log(searchButton);
    searchButton.addEventListener('click', () => {
      console.log(data[0].name);
      let nameCountry = searchBar.value;
      console.log(nameCountry);
      let hasCountry = false;
      let searchCountryArray = [];
      for (let i in data) {
        if (data[i].name.startsWith(nameCountry)) {
          searchCountryArray.push(data[i]);
          hasCountry = true;

        }
      }
      console.log(searchCountryArray);
      if (hasCountry == false) {
        alert('Not founnd!');
      } else {
        nations.innerHTML = '';
        for (i in searchCountryArray) {
          let content = ` <a href="country.html">
            <img src="${searchCountryArray[i].flag}" alt="">
            <p class="name">${searchCountryArray[i].name}</p>
            </a>`;

          nations.insertAdjacentHTML('beforeend', content);
          // searchBAr entered
       
        }
      }
    }
    )
  })
