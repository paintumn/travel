

const signIn = document.querySelector('.js-sign-in'); //If they already have an account it lets them login but if they don't got one it lets them create one
const signInBottom = document.querySelector('.js-sign-in-bottom'); //Bottom sign in button
const signUp = document.querySelector('.js-sign-up'); //If they don't have an account they can make one (update) later on we can add signup with google and stuff like that
const countryInput = document.querySelector('.js-country-input'); //The part where they search their countries avaliability and if anyone is coming in that direction


signInBottom.addEventListener("click", function () {
  location.href = '../Login/login.html'
})
signIn.addEventListener("click", function () {
  location.href = '../Login/login.html';
});

signUp.addEventListener("click", function () {
  location.href = '../Signup/signup.html'
})
