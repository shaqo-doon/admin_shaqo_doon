const getDataUrl = 'https://api.shaqodoon.ro/getuser/';


export const getData = () => {
    fetch(getDataUrl, {
        headers: {
            token: sessionStorage.getItem('token')
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            return 10;
        }
        )
        .catch(err => console.log(err))
}