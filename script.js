// 语言切换功能
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    
    // 更新HTML lang属性
    document.documentElement.lang = newLang;
    
    // 只切换导航菜单和按钮的语言
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    if (newLang === 'en') {
        // 隐藏中文导航链接，显示英文导航链接
        navLinks.forEach(link => {
            if (link.getAttribute('data-lang') === 'zh') {
                link.style.display = 'none';
            } else if (link.getAttribute('data-lang') === 'en') {
                link.style.display = 'inline';
            }
        });
        
        // 隐藏中文按钮，显示英文按钮
        ctaButtons.forEach(button => {
            if (button.getAttribute('data-lang') === 'zh') {
                button.style.display = 'none';
            } else if (button.getAttribute('data-lang') === 'en') {
                button.style.display = 'inline';
            }
        });
        
        // 隐藏中文"阅读更多"链接，显示英文"阅读更多"链接
        readMoreLinks.forEach(link => {
            if (link.getAttribute('data-lang') === 'zh') {
                link.style.display = 'none';
            } else if (link.getAttribute('data-lang') === 'en') {
                link.style.display = 'inline';
            }
        });
    } else {
        // 显示中文导航链接，隐藏英文导航链接
        navLinks.forEach(link => {
            if (link.getAttribute('data-lang') === 'zh') {
                link.style.display = 'inline';
            } else if (link.getAttribute('data-lang') === 'en') {
                link.style.display = 'none';
            }
        });
        
        // 显示中文按钮，隐藏英文按钮
        ctaButtons.forEach(button => {
            if (button.getAttribute('data-lang') === 'zh') {
                button.style.display = 'inline';
            } else if (button.getAttribute('data-lang') === 'en') {
                button.style.display = 'none';
            }
        });
        
        // 显示中文"阅读更多"链接，隐藏英文"阅读更多"链接
        readMoreLinks.forEach(link => {
            if (link.getAttribute('data-lang') === 'zh') {
                link.style.display = 'inline';
            } else if (link.getAttribute('data-lang') === 'en') {
                link.style.display = 'none';
            }
        });
    }
    
    // 更新语言切换按钮文本
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
        if (newLang === 'en') {
            langToggle.textContent = '中文';
        } else {
            langToggle.textContent = 'EN';
        }
    }
}

// 移动端菜单切换
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
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

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动时导航栏的透明度变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // 为故事卡片添加点击事件
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('.read-more');
            if (link) {
                link.click();
            }
        });
    });
    
    // 为知识卡片添加悬停效果
    document.querySelectorAll('.knowledge-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 