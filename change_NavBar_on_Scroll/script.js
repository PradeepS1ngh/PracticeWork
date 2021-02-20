console.log("Hello World!");

const header = document.querySelector("header");
const intro = document.querySelector(".container1");

const options = {
    rootMargin:"-150px"
};
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add("nav_scrolled");
        }else{
            header.classList.remove("nav_scrolled");
        }
    })
},options);

observer.observe(intro);




// General StepUp for IntersectionObserver

// const container1 = document.querySelector(".container2");


// const options = {
//     rootMargin : "-100px"
// };

// const observer = new IntersectionObserver(function(entries,observer){
//     entries.forEach(entry => {
//         console.log(entry);
//     })
// },options);

// observer.observe(container1);