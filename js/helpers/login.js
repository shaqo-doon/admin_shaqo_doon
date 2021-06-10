import { displayLoginErrorMessage } from './login-error-message.js';

const loginBtn = document.querySelector('.onLogin');

let email = '';
let password = '';
const loginUrl = 'https://api.shaqodoon.ro/login/'; // post

const getLoginDetails = () => {
    email = document.querySelector('#email').value;
    password = document.querySelector('#password').value;
}

const token = "28ee50aa-8215-4f18-8e24-7c1c1b4fc231" // remove this

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getLoginDetails();

    fetch(loginUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9'
        },
        body: `username=${email}&password=${password}`
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.message === 'success') {
                sessionStorage.setItem('token', data.token);
                window.location.href = 'dash.html';
            } else {
                displayLoginErrorMessage(data.message)
            }
        }
        )
        .catch(err => {
            console.log('error: ', err)
        })

})