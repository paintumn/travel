const homeButton = document.querySelector('.js-home');
const signUp = document.querySelector('.js-sign-up')

homeButton.addEventListener("click", () => {
  location.href = '../Home/home.html';
})

signUp.addEventListener("click", () => {
  location.href = '../Signup/signup.html'
})
