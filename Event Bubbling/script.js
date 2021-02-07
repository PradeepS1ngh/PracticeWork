console.log("Hello World!");
var card = document.querySelector('.card');
var explore = document.getElementById('explore');

card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});

explore.addEventListener( 'click',function() {
    console.log("Explore Clicked");
})