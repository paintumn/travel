
returnLogin = document.querySelector('.js-login')
returnHome = document.querySelector('.js-home');

returnHome.addEventListener("click", () => {
  location.href = '../Home/home.html'
})

returnLogin.addEventListener("click", () => {
  location.href = '../Login/login.html'
})
