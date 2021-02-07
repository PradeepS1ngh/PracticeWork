console.log("Hello World!");

let navbar = document.getElementById('navbar');
let h2 = document.getElementById('h2');
let h1 = document.getElementById('h1');

h2.addEventListener('click', function(){
    console.log("Clicked");
    navbar.classList.toggle('show');
})


const currentlocation = location.href;
console.log(currentlocation);
const menuItem = document.querySelectorAll('a');
for(let i = 0;i<menuItem.length;i++){
    if(menuItem[i].href === currentlocation){
        menuItem[i].className = 'active'
    }
}