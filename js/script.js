// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Add click events to News & Media cards
    setupNewsCards();
    
    // Add animation classes on scroll
    setupScrollAnimations();
    
    // Initialize tooltips or other interactive elements
    initializeInteractiveElements();
    
    // Log page load
    console.log('Phoovadet Portfolio loaded successfully!');
});

// Setup News & Media card click events
function setupNewsCards() {
    const newsCards = document.querySelectorAll('.card-shadow');
    
    // First news card - BOTNOI Enters n8n
    if (newsCards[0]) {
        newsCards[0].addEventListener('click', function() {
            window.open('https://www.thestorythailand.com/08/12/2025/169477/', '_blank');
        });
        newsCards[0].style.cursor = 'pointer';
        newsCards[0].addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        newsCards[0].addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Second news card - I-BIT KMUTNB
    if (newsCards[1]) {
        newsCards[1].addEventListener('click', function() {
            window.open('https://itd.kmutnb.ac.th/ibit-industrial-coop.php?bsn=2568_14', '_blank');
        });
        newsCards[1].style.cursor = 'pointer';
        newsCards[1].addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
        });
        newsCards[1].addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Add hover effects to tech pills
    const techPills = document.querySelectorAll('.tech-pill');
    techPills.forEach(pill => {
        pill.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.1)';
            this.style.borderColor = '#f97316';
        });
        
        pill.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.borderColor = '#eee';
        });
    });
    
    // Add year to footer
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.far.fa-copyright').parentElement;
    if (copyrightElement) {
        copyrightElement.innerHTML = `<i class="far fa-copyright"></i> ${currentYear} Phoovadet Sinsam-ang. All rights reserved.`;
    }
    
    // Add smooth scroll to top button (optional)
    addBackToTopButton();
}

// Add back to top button (optional feature)
function addBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'fixed bottom-8 right-8 w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center z-50 opacity-0 transition-opacity duration-300 hover:bg-orange-600';
    button.style.transition = 'all 0.3s ease';
    document.body.appendChild(button);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';
        }
    });
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Export functions if needed for module system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setupNewsCards,
        setupScrollAnimations,
        initializeInteractiveElements,
        addBackToTopButton
    };
}