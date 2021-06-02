import { getData } from './display-data.js';

const updateUrl = 'https://api.shaqodoon.ro/v2/addcompany/';

const company = document.querySelector('.nume-companie');
const link = document.querySelector('.link-joburi');


const btnUpdate = document.querySelector('.btn-update');
btnUpdate.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(updateUrl, {
        method: 'POST',
        headers: {
            token: sessionStorage.getItem('token'),
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9'
        },
        body: `link=${link.value}&company=${company.value}`
    }).then(() => {
        // console.log('ok')
        getData();
    })
        .catch(err => console.log(err))
})