// Afribenki Landing Page - Financial Creators Platform
// Pure JavaScript Implementation

class AfribenkiLanding {
    constructor() {
        this.currentLanguage = 'en';
        this.mobileMenuOpen = false;
        this.openFaqItems = new Set();
        this.translations = this.initializeTranslations();
        
        this.init();
    }

    init() {
        // Initialize the landing page
        this.setupEventListeners();
        this.initializeLanguage();
        this.initializeLucideIcons();
        this.hideLoadingSpinner();
        this.translatePage();
        this.setupScrollAnimations();
        this.setupFAQTriggers();
    }

    initializeTranslations() {
        return {
            // Navigation
            'nav.getStarted': { en: 'Start Creating Wealth', fr: 'Commencer à créer de la richesse' },

            // Hero Section
            'hero.badge': { en: 'Empowering Financial Creators', fr: 'Autonomiser les créateurs financiers' },
            'hero.title': { en: 'Build Wealth, ', fr: 'Construire la richesse, ' },
            'hero.titleHighlight': { en: 'Create Your Future', fr: 'Créer votre avenir' },
            'hero.description': { en: 'Turn WhatsApp into your personal wealth advisor. Afribenki empowers African Gen Z to build wealth portfolios through social, chat-first AI investment management. Create new wealth with high-performing financial instruments from Africa and beyond.', fr: 'Transformez WhatsApp en votre conseiller personnel en patrimoine. Afribenki permet à la Gen Z africaine de construire des portefeuilles de richesse grâce à la gestion d\'investissement IA sociale et axée sur le chat. Créez une nouvelle richesse avec des instruments financiers performants d\'Afrique et d\'ailleurs.' },
            'hero.startCreating': { en: 'Start Creating Wealth', fr: 'Commencer à créer de la richesse' },
            'hero.tryWhatsApp': { en: 'Try on WhatsApp', fr: 'Essayer sur WhatsApp' },
            'hero.creatorWealth': { en: 'Creator Wealth', fr: 'Richesse des créateurs' },
            'hero.whatsappAI': { en: 'WhatsApp AI', fr: 'WhatsApp IA' },
            'hero.creators': { en: 'Creators', fr: 'Créateurs' },

            // Features
            'features.title': { en: 'Why Financial Creators Choose Afribenki', fr: 'Pourquoi les créateurs financiers choisissent Afribenki' },
            'features.description': { en: 'The first social wealth platform that turns your favorite messaging app into a powerful investment advisor', fr: 'La première plateforme de richesse sociale qui transforme votre application de messagerie préférée en un puissant conseiller en investissement' },

            // For Creators Section
            'creators.title': { en: 'Built for Financial Creators', fr: 'Construit pour les créateurs financiers' },
            'creators.description': { en: 'Whether you\'re building your first portfolio or scaling your wealth empire, Afribenki adapts to your creator journey', fr: 'Que vous construisiez votre premier portefeuille ou que vous fassiez évoluer votre empire de richesse, Afribenki s\'adapte à votre parcours de créateur' },
            'creators.mobile.title': { en: 'Mobile-First Creation', fr: 'Création Mobile-First' },
            'creators.mobile.description': { en: 'Build and manage your wealth portfolio entirely from your phone. Perfect for the mobile-native African Gen Z lifestyle.', fr: 'Construisez et gérez votre portefeuille de richesse entièrement depuis votre téléphone. Parfait pour le style de vie mobile natif de la Gen Z africaine.' },
            'creators.goals.title': { en: 'Creator-Specific Goals', fr: 'Objectifs spécifiques aux créateurs' },
            'creators.goals.description': { en: 'Set wealth goals that match your creator ambitions - from emergency funds to business investments to retirement planning.', fr: 'Définissez des objectifs de richesse qui correspondent à vos ambitions de créateur - des fonds d\'urgence aux investissements commerciaux à la planification de la retraite.' },
            'creators.growth.title': { en: 'Scalable Wealth Systems', fr: 'Systèmes de richesse évolutifs' },
            'creators.growth.description': { en: 'Start small and scale up. Our AI grows your investment strategy as your wealth and ambitions expand.', fr: 'Commencez petit et évoluez. Notre IA fait croître votre stratégie d\'investissement à mesure que votre richesse et vos ambitions s\'étendent.' },

            // Social Wealth Section
            'socialWealth.title': { en: 'The Social Wealth Revolution', fr: 'La révolution de la richesse sociale' },
            'socialWealth.description': { en: 'Making wealth-building a social, chat-first habit for African Gen Z. Turn everyday conversations into wealth creation opportunities.', fr: 'Faire de la construction de richesse une habitude sociale et axée sur le chat pour la Gen Z africaine. Transformez les conversations quotidiennes en opportunités de création de richesse.' },
            'socialWealth.whatsapp.title': { en: 'WhatsApp Wealth Hub', fr: 'Hub de richesse WhatsApp' },
            'socialWealth.whatsapp.description': { en: 'Your personal AI advisor lives in WhatsApp. Get investment tips, portfolio updates, and wealth insights in your most-used app.', fr: 'Votre conseiller IA personnel vit dans WhatsApp. Obtenez des conseils d\'investissement, des mises à jour de portefeuille et des informations sur la richesse dans votre application la plus utilisée.' },
            'socialWealth.whatsapp.cta': { en: 'Try WhatsApp AI', fr: 'Essayer WhatsApp IA' },
            'socialWealth.community.title': { en: 'Creator Communities', fr: 'Communautés de créateurs' },
            'socialWealth.community.description': { en: 'Learn from successful wealth creators, share strategies, and build together in our vibrant creator community.', fr: 'Apprenez des créateurs de richesse réussis, partagez des stratégies et construisez ensemble dans notre communauté de créateurs dynamique.' },
            'socialWealth.community.cta': { en: 'Join Community', fr: 'Rejoindre la communauté' },
            'socialWealth.habits.title': { en: 'Daily Wealth Habits', fr: 'Habitudes de richesse quotidiennes' },
            'socialWealth.habits.description': { en: 'Turn wealth-building into a daily habit through simple chat interactions. 5 minutes a day to transform your financial future.', fr: 'Transformez la construction de richesse en habitude quotidienne grâce à de simples interactions de chat. 5 minutes par jour pour transformer votre avenir financier.' },
            'socialWealth.habits.cta': { en: 'See How', fr: 'Voir comment' },

            // Performance Section
            'performance.title': { en: 'Proven Creator Success', fr: 'Succès prouvé des créateurs' },
            'performance.description': { en: 'Our AI has consistently helped financial creators outperform traditional investment methods across various market conditions and creator goals.', fr: 'Notre IA a constamment aidé les créateurs financiers à surpasser les méthodes d\'investissement traditionnelles dans diverses conditions de marché et objectifs de créateurs.' },
            'performance.creatorReturns': { en: 'Creator Returns', fr: 'Rendements des créateurs' },
            'performance.satisfaction': { en: 'Creator Satisfaction', fr: 'Satisfaction des créateurs' },
            'performance.fees': { en: 'Management Fee', fr: 'Frais de gestion' },
            'performance.support': { en: 'WhatsApp Support', fr: 'Support WhatsApp' },

            // How It Works
            'howItWorks.title': { en: 'How Afribenki Works', fr: 'Comment fonctionne Afribenki' },

            // FAQ
            'faq.title': { en: 'Frequently Asked Questions', fr: 'Questions Fréquemment Posées' },

            // CTA Section
            'cta.title': { en: 'Ready to Start Your Wealth Creation Journey?', fr: 'Prêt à commencer votre parcours de création de richesse ?' },
            'cta.description': { en: 'Join thousands of African Gen Z creators who are building wealth through social, AI-powered investment management.', fr: 'Rejoignez des milliers de créateurs de la Gen Z africaine qui construisent la richesse grâce à la gestion d\'investissement sociale alimentée par l\'IA.' },
            'cta.startCreating': { en: 'Start Creating Wealth - Free', fr: 'Commencer à créer de la richesse - Gratuit' },
            'cta.tryWhatsApp': { en: 'Try on WhatsApp', fr: 'Essayer sur WhatsApp' },

            // Footer
            'footer.description': { en: 'Empowering African Gen Z to build wealth through social, AI-powered investment management.', fr: 'Autonomiser la Gen Z africaine pour construire la richesse grâce à la gestion d\'investissement sociale alimentée par l\'IA.' },
            'footer.platform': { en: 'Platform', fr: 'Plateforme' },
            'footer.howItWorks': { en: 'How it Works', fr: 'Comment ça marche' },
            'footer.security': { en: 'Security', fr: 'Sécurité' },
            'footer.whatsapp': { en: 'WhatsApp AI', fr: 'WhatsApp IA' },
            'footer.creators': { en: 'For Creators', fr: 'Pour créateurs' },
            'footer.creatorTools': { en: 'Creator Tools', fr: 'Outils créateurs' },
            'footer.community': { en: 'Community', fr: 'Communauté' },
            'footer.support': { en: 'Support', fr: 'Support' },
            'footer.privacy': { en: 'Privacy', fr: 'Confidentialité' },
            'footer.tagline': { en: 'Empowering Financial Creators Across Africa.', fr: 'Autonomiser les créateurs financiers à travers l\'Afrique.' },
            'nav.contact': { en: 'Contact', fr: 'Contact' },
            'nav.blog': { en: 'Blog', fr: 'Blog' }
        };
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Language toggle
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguageDropdown());
        }

        // Close language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const languageDropdown = document.getElementById('language-dropdown');
            const languageToggle = document.getElementById('language-toggle');
            if (languageDropdown && !languageToggle.contains(e.target)) {
                this.hideLanguageDropdown();
            }
        });

        // Smooth scrolling for anchor links
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

        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (this.mobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
        });

        // Add scroll event for navbar background
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-background/98', 'shadow-sm');
            } else {
                nav.classList.remove('bg-background/98', 'shadow-sm');
            }
        });
    }

    setupScrollAnimations() {
        // Simple intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animations
        document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
    }

    setupFAQTriggers() {
        // Set up FAQ collapsible functionality
        document.querySelectorAll('.faq-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const faqId = trigger.getAttribute('data-faq');
                this.toggleFAQItem(faqId, trigger);
            });
        });
    }

    toggleFAQItem(faqId, triggerElement) {
        const content = triggerElement.parentElement.querySelector('.faq-content');
        const plusIcon = triggerElement.querySelector('.faq-icon-plus');
        const minusIcon = triggerElement.querySelector('.faq-icon-minus');
        
        if (this.openFaqItems.has(faqId)) {
            // Close FAQ
            this.openFaqItems.delete(faqId);
            content.classList.remove('open');
            content.classList.add('hidden');
            plusIcon.classList.remove('hidden');
            minusIcon.classList.add('hidden');
            content.style.maxHeight = '0';
        } else {
            // Open FAQ
            this.openFaqItems.add(faqId);
            content.classList.add('open');
            content.classList.remove('hidden');
            plusIcon.classList.add('hidden');
            minusIcon.classList.remove('hidden');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }

    initializeLanguage() {
        // Detect user's preferred language
        const savedLanguage = localStorage.getItem('afribenki-language');
        const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
        this.currentLanguage = savedLanguage || browserLanguage;
        this.updateLanguageDisplay();
    }

    initializeLucideIcons() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    hideLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            setTimeout(() => {
                spinner.style.opacity = '0';
                setTimeout(() => {
                    spinner.style.display = 'none';
                }, 300);
            }, 800);
        }
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('mobile-menu-icon');
        
        if (mobileMenu && menuIcon) {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            
            if (this.mobileMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                mobileMenu.style.maxHeight = '0px';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            
            // Reinitialize icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }
    }

    toggleLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) {
            if (dropdown.classList.contains('hidden')) {
                dropdown.classList.remove('hidden');
                setTimeout(() => {
                    dropdown.classList.remove('opacity-0');
                    dropdown.classList.add('opacity-100');
                }, 10);
            } else {
                this.hideLanguageDropdown();
            }
        }
    }

    hideLanguageDropdown() {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown) {
            dropdown.classList.remove('opacity-100');
            dropdown.classList.add('opacity-0');
            setTimeout(() => {
                dropdown.classList.add('hidden');
            }, 200);
        }
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('afribenki-language', lang);
        this.updateLanguageDisplay();
        this.translatePage();
        this.updateTestimonials();
        this.updateFAQContent();
        
        // Close dropdown
        this.hideLanguageDropdown();

        // Show language change feedback
        this.showToast(lang === 'en' ? 'Language changed to English' : 'Langue changée en français', 'success');
    }

    updateLanguageDisplay() {
        const currentLangElement = document.getElementById('current-language');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLanguage.toUpperCase();
        }

        // Update mobile language buttons
        const langEnMobile = document.getElementById('lang-en-mobile');
        const langFrMobile = document.getElementById('lang-fr-mobile');
        
        if (langEnMobile && langFrMobile) {
            if (this.currentLanguage === 'en') {
                langEnMobile.classList.add('bg-afribenki-teal', 'text-white');
                langEnMobile.classList.remove('border-border', 'hover:bg-muted');
                langFrMobile.classList.remove('bg-afribenki-teal', 'text-white');
                langFrMobile.classList.add('border-border', 'hover:bg-muted');
            } else {
                langFrMobile.classList.add('bg-afribenki-teal', 'text-white');
                langFrMobile.classList.remove('border-border', 'hover:bg-muted');
                langEnMobile.classList.remove('bg-afribenki-teal', 'text-white');
                langEnMobile.classList.add('border-border', 'hover:bg-muted');
            }
        }
    }

    translatePage() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[key];
            
            if (translation && translation[this.currentLanguage]) {
                element.textContent = translation[this.currentLanguage];
            }
        });
    }

    updateTestimonials() {
        const testimonials = [
            {
                en: "Afribenki has transformed my wealth creation approach. The returns have been consistently above my expectations.",
                fr: "Afribenki a transformé mon approche de création de richesse. Les rendements ont constamment dépassé mes attentes."
            },
            {
                en: "The AI makes wealth creation so simple. I love how it automatically rebalances my portfolio based on market conditions.",
                fr: "L'IA rend la création de richesse si simple. J'adore la façon dont elle rééquilibre automatiquement mon portefeuille."
            },
            {
                en: "Finally, a platform that understands African creators. WhatsApp makes everything so accessible.",
                fr: "Enfin, une plateforme qui comprend les créateurs africains. WhatsApp rend tout si accessible."
            }
        ];

        document.querySelectorAll('.testimonial-content').forEach((element, index) => {
            if (testimonials[index]) {
                element.textContent = `"${testimonials[index][this.currentLanguage]}"`;
            }
        });
    }

    updateFAQContent() {
        const faqs = [
            {
                question: {
                    en: "How does Afribenki's AI make investment decisions?",
                    fr: "Comment l'IA d'Afribenki prend-elle des décisions d'investissement ?"
                },
                answer: {
                    en: "Our AI analyzes thousands of data points including market trends, economic indicators, your risk profile, and global events to make optimal investment decisions 24/7.",
                    fr: "Notre IA analyse des milliers de points de données incluant les tendances du marché, les indicateurs économiques, votre profil de risque et les événements mondiaux pour prendre des décisions d'investissement optimales 24h/24."
                }
            },
            {
                question: {
                    en: "Is my money safe with Afribenki?",
                    fr: "Mon argent est-il en sécurité avec Afribenki ?"
                },
                answer: {
                    en: "Yes, your funds are protected with bank-grade security, 256-bit encryption, and regulatory compliance. We partner with licensed financial institutions.",
                    fr: "Oui, vos fonds sont protégés avec une sécurité de niveau bancaire, un chiffrement 256 bits et la conformité réglementaire. Nous travaillons avec des institutions financières agréées."
                }
            },
            {
                question: {
                    en: "How does the WhatsApp integration work?",
                    fr: "Comment fonctionne l'intégration WhatsApp ?"
                },
                answer: {
                    en: "Our AI lives directly in WhatsApp. You can get portfolio updates, investment advice, and manage your wealth through simple chat conversations.",
                    fr: "Notre IA vit directement dans WhatsApp. Vous pouvez obtenir des mises à jour de portefeuille, des conseils d'investissement et gérer votre richesse via de simples conversations de chat."
                }
            },
            {
                question: {
                    en: "Can I withdraw my money anytime?",
                    fr: "Puis-je retirer mon argent à tout moment ?"
                },
                answer: {
                    en: "Yes, you have full control over your investments. You can withdraw your funds at any time through WhatsApp or our platform. Most withdrawals are processed within 1-2 business days.",
                    fr: "Oui, vous avez un contrôle total sur vos investissements. Vous pouvez retirer vos fonds à tout moment via WhatsApp ou notre plateforme. La plupart des retraits sont traités dans un délai de 1 à 2 jours ouvrables."
                }
            },
            {
                question: {
                    en: "How do I get started with Afribenki?",
                    fr: "Comment commencer avec Afribenki ?"
                },
                answer: {
                    en: "Getting started is simple! Click 'Start Creating Wealth', complete our quick risk assessment, fund your account with as little as $10, and our AI will start building your portfolio.",
                    fr: "Commencer est simple ! Cliquez sur 'Commencer à créer de la richesse', complétez notre évaluation rapide des risques, financez votre compte avec seulement 10$, et notre IA commencera à construire votre portefeuille."
                }
            },
            {
                question: {
                    en: "What markets does Afribenki invest in?",
                    fr: "Dans quels marchés Afribenki investit-elle ?"
                },
                answer: {
                    en: "We invest across African markets including stocks, bonds, money market funds, and select global opportunities. Our AI focuses on high-growth African economies.",
                    fr: "Nous investissons dans les marchés africains incluant actions, obligations, fonds du marché monétaire et opportunités mondiales sélectionnées. Notre IA se concentre sur les économies africaines à forte croissance."
                }
            }
        ];

        document.querySelectorAll('.faq-question').forEach((element, index) => {
            if (faqs[index]) {
                element.textContent = faqs[index].question[this.currentLanguage];
            }
        });

        document.querySelectorAll('.faq-answer').forEach((element, index) => {
            if (faqs[index]) {
                element.textContent = faqs[index].answer[this.currentLanguage];
            }
        });

        // Update "Have more questions?" text
        const moreQuestionsElement = document.querySelector('.more-questions');
        if (moreQuestionsElement) {
            moreQuestionsElement.textContent = this.currentLanguage === 'fr' ? 
                "Vous avez d'autres questions ?" : "Have more questions?";
        }
    }

    openWhatsAppDemo() {
        // Open WhatsApp with pre-filled message based on language
        const message = this.currentLanguage === 'fr' 
            ? encodeURIComponent("Salut Afribenki ! Je suis intéressé par commencer mon parcours de création de richesse. Pouvez-vous me dire plus ?")
            : encodeURIComponent("Hi Afribenki! I'm interested in starting my wealth creation journey. Can you tell me more?");
        
        // Replace with actual WhatsApp number
        const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
        window.open(whatsappUrl, '_blank');
        
        // Show confirmation
        this.showToast(
            this.currentLanguage === 'fr' 
                ? 'Redirection vers WhatsApp...' 
                : 'Redirecting to WhatsApp...', 
            'info'
        );
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `px-6 py-3 rounded-md text-white transform transition-all duration-300 translate-x-full shadow-lg ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
        }`;
        toast.textContent = message;
        
        const container = document.getElementById('toast-container');
        container.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.classList.remove('translate-x-full');
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            toast.classList.add('translate-x-full');
            setTimeout(() => {
                if (container.contains(toast)) {
                    container.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    showComingSoon() {
        this.showToast(
            this.currentLanguage === 'fr' 
                ? 'Bientôt disponible ! Nous travaillons dur pour vous offrir la meilleure expérience créateur.'
                : 'Coming soon! We\'re working hard to bring you the best creator experience.', 
            'info'
        );
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    closeMobileMenu() {
        if (this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }
}

// Global functions for HTML event handlers
function openWhatsAppDemo() {
    app.openWhatsAppDemo();
}

function changeLanguage(lang) {
    app.changeLanguage(lang);
}

function showComingSoon() {
    app.showComingSoon();
}

function scrollToTop() {
    app.scrollToTop();
}

function closeMobileMenu() {
    app.closeMobileMenu();
}

// Initialize the app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new AfribenkiLanding();
});

// Add some performance optimizations
window.addEventListener('load', () => {
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1594736797933-d0d4182cf62d?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=600&h=400&fit=crop&crop=center'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScrollPolyfill = (target) => {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const progressPercentage = Math.min(progress / duration, 1);
            
            // Easing function
            const easeInOutCubic = progressPercentage < 0.5 
                ? 4 * progressPercentage * progressPercentage * progressPercentage
                : (progressPercentage - 1) * (2 * progressPercentage - 2) * (2 * progressPercentage - 2) + 1;
            
            window.scrollTo(0, startPosition + (distance * easeInOutCubic));
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };
        
        window.requestAnimationFrame(step);
    };

    // Override smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollPolyfill(target);
            }
        });
    });
}