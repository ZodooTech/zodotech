/**
 * ZodoTech - Main JavaScript Entry
 * Safe orchestrator for multi-page vanilla JS architecture
 */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';
import { initFaqAccordion } from './faq.js';
import { initContactForm } from './contact-form.js';
import { initCopyrightYear } from './utilities.js';

document.addEventListener('DOMContentLoaded', () => {
  // Always safe to initialize across all pages
  initCopyrightYear();
  initNavigation();
  initAnimations();
  initInteractions();

  // Conditional initializations based on page content
  initFaqAccordion();
  initContactForm();
});
