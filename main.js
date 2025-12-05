  /*==================== ROTATING ROLE TEXT ====================*/
const roles = [
    "Frontend Developer",
    "MERN Stack Developer", 
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const roleTextElement = document.querySelector('.home__role-text');
    
    if (!roleTextElement) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeRole, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeRole, 1000);
});

/*==================== MENU SHOW Y HIDDEN ====================*/
        const navMenu = document.getElementById('nav-menu'),
              navToggle = document.getElementById('nav-toggle'),
              navClose = document.getElementById('nav-close')

        /*===== MENU SHOW =====*/
        /* Validate if constant exists */
        if(navToggle){
            navToggle.addEventListener('click', () =>{
                navMenu.classList.add('show-menu')
            })
        }

        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        if(navClose){
            navClose.addEventListener('click', () =>{
                navMenu.classList.remove('show-menu')
            })
        }

        /*==================== REMOVE MENU MOBILE ====================*/
        const navLink = document.querySelectorAll('.nav__link')

        function linkAction(){
            const navMenu = document.getElementById('nav-menu')
            // When we click on each nav__link, we remove the show-menu class
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction))

        /*==================== ACCORDION SKILLS ====================*/
        const skillsContent = document.getElementsByClassName('skills__content'),
              skillsHeader = document.querySelectorAll('.skills__header')

        function toggleSkills(){
            let itemClass = this.parentNode.className

            for(i = 0; i < skillsContent.length; i++){
                skillsContent[i].className = 'skills__content skills__close'
            }
            if(itemClass === 'skills__content skills__close'){
                this.parentNode.className = 'skills__content skills__open'
            }
        }

        skillsHeader.forEach((el) =>{
            el.addEventListener('click', toggleSkills)
        })



        /*==================== SERVICES MODAL ====================*/
        const modalViews = document.querySelectorAll('.services__modal'),
              modalBtns = document.querySelectorAll('.services__button'),
              modalCloses = document.querySelectorAll('.services__modal-close')

        let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal')
        }

        modalBtns.forEach((modalBtn, i) =>{
            modalBtn.addEventListener('click', () =>{
                modal(i)
            })
        })

        modalCloses.forEach((modalClose) =>{
            modalClose.addEventListener('click', () =>{
                modalViews.forEach((modalView) =>{
                    modalView.classList.remove('active-modal')
                })
            })
        })

        /*==================== PORTFOLIO SWIPER  ====================*/
        let swiper = new Swiper(".portfolio__container", {
            cssMode: true,
            loop: true,

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

        /*==================== CHANGE BACKGROUND HEADER ====================*/ 
        function scrollHeader(){
            const nav = document.getElementById('header')
            // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
            if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)

        /*==================== SHOW SCROLL UP ====================*/ 
        function scrollUp(){
            const scrollUp = document.getElementById('scroll-up');
            // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Get saved theme from localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon';

// Apply saved theme on page load
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme);
} else {
    // Default to dark theme
    document.body.classList.add(darkTheme);
    themeButton.classList.add(iconTheme);
}

// Theme toggle click handler
if (themeButton) {
    themeButton.addEventListener('click', () => {
        console.log('Theme button clicked');
        
        // Toggle theme and icon
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        
        // Save to localStorage
        localStorage.setItem('selected-theme', getCurrentTheme());
        localStorage.setItem('selected-icon', getCurrentIcon());
        
        console.log('Theme changed to:', getCurrentTheme());
    });
} else {
    console.error('Theme button not found!');
}



/*==================== GSAP ANIMATIONS ====================*/
document.addEventListener("DOMContentLoaded", () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, using CSS fallback animations');
        
        // Use CSS animations as fallback
        const headlines = document.querySelectorAll(".section__title");
        const subtitles = document.querySelectorAll(".section__subtitle");
        
        headlines.forEach((headline, index) => {
            headline.style.animation = `popUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
            headline.style.animationDelay = `${index * 0.1}s`;
        });
        
        subtitles.forEach((subtitle, index) => {
            subtitle.style.animation = `popUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
            subtitle.style.animationDelay = `${0.2 + (index * 0.1)}s`;
        });
        
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const headlines = document.querySelectorAll(".section__title");
    const subtitles = document.querySelectorAll(".section__subtitle");

    console.log(`Found ${headlines.length} headlines and ${subtitles.length} subtitles`);

    // Animate Headlines
    headlines.forEach((headline, index) => {
        headline.classList.add("modern-headline");

        // Set initial state with scale
        gsap.set(headline, {
            opacity: 0,
            y: 40,
            scale: 0.8,
            filter: "blur(5px)"
        });

        // Scroll-based Reveal Animation with Pop-up Effect
        const animation = gsap.to(headline, {
            scrollTrigger: {
                trigger: headline,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                markers: false,
                onEnter: () => console.log(`Headline ${index} entered viewport`),
            },
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "back.out(1.4)",
            delay: index * 0.1
        });

        console.log(`Animation created for headline ${index}:`, headline.textContent);

        // Hover Letter Spacing Animation
        headline.addEventListener('mouseenter', () => {
            gsap.to(headline, {
                letterSpacing: "2px",
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        headline.addEventListener('mouseleave', () => {
            gsap.to(headline, {
                letterSpacing: "0px",
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Proximity-based Glow Effect
        let isNearHeadline = false;
        
        document.addEventListener("mousemove", (e) => {
            const rect = headline.getBoundingClientRect();
            const headlineCenter = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            };

            const distanceX = e.clientX - headlineCenter.x;
            const distanceY = e.clientY - headlineCenter.y;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            const maxDistance = 300;

            if (distance < maxDistance) {
                const intensity = 1 - distance / maxDistance;
                
                if (!isNearHeadline) {
                    isNearHeadline = true;
                }

                gsap.to(headline, {
                    textShadow: `0 0 ${intensity * 20}px rgba(99, 102, 241, ${intensity * 0.6})`,
                    duration: 0.2,
                    ease: "power1.out",
                    overwrite: "auto",
                });
            } else {
                if (isNearHeadline) {
                    isNearHeadline = false;
                    gsap.to(headline, {
                        textShadow: "0 0 0px rgba(99, 102, 241, 0)",
                        duration: 0.4,
                        ease: "power2.out",
                        overwrite: "auto",
                    });
                }
            }
        });
    });

    // Animate Subtitles with subtle pop
    subtitles.forEach((subtitle, index) => {
        gsap.set(subtitle, {
            opacity: 0,
            y: 25,
            scale: 0.9
        });

        gsap.to(subtitle, {
            scrollTrigger: {
                trigger: subtitle,
                start: "top 85%",
                toggleActions: "play none none reverse",
                onEnter: () => console.log(`Subtitle ${index} entered viewport`),
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.2)",
            delay: 0.2 + (index * 0.1)
        });
    });

    console.log('GSAP animations initialized successfully');
});


/*==================== SCROLL REVEAL ANIMATIONS ====================*/
// Intersection Observer for scroll animations (excluding titles/subtitles - handled by GSAP)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.addEventListener('DOMContentLoaded', () => {
    // Note: Section titles and subtitles are handled by GSAP animations above

    // Animate skills categories with bounce
    const skillsCategories = document.querySelectorAll('.skills__category');
    skillsCategories.forEach((category, index) => {
        category.classList.add('animate-on-scroll');
        category.style.opacity = '0';
        
        const bounceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`;
                    }, index * 150);
                    bounceObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        bounceObserver.observe(category);
    });

    // Animate portfolio cards with scale
    const portfolioCards = document.querySelectorAll('.portfolio__card');
    portfolioCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.opacity = '0';
        
        const scaleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `scaleIn 0.5s ease-out forwards`;
                    }, index * 100);
                    scaleObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        scaleObserver.observe(card);
    });

    // Animate timeline items with slide
    const timelineItems = document.querySelectorAll('.education__item');
    timelineItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.opacity = '0';
        
        const slideObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `slideInLeft 0.6s ease-out forwards`;
                    }, index * 150);
                    slideObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        slideObserver.observe(item);
    });

    // Animate achievement boxes
    const achievementBoxes = document.querySelectorAll('.achievements__box');
    achievementBoxes.forEach((box, index) => {
        box.classList.add('animate-on-scroll');
        box.style.opacity = '0';
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                    }, index * 100);
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeObserver.observe(box);
    });

    // Animate contact info cards
    const contactInfo = document.querySelectorAll('.contact__information');
    contactInfo.forEach((info, index) => {
        info.classList.add('animate-on-scroll');
        info.style.opacity = '0';
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `fadeInLeft 0.6s ease-out forwards`;
                    }, index * 150);
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        fadeObserver.observe(info);
    });
});

/*==================== HERO PARALLAX EFFECT ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.home');
    const heroContent = document.querySelector('.home__content');
    const heroImg = document.querySelector('.home__img');
    
    if (heroSection && heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${rate * 0.3}px)`;
            }
            
            if (heroImg) {
                heroImg.style.transform = `translateY(${rate * 0.5}px)`;
            }
        });
    }
});

/*==================== SMOOTH SCROLL BEHAVIOR ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/*==================== PROGRESS BAR ANIMATION ====================*/
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.skills__progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-out';
                    bar.style.width = width;
                }, 200);
                
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
});
