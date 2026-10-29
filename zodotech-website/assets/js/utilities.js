/**
 * ZodoTech - Utility Functions
 * Safe DOM queries, dynamic year, clipboard copy
 */

export const $ = (selector, context = document) => context.querySelector(selector);
export const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

/**
 * Automatically update copyright year across footers
 */
export function initCopyrightYear() {
  const yearElements = $$('[data-dynamic-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
}

/**
 * Copy text helper with accessible notification
 */
export async function copyToClipboard(text, buttonEl) {
  try {
    await navigator.clipboard.writeText(text);
    if (buttonEl) {
      const originalText = buttonEl.getAttribute('data-original-text') || buttonEl.textContent;
      buttonEl.setAttribute('data-original-text', originalText);
      buttonEl.textContent = 'Copied to Clipboard!';
      setTimeout(() => {
        buttonEl.textContent = originalText;
      }, 2500);
    }
    return true;
  } catch (err) {
    console.warn('Clipboard write failed:', err);
    return false;
  }
}
