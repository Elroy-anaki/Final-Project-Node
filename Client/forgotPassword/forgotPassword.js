const baseUrlUsers = "http://localhost:3000/users";
const mes = document.querySelector("#mes");
const form = document.querySelector("form");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newPassword = e.target.newPassword.value;

  const urlParams = new URLSearchParams(window.location.search);
  userId = urlParams.get("userId");
  forgotPasswordId = urlParams.get("forgotPasswordId");
  
  const response = await axios.post(`${baseUrlUsers}/resetPassword/`, {
    newPassword,
    userId: userId,
    forgotPasswordId: forgotPasswordId
  });
  mes.innerHTML = response.data.mes;
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/Client/mainPage/mainPage.html";
  }, 3000);
});
