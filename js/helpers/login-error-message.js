export const displayLoginErrorMessage = (errorMessaga) => {
    const errorPlace = document.querySelector('.login-error');

    const errorMsg = document.createElement('p');
    errorMsg.innerText = errorMessaga;

    errorPlace.appendChild(errorMsg);
}