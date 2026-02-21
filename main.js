/*==================== ROTATING ROLE TEXT ====================*/
const roles = [
    "Frontend Developer",
    "Vibe Coding MERN Stack Developer",
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
/* Small helper: remove duplicate elements that erroneously share the same id
   (HTML should not have duplicate ids). Keep the first and remove the rest. */
function removeDuplicateIds(id) {
    try {
        const nodes = document.querySelectorAll(`#${id}`);
        if (nodes.length > 1) {
            for (let i = 1; i < nodes.length; i++) {
                const node = nodes[i];
                if (node && node.parentNode) node.parentNode.removeChild(node);
            }
            console.warn(`Removed ${nodes.length - 1} duplicate element(s) with id=${id}`);
        }
    } catch (err) {
        console.warn('removeDuplicateIds error for', id, err);
    }
}

// Normalize potential duplicate ids for critical UI elements
['nav-toggle', 'nav-menu', 'nav-close', 'theme-button'].forEach(removeDuplicateIds);

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle && navMenu) {
    // Ensure aria-expanded is present for accessibility
    navToggle.setAttribute('role', 'button');
    navToggle.setAttribute('aria-controls', 'nav-menu');
    navToggle.setAttribute('aria-expanded', navMenu.classList.contains('show-menu') ? 'true' : 'false');

    const onNavToggle = (e) => {
        e.preventDefault();
        navMenu.classList.add('show-menu');
        navToggle.setAttribute('aria-expanded', 'true');
    };

    // remove previous duplicate listeners if any (defensive)
    navToggle.removeEventListener && navToggle.removeEventListener('click', onNavToggle);
    navToggle.addEventListener('click', onNavToggle);
}

/*===== MENU HIDDEN =====*/
if (navClose && navMenu) {
    const onNavClose = (e) => {
        e.preventDefault();
        navMenu.classList.remove('show-menu');
        // keep aria state in sync
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    };

    navClose.removeEventListener && navClose.removeEventListener('click', onNavClose);
    navClose.addEventListener('click', onNavClose);
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const menu = document.getElementById('nav-menu');
    if (!menu) return;
    menu.classList.remove('show-menu');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
}

if (navLink && navLink.length) {
    navLink.forEach(n => n.addEventListener('click', linkAction));
}

/*==================== CLOSE MENU ON SCROLL (MOBILE) ====================*/
window.addEventListener('scroll', function () {
    const menu = document.getElementById('nav-menu');
    if (menu && menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})



/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
try {
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
} catch (e) {
    console.warn('Swiper initialization failed:', e.message);
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset || window.scrollY;
    const headerOffset = 58; // slightly more than --header-height (3rem ≈ 48px)

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - headerOffset;
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.classList.add('active-link')
            } else {
                navLink.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)
// Also run once on load to set the initial active link
document.addEventListener('DOMContentLoaded', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (nav) {
        if (window.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUpEl = document.getElementById('scroll-up');
    if (scrollUpEl) {
        if (window.scrollY >= 560) scrollUpEl.classList.add('show-scroll'); else scrollUpEl.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
// Theme toggle - runs independently to guarantee it works even if other code fails
document.addEventListener('DOMContentLoaded', function () {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconSun = 'uil-sun';
    const iconMoon = 'uil-moon';

    if (!themeButton) {
        console.warn('Theme button not found — skipping theme initialization');
        return;
    }

    const saveTheme = (themeName) => localStorage.setItem('selected-theme', themeName);
    const saveIcon = (iconName) => localStorage.setItem('selected-icon', iconName);

    // Helper to set the icon (ensure only one of the icon classes exists)
    const setIcon = (useSun) => {
        themeButton.classList.remove(iconSun, iconMoon);
        themeButton.classList.add(useSun ? iconSun : iconMoon);
    };

    // Apply saved theme on init
    const storedTheme = localStorage.getItem('selected-theme');
    if (storedTheme === 'dark') {
        document.body.classList.add(darkTheme);
        setIcon(true);
    } else if (storedTheme === 'light') {
        document.body.classList.remove(darkTheme);
        setIcon(false);
    } else {
        // No preference saved: default to dark
        if (!document.body.classList.contains(darkTheme)) {
            document.body.classList.add(darkTheme);
        }
        setIcon(true);
    }

    // Click handler: toggle theme and persist
    themeButton.addEventListener('click', function (e) {
        e.preventDefault();
        const isDarkNow = document.body.classList.toggle(darkTheme);
        setIcon(isDarkNow);
        saveTheme(isDarkNow ? 'dark' : 'light');
        saveIcon(isDarkNow ? iconSun : iconMoon);
    });
});



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
                toggleActions: "play none none none",
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
                toggleActions: "play none none none",
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
        category.style.opacity = '0';

        const bounceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `bounceIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`;
                        // Ensure opacity stays at 1 after animation completes
                        entry.target.addEventListener('animationend', () => {
                            entry.target.style.opacity = '1';
                            entry.target.style.animation = '';
                        }, { once: true });
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
        card.style.opacity = '0';

        const scaleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `scaleIn 0.5s ease-out forwards`;
                        entry.target.addEventListener('animationend', () => {
                            entry.target.style.opacity = '1';
                            entry.target.style.animation = '';
                        }, { once: true });
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
        item.style.opacity = '0';

        const slideObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `slideInLeft 0.6s ease-out forwards`;
                        entry.target.addEventListener('animationend', () => {
                            entry.target.style.opacity = '1';
                            entry.target.style.animation = '';
                        }, { once: true });
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
        box.style.opacity = '0';

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                        entry.target.addEventListener('animationend', () => {
                            entry.target.style.opacity = '1';
                            entry.target.style.animation = '';
                        }, { once: true });
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
        info.style.opacity = '0';

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.animation = `fadeInLeft 0.6s ease-out forwards`;
                        entry.target.addEventListener('animationend', () => {
                            entry.target.style.opacity = '1';
                            entry.target.style.animation = '';
                        }, { once: true });
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
