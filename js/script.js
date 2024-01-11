
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// ============ REMOVE MENU MOBILE ========= //

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ============ SHADOW HEADER ==============//
const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header') 
                         : header.classList.remove('shadow-header');
}

// ============ EMAIL JS ================ //

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9ehoxd4', 'template_fsexrzk', 'contact-form', 'WLjhELyMQJkQcnNA1')
    .then(() => {
        // Afficher le message de succès
        contactMessage.textContent = 'Message sent successfully ✅';
        contactMessage.className = 'success-message'; // Ajout d'une classe pour le style de succès

        // Effacer les champs du formulaire
        contactForm.reset();

        // Supprimer le message après cinq secondes
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    })
    .catch(() => {
        // Afficher un message d'erreur en cas d'échec
        contactMessage.textContent = 'Failed to send message ❌';
        contactMessage.className = 'error-message'; // Ajout d'une classe pour le style d'erreur

        // Supprimer le message après cinq secondes
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);


// ============ SHOW SCROLL UP ========= //
const scrollUp = () =>{
    const scrollUp = document.getElementById('scrollUp');
    this.scrollY >= 350 ? header.classList.add('show-scroll')
                       : header.classList.remove('show-scroll'); 
}
window.addEventListener('scroll', scrollUp)
// ============ SCROLL SECTIONS ACTIVE LINK ===== //

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass && scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else if (sectionsClass) {
            sectionsClass.classList.remove('active-link');
        }
    });
}
    
// ======== DARK LIGHT THEME ============ //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
     themeButton.classList[selectedIcon === 'ri-lightbulb-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ========== SCROLL REVEAL ANIMATION ======== //
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

// Animations pour différents éléments
sr.reveal('.home__perfil, .about__image, .contact__mail', { origin: 'right' });
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', { origin: 'left' });
sr.reveal('.services__card, .projects__card', { interval: 100 }); // Corrigez le nom de la classe et le nom de la propriété 'interval'


