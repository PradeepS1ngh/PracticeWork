console.log("hello world!");

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});


//   desktop Hamburger
var desktop_icon = document.getElementById("desktop_icon");
var navbar = document.getElementById("navbar");
desktop_icon.addEventListener('click', function(){
    console.log('clicked');
    navbar.classList.toggle('show_menu_desktop');
    desktop_icon.classList.toggle('open')
})

//   mobile Hamburger
var mobile_icon = document.getElementById("mobile_icon");
var mobile_navbar = document.getElementById("mobile_navbar");
var overlay = document.getElementById("overlay");
mobile_icon.addEventListener('click', function(){
    mobile_navbar.classList.toggle('show_menu_mobile');
    mobile_icon.classList.toggle('open');
    overlay.classList.toggle('overlayOpen');
})
