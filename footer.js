const footer = document.querySelector('.footer');

footer.innerHTML = `
 <footer class="bg-gray-900 text-gray-300 py-16">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

      <!-- Logo & About -->
      <div>
       <a href="index.html"><h1 class="text-2xl font-bold text-teal-400 mb-4">WEFORACAUSE</h1></a>
        <p class="text-white text-sm">
          Dedicated to rescuing injured and abandoned animals, providing care, and helping them find loving homes.
        </p>
        <p class="mt-4 text-white italic text-sm">
          "Every life matters. Make a difference today!"
        </p>
      </div>

      <!-- Quick Links -->
<div>
  <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>

  <!-- Small helper text (professional touch) -->
  <p class="text-sm text-white mb-3">
    Support us through donations or essential items
  </p>

  <ul class="space-y-2 text-white">

    <li><a href="index.html" class="hover:text-teal-400 transition">Home</a></li>
    <li><a href="about.html" class="hover:text-teal-400 transition">About</a></li>
    <li><a href="adopt.html" class="hover:text-teal-400 transition">Adopt</a></li>
    <li><a href="volunteerform.html" class="hover:text-teal-400 transition">Volunteer</a></li>
    <li><a href="internship.html" class="hover:text-teal-400 transition">Internship</a></li>

    <!-- Donate (already exists) -->
    <li><a href="donationform.html" class="hover:text-teal-400 transition">Donate</a></li>

    <!-- Amazon Wishlist (NEW - highlighted but balanced) -->
    <li>
      <a href="https://www.amazon.in/hz/wishlist/ls/1TIOQIGJS6WQV?ref_=wl_share"
      class="flex items-center justify-between bg-pink-500 hover:bg-pink-600  text-white px-4 py-2 rounded-lg transition mt-2">
        
        <span class="flex items-center gap-2">
          <i class="ri-amazon-fill text-lg"></i>
          Donate via Amazon Wishlist
        </span>

        <i class="ri-external-link-line"></i>

      </a>
    </li>

  </ul>
</div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>

        <p class="text-white text-sm">
          📍 Shiv Tekdi, Shiv Ratan Marg, Kisan Nagar 3, Kisan Nagar, Thane West, Thane, Maharashtra 400604
        </p>

        <p class="text-white text-sm">
          📧 <a href="mailto:info@weforacause.org" class="hover:underline">
            info@weforacause.org
          </a>
        </p>

        <p class="text-white text-sm">
          📞 <a href="tel:+919594465856" class="hover:underline">
            +919594465856
          </a>
        </p>

        <!-- Social Icons -->
        <div class="flex gap-4 mt-4">
          <a href="https://www.instagram.com/weforacause" target="_blank"
            class="text-pink-500 hover:text-pink-600 transition text-xl">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="https://www.facebook.com/weforacause" class="text-blue-600 hover:text-blue-700 transition text-xl">
            <i class="fab fa-facebook-f"></i>
          </a>

          <a href="https://www.youtube.com/@weforacausefoundation"
            class="text-red-500 hover:text-red-600 transition text-xl">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/company/we-for-a-cause-foundation"
            class="text-blue-500 hover:text-blue-600 transition text-xl">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Newsletter</h3>
        <form class="flex flex-col gap-2">
          <input type="email" placeholder="Your Email"
            class="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 border border-gray-700 text-gray-900">
          <button class="bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg font-semibold transition">
            Subscribe
          </button>
        </form>
      </div>

    </div>

    <!-- Copyright -->
    <div class="mt-12 border-t border-gray-800 pt-6 text-gray-500 text-sm text-center">
      © 2026 WE FOR A CAUSE FOUNDATION. All rights reserved.
    </div>
  </footer>`

