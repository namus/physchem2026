/**
 * Frontiers of Physical Chemistry 2026 (SNBNCBS, Kolkata)
 * Countdown Timer & Calendar Sync Module
 */

(function () {
  'use strict';

  // Conference Start: October 28, 2026 09:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-10-28T09:00:00+05:30').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('count-days');
    const hoursEl = document.getElementById('count-hours');
    const minsEl = document.getElementById('count-mins');
    const secsEl = document.getElementById('count-secs');

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      const statusEl = document.getElementById('event-live-badge');
      if (statusEl) statusEl.textContent = 'Conference in Session';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Initial call and interval
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Add to Calendar Integration
  window.addToGoogleCalendar = function () {
    const title = encodeURIComponent("Frontiers of Physical Chemistry 2026 (SNBNCBS Kolkata)");
    const details = encodeURIComponent(
      "Frontiers of Physical Chemistry: Experiments, Computations and Theory — A flagship meeting of Physical Chemistry in India.\n\nVenue: S. N. Bose National Centre for Basic Sciences, Salt Lake, Kolkata.\nWebsite: https://namus.github.io/physchem2026"
    );
    const location = encodeURIComponent("S. N. Bose National Centre for Basic Sciences (SNBNCBS), JD Block, Sector III, Salt Lake, Kolkata 700106, India");
    // Start: Oct 28, 2026 09:00 IST -> 20261028T033000Z
    // End: Oct 31, 2026 14:00 IST -> 20261031T083000Z
    const dates = "20261028T033000Z/20261031T083000Z";

    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');
  };

  // Download .ics file for Apple Calendar / Outlook
  window.downloadICS = function () {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//SNBNCBS//Frontiers of Physical Chemistry 2026//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "SUMMARY:Frontiers of Physical Chemistry 2026 (SNBNCBS)",
      "DESCRIPTION:Flagship meeting of Physical Chemistry in India: Experiments, Computations and Theory.",
      "LOCATION:S. N. Bose National Centre for Basic Sciences, JD Block, Sector III, Salt Lake, Kolkata-700106",
      "DTSTART:20261028T033000Z",
      "DTEND:20261031T083000Z",
      "STATUS:CONFIRMED",
      "URL:https://namus.github.io/physchem2026",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "physchem2026-kolkata.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
})();
