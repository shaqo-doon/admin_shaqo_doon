import { getData } from './display-data.js';

const generateUrl = 'https://api.shaqodoon.ro/v2/api_key/';

const generateBtn = document.querySelector('.apikey-btn');


generateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(generateUrl, {
        headers: {
            token: sessionStorage.getItem('token'),
        }
    })
        .then(() => {
            // console.log('ok2')
            getData();
        })
        .catch(err => {
            console.log(err)
        })
})