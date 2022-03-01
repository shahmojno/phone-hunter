// display show hide
const showHideSearchResult = displayStyle => {
    document.getElementById('block').style.display = displayStyle;
}

const showHideSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}





const loadPhone = searchPhone => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data));
}

loadPhone();


const searchPhone = () => {
    const searchText = document.getElementById('search-field').value;
    showHideSpinner('block');
    showHideSearchResult('none');
    loadPhone(searchText);
    document.getElementById('search-field').value = '';

}



const displayPhone = phones => {
    // console.log(phones.data);
    const container = document.getElementById('phones');
    const phone = phones.data;
    console.log(phone);
    container.textContent = '';
    // console.log(phone);
    phone.forEach(phone2 => {
        console.log(container);
        const div = document.createElement('dive');
        div.innerHTML = `
        <h5> Brand : ${phone2.brand}</h5>
        <p> Name :  ${phone2.phone_name}</p>
        <img src="${phone2.image}" class="card-img-top" alt="...">
        <br>
        <button class = " mx-4 my-4">Details</button>
        `;

        container.appendChild(div);


    });
    showHideSpinner('none');
    showHideSearchResult('block');
}

// displayPhone();

