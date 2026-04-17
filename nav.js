document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector('.nav');

  nav.innerHTML = `
  <nav class="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

      <!-- Logo -->
      <a href="index.html" class="flex items-center gap-3">
        <img src="./newimages/doglogo (2).jpg" 
             class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-teal-400">

        <span class="text-sm sm:text-lg md:text-xl font-bold text-teal-400 tracking-wide">
          We For A Cause
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-6 font-medium text-sm md:text-base">

        <a href="./index.html" class="hover:text-teal-400">Home</a>
        <a href="./gallery.html" class="hover:text-teal-400">Gallery</a>
        <a href="./about.html" class="hover:text-teal-400">About</a>
        <a href="./adopt.html" class="hover:text-teal-400">Adopt</a>
        <a href="./fundraising.html" class="hover:text-teal-400">Fundraising</a>
        <a href="newsblog.html" class="hover:text-teal-500">
  News Blog
</a>
        
        <!-- Projects Dropdown -->
        <div class="relative">
          <button id="projects-btn" class="hover:text-teal-400">
            Projects ▼
          </button>

          <div id="projects-menu"
            class="hidden absolute left-0 mt-3 bg-white text-gray-700 rounded-xl shadow-xl w-56 py-2">

            <a href="./prakalpbezuban.html" class="block px-5 py-2 hover:bg-teal-50">Prakalp Bezuban</a>
            <a href="./prakalpparyavarana.html" class="block px-5 py-2 hover:bg-teal-50">Prakalp Paryavarana</a>
            <a href="./womenempowerment.html" class="block px-5 py-2 hover:bg-teal-50">Naari Shakti</a>
            <a href="./prakalpsaath.html" class="block px-5 py-2 hover:bg-teal-50">Prakalp Saath</a>
            <a href="./prakalpchaitanyan.html" class="block px-5 py-2 hover:bg-teal-50">Prakalp Chaitanyam</a>
            <a href="./prakalpmahwari.html" class="block px-5 py-2 hover:bg-teal-50">Prakalp Mahwari</a>

          </div>
        </div>

        <!-- Get Involved Dropdown -->
<div class="relative">
  <button id="getinvolved-btn" class="hover:text-teal-400">
    Get Involved ▼
  </button>

  <!-- Main Dropdown -->
  <div id="getinvolved-menu"
    class="hidden absolute left-0 mt-3 bg-white text-gray-700 rounded-xl shadow-xl w-56 py-2">

    <a href="./volunteerform.html" class="block px-5 py-2 hover:bg-teal-50">
      Volunteer
    </a>

    <a href="./internship.html" class="block px-5 py-2 hover:bg-teal-50">
      Internship
    </a>

    <!-- Partner With Us -->
    <!-- Partner With Us -->
<div class="relative">

  <button id="partner-sub-btn"
    class="w-full text-left px-5 py-2 hover:bg-teal-50 flex justify-between items-center">
    Partner With Us ▼
  </button>

  <!-- Sub Dropdown (NOW BELOW, NOT SIDE) -->
  <div id="partner-sub-menu"
    class="hidden mt-1 ml-4 bg-white text-gray-700 rounded-xl shadow-xl w-56 py-2">

    <a href="./csrpartnerform.html" class="block px-5 py-2 hover:bg-teal-50">
      CSR Partner
    </a>

    <a href="./ngopartnerform.html" class="block px-5 py-2 hover:bg-teal-50">
      NGO Partner
    </a>

  </div>

</div>
  </div>
</div>

        <a href="./donationform.html" 
           class="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full text-sm">
          Donate
        </a>

      </div>

      <!-- Mobile Button -->
      <button id="menu-btn" class="lg:hidden text-3xl">☰</button>

    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden lg:hidden bg-slate-900 border-t border-slate-700">

      <div class="flex flex-col text-center py-6 space-y-4 text-sm">

        <a href="./index.html" class="hover:text-teal-400">Home</a>
        <a href="./gallery.html" class="hover:text-teal-400">Gallery</a>
        <a href="./about.html" class="hover:text-teal-400">About</a>
        <a href="./adopt.html" class="hover:text-teal-400">Adopt</a>
        <a href="./fundraising.html" class="hover:text-teal-400">Fundraising</a>
        
        

        <!-- Mobile Projects Dropdown -->
        <div>
          <button id="project-toggle" class="hover:text-teal-400 w-full">
            Projects ▼
          </button>

          <div id="project-mobile" class="hidden flex flex-col mt-2 space-y-2 text-gray-300">

            <a href="./prakalpbezuban.html">Prakalp Bezuban</a>
            <a href="./prakalpparyavarana.html">Prakalp Paryavarana</a>
            <a href="./womenempowerment.html">Naari Shakti</a>
            <a href="./prakalpsaath.html">Prakalp Saath</a>
            <a href="./prakalpchaitanyan.html">Prakalp Chaitanyam</a>
            <a href="./prakalpmahwari.html">Prakalp Mahwari</a>

          </div>
        </div>
        <!-- Get Involved (Mobile) -->
<div>
  <button id="getinvolved-toggle" class="hover:text-teal-400 w-full">
    Get Involved ▼
  </button>

  <!-- Get Involved Dropdown -->
  <div id="getinvolved-mobile" class="hidden flex flex-col mt-2 space-y-2 text-gray-300">

    <a href="./volunteerform.html">Volunteer</a>
    <a href="./internship.html">Internship</a>

    <!-- Partner With Us -->
    <div>
      <button id="partner-mobile-toggle" class="w-full">
        Partner With Us ▼
      </button>

      <!-- Submenu -->
      <div id="partner-mobile-menu" class="hidden flex flex-col ml-4 mt-2 space-y-2">

        <a href="./csrpartnerform.html">CSR Partner</a>
        <a href="./ngopartnerform.html">NGO Partner</a>

      </div>
    </div>

  </div>
</div>

        <a href="./donationform.html" 
           class="bg-teal-500 py-2 rounded-full mx-10">
          Donate
        </a>

      </div>

    </div>

  </nav>

  <!-- Floating Donate Button -->
<a href="./donationform.html"
   class="fixed bottom-5 right-5 bg-teal-500 hover:bg-teal-600 text-white 
          w-16 h-16 flex items-center justify-center rounded-full shadow-lg 
          text-xs font-semibold z-50">
  Donate
</a>
  `;


  // ===== EVENTS ===== //
  
