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

/**
 * Define Global Variables
 * 
*/
const allSections = document.getElementsByTagName('section');
const navLists = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navbarLists  (allSections,navLists)  {
    for (let section of allSections) {
        // create lists and links elements
        const newLi = document.createElement('li');
        const newLinks = document.createElement('a');
        // create class attribute
        newLi.className = "nav-lists";
        newLinks.className = "nav-links";
        newLinks.innerHTML = section.getAttribute("data-nav");
        newLinks.setAttribute ('href', `#${section.getAttribute('id')}`);
        // append child elements
        newLi.appendChild(newLinks);
        navLists.appendChild(newLi);
    
    }
}

navbarLists(allSections,navLists);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

