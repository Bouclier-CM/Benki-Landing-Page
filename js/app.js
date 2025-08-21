// Benki Finance Landing Page - AI-Powered Wealth Assistant
// Pure JavaScript Implementation

class BenkiFinance {
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
        this.setupEarlyAccessModal();
    }

    initializeTranslations() {
        return {
            // Navigation
            'nav.earlyAccess': { en: 'Get Early Access', fr: 'Accès Anticipé' },

            // Hero Section
            'hero.trustBadge': { en: 'Regulated & Licensed • Built for Africa', fr: 'Réglementé et Agréé • Conçu pour l\'Afrique' },
            'hero.headline': { en: 'AI-powered wealth assistant for Africans on', fr: 'Assistant de richesse IA pour les Africains sur' },
            'hero.subheadline': { en: 'Invest in high-yielding African markets through simple chats. Our AI assistant helps you build wealth with regulated funds and licensed broker partners.', fr: 'Investissez dans les marchés africains à haut rendement grâce à des chats simples. Notre assistant IA vous aide à construire votre richesse avec des fonds réglementés et des partenaires courtiers agréés.' },
            'hero.primaryCTA': { en: 'Get Early Access - Free', fr: 'Accès Anticipé - Gratuit' },
            'hero.secondaryCTA': { en: 'See Chat Demo', fr: 'Voir la Démo Chat' },
            'hero.stat1': { en: 'Avg African Market Yield', fr: 'Rendement Moyen Marché Africain' },
            'hero.stat2': { en: 'AI Assistant Available', fr: 'Assistant IA Disponible' },
            'hero.stat3': { en: 'Regulated Partners', fr: 'Partenaires Réglementés' },

            // Chat Demo Section
            'chatDemo.title': { en: 'See How It Works - Chat with Your AI Wealth Assistant', fr: 'Voir Comment Ça Marche - Chattez avec Votre Assistant Richesse IA' },
            'chatDemo.subtitle': { en: 'Simple conversations that build wealth. No complex apps - just chat on platforms you already use.', fr: 'Des conversations simples qui construisent la richesse. Pas d\'applications complexes - juste chattez sur les plateformes que vous utilisez déjà.' },
            'chatDemo.online': { en: 'Online', fr: 'En ligne' },
            'chatDemo.message1': { en: '👋 Hi! I\'m your AI wealth assistant. I can help you invest in African markets. What\'s your investment goal?', fr: '👋 Salut ! Je suis votre assistant richesse IA. Je peux vous aider à investir dans les marchés africains. Quel est votre objectif d\'investissement ?' },
            'chatDemo.userMessage1': { en: 'I want to start with $100 and grow it safely', fr: 'Je veux commencer avec 100$ et le faire croître en toute sécurité' },
            'chatDemo.message2': { en: 'Perfect! Based on your profile, I recommend:', fr: 'Parfait ! Basé sur votre profil, je recommande :' },
            'chatDemo.message3': { en: 'Shall I create this portfolio for you?', fr: 'Dois-je créer ce portefeuille pour vous ?' },
            'chatDemo.userMessage2': { en: 'Yes, let\'s do it!', fr: 'Oui, faisons-le !' },
            'chatDemo.message4': { en: '🎉 Portfolio created! You\'ll get daily updates on your growth. Welcome to wealth building!', fr: '🎉 Portefeuille créé ! Vous recevrez des mises à jour quotidiennes sur votre croissance. Bienvenue dans la construction de richesse !' },
            'chatDemo.inputPlaceholder': { en: 'Type your message...', fr: 'Tapez votre message...' },
            'chatDemo.feature1.title': { en: 'Instant Market Analysis', fr: 'Analyse de Marché Instantanée' },
            'chatDemo.feature1.description': { en: 'Get real-time insights on African markets, from Nigerian bonds to Kenyan equities, all through simple chat.', fr: 'Obtenez des informations en temps réel sur les marchés africains, des obligations nigérianes aux actions kényanes, le tout via un chat simple.' },
            'chatDemo.feature2.title': { en: 'Regulated & Secure', fr: 'Réglementé et Sécurisé' },
            'chatDemo.feature2.description': { en: 'All investments go through licensed brokers and regulated funds. Your money is protected by African financial authorities.', fr: 'Tous les investissements passent par des courtiers agréés et des fonds réglementés. Votre argent est protégé par les autorités financières africaines.' },
            'chatDemo.feature3.title': { en: 'Portfolio Optimization', fr: 'Optimisation de Portefeuille' },
            'chatDemo.feature3.description': { en: 'AI continuously optimizes your portfolio based on market conditions and your goals. Sit back and watch your wealth grow.', fr: 'L\'IA optimise continuellement votre portefeuille en fonction des conditions du marché et de vos objectifs. Asseyez-vous et regardez votre richesse croître.' },
            'chatDemo.cta': { en: 'Start Building Wealth Today', fr: 'Commencez à Construire la Richesse Aujourd\'hui' },

            // How It Works
            'howItWorks.title': { en: 'How Benki Finance Works', fr: 'Comment Fonctionne Benki Finance' },
            'howItWorks.subtitle': { en: 'Building wealth in African markets has never been this simple. Here\'s how our AI assistant works for you.', fr: 'Construire la richesse dans les marchés africains n\'a jamais été aussi simple. Voici comment notre assistant IA fonctionne pour vous.' },
            'howItWorks.step1.title': { en: 'Chat to Start', fr: 'Chattez pour Commencer' },
            'howItWorks.step1.description': { en: 'Message our AI assistant on WhatsApp or Telegram. No apps to download - use platforms you already love.', fr: 'Envoyez un message à notre assistant IA sur WhatsApp ou Telegram. Pas d\'applications à télécharger - utilisez les plateformes que vous aimez déjà.' },
            'howItWorks.step2.title': { en: 'AI Analyzes', fr: 'L\'IA Analyse' },
            'howItWorks.step2.description': { en: 'Our AI learns your goals, risk tolerance, and creates a personalized African market investment strategy.', fr: 'Notre IA apprend vos objectifs, votre tolérance au risque et crée une stratégie d\'investissement personnalisée du marché africain.' },
            'howItWorks.step3.title': { en: 'Wealth Grows', fr: 'La Richesse Grandit' },
            'howItWorks.step3.description': { en: 'Watch your portfolio grow with daily updates. Withdraw anytime or reinvest for compound growth.', fr: 'Regardez votre portefeuille croître avec des mises à jour quotidiennes. Retirez à tout moment ou réinvestissez pour une croissance composée.' },
            'howItWorks.cta': { en: 'Get Early Access Now', fr: 'Obtenir l\'Accès Anticipé Maintenant' },
            'howItWorks.ctaSubtext': { en: 'Join the waitlist - launching soon!', fr: 'Rejoignez la liste d\'attente - lancement bientôt !' },

            // Trust Section
            'trust.title': { en: 'Built on Trust & Regulation', fr: 'Construit sur la Confiance et la Réglementation' },
            'trust.subtitle': { en: 'Your investments are protected by Africa\'s leading financial institutions and regulatory bodies. We partner only with licensed brokers and regulated funds.', fr: 'Vos investissements sont protégés par les principales institutions financières et organismes de réglementation d\'Afrique. Nous ne nous associons qu\'avec des courtiers agréés et des fonds réglementés.' },
            'trust.regulation.title': { en: 'Fully Regulated', fr: 'Entièrement Réglementé' },
            'trust.regulation.description': { en: 'Licensed by Securities and Exchange Commission (SEC) Nigeria, Capital Markets Authority (CMA) Kenya, and Financial Sector Conduct Authority (FSCA) South Africa.', fr: 'Agréé par la Commission des Valeurs Mobilières et des Changes (SEC) Nigeria, l\'Autorité des Marchés de Capitaux (CMA) Kenya, et l\'Autorité de Conduite du Secteur Financier (FSCA) Afrique du Sud.' },
            'trust.regulation.badge': { en: '✓ Multi-jurisdiction compliance', fr: '✓ Conformité multi-juridictionnelle' },
            'trust.partners.title': { en: 'Licensed Broker Partners', fr: 'Partenaires Courtiers Agréés' },
            'trust.partners.description': { en: 'We work exclusively with Tier 1 brokers: Stanbic IBTC, Standard Bank, Equity Bank, and other regulated financial institutions across Africa.', fr: 'Nous travaillons exclusivement avec des courtiers de niveau 1 : Stanbic IBTC, Standard Bank, Equity Bank, et d\'autres institutions financières réglementées à travers l\'Afrique.' },
            'trust.partners.badge': { en: '✓ Bank-grade security', fr: '✓ Sécurité de niveau bancaire' },
            'trust.protection.title': { en: 'Fund Protection', fr: 'Protection des Fonds' },
            'trust.protection.description': { en: 'Your funds are held in segregated accounts with regulated custodians. Protected by investor compensation schemes up to $50,000 per account.', fr: 'Vos fonds sont détenus dans des comptes séparés avec des dépositaires réglementés. Protégés par des régimes de compensation des investisseurs jusqu\'à 50 000 $ par compte.' },
            'trust.protection.badge': { en: '✓ Segregated custody', fr: '✓ Garde séparée' },
            'trust.regulators.title': { en: 'Regulated by Leading African Financial Authorities', fr: 'Réglementé par les Principales Autorités Financières Africaines' },

            // Testimonials
            'testimonials.title': { en: 'What Early Users & Advisors Say', fr: 'Ce que Disent les Premiers Utilisateurs et Conseillers' },
            'testimonials.subtitle': { en: 'Join the growing community building wealth through AI-powered investing', fr: 'Rejoignez la communauté croissante qui construit la richesse grâce à l\'investissement alimenté par l\'IA' },

            // FAQ
            'faq.title': { en: 'Frequently Asked Questions', fr: 'Questions Fréquemment Posées' },
            'faq.subtitle': { en: 'Everything you need to know about investing with Benki Finance', fr: 'Tout ce que vous devez savoir sur l\'investissement avec Benki Finance' },

            // Final CTA
            'finalCTA.title': { en: 'Ready to Build Wealth with AI?', fr: 'Prêt à Construire la Richesse avec l\'IA ?' },
            'finalCTA.subtitle': { en: 'Join the waitlist for early access to Africa\'s first AI-powered wealth assistant. Start building your future today.', fr: 'Rejoignez la liste d\'attente pour un accès anticipé au premier assistant de richesse alimenté par l\'IA d\'Afrique. Commencez à construire votre avenir aujourd\'hui.' },
            'finalCTA.primaryCTA': { en: 'Get Early Access - Free', fr: 'Accès Anticipé - Gratuit' },
            'finalCTA.secondaryCTA': { en: 'Watch Demo Again', fr: 'Regarder la Démo Encore' },
            'finalCTA.trust1': { en: 'Fully Regulated', fr: 'Entièrement Réglementé' },
            'finalCTA.trust2': { en: 'Funds Protected', fr: 'Fonds Protégés' },
            'finalCTA.trust3': { en: 'AI Optimized', fr: 'Optimisé par IA' },

            // Footer
            'footer.description': { en: 'AI-powered wealth assistant for Africans. Invest in high-yielding African markets through WhatsApp & Telegram.', fr: 'Assistant de richesse alimenté par l\'IA pour les Africains. Investissez dans les marchés africains à haut rendement via WhatsApp et Telegram.' },
            'footer.product.title': { en: 'Product', fr: 'Produit' },
            'footer.product.howItWorks': { en: 'How It Works', fr: 'Comment Ça Marche' },
            'footer.product.safety': { en: 'Safety & Trust', fr: 'Sécurité et Confiance' },
            'footer.product.earlyAccess': { en: 'Early Access', fr: 'Accès Anticipé' },
            'footer.company.title': { en: 'Company', fr: 'Entreprise' },
            'footer.company.about': { en: 'About Us', fr: 'À Propos' },
            'footer.company.careers': { en: 'Careers', fr: 'Carrières' },
            'footer.company.contact': { en: 'Contact', fr: 'Contact' },
            'footer.legal.title': { en: 'Legal', fr: 'Légal' },
            'footer.legal.terms': { en: 'Terms of Service', fr: 'Conditions d\'Utilisation' },
            'footer.legal.privacy': { en: 'Privacy Policy', fr: 'Politique de Confidentialité' },
            'footer.legal.regulatory': { en: 'Regulatory Info', fr: 'Info Réglementaire' },
            'footer.disclaimer': { en: 'Regulated by SEC Nigeria, CMA Kenya, FSCA South Africa', fr: 'Réglementé par SEC Nigeria, CMA Kenya, FSCA Afrique du Sud' }
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
            if (languageDropdown && languageToggle && !languageToggle.contains(e.target)) {
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
            if (el.classList.contains('animate-fade-in-left')) {
                el.style.transform = 'translateX(-30px)';
            } else if (el.classList.contains('animate-fade-in-right')) {
                el.style.transform = 'translateX(30px)';
            } else {
                el.style.transform = 'translateY(30px)';
            }
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

    setupEarlyAccessModal() {
        // Set up early access form
        const form = document.getElementById('early-access-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleEarlyAccessSubmit(e));
        }

        // Close modal when clicking outside
        const modal = document.getElementById('early-access-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeEarlyAccessModal();
                }
            });
        }
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
        const savedLanguage = localStorage.getItem('benki-language');
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
        const iconMenu = document.getElementById('mobile-icon-menu');
        const iconClose = document.getElementById('mobile-icon-close');
        
        if (mobileMenu) {
            this.mobileMenuOpen = !this.mobileMenuOpen;
            
            if (this.mobileMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
            } else {
                mobileMenu.style.maxHeight = '0px';
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300);
            }

            if (iconMenu && iconClose) {
                iconMenu.classList.toggle('hidden', this.mobileMenuOpen);
                iconClose.classList.toggle('hidden', !this.mobileMenuOpen);
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
        localStorage.setItem('benki-language', lang);
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
                en: "Finally, an investment platform that speaks my language - literally! The WhatsApp interface makes investing in African markets so simple. I've grown my portfolio by 18% in 6 months.",
                fr: "Enfin, une plateforme d'investissement qui parle ma langue - littéralement ! L'interface WhatsApp rend l'investissement dans les marchés africains si simple. J'ai fait croître mon portefeuille de 18% en 6 mois."
            },
            {
                en: "As a wealth advisor, I'm impressed by Benki's approach to African market access. The AI's portfolio optimization rivals institutional-grade platforms, but with chat simplicity.",
                fr: "En tant que conseiller en patrimoine, je suis impressionné par l'approche de Benki pour l'accès aux marchés africains. L'optimisation de portefeuille de l'IA rivalise avec les plateformes de niveau institutionnel, mais avec la simplicité du chat."
            },
            {
                en: "Benki Finance is exactly what African investors needed. No complex apps, just smart AI managing my money across the continent's best opportunities. The future of investing is here.",
                fr: "Benki Finance est exactement ce dont les investisseurs africains avaient besoin. Pas d'applications complexes, juste une IA intelligente gérant mon argent à travers les meilleures opportunités du continent. L'avenir de l'investissement est ici."
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
                    en: "Is my money safe with Benki Finance?",
                    fr: "Mon argent est-il en sécurité avec Benki Finance ?"
                },
                answer: {
                    en: "Absolutely. Your funds are held in segregated accounts with regulated custodians and protected by investor compensation schemes. We partner only with licensed brokers regulated by African financial authorities (SEC Nigeria, CMA Kenya, FSCA South Africa). Your investments are backed by bank-grade security and regulatory oversight.",
                    fr: "Absolument. Vos fonds sont détenus dans des comptes séparés avec des dépositaires réglementés et protégés par des régimes de compensation des investisseurs. Nous ne nous associons qu'avec des courtiers agréés réglementés par les autorités financières africaines (SEC Nigeria, CMA Kenya, FSCA Afrique du Sud). Vos investissements sont soutenus par une sécurité de niveau bancaire et une surveillance réglementaire."
                }
            },
            {
                question: {
                    en: "How does the AI assistant work?",
                    fr: "Comment fonctionne l'assistant IA ?"
                },
                answer: {
                    en: "Our AI assistant analyzes your financial goals, risk tolerance, and market conditions to create personalized investment strategies. It monitors African markets 24/7, automatically rebalances your portfolio, and sends you updates via WhatsApp or Telegram. Simply chat with it like you would a financial advisor - no technical knowledge required.",
                    fr: "Notre assistant IA analyse vos objectifs financiers, votre tolérance au risque et les conditions du marché pour créer des stratégies d'investissement personnalisées. Il surveille les marchés africains 24h/24 et 7j/7, rééquilibre automatiquement votre portefeuille et vous envoie des mises à jour via WhatsApp ou Telegram. Chattez simplement avec lui comme vous le feriez avec un conseiller financier - aucune connaissance technique requise."
                }
            },
            {
                question: {
                    en: "Who are your broker partners?",
                    fr: "Qui sont vos partenaires courtiers ?"
                },
                answer: {
                    en: "We partner exclusively with Tier 1, regulated brokers across Africa including Stanbic IBTC Securities, Standard Bank Securities, Equity Bank, ARM Securities, and other licensed financial institutions. All partners are regulated by their respective financial authorities and maintain the highest standards of investor protection.",
                    fr: "Nous nous associons exclusivement avec des courtiers de niveau 1 réglementés à travers l'Afrique, y compris Stanbic IBTC Securities, Standard Bank Securities, Equity Bank, ARM Securities, et d'autres institutions financières agréées. Tous les partenaires sont réglementés par leurs autorités financières respectives et maintiennent les plus hauts standards de protection des investisseurs."
                }
            },
            {
                question: {
                    en: "What's the minimum investment amount?",
                    fr: "Quel est le montant minimum d'investissement ?"
                },
                answer: {
                    en: "You can start investing with as little as $50 (or local currency equivalent). This makes wealth building accessible to everyone, regardless of income level. There are no hidden fees - just a transparent 0.75% annual management fee on your portfolio value.",
                    fr: "Vous pouvez commencer à investir avec aussi peu que 50 $ (ou l'équivalent en monnaie locale). Cela rend la construction de richesse accessible à tous, quel que soit le niveau de revenu. Il n'y a pas de frais cachés - juste des frais de gestion annuels transparents de 0,75% sur la valeur de votre portefeuille."
                }
            },
            {
                question: {
                    en: "Can I withdraw my money anytime?",
                    fr: "Puis-je retirer mon argent à tout moment ?"
                },
                answer: {
                    en: "Yes, you have full control over your investments. You can withdraw funds anytime by simply messaging the AI assistant. Most withdrawals are processed within 1-3 business days, depending on the investment type and your bank's processing times.",
                    fr: "Oui, vous avez un contrôle total sur vos investissements. Vous pouvez retirer des fonds à tout moment en envoyant simplement un message à l'assistant IA. La plupart des retraits sont traités dans un délai de 1 à 3 jours ouvrables, selon le type d'investissement et les délais de traitement de votre banque."
                }
            },
            {
                question: {
                    en: "Which African markets do you invest in?",
                    fr: "Dans quels marchés africains investissez-vous ?"
                },
                answer: {
                    en: "We invest across major African markets including Nigeria (NSE), Kenya (NSE), South Africa (JSE), Ghana (GSE), and Egypt (EGX). Our AI focuses on government bonds, corporate bonds, blue-chip equities, REITs, and money market funds with strong growth potential and regulatory oversight.",
                    fr: "Nous investissons dans les principaux marchés africains, y compris le Nigeria (NSE), le Kenya (NSE), l'Afrique du Sud (JSE), le Ghana (GSE) et l'Égypte (EGX). Notre IA se concentre sur les obligations gouvernementales, les obligations d'entreprise, les actions de premier plan, les REIT et les fonds du marché monétaire avec un fort potentiel de croissance et une surveillance réglementaire."
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

    openEarlyAccess() {
        const modal = document.getElementById('early-access-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            // Focus on email input
            setTimeout(() => {
                const emailInput = document.getElementById('email');
                if (emailInput) emailInput.focus();
            }, 100);
        }
    }

    closeEarlyAccessModal() {
        const modal = document.getElementById('early-access-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    handleEarlyAccessSubmit(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        
        if (!email) {
            this.showToast('Please enter your email address', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showToast('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate API call
        this.showToast('Adding you to the waitlist...', 'info');
        
        setTimeout(() => {
            this.closeEarlyAccessModal();
            this.showToast(
                this.currentLanguage === 'fr' 
                    ? 'Merci ! Vous êtes sur la liste d\'attente. Nous vous contacterons bientôt !'
                    : 'Thank you! You\'re on the waitlist. We\'ll be in touch soon!', 
                'success'
            );
            
            // Clear form
            document.getElementById('early-access-form').reset();
            
            // Store lead data (in real app, this would go to backend)
            console.log('Early access signup:', { email, phone, country, timestamp: new Date().toISOString() });
        }, 1500);
    }

    showChatDemo() {
        // Scroll to demo section
        const demoSection = document.getElementById('chat-demo');
        if (demoSection) {
            demoSection.scrollIntoView({ behavior: 'smooth' });
        }
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
function openEarlyAccess() {
    app.openEarlyAccess();
}

function closeEarlyAccessModal() {
    app.closeEarlyAccessModal();
}

function changeLanguage(lang) {
    app.changeLanguage(lang);
}

function showChatDemo() {
    app.showChatDemo();
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
    app = new BenkiFinance();
});

// Add some performance optimizations
window.addEventListener('load', () => {
    // Preload critical images
    const criticalImages = [
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1594736797933-d0d4182cf62d?w=600&h=600&fit=crop&crop=center'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Enhanced accessibility
document.addEventListener('keydown', (e) => {
    // Close modal on Escape key
    if (e.key === 'Escape') {
        const modal = document.getElementById('early-access-modal');
        if (modal && !modal.classList.contains('hidden')) {
            app.closeEarlyAccessModal();
        }
    }
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