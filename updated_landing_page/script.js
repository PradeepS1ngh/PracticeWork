//scroll Effect Parallex
$(window).scroll(function (){
    parallex();
})
function parallex(){
    var wScroll = $(window).scrollTop();
    $('.parallex-bg').css('background-position','center '+(wScroll*0.75)+'px');
}


//   desktop Hamburger
var desktop_icon = document.getElementById("desktop_icon");
var navbar = document.getElementById("navbar");
desktop_icon.addEventListener('click', function(){
    navbar.classList.toggle('show_menu_desktop');
    desktop_icon.classList.toggle('open')
})


var mainNavbar = document.querySelector("#mainNavbar");
var miniNavbar = document.querySelector(".miniNavbar");
var DesignCoaching_navbar = document.querySelector(".DesignCoaching_navbar");
var IndustrialDesing_navbar = document.querySelector(".IndustrialDesing_navbar");





// navbar Scrolled
const landing_page = document.querySelector(".landing_page");
const options = {
    rootMargin : "-150px"
}
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            DesignCoaching_navbar.classList.add("navbar_scrolled");
            IndustrialDesing_navbar.classList.add("navbar_scrolled");
        }else{
            DesignCoaching_navbar.classList.remove("navbar_scrolled");
            IndustrialDesing_navbar.classList.remove("navbar_scrolled");
        }
    })
},options)
observer.observe(landing_page);






//   Design Coaching 
var DesingCoaching_box = document.querySelector(".DesingCoaching_box");
var DesignEntranceCoaching = document.querySelector('.DesignEntranceCoaching');
var DesignCoachingLink = document.querySelector('#DesignCoachingLink');
var Design_exploreMore = document.querySelector(".Design_exploreMore");
DesingCoaching_box.addEventListener('click',setDesignCoaching);
DesignCoachingLink.addEventListener('click',setDesignCoaching);
function setDesignCoaching(){

    mainNavbar.classList.toggle('hide');
    DesignCoaching_navbar.classList.toggle('hide');

    DesignEntranceCoaching.classList.toggle('active');
    IndustrialDesign_box.classList.toggle("hide");

    DesingCoaching_box.classList.toggle('parallex-bg')
    Design_exploreMore.classList.toggle('unhide');
} 






//   Industrial Design Coaching
var IndustrialDesign_box = document.querySelector(".IndustrialDesign_box");
var IndustrialCoaching = document.querySelector('.IndustrialCoaching');
var IndustrialDesignLink = document.querySelector('#IndustrialDesignLink');
var Industrial_exploreMore = document.querySelector(".Industrial_exploreMore");
IndustrialDesign_box.addEventListener('click',setIndustrialDesign);
IndustrialDesignLink.addEventListener('click',setIndustrialDesign);
function setIndustrialDesign(){

    mainNavbar.classList.toggle('hide');
    IndustrialDesing_navbar.classList.toggle('hide');
    
    IndustrialCoaching.classList.toggle('active');
    DesingCoaching_box.classList.toggle("hide");

    IndustrialDesign_box.classList.toggle('parallex-bg')
    Industrial_exploreMore.classList.toggle('unhide');
}