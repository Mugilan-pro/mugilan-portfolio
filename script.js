// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add more interactive elements here as your portfolio grows.
// For example, a function to handle the 'View My Work' button click:

const viewWorkBtn = document.querySelector('.btn-primary');

viewWorkBtn.addEventListener('click', () => {
    // Replace '#' with the ID of your projects section
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Projects section coming soon!');
    }
});

// Scroll Animation Logic
const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('is-visible');
};

const hideScrollElement = (element) => {
    element.classList.remove('is-visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } 
        // Optional: to hide element again when scrolling up
        // else {
        //     hideScrollElement(el);
        // }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Trigger on initial load
handleScrollAnimation();

// Counter Animation
const stats = document.querySelectorAll('.stat-number');
const impactBanner = document.querySelector('.community-impact-banner');
let animationStarted = false;

const startCounter = (stat) => {
    const target = +stat.getAttribute('data-target');
    const duration = 2000; // 2 seconds
    const stepTime = 20; // update every 20ms
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            stat.innerText = Math.ceil(target);
            clearInterval(timer);
        } else {
            stat.innerText = Math.ceil(current);
        }
    }, stepTime);
};

const handleCounterAnimation = () => {
    if (elementInView(impactBanner) && !animationStarted) {
        stats.forEach(startCounter);
        animationStarted = true;
    }
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
    handleCounterAnimation();
});

// Initial check in case the element is already in view
handleCounterAnimation();

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const subject = this.querySelector('input[name="subject"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

