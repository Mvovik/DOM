const listElementFirst = document.getElementById('list');
const listUser1First = listElementFirst.firstElementChild.textContent;
const listUser2First = listElementFirst.firstElementChild.nextElementSibling.textContent;
const listUser3First = listElementFirst.firstElementChild.nextElementSibling.nextElementSibling.textContent;
const listUser4First = listElementFirst.lastElementChild.previousElementSibling.textContent;
const listUser5First = listElementFirst.lastElementChild.textContent;

console.log(`First way: ${listUser1First}, ${listUser5First}, ${listUser2First}, ${listUser4First}, ${listUser3First}`);