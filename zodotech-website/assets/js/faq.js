/**
 * ZodoTech - Accessible FAQ Accordion
 * Full WCAG compliance, keyboard navigation (Arrow Up/Down, Home/End, Space/Enter)
 */

import { $$ } from './utilities.js';

export function initFaqAccordion() {
  const faqItems = $$('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    // Set ARIA attributes if not present
    const triggerId = trigger.id || `faq-trigger-${index}`;
    const contentId = content.id || `faq-content-${index}`;
    trigger.id = triggerId;
    content.id = contentId;
    trigger.setAttribute('aria-controls', contentId);
    content.setAttribute('aria-labelledby', triggerId);

    const toggle = (expand) => {
      const isExpanded = expand !== undefined ? expand : !item.classList.contains('active');
      if (isExpanded) {
        // Optional: close other items for clean single-expanded view
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      }
    };

    trigger.addEventListener('click', () => toggle());

    // Keyboard navigation between accordion triggers
    trigger.addEventListener('keydown', (e) => {
      const allTriggers = faqItems.map(it => it.querySelector('.faq-trigger')).filter(Boolean);
      const currentIndex = allTriggers.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % allTriggers.length;
        allTriggers[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + allTriggers.length) % allTriggers.length;
        allTriggers[prevIndex].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        allTriggers[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        allTriggers[allTriggers.length - 1].focus();
      }
    });
  });
}
