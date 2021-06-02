var userToken = sessionStorage.getItem("token");
if (!userToken) {
    window.location.replace("https://admin.shaqodoon.ro");
}
