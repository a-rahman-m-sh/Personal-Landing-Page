/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// getting the nvigationbar

const navigationList = document.querySelector('#navbar__list');

// getting sections

const sectionArray= document.querySelectorAll('section');

// making each section as an object then dynamicly adding each section to navigationbar

const buildNavigation = function(){
// creating empty list to add items to it Dynamicly

let userNavigationBar = '';

//looping through each section
  sectionArray.forEach(section => {

    const sectionID = section.id;
    const sactionNav = section.dataset.nav;

    userNavigationBar +=`<li><a class="menu__link" href="#${sectionID}">${sactionNav}</a></li>`;

  });

navigationList.innerHTML = userNavigationBar;
};

buildNavigation();


// adding button to scroll back to top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// end of definnig top button

// start of definnig list button which appears in small screens

const theButton = document.getElementsByClassName('toggleButton')[0];
const navbarButton = document.getElementsByClassName('magicList')[0];

theButton.addEventListener('click', () => {
  navbarButton.classList.toggle('active')
});

// removing active class from last active section function

const  notActive = function(section){
  section.classList.remove('section--active');

};

// adding active class to current active section function
//Notice that adding active class adding some shadow in the back gruond to the active section
//look to css
const currentActive = function (conditional, section){
  section.classList.add('section--active');
};

//getting elemnt position and size
const elementSize = function (section){
return Math.floor(section.getBoundingClientRect().top);
};

// function that activates the section

const activateSection = function (){
  sectionArray.forEach(section => {
    const sizingelement = elementSize(section);

    inviewport = ()=> sizingelement <150 && sizingelement >=-150;
      notActive(section);
      currentActive(inviewport(),section);


  });

};

// add the event listener

window.addEventListener('scroll', activateSection);