document.addEventListener("DOMContentLoaded", () => {

  // ===== ELEMENTS ===== //

  const projectBtn = document.getElementById("projects-btn");
  const projectMenu = document.getElementById("projects-menu");

  const getBtn = document.getElementById("getinvolved-btn");
  const getMenu = document.getElementById("getinvolved-menu");

  const partnerSubBtn = document.getElementById("partner-sub-btn");
  const partnerSubMenu = document.getElementById("partner-sub-menu");

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const projectToggle = document.getElementById("project-toggle");
  const projectMobile = document.getElementById("project-mobile");

  const getMobileToggle = document.getElementById("getinvolved-toggle");
  const getMobileMenu = document.getElementById("getinvolved-mobile");

  const partnerMobileToggle = document.getElementById("partner-mobile-toggle");
  const partnerMobileMenu = document.getElementById("partner-mobile-menu");


  // ===== DESKTOP DROPDOWNS ===== //

  // Projects
  projectBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    projectMenu.classList.toggle("hidden");
    getMenu?.classList.add("hidden");
  });

  // Get Involved
  getBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    getMenu.classList.toggle("hidden");
    projectMenu?.classList.add("hidden");
  });

  // Partner sub dropdown
  partnerSubBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    partnerSubMenu.classList.toggle("hidden");
  });


  // ===== MOBILE MENU ===== //

  // Hamburger
  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Projects mobile
  projectToggle?.addEventListener("click", () => {
    projectMobile.classList.toggle("hidden");
  });

  // Get Involved mobile
  getMobileToggle?.addEventListener("click", () => {
    getMobileMenu.classList.toggle("hidden");
  });

  // Partner mobile
  partnerMobileToggle?.addEventListener("click", () => {
    partnerMobileMenu.classList.toggle("hidden");
  });


  // ===== CLOSE ON OUTSIDE CLICK ===== //

  document.addEventListener("click", (e) => {

    if (!projectBtn?.contains(e.target) && !projectMenu?.contains(e.target)) {
      projectMenu?.classList.add("hidden");
    }

    if (!getBtn?.contains(e.target) && !getMenu?.contains(e.target)) {
      getMenu?.classList.add("hidden");
    }

    if (!partnerSubBtn?.contains(e.target) && !partnerSubMenu?.contains(e.target)) {
      partnerSubMenu?.classList.add("hidden");
    }

  });


  // ===== SCROLL CLOSE ===== //

  window.addEventListener("scroll", () => {
    mobileMenu?.classList.add("hidden");
    projectMobile?.classList.add("hidden");
    getMobileMenu?.classList.add("hidden");
    partnerMobileMenu?.classList.add("hidden");

    projectMenu?.classList.add("hidden");
    getMenu?.classList.add("hidden");
    partnerSubMenu?.classList.add("hidden");
  });

});


  const projectBtn = document.getElementById("projects-btn");
  const projectMenu = document.getElementById("projects-menu");

  const partnerBtn = document.getElementById("partner-btn");
  const partnerMenu = document.getElementById("partner-menu");

  const projectToggle = document.getElementById("project-toggle");
  const projectMobile = document.getElementById("project-mobile");

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Desktop dropdowns
  projectBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    projectMenu.classList.toggle("hidden");
    partnerMenu.classList.add("hidden"); // close other
  });

  

  // Mobile dropdown
  projectToggle?.addEventListener("click", () => {
    projectMobile.classList.toggle("hidden");
  });

  // Mobile menu
  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close dropdowns on outside click
  document.addEventListener("click", (e) => {
    if (!projectBtn?.contains(e.target) && !projectMenu?.contains(e.target)) {
      projectMenu?.classList.add("hidden");
    }

    if (!partnerBtn?.contains(e.target) && !partnerMenu?.contains(e.target)) {
      partnerMenu?.classList.add("hidden");
    }
  });

  // Close mobile menu on scroll
  window.addEventListener("scroll", () => {
    mobileMenu?.classList.add("hidden");
  });

});
document.addEventListener("DOMContentLoaded", () => {

  // ===== DESKTOP ===== //
  const getBtn = document.getElementById("getinvolved-btn");
  const getMenu = document.getElementById("getinvolved-menu");

  const partnerSubBtn = document.getElementById("partner-sub-btn");
  const partnerSubMenu = document.getElementById("partner-sub-menu");

  // Get Involved toggle
  getBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    getMenu.classList.toggle("hidden");
  });

  // Partner sub dropdown
  partnerSubBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    partnerSubMenu.classList.toggle("hidden");
  });


  // ===== MOBILE ===== //
  const getMobileToggle = document.getElementById("getinvolved-toggle");
  const getMobileMenu = document.getElementById("getinvolved-mobile");

  const partnerMobileToggle = document.getElementById("partner-mobile-toggle");
  const partnerMobileMenu = document.getElementById("partner-mobile-menu");

  // Get Involved mobile
  getMobileToggle?.addEventListener("click", () => {
    getMobileMenu.classList.toggle("hidden");
  });

  // Partner mobile
  partnerMobileToggle?.addEventListener("click", () => {
    partnerMobileMenu.classList.toggle("hidden");
  });


  // ===== OUTSIDE CLICK CLOSE ===== //
  document.addEventListener("click", (e) => {

    if (!getBtn?.contains(e.target) && !getMenu?.contains(e.target)) {
      getMenu?.classList.add("hidden");
    }

    if (!partnerSubBtn?.contains(e.target) && !partnerSubMenu?.contains(e.target)) {
      partnerSubMenu?.classList.add("hidden");
    }

  });


  // ===== SCROLL CLOSE ===== //
  window.addEventListener("scroll", () => {
    getMenu?.classList.add("hidden");
    partnerSubMenu?.classList.add("hidden");
    getMobileMenu?.classList.add("hidden");
    partnerMobileMenu?.classList.add("hidden");
  });

});
