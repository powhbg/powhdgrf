// ==================== MOBILE NAVIGATION TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// ==================== AUTO-SLIDING CAROUSEL ====================
let currentSlideIndex = 0;
let slideAutoplayTimer;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    
    if (slides.length === 0) return;
    
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('fade', 'show');
        if (dots[i]) dots[i].classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlideIndex].classList.add('fade', 'show');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    clearTimeout(slideAutoplayTimer);
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
    autoplaySlides();
}

function currentSlide(index) {
    clearTimeout(slideAutoplayTimer);
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    autoplaySlides();
}

function autoplaySlides() {
    slideAutoplayTimer = setTimeout(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
        autoplaySlides();
    }, 5000); // Change slide every 5 seconds
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        showSlide(currentSlideIndex);
        autoplaySlides();
    }
    
    // Update dynamic dates
    updateDynamicDates();
    updateSessionTimes();
});

// ==================== DYNAMIC DATE & TIME UPDATES ====================
function updateDynamicDates() {
    const dateElements = document.querySelectorAll('.dynamic-date');
    const today = new Date();
    
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    dateElements.forEach(element => {
        element.textContent = formattedDate;
    });
}

function updateSessionTimes() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;
    
    // Session times in minutes since midnight
    const sessions = [
        { start: 7 * 60, end: 8.5 * 60, name: 'Morning Yoga' },
        { start: 9.5 * 60, end: 10.5 * 60, name: 'Sound Healing' },
        { start: 15 * 60, end: 16 * 60, name: 'Afternoon Sound Healing' },
        { start: 16 * 60, end: 17.5 * 60, name: 'Evening Yoga' },
        { start: 18 * 60, end: 19.5 * 60, name: 'Kirtan Chanting' }
    ];
    
    const statusElements = document.querySelectorAll('.session-status');
    
    statusElements.forEach((element, index) => {
        if (sessions[index]) {
            const session = sessions[index];
            if (currentTime >= session.start && currentTime <= session.end) {
                element.innerHTML = '🟢 <span>In Progress</span>';
                element.style.color = '#28a745';
            } else if (currentTime < session.start) {
                const minutesUntil = session.start - currentTime;
                element.innerHTML = `⏰ <span>Upcoming (in ${Math.floor(minutesUntil)} min)</span>`;
                element.style.color = '#ffc107';
            } else {
                element.innerHTML = '✓ <span>Completed Today</span>';
                element.style.color = '#6c757d';
            }
        }
    });
}

// Update session times every minute
setInterval(updateSessionTimes, 60000);

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            navbar.style.backgroundColor = 'rgba(31, 98, 142, 0.95)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            navbar.style.backgroundColor = '#1f628e';
        }
    }
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation on page load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card, .program-card, .session-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        fadeInObserver.observe(card);
    });
});

// ==================== SET ACTIVE NAV LINK ====================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);

// ==================== CLOSE MOBILE MENU ON OUTSIDE CLICK ====================
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }
});

// ==================== AUTO-UPDATE FOOTER YEAR ====================
function updateFooterYear() {
    const currentYear = new Date().getFullYear();
    const footerBottoms = document.querySelectorAll('.footer-bottom p');
    
    footerBottoms.forEach(p => {
        // Replace hardcoded year with current year
        p.innerHTML = p.innerHTML.replace(/© \d{4}/, `© ${currentYear}`);
    });
}

document.addEventListener('DOMContentLoaded', updateFooterYear);

// ==================== WELCOME MODAL (ONE-TIME) ====================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    const alreadyShown = localStorage.getItem('atma_popup_shown');
    const closeBtn = modal.querySelector('.modal-close');

    function openModal() {
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        localStorage.setItem('atma_popup_shown', '1');
    }

    // Show modal only if not shown before
    if (!alreadyShown) {
        // small delay so page paints first
        setTimeout(openModal, 600);
    }

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
});
