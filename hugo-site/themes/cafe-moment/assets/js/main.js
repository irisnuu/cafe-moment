// 语言切换功能
function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('data-lang') || 'zh';
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    
    document.documentElement.setAttribute('data-lang', newLang);
    
    // 切换导航菜单语言
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const zhText = link.getAttribute('data-zh');
        const enText = link.getAttribute('data-en');
        if (zhText && enText) {
            link.textContent = newLang === 'en' ? enText : zhText;
        }
    });
    
    // 切换语言切换按钮文本
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        const zhText = langToggle.getAttribute('data-zh');
        const enText = langToggle.getAttribute('data-en');
        if (zhText && enText) {
            langToggle.textContent = newLang === 'en' ? enText : zhText;
        }
    }
    
    // 切换按钮语言
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        const zhText = button.getAttribute('data-zh');
        const enText = button.getAttribute('data-en');
        if (zhText && enText) {
            button.textContent = newLang === 'en' ? enText : zhText;
        }
    });
    
    // 切换阅读更多链接语言
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        const zhText = link.getAttribute('data-zh');
        const enText = link.getAttribute('data-en');
        if (zhText && enText) {
            link.textContent = newLang === 'en' ? enText : zhText;
        }
    });
}

// 平滑滚动
document.addEventListener('DOMContentLoaded', function() {
    // 为所有内部链接添加平滑滚动
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// 页面加载完成后的初始化
window.addEventListener('load', function() {
    // 设置默认语言
    document.documentElement.setAttribute('data-lang', 'zh');
    
    // 添加语言切换按钮事件监听
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}); 