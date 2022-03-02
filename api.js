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
        .then(data => displayPhone(data));
}

loadPhone();


// display Phone
const displayPhone = phones => {
    // console.log(phones.data);
    const container = document.getElementById('phones');
    // console.log(container);
    const phone = phones.data;
    // console.log(phone);
    container.textContent = '';


    phone.forEach(phone2 => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="phoneIdLoad(${phone2.slug})" class="card h-100">
        
        <h5> Brand : ${phone2.brand}</h5>
        <p> Name :  ${phone2.phone_name}</p>
        <p> Id :  ${phone2.slug}</p>
        
        <img src="${phone2.image}" class="card-img-top" alt="...">
        <br>
        <button class = " mx-4 my-4">Details</button>
         </div>
        `;

        container.appendChild(div);

    });
    showHideSpinner('none');
    showHideSearchResult('block');
}





// Phone Id
const phoneIdLoad = slug => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.data));
}

phoneIdLoad();

const displayMealDetail = phone2 => {

    const container = document.getElementById('phoneId');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
                <div class="card-body">
                <h5 class="card-title">${phone2.slug}</h5>
                    `;
    container.appendChild(div);
}