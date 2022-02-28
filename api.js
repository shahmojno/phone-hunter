const loadPhone = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data));
}

loadPhone();



const displayPhone = phones => {
    console.log(phones.data);
    const container = document.getElementById('phones');
    const phone = phones.data;
    phone.forEach(phone2 => {
        // console.log(container);
        const div = document.createElement('dive');
        div.innerHTML = `
        <h1> ${phone2.brand}</h1>
        <img src="${phone2.image}" class="card-img-top" alt="...">
        `;

        container.appendChild(div);


    }

    );



    // const container = document.getElementById('phones');
    // data.forEach(phone => {
    //     console.log(phone);
    //     const div = document.createElement('div');
    //     div.innerHTML = `
    // <h1> ${phone.brand}</h1>
    // `;
    //     container.appendChild(div);
    // })

}

// displayPhone();