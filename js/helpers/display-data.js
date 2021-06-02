const getDataUrl = 'https://api.shaqodoon.ro/getuser/';

const id = document.querySelector('.show-id__id');
const numeCompanie = document.querySelector('.nume-companie');
const linkJoburi = document.querySelector('.link-joburi');
const apikey = document.querySelector('#apikey');

const updateUI = (userData) => {
    id.innerText = userData.id;
    numeCompanie.value = userData.company || null;
    linkJoburi.value = userData.link;
    apikey.innerText = userData.api_key;
    // console.log('data')
}

export const getData = () => {
    fetch(getDataUrl, {
        headers: {
            token: sessionStorage.getItem('token')
        }
    })
        .then(response => response.json())
        .then(data => {
            updateUI(data)
        }
        )
        .catch(err => console.log(err))
}
