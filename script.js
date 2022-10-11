/*let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");

hamburger.addEventListener("Click", function() {
    alert('It was clicked!');
})*/

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});