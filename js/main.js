const phoneSearch = () =>{
    const searchInput = document.getElementById("search-input");
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;
    // console.log(url);
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
        // console.log(datas);
        div.classList.add('col')
        div.innerHTML =`
        <div class="card h-100 card-style">
            <img src="${data.image}" height="350px" width="10px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${data.brand}</h5>
                <p class="card-text">Phone: ${data.phone_name}</p>
                <button onclick="ShowDetails('${data.slug}')" class="btn button-style" type="button">Details</button>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    }
}

const ShowDetails = details =>{
    // console.log(details);
    // document.getElementById("details-section").innerHTML ='';
    const url = `https://openapi.programming-hero.com/api/phone/${details}`
    fetch(url)
    .then(response => response.json())
    .then(result => displayDetails(result.data))
}

const displayDetails = phoneDetails =>{
    // console.log(phoneDetails)
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.textContent ='';
    
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('g-0');
    div.innerHTML = `
    <div class="col-md-4">
    <img src="${phoneDetails.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
        <h5 class="card-title">Name: ${phoneDetails.name}</h5>
        <p class="card-text ms-8"><small>ReleaseDate: ${phoneDetails.releaseDate}</small></p>
        <p class="card-text mt-0">Brand: ${phoneDetails.brand}</p>
        <h6>Main Features: </h6>
        <p class="card-text mt-0">Storage: ${phoneDetails.mainFeatures.storage}</p>
        <p class="card-text mt-0">DisplaySize: ${phoneDetails.mainFeatures.displaySize}</p>
        <p class="card-text mt-0">Memory: ${phoneDetails.mainFeatures.memory}</p>
        <h6>Others: </h6>
        <p class="card-text mt-0">Wlan: ${phoneDetails.others.WLAN}</p>
    </div>
    </div>
    `;
    document.getElementById("heading-details").style.display = 'block';
    detailsContainer.appendChild(div);
    
}