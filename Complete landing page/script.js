console.log("hello world!");

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
});