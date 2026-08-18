/**
 * Frontiers of Physical Chemistry 2026 (SNBNCBS, Kolkata)
 * Speakers Data & Search Module
 */

(function () {
  'use strict';

  // 23 Invited Speakers sorted alphabetically by first name
  const speakersData = [
    {
      name: "Prof. Amalendu Chandra",
      institution: "IIT Kanpur",
      topic: "Molecular Liquids, Hydrogen Bonds & Simulations"
    },
    {
      name: "Prof. Ayan Datta",
      institution: "IACS, Kolkata",
      topic: "Electronic Structure Theory & Catalysis"
    },
    {
      name: "Prof. Biman Bagchi",
      institution: "IISc, Bangalore",
      topic: "Statistical Mechanics & Chemical Dynamics"
    },
    {
      name: "Prof. Biman Jana",
      institution: "IACS, Kolkata",
      topic: "Biomolecular Recognition & Water Hydration"
    },
    {
      name: "Prof. Chayan Nandi",
      institution: "IIT Mandi",
      topic: "Super-resolution Imaging & Carbon Nanodots"
    },
    {
      name: "Prof. Debayan Mondal",
      institution: "IMSc, Chennai",
      topic: "Non-equilibrium Dynamics & Biophysics"
    },
    {
      name: "Prof. Hiren Ghosh",
      institution: "NISER, Bhubaneswar",
      topic: "Ultrafast Radiation & Photochemistry"
    },
    {
      name: "Prof. Jyotisman Dasgupta",
      institution: "TIFR, Mumbai",
      topic: "Femtosecond Spectroscopy & Photobiology"
    },
    {
      name: "Prof. M. Hariharan",
      institution: "IISER Thiruvananthapuram",
      topic: "Organic Photochemistry & Triplet Dynamics"
    },
    {
      name: "Prof. Manik Pradhan",
      institution: "SNBNCBS, Kolkata",
      topic: "Laser Cavity Ring-Down Spectroscopy"
    },
    {
      name: "Prof. Parbati Biswas",
      institution: "University of Delhi",
      topic: "Polymer Physics & Conformational Dynamics"
    },
    {
      name: "Prof. Pradip K Ghorai",
      institution: "IISER Kolkata",
      topic: "Computational Materials & Catalysis"
    },
    {
      name: "Prof. Pratik Sen",
      institution: "IIT Kanpur",
      topic: "Ultrafast Dynamics & Single Molecule Spectroscopy"
    },
    {
      name: "Prof. Rajesh Murarka",
      institution: "IISER Bhopal",
      topic: "Computational Biophysical Chemistry"
    },
    {
      name: "Prof. Rajib Biswas",
      institution: "IIT Tirupati",
      topic: "Ultrafast Terahertz & Infrared Spectroscopy"
    },
    {
      name: "Prof. Rajib K Mitra",
      institution: "SNBNCBS, Kolkata",
      topic: "THz & Time-resolved Fluorescence"
    },
    {
      name: "Prof. S. Balasubramanian",
      institution: "JNCASR, Bangalore",
      topic: "Molecular Simulations of Liquids & Interfaces"
    },
    {
      name: "Prof. Sanjoy Bandyopadhyay",
      institution: "IIT Kharagpur",
      topic: "Solvation Dynamics & Complex Liquids"
    },
    {
      name: "Prof. Saptarshi Mukherjee",
      institution: "IISER Bhopal",
      topic: "Fluorescence Spectroscopy & Protein Folding"
    },
    {
      name: "Prof. Sarika Bhattacharyya",
      institution: "CSIR-NCL, Pune",
      topic: "Glass Transition & Soft Matter Physics"
    },
    {
      name: "Prof. Srabani Taraphder",
      institution: "IIT Kharagpur",
      topic: "Theoretical Physical Chemistry & Enzymatic Dynamics"
    },
    {
      name: "Prof. Susmita Roy",
      institution: "IISER Kolkata",
      topic: "Computational Biophysics & Molecular Modeling"
    },
    {
      name: "Prof. Swapan K Pati",
      institution: "JNCASR, Bangalore",
      topic: "Quantum Materials & Electronic Structure"
    }
  ];

  function getInitials(name) {
    const parts = name.replace(/^Prof\.\s*|^Dr\.\s*/i, '').trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderSpeakers(list) {
    const grid = document.getElementById('speakers-grid');
    const counter = document.getElementById('speakers-count');
    if (!grid) return;

    if (counter) {
      counter.textContent = `Showing ${list.length} of ${speakersData.length} Invited Speakers`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 0.5rem;">No speakers matched your search.</p>
          <button class="btn btn-sm btn-outline-dark" onclick="window.resetSpeakerSearch()">Clear Search</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(s => {
      const initials = getInitials(s.name);
      return `
        <div class="speaker-card">
          <div class="speaker-avatar-wrap">
            <span>${initials}</span>
          </div>
          <h3 class="speaker-name">${s.name}</h3>
          <div class="speaker-inst">${s.institution}</div>
          <div class="speaker-talk-status">Talk details: To be updated soon</div>
        </div>
      `;
    }).join('');
  }

  let searchQuery = '';

  function applySearch() {
    let filtered = speakersData;

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.institution.toLowerCase().includes(q) ||
        (s.topic && s.topic.toLowerCase().includes(q))
      );
    }

    renderSpeakers(filtered);
  }

  window.resetSpeakerSearch = function() {
    searchQuery = '';
    const searchInput = document.getElementById('speaker-search');
    if (searchInput) searchInput.value = '';
    applySearch();
  };

  document.addEventListener('DOMContentLoaded', () => {
    renderSpeakers(speakersData);

    const searchInput = document.getElementById('speaker-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        applySearch();
      });
    }
  });
})();
