/**
 * Frontiers of Physical Chemistry 2026 (SNBNCBS, Kolkata)
 * Scientific Program Schedule Controller
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.schedule-tab-btn');
    const panes = document.querySelectorAll('.schedule-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-tab');

        // Toggle active buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Toggle active panes
        panes.forEach(pane => {
          if (pane.id === targetId) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  });
})();
