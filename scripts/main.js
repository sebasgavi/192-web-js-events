
//var theHeader = document.getElementById('the-header');
//var theHeader = document.getElementsByTagName('header');
//var theHeader = document.getElementsByClassName('mainnav__item');
var theHeader = document.querySelector('.mainheader');

console.log(theHeader);

//theHeader.className = 'mainheader mainheader--active';

//theHeader.setAttribute('class', 'mainheader--active');

//theHeader.classList.add('mainheader--active');

function appear() {
    console.log('apareciendo');
    theHeader.classList.add('mainheader--active');
}
theHeader.addEventListener('mouseenter', appear);


var links = document.querySelectorAll('.mainnav__item');
console.log(links);

var prev = null;

function changeColor(event) {
    event.preventDefault();
    if(prev != null){
        prev.classList.remove('mainnav__item--open');
    }
    
    event.target.classList.add('mainnav__item--open');
    prev = event.target;
}

for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', changeColor);
    //links[i].classList.add('mainnav__item--open');
}