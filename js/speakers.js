/**
 * Frontiers of Physical Chemistry 2026 (SNBNCBS, Kolkata)
 * Speakers Data & Interactive Filtering Module
 */

(function () {
  'use strict';

  const speakersData = [
    {
      name: "Prof. Pratim K Chattaraj",
      institution: "BITS, Mesra",
      category: "universities",
      categoryLabel: "Universities / BITS",
      topic: "Quantum Chemistry & Conceptual DFT"
    },
    {
      name: "Prof. Biman Bagchi",
      institution: "IISc, Bangalore",
      category: "iisc-tifr-jncasr",
      categoryLabel: "IISc / TIFR / JNCASR",
      topic: "Statistical Mechanics & Chemical Dynamics"
    },
    {
      name: "Prof. Sudipta Maiti",
      institution: "BITS-Pilani, Hyderabad",
      category: "universities",
      categoryLabel: "Universities / BITS",
      topic: "Biophysical Chemistry & Optical Spectroscopy"
    },
    {
      name: "Prof. Hiren Ghosh",
      institution: "NISER, Bhubaneswar",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Ultrafast Radiation & Photochemistry"
    },
    {
      name: "Prof. Anindya Dutta",
      institution: "INST, Mohali",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Nano-materials & Spectroscopy"
    },
    {
      name: "Prof. S. Balasubramanian",
      institution: "JNCASR, Bangalore",
      category: "iisc-tifr-jncasr",
      categoryLabel: "IISc / TIFR / JNCASR",
      topic: "Molecular Simulations of Liquids & Interfaces"
    },
    {
      name: "Prof. Swapan K Pati",
      institution: "JNCASR, Bangalore",
      category: "iisc-tifr-jncasr",
      categoryLabel: "IISc / TIFR / JNCASR",
      topic: "Quantum Materials & Electronic Structure"
    },
    {
      name: "Prof. Sanjoy Bandyopadhyay",
      institution: "IIT Kharagpur",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Solvation Dynamics & Complex Liquids"
    },
    {
      name: "Prof. Srabani Taraphder",
      institution: "IIT Kharagpur",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Theoretical Physical Chemistry & Enzymatic Dynamics"
    },
    {
      name: "Prof. Jyotisman Dasgupta",
      institution: "TIFR, Mumbai",
      category: "iisc-tifr-jncasr",
      categoryLabel: "IISc / TIFR / JNCASR",
      topic: "Femtosecond Spectroscopy & Photobiology"
    },
    {
      name: "Prof. Pratik Sen",
      institution: "IIT Kanpur",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Ultrafast Dynamics & Single Molecule Spectroscopy"
    },
    {
      name: "Prof. Amalendu Chandra",
      institution: "IIT Kanpur",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Molecular Liquids, Hydrogen Bonds & Simulations"
    },
    {
      name: "Prof. Chayan Nandi",
      institution: "IIT Mandi",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Super-resolution Imaging & Carbon Nanodots"
    },
    {
      name: "Prof. Saptarshi Mukherjee",
      institution: "IISER Bhopal",
      category: "iisers",
      categoryLabel: "IISERs",
      topic: "Fluorescence Spectroscopy & Protein Folding"
    },
    {
      name: "Prof. Rajesh Murarka",
      institution: "IISER Bhopal",
      category: "iisers",
      categoryLabel: "IISERs",
      topic: "Computational Biophysical Chemistry"
    },
    {
      name: "Prof. Pradip K Ghorai",
      institution: "IISER Kolkata",
      category: "iisers",
      categoryLabel: "IISERs",
      topic: "Computational Materials & Catalysis"
    },
    {
      name: "Prof. Debashree Ghosh",
      institution: "IACS, Kolkata",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "QM/MM & Electronic Excited States"
    },
    {
      name: "Prof. Ananya Debnath",
      institution: "IIT Jodhpur",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Statistical Mechanics & Biomembranes"
    },
    {
      name: "Prof. Parbati Biswas",
      institution: "University of Delhi",
      category: "universities",
      categoryLabel: "Universities",
      topic: "Polymer Physics & Conformational Dynamics"
    },
    {
      name: "Prof. Sarika Bhattacharyya",
      institution: "CSIR-NCL, Pune",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Glass Transition & Soft Matter Physics"
    },
    {
      name: "Prof. Debayan Mondal",
      institution: "IMSc, Chennai",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Non-equilibrium Dynamics & Biophysics"
    },
    {
      name: "Prof. Rajib Biswas",
      institution: "IIT Tirupati",
      category: "iits",
      categoryLabel: "IITs",
      topic: "Ultrafast Terahertz & Infrared Spectroscopy"
    },
    {
      name: "Prof. M. Hariharan",
      institution: "IISER Thiruvananthapuram",
      category: "iisers",
      categoryLabel: "IISERs",
      topic: "Organic Photochemistry & Triplet Dynamics"
    },
    {
      name: "Prof. Biman Jana",
      institution: "IACS, Kolkata",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Biomolecular Recognition & Water Hydration"
    },
    {
      name: "Prof. Ayan Datta",
      institution: "IACS, Kolkata",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Electronic Structure Theory & Catalysis"
    },
    {
      name: "Prof. Amit Paul",
      institution: "Bose Institute, Kolkata",
      category: "research-institutes",
      categoryLabel: "Research Institutes",
      topic: "Electrochemistry & Sustainable Energy"
    },
    {
      name: "Prof. Susmita Roy",
      institution: "IISER Kolkata",
      category: "iisers",
      categoryLabel: "IISERs",
      topic: "Computational Biophysics & Molecular Modeling"
    },
    {
      name: "Prof. Rajib K Mitra",
      institution: "SNBNCBS, Kolkata",
      category: "snbncbs",
      categoryLabel: "SNBNCBS (Host)",
      topic: "THz & Time-resolved Fluorescence"
    },
    {
      name: "Prof. Manik Pradhan",
      institution: "SNBNCBS, Kolkata",
      category: "snbncbs",
      categoryLabel: "SNBNCBS (Host)",
      topic: "Laser Cavity Ring-Down Spectroscopy"
    },
    {
      name: "Prof. Suman Chakrabarty",
      institution: "SNBNCBS, Kolkata",
      category: "snbncbs",
      categoryLabel: "SNBNCBS (Host)",
      topic: "Molecular Dynamics & Free Energy Simulations"
    },
    {
      name: "Prof. Pradip Pachfule",
      institution: "SNBNCBS, Kolkata",
      category: "snbncbs",
      categoryLabel: "SNBNCBS (Host)",
      topic: "Porous Organic Frameworks & Adsorption"
    },
    {
      name: "Prof. Ranjit Biswas",
      institution: "SNBNCBS, Kolkata",
      category: "snbncbs",
      categoryLabel: "SNBNCBS (Host)",
      topic: "Dielectric Relaxation & Ionic Liquids"
    },
    {
      name: "Prof. Sourav Pal",
      institution: "Ashoka University",
      category: "universities",
      categoryLabel: "Universities",
      topic: "Coupled-Cluster Theory & Quantum Chemistry"
    },
    {
      name: "Prof. Suman Das",
      institution: "GITAM, Vizag",
      category: "universities",
      categoryLabel: "Universities",
      topic: "Spectroscopy & Solution Chemistry"
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
      counter.textContent = `Showing ${list.length} of ${speakersData.length} Speakers`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">
          <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 0.5rem;">No speakers matched your search criteria.</p>
          <button class="btn btn-sm btn-outline-dark" onclick="window.resetSpeakerFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(s => {
      const initials = getInitials(s.name);
      return `
        <div class="speaker-card" data-category="${s.category}">
          <div class="speaker-avatar-wrap">
            <span>${initials}</span>
          </div>
          <h3 class="speaker-name">${s.name}</h3>
          <div class="speaker-inst">${s.institution}</div>
          <span class="speaker-tag-badge">${s.categoryLabel}</span>
          <div class="speaker-talk-status">Talk details: To be updated soon</div>
        </div>
      `;
    }).join('');
  }

  // Filter & Search Logic
  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let filtered = speakersData;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(s => s.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.institution.toLowerCase().includes(q) ||
        s.categoryLabel.toLowerCase().includes(q) ||
        (s.topic && s.topic.toLowerCase().includes(q))
      );
    }

    renderSpeakers(filtered);
  }

  window.resetSpeakerFilters = function() {
    activeCategory = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('speaker-search');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-filter') === 'all');
    });
    
    applyFilters();
  };

  // Init event listeners on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    renderSpeakers(speakersData);

    const searchInput = document.getElementById('speaker-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        applyFilters();
      });
    }

    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.getAttribute('data-filter');
        applyFilters();
      });
    });
  });
})();
