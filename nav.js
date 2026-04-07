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
          We For a Cause
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-6 font-medium text-sm md:text-base">

        <a href="./index.html" class="hover:text-teal-400">Home</a>
        <a href="./gallery.html" class="hover:text-teal-400">Gallery</a>
        <a href="./about.html" class="hover:text-teal-400">About</a>
        <a href="./adopt.html" class="hover:text-teal-400">Adopt</a>
        <a href="./fundraising.html" class="hover:text-teal-400">Fundraising</a>
        <a href="./volunteerform.html" class="hover:text-teal-400">Volunteer</a>
        <a href="./internship.html" class="hover:text-teal-400">Internship</a>

        <!-- Dropdown -->
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
        <a href="./volunteerform.html" class="hover:text-teal-400">Volunteer</a>
        <a href="./internship.html" class="hover:text-teal-400">Internship</a>

        <!-- Mobile Dropdown -->
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

        <a href="./donationform.html" 
           class="bg-teal-500 py-2 rounded-full mx-10">
          Donate
        </a>

      </div>

    </div>

  </nav>
  `;

  // ===== EVENTS ===== //

  const projectBtn = document.getElementById("projects-btn");
  const projectMenu = document.getElementById("projects-menu");

  const projectToggle = document.getElementById("project-toggle");
  const projectMobile = document.getElementById("project-mobile");

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Desktop dropdown
  projectBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    projectMenu.classList.toggle("hidden");
  });

  // Mobile dropdown
  projectToggle?.addEventListener("click", () => {
    projectMobile.classList.toggle("hidden");
  });

  // Mobile menu
  menuBtn?.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close dropdown outside click
  document.addEventListener("click", (e) => {
    if (!projectBtn?.contains(e.target) && !projectMenu?.contains(e.target)) {
      projectMenu?.classList.add("hidden");
    }
  });

  // Close mobile menu on scroll
  window.addEventListener("scroll", () => {
    mobileMenu?.classList.add("hidden");
  });

});