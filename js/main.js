const phoneSearch = () =>{
    const searchInput = document.getElementById("search-input");
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    document.getElementById("details-section").style.display = 'none';
    document.getElementById("heading-details").style.display = 'none';
    document.getElementById("details-container").style.display = 'none';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(result => displayData(result.data))
    
}
const displayData = datas =>{
    if(datas.length == 0){
        const searchResult = document.getElementById("search-result");
        searchResult.textContent = '';
        document.getElementById("mobile-design").textContent = '';
        document.getElementById("heading").style.display = 'none';
        document.getElementById("main-result").style.display ="none";
        document.getElementById("errors").style.display = 'block';

    }
    else if(datas.length < 16 && datas.length >0){
        const searchResult = document.getElementById("search-result");
        searchResult.textContent = '';
        document.getElementById("mobile-design").textContent = '';
        document.getElementById("heading").style.display = 'block';
        document.getElementById("errors").style.display = 'none';
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
    else{
        const searchResult = document.getElementById("search-result");
        searchResult.textContent = '';
        document.getElementById("mobile-design").textContent = '';
        document.getElementById("heading").style.display = 'block';
        document.getElementById("errors").style.display = 'none';
        document.getElementById("main-result").style.display ="block";
        const datam = datas.slice(0,15);
        for(const data of datam){
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
    console.log(phoneDetails)
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.textContent ='';
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('g-0');
    const release = 'No release date found'
    if(phoneDetails.releaseDate == ''){
        div.innerHTML = `
        <div class="col-md-4">
        <img src="${phoneDetails.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Name: ${phoneDetails.name}</h5>
            <p class="card-text ms-8"><small>ReleaseDate: ${release}</small></p>
            <p class="card-text mt-0">Brand: ${phoneDetails.brand}</p>
            <h6>Main Features: </h6>
            <p class="card-text mt-0">Storage: ${phoneDetails.mainFeatures.storage}</p>
            <p class="card-text mt-0">DisplaySize: ${phoneDetails.mainFeatures.displaySize}</p>
            <p class="card-text mt-0">Memory: ${phoneDetails.mainFeatures.memory}</p>
        </div>
        </div>
        `;
    }
    else{
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
        </div>
        </div>
        `;
    }
    document.getElementById("details-section").style.display ="block";
    document.getElementById("heading-details").style.display = 'block';
    document.getElementById("details-container").style.display = 'block';
    detailsContainer.appendChild(div);
    
}