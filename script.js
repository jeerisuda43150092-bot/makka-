document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar & Active States
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link, .nav-cta');
    const icon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 3. Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Language Switcher (TH/EN)
    const translations = {
        th: {
            nav_menu: "เมนูของเรา",
            nav_gallery: "แกลลอรี่",
            nav_visit: "การเดินทาง",
            hero_title_1: "แม้กก้า",
            hero_title_2: "นมละมุน",
            hero_desc: "ยินดีต้อนรับสู่พื้นที่แห่งความสุข",
            hero_cta: "ดูแผนที่การเดินทาง",
            menu_title: "เมนูแนะนำ",
            menu_1: "นมละมุนซิกเนเจอร์",
            menu_2: "ปังปิ้งเนยนม",
            menu_3: "บิงซูสตรอเบอร์รี่",
            menu_4: "ชาไทยพรีเมียม",
            menu_5: "นมชมพูเย็น",
            menu_6: "โกโก้เข้มข้น",
            menu_7: "มัทฉะลาเต้",
            menu_8: "ปังปิ้งแยมสตรอเบอร์รี่",
            menu_9: "ปังเย็นภูเขาไฟ",
            menu_10: "ชาเขียวนม",
            menu_11: "นมสดคาราเมล",
            menu_12: "ครอฟเฟิลเนยสด",
            menu_13: "อิตาเลียนโซดา",
            menu_14: "นมสดร้อน",
            gallery_title: "มุมโปรดที่แม้กก้า",
            visit_title: "แวะมาหาเรา",
            visit_desc: "สัมผัสบรรยากาศอบอุ่น และเครื่องดื่มละมุนลิ้นได้ทุกวัน",
            visit_hours_title: "เวลาเปิด-ปิด",
            visit_hours_text: "เปิดทุกวัน 10:00 - 20:00 น.",
            visit_loc_title: "ที่ตั้งร้าน",
            visit_loc_text: "ร้านแม้กก้านมละมุน<br>(หากมีรายละเอียดซอย/ถนน สามารถเพิ่มเติมที่นี่)",
            visit_contact_title: "ติดต่อสอบถาม"
        },
        en: {
            nav_menu: "Our Menu",
            nav_gallery: "Gallery",
            nav_visit: "Visit Us",
            hero_title_1: "Makka ",
            hero_title_2: "Nom Lamun",
            hero_desc: "Welcome to our space of happiness",
            hero_cta: "View Map & Directions",
            menu_title: "Signature Menu",
            menu_1: "Makka Signature Milk",
            menu_2: "Butter & Milk Toast",
            menu_3: "Strawberry Bingsu",
            menu_4: "Premium Thai Tea",
            menu_5: "Iced Pink Milk",
            menu_6: "Rich Cocoa",
            menu_7: "Matcha Latte",
            menu_8: "Strawberry Jam Toast",
            menu_9: "Volcano Shaved Ice",
            menu_10: "Green Tea Milk",
            menu_11: "Caramel Fresh Milk",
            menu_12: "Butter Croffle",
            menu_13: "Italian Soda",
            menu_14: "Hot Fresh Milk",
            gallery_title: "Favorite Corners",
            visit_title: "Visit Us",
            visit_desc: "Experience our warm atmosphere and smooth drinks every day",
            visit_hours_title: "Opening Hours",
            visit_hours_text: "Open Daily 10:00 - 20:00",
            visit_loc_title: "Location",
            visit_loc_text: "Makka Nom Lamun Cafe<br>(Add street/alley details here)",
            visit_contact_title: "Contact Us"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'th';
    const btnTh = document.getElementById('lang-th');
    const btnEn = document.getElementById('lang-en');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update button active states
        if (lang === 'th') {
            btnTh.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnTh.classList.remove('active');
        }
        
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    // Initialize language
    updateLanguage(currentLang);

    btnTh.addEventListener('click', () => {
        if (currentLang !== 'th') {
            currentLang = 'th';
            updateLanguage(currentLang);
        }
    });

    btnEn.addEventListener('click', () => {
        if (currentLang !== 'en') {
            currentLang = 'en';
            updateLanguage(currentLang);
        }
    });
});
