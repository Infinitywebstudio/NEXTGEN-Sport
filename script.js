// ========================================
// NAVIGATION & MOBILE MENU
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const sidebar = document.querySelector('.sidebar');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // Sidebar Navigation Active State
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all items
            sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));

            // Add active class to clicked item
            this.parentElement.classList.add('active');

            // Scroll to section (if needed)
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================

    const searchButton = document.querySelector('.btn-search');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const sportFilter = document.querySelector('.search-filters .filter-select:nth-child(1)').value;
            const positionFilter = document.querySelector('.search-filters .filter-select:nth-child(2)').value;
            const locationFilter = document.querySelector('.search-filters .filter-select:nth-child(3)').value;

            console.log('Recherche lancée avec les filtres:', {
                sport: sportFilter,
                position: positionFilter,
                location: locationFilter
            });

            // Animation de recherche
            searchButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Recherche...';
            searchButton.disabled = true;

            // Simuler une recherche (à remplacer par une vraie requête API)
            setTimeout(() => {
                searchButton.innerHTML = 'Rechercher';
                searchButton.disabled = false;
                alert('Fonctionnalité de recherche - À implémenter avec React');
            }, 1500);
        });
    }

    // ========================================
    // TALENT CARDS INTERACTIONS
    // ========================================

    const talentCards = document.querySelectorAll('.talent-card');
    talentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // View Profile Button
    const viewProfileButtons = document.querySelectorAll('.btn-view-profile');
    viewProfileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const talentName = this.closest('.talent-card').querySelector('h3').textContent;
            console.log('Voir le profil de:', talentName);
            alert(`Profil de ${talentName} - À implémenter`);
        });
    });

    // ========================================
    // DASHBOARD INTERACTIONS
    // ========================================

    // Edit Buttons
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cardTitle = this.closest('.card-header').querySelector('h2').textContent;
            console.log('Édition de:', cardTitle);
            alert(`Édition ${cardTitle.trim()} - À implémenter`);
        });
    });

    // Notification Button
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            alert('Notifications - À implémenter');
        });
    }

    // Period Select
    const periodSelect = document.querySelector('.period-select');
    if (periodSelect) {
        periodSelect.addEventListener('change', function() {
            console.log('Période sélectionnée:', this.value);
            // Mettre à jour les statistiques selon la période
            updateStats(this.value);
        });
    }

    // Opportunity Actions
    const acceptButtons = document.querySelectorAll('.btn-accept');
    const declineButtons = document.querySelectorAll('.btn-decline');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const opportunityTitle = this.closest('.opportunity-item').querySelector('h4').textContent;
            console.log('Opportunité acceptée:', opportunityTitle);

            // Animation
            const opportunityItem = this.closest('.opportunity-item');
            opportunityItem.style.background = 'rgba(143, 201, 47, 0.1)';

            setTimeout(() => {
                alert(`Opportunité "${opportunityTitle}" acceptée !`);
                opportunityItem.style.opacity = '0';
                setTimeout(() => {
                    opportunityItem.remove();
                }, 300);
            }, 300);
        });
    });

    declineButtons.forEach(button => {
        button.addEventListener('click', function() {
            const opportunityTitle = this.closest('.opportunity-item').querySelector('h4').textContent;
            console.log('Opportunité refusée:', opportunityTitle);

            // Animation
            const opportunityItem = this.closest('.opportunity-item');
            opportunityItem.style.background = 'rgba(255, 49, 49, 0.1)';

            setTimeout(() => {
                if (confirm(`Refuser l'opportunité "${opportunityTitle}" ?`)) {
                    opportunityItem.style.opacity = '0';
                    setTimeout(() => {
                        opportunityItem.remove();
                    }, 300);
                } else {
                    opportunityItem.style.background = 'transparent';
                }
            }, 300);
        });
    });

    // Portfolio Items
    const portfolioItems = document.querySelectorAll('.portfolio-item:not(.add-new)');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoTitle = this.querySelector('p').textContent;
            console.log('Vidéo sélectionnée:', videoTitle);
            alert(`Lecture de la vidéo: ${videoTitle} - À implémenter`);
        });
    });

    // Add New Portfolio Item
    const addNewPortfolio = document.querySelector('.portfolio-item.add-new');
    if (addNewPortfolio) {
        addNewPortfolio.addEventListener('click', function() {
            alert('Upload de vidéo - À implémenter');
        });
    }

    // ========================================
    // SKILL BARS ANIMATION (on scroll)
    // ========================================

    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-progress');

        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (barPosition < screenPosition) {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    };

    // Animate on page load
    setTimeout(animateSkillBars, 500);

    // Animate on scroll
    window.addEventListener('scroll', animateSkillBars);

    // ========================================
    // SMOOTH SCROLL FOR ANCHORS
    // ========================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========================================
    // STATS COUNTER ANIMATION
    // ========================================

    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 50;
        const duration = 1000;
        const stepTime = duration / 50;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    };

    // Animate stat cards on page load
    const statCards = document.querySelectorAll('.stat-content h3');
    if (statCards.length > 0) {
        setTimeout(() => {
            statCards.forEach(stat => {
                const text = stat.textContent.trim();
                const number = parseInt(text.replace(/[^\d]/g, ''));
                if (!isNaN(number)) {
                    stat.textContent = '0';
                    animateCounter(stat, number);
                }
            });
        }, 300);
    }

    // ========================================
    // DROPDOWN MENU ACCESSIBILITY
    // ========================================

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Keyboard navigation
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menu.classList.toggle('active');
            }
        });

        // Click outside to close
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    });

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    function updateStats(period) {
        console.log('Mise à jour des statistiques pour:', period);
        // Animation de chargement
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsGrid.style.opacity = '0.5';
            setTimeout(() => {
                statsGrid.style.opacity = '1';
                // Ici, mettre à jour les stats avec de vraies données
            }, 500);
        }
    }

    // ========================================
    // PERFORMANCE CHART (placeholder)
    // ========================================

    const performanceChart = document.getElementById('performanceChart');
    if (performanceChart) {
        const ctx = performanceChart.getContext('2d');
        ctx.fillStyle = '#666';
        ctx.font = '14px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('Graphique à implémenter avec Chart.js', performanceChart.width / 2, performanceChart.height / 2);
    }

    // ========================================
    // LOADING ANIMATIONS
    // ========================================

    // Fade in elements on load
    const fadeElements = document.querySelectorAll('.talent-card, .step-card, .media-card');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';

        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // ========================================
    // FORM VALIDATIONS (for future use)
    // ========================================

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulaire soumis');
            // Ajouter la validation ici
        });
    });

    // ========================================
    // RESPONSIVE SIDEBAR TOGGLE
    // ========================================

    const createMobileSidebarToggle = () => {
        if (window.innerWidth <= 1024 && sidebar) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'mobile-sidebar-toggle';
            toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
            toggleBtn.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1001;
                width: 44px;
                height: 44px;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
            `;

            document.body.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('active');
            });

            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            });
        }
    };

    if (sidebar) {
        createMobileSidebarToggle();
        window.addEventListener('resize', createMobileSidebarToggle);
    }

    // ========================================
    // CONSOLE LOG FOR DEVELOPMENT
    // ========================================

    console.log('%c🚀 NEXGEN SPORT - Maquette chargée avec succès!', 'color: #4bc3b9; font-size: 16px; font-weight: bold;');
    console.log('%cProchaine étape: Développement en React', 'color: #f87028; font-size: 14px;');
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.talents-section, .how-it-works, .about-section, .media-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});
