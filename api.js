// display show hide
const showHideSearchResult = displayStyle => {
    document.getElementById('block').style.display = displayStyle;
}

const showHideSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}


const searchPhone = () => {
    const searchText = document.getElementById('search-field').value;
    showHideSpinner('block');
    showHideSearchResult('none');
    loadPhone(searchText);
    document.getElementById('search-field').value = '';

}



const loadPhone = searchPhone => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}

loadPhone();


// display Phone
const displayPhone = phones => {
    // console.log(phones.data);
    const container = document.getElementById('phones');
    // console.log(container);
    const phone = phones;
    // console.log(phone);
    container.textContent = '';


    phone.forEach(phone2 => {
        const div = document.createElement('div');
        div.innerHTML = `
        
        <h5> Brand : ${phone2.brand}</h5>
        <p> Name :  ${phone2.phone_name}</p>
        <p> Id :  ${phone2.slug}</p>
        
        <img src="${phone2.image}" class="card-img-top" alt="...">
        <br>
        <button onclick="phoneIdLoad('${phone2.slug}')">Details</button>
        
        `;

        container.appendChild(div);

    });
    showHideSpinner('none');
    showHideSearchResult('block');
}





// Phone Id
const phoneIdLoad = id => {

    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => phoneDetails(data.data));
}

const phoneDetails = phoneId => {
    console.log(phoneId.mainFeatures);
    const phoneDiv = document.getElementById('phoneId');
    phoneDiv.innerHTML = `
    <div class="card-body">
    <img src="${phoneId.image}" class="card-img-top" alt="...">
    <h5>Slug : ${phoneId.slug}</h5>
    <p>ReleaseDate : ${phoneId.mainFeatures.releaseDate}</p>
    <p>Storage : ${phoneId.mainFeatures.storage}</p>
    <p> DisplaySize : ${phoneId.mainFeatures.displaySize} </p>
    <p> Memory : ${phoneId.mainFeatures.memory} </p>
    <p> ChipSet : ${phoneId.mainFeatures.chipSet} </p>
    
        
    `
}


