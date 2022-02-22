const button = document.querySelector('#button');
const container = document.querySelector('.container');


button.addEventListener('mouseover', function(){
    container.insertAdjacentHTML(
        'beforeend',
        `<div>Mouse on me!</div>`
    )
});


button.addEventListener('mouseout', function(){
    container.insertAdjacentHTML(
        'beforeend',
        `<div>Mouse is not on me!</div>`
    )
});


button.addEventListener('click', function(){
    container.insertAdjacentHTML(
        'beforeend',
        `<div>I was pressed!</div>`
    )
});
