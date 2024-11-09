const baseUrlUsers = "http://localhost:3000/users";
const mes = document.querySelector("#mes")



async function  verifyEmail(){
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    const response = await axios.get(`${baseUrlUsers}/emailVerifications/${userId}`)
    mes.innerHTML = response.data.mes;
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/Client/mainPage/index.html"
    }, 2000)


}