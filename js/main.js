const phoneSearch = () =>{
    const searchInput = document.getElementById("search-input");
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(result => displayData(result.data))
    
}
const displayData = datas =>{
    
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = '';
    document.getElementById("main-result").style.display ="block";
    for(const data of datas){
        const div = document.createElement("div");
        console.log(datas);
        div.classList.add('col')
        div.innerHTML =`
        <div class="card h-100 card-style">
            <img src="${data.image}" height="350px" width="10px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${data.brand}</h5>
                <p class="card-text">Phone: ${data.phone_name}</p>
                <button onclick="ShowDetails(${data.slug})" class="btn button-style" type="button">Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    }
}

const ShowDetails = details =>{
    console.log(details);
}