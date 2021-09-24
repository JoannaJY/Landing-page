
// Define Global Variables

const allSections = document.getElementsByTagName('section');
const navLists = document.getElementById('navbar__list');
let lastScrollTime = 0;
let currentSection = 0;

// build the navigation bar
function navbarLists  (allSections,navLists)  {
    for (let section of allSections) {
        // create lists and links elements
        const newLi = document.createElement('li');
        const newLinks = document.createElement('a');
        // create class attribute
        newLi.className = "nav-lists";
        newLinks.className = "nav-link";
        // add newLinks text
        newLinks.innerHTML = section.getAttribute("data-nav");
        //smooth scroll to anchor
        newLinks.addEventListener('click', function(){
            section.scrollIntoView({behavior: "smooth"});
        });
            
        // append child elements
        newLi.appendChild(newLinks);
        navLists.appendChild(newLi);

    }
}


navbarLists(allSections,navLists);



// Add class 'active-class' to section when near top of each section
function scrollEventHandler () {
    lastScrollTime = new Date().getTime();
    document.getElementById('pageheaderid').style.visibility = "visible";
    for (let i=0; i < allSections.length; i++) {
        let rect = allSections[i].getBoundingClientRect();
        let navLinks = document.getElementsByClassName('nav-link');
        let isActive = rect.top <= window.innerHeight && rect.top >= 0;

        for(let nav of navLinks){
            nav.classList.remove('active-class');
        }
        if (isActive) {
            navLinks[i].classList.add('active-class');
            currentSection = allSections[i].getAttribute('data-nav');
            break;
        }
    }
}

document.addEventListener('scroll', scrollEventHandler);


// Hide fixed navigation bar while not scrolling
function checkLastScrollInterval() {
    let currentTime = new Date().getTime();
    let interval = currentTime - lastScrollTime;
    let pageHeader = document.getElementById('pageheaderid');
    if(interval > 1500 && currentSection !== 'Our Services') {
        pageHeader.style.visibility = "hidden";
    }
}
setInterval(checkLastScrollInterval, 300);


