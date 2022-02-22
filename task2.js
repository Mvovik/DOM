
const myDivEl = document.querySelector('#myDiv');
const greenEl = myDivEl.previousElementSibling;
const boldEl = myDivEl.firstElementChild;
const redEl = boldEl.nextElementSibling;
const underlineEl = redEl.nextElementSibling;
const italicEl = myDivEl.lastElementChild;
const horizontalEl = document.querySelectorAll('#myList>li');
const unvisibleEl = document.querySelector('#myList').nextElementSibling;

greenEl.style.backgroundColor = '#90EE90';
boldEl.style.fontWeight = '700';
redEl.style.color = '#FF294F'
underlineEl.style.textDecoration = 'underline';
italicEl.style.fontStyle = 'italic';
unvisibleEl.hidden = true;

for (el of horizontalEl) {
    el.style.listStyleType = 'none';
    el.style.display = 'inline';
    el.nextSibling.data = '';
}
