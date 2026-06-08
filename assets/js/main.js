// =============================================
// 横琴真研健康科学中心 · 全站交互
// =============================================

(function () {
  'use strict';

  // ===== Navbar 滚动效果 =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 8) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== 移动端菜单切换 =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('show');
    });

    // 点击菜单项后关闭
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // 点击外部关闭
    document.addEventListener('click', (e) => {
      if (
        navLinks.classList.contains('show') &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        navLinks.classList.remove('show');
      }
    });

    // ESC 关闭
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') navLinks.classList.remove('show');
    });
  }

  // ===== 当前页面高亮 =====
  const currentPage =
    (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== 进场动画（IntersectionObserver） =====
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    const animateSelectors = '.card, .feature-row, .stat, .contact-item';
    document.querySelectorAll(animateSelectors).forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .55s ease, transform .55s ease';
      observer.observe(el);
    });
  }

  // ===== 锚点平滑滚动并补偿固定导航 =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
