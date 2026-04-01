document.addEventListener("DOMContentLoaded", () => {

  const nav = document.querySelector('.nav');

  nav.innerHTML = `
  <nav class="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">

    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

      <!-- Logo -->
      <a href="index.html">
        <h1 class="flex items-center gap-4 text-teal-400 font-extrabold text-xl tracking-wide uppercase">
          <img src="./images/doglogo.jpg" class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-teal-400">
          <span>WeFor aCause</span>
        </h1>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-6 font-medium">

        <a href="./index.html" class="hover:text-teal-400">Home</a>
        <a href="./gallery.html" class="hover:text-teal-400">Gallery</a>
        <a href="./about.html" class="hover:text-teal-400">About</a>
        <a href="./adopt.html" class="hover:text-teal-400">Adopt</a>
        <a href="./fundraising.html" class="hover:text-teal-400">Fundraising</a>
        <a href="./volunteerform.html" class="hover:text-teal-400">Volunteer</a>
        <a href="./internship.html" class="hover:text-teal-400">Internship</a>

        <!-- Dropdown -->
        <div class="relative">
          <button id="projects-btn" class="hover:text-teal-400 flex items-center gap-1">
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

        <a href="./donationform.html" class="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-full">
          Donate
        </a>

      </div>

      <!-- Mobile Button -->
      <button id="menu-btn" class="md:hidden text-3xl">☰</button>

    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-slate-900 border-t border-slate-700">

      <div class="flex flex-col text-center py-6 space-y-4">

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

          <div id="project-mobile" class="hidden flex flex-col mt-2 space-y-2">

            <a href="./prakalpbezuban.html">Prakalp Bezuban</a>
            <a href="./prakalpparyavarana.html">Prakalp Paryavarana</a>
            <a href="./womenempowerment.html">Naari Shakti</a>
            <a href="./prakalpsaath.html">Prakalp Saath</a>
            <a href="./prakalpchaitanyan.html">Prakalp Chaitanyam</a>
            <a href="./prakalpmahwari.html">Prakalp Mahwari</a>

          </div>
        </div>

        <a href="./donationform.html" class="bg-teal-500 py-2 rounded-full mx-10">
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

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!projectBtn.contains(e.target) && !projectMenu.contains(e.target)) {
      projectMenu.classList.add("hidden");
    }
  });

  // Close mobile menu on scroll
  window.addEventListener("scroll", () => {
    mobileMenu.classList.add("hidden");
  });

});