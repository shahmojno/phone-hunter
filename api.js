const loadPhone = searchPhone => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}

loadPhone();