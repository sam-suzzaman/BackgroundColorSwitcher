// grab the container
let container = document.querySelector('.container')
// grab the color changing buttons
let btns = document.querySelectorAll('.button')

// add eventListener to all buttons
btns.forEach(value => {
    value.addEventListener('click', function () {
        container.id = value.getAttribute('id')
    })
});
 