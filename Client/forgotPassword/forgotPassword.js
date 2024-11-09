const baseUrlUsers = "http://localhost:3000/users";
const mes = document.querySelector("#mes");
const form = document.querySelector("form");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newPassword = e.target.newPassword.value;
  const urlParams = new URLSearchParams(window.location.search);
  userId = urlParams.get("userId");
  const response = await axios.post(`${baseUrlUsers}/resetPassword/${userId}`, {
    newPassword,
  });
  mes.innerHTML = response.data.mes;
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/Client/mainPage/index.html";
  }, 3000);
});
