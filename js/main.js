/**
 * Frontiers of Physical Chemistry 2026 (SNBNCBS, Kolkata)
 * Main Interactive Features Controller
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header & Back to Top on Scroll
    const header = document.querySelector('.site-header');
    const backToTopBtn = document.getElementById('back-to-top');

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      if (scrollY > 450) {
        backToTopBtn?.classList.add('visible');
      } else {
        backToTopBtn?.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Mobile Drawer Navigation
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        mobileToggle.classList.toggle('open', isOpen);
        mobileToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          mobileToggle.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    // 3. Scrollspy Navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function navHighlight() {
      const scrollPosition = window.scrollY + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }

    window.addEventListener('scroll', navHighlight, { passive: true });

    // 4. Presenter Tabs Switcher (Invited Speakers vs Poster Presenters)
    const presenterTabBtns = document.querySelectorAll('.presenter-tab-btn');
    const presenterPanes = document.querySelectorAll('.presenter-pane');

    presenterTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        presenterTabBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        presenterPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const targetPane = document.getElementById(targetTab);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });

    // 5. Back to Top Smooth Scroll
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // 6. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (questionBtn && answer) {
        questionBtn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');

          // Close all items
          faqItems.forEach(other => {
            other.classList.remove('open');
            const otherAns = other.querySelector('.faq-answer');
            const otherBtn = other.querySelector('.faq-question');
            if (otherAns) otherAns.style.maxHeight = null;
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          });

          // Open current if it was not open
          if (!isOpen) {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            questionBtn.setAttribute('aria-expanded', 'true');
          }
        });
      }
    });
  });

  // Share Conference Link Helper
  window.shareConference = function () {
    if (navigator.share) {
      navigator.share({
        title: 'Frontiers of Physical Chemistry 2026',
        text: 'Join the flagship national conference on Physical Chemistry at SNBNCBS, Kolkata (Oct 28–31, 2026)!',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Conference website link copied to clipboard!');
      });
    }
  };
})();
