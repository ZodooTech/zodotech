/**
 * ZodoTech - Navigation Controller
 * Sticky header observer, mobile drawer toggle, accessibility keyboard traps
 */

import { $, $$ } from './utilities.js';

export function initNavigation() {
  const header = $('.site-header');
  const menuToggle = $('#menuToggle');
  const drawerClose = $('#drawerClose');
  const mobileDrawer = $('#mobileDrawer');
  const drawerBackdrop = $('#drawerBackdrop');
  const drawerLinks = $$('.drawer-link');

  // 1. Sticky header scroll styling
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile drawer open/close
  if (menuToggle && mobileDrawer && drawerBackdrop) {
    const openDrawer = () => {
      mobileDrawer.classList.add('open');
      drawerBackdrop.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Focus on first link or close button inside drawer
      if (drawerClose) drawerClose.focus();
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      drawerBackdrop.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      menuToggle.focus();
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) closeDrawer();
      else openDrawer();
    });

    if (drawerClose) {
      drawerClose.addEventListener('click', closeDrawer);
    }

    drawerBackdrop.addEventListener('click', closeDrawer);

    // Close on clicking any drawer navigation link
    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    // Close drawer on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // 3. Highlight current page in navigation
  highlightCurrentPage();
}

function highlightCurrentPage() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const navLinks = $$('.nav-link, .drawer-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Normalize links
    const linkPath = href.replace(/\/+$/, '') || '/';
    if (
      linkPath === currentPath || 
      (currentPath.endsWith(linkPath) && linkPath !== '/' && linkPath !== '') ||
      (currentPath === '/' && (linkPath === 'index.html' || linkPath === './index.html'))
    ) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
