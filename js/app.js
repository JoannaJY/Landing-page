/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 

/**
 * Define Global Variables
 * 
*/
const allSections = document.getElementsByTagName('section');
const navLists = document.getElementById('navbar__list');

/**
 * End Global Variables
*/

/**
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
        // let headerLinks = document.getElementsByClassName('nav-links');
        // function smooth (allSections, headerLinks){
        //     for (let section of allSections) {
        //         headerLinks.addEventListener('click', function(){
        //             section.scrollIntoView({behavior: "smooth"});
        //           });
        //     }
        // };

        // append child elements
        newLi.appendChild(newLinks);
        navLists.appendChild(newLi);

    }
}


//Define header links variable






navbarLists(allSections,navLists);

// smooth (allSections, headerLinks);

// Add class 'your-active-class' to section when near top of viewport


function activeViewport (allSections){
    console.log("active view post");
    
    
    document.addEventListener('scroll', function(){
        for (let i=0 ;i < allSections.length;i++) {
            let rect = allSections[i].getBoundingClientRect();
            let navLinks = document.getElementsByClassName('nav-links');
            let isActive = rect.top <= window.innerHeight && rect.top >= 0;
            console.log("Change active status of",allSections[i].getAttribute("data-nav"));
            for(let nav of navLinks){
                nav.classList.remove('active-class');
            }
            if (isActive) {
                console.log(navLinks);
                navLinks[i].classList.add('active-class');
                break;
            }
        }
    })
}
activeViewport (allSections);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

