/**
 * ZodoTech - Interactions & Micro-Interactions
 * Smooth anchor scrolling, email click-to-copy, and active section tracking
 */

import { $, $$, copyToClipboard } from './utilities.js';

export function initInteractions() {
  // 1. Copy email button handler
  const copyEmailBtns = $$('[data-copy-email]');
  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'odoodeveloper10@gmail.com';
      copyToClipboard(email, btn);
    });
  });

  // 2. Smooth scrolling for internal anchor links (#)
  const anchorLinks = $$('a[href^="#"]:not([href="#"])');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = $(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        // Set focus to the element for keyboard/screen reader users
        targetEl.setAttribute('tabindex', '-1');
        targetEl.focus({ preventScroll: true });
      }
    });
  });
}
