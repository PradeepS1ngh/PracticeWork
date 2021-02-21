console.log("Hello World!");

let navbar = document.getElementById('navbar');
let h2 = document.getElementById('h2');
let h1 = document.getElementById('h1');

h2.addEventListener('click', function(){
    console.log("Clicked");
    navbar.classList.toggle('show');
})

h1.addEventListener('click', function(){
    console.log("Clicked");
    navbar.classList.toggle('show');
})
