document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            // Simulate sending animation
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
                formSuccess.classList.remove('hidden');
                contactForm.reset();

                setTimeout(() => {
                    formSuccess.classList.add('hidden');
                }, 5000);
            }, 1200);
        });
    }

    // Customizer Drawer Functionality
    const customizerToggle = document.getElementById('customizerToggle');
    const customizerDrawer = document.getElementById('customizerDrawer');
    const closeCustomizer = document.getElementById('closeCustomizer');
    const customizerForm = document.getElementById('customizerForm');

    if (customizerToggle && customizerDrawer) {
        customizerToggle.addEventListener('click', () => {
            customizerDrawer.classList.toggle('open');
        });
    }

    if (closeCustomizer && customizerDrawer) {
        closeCustomizer.addEventListener('click', () => {
            customizerDrawer.classList.remove('open');
        });
    }

    // Color Palette Buttons in Customizer
    const colorBtns = document.querySelectorAll('.color-btn');
    let selectedColor1 = '#00f2fe';
    let selectedColor2 = '#4facfe';

    colorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedColor1 = btn.getAttribute('data-color');
            selectedColor2 = btn.getAttribute('data-color-2');
        });
    });

    // Apply Customizer Form Changes
    if (customizerForm) {
        customizerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('inputName').value;
            const title = document.getElementById('inputTitle').value;
            const bio = document.getElementById('inputBio').value;

            // Update UI elements
            if (name) {
                document.getElementById('nav-logo-name').textContent = name.split(' ')[0] + '.dev';
                document.getElementById('heroName').textContent = name;
            }
            if (title) {
                document.getElementById('heroTitle').textContent = title;
            }
            if (bio) {
                document.getElementById('heroBio').textContent = bio;
            }

            // Update CSS Variables for Theme Accent
            document.documentElement.style.setProperty('--accent-1', selectedColor1);
            document.documentElement.style.setProperty('--accent-2', selectedColor2);

            // Close Drawer
            customizerDrawer.classList.remove('open');
        });
    }

    // Set Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});