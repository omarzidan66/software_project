class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="fixed w-full top-0 left-0 z-50">
      <nav
        class="navbar navbar-light flex justify-between items-center relative bottom-10">
        <div
          class="center_box w-1/2 flex relative justify-end items-center mb-5">
          <button
            class="navbar-toggler collapsed text-black font-bold flex items-center pt-10"
            aria-expanded="false">
            <span class="navbar-toggler-icon-new"></span>
          </button>
        </div>
        <div class="right_box w-1/2 flex justify-end items-center">
          <a href="">
            <img
              class="w-40 h-auto"
              src="../Images/image-removebg-preview.png"
              alt="" />
          </a>
        </div>
        <div
          class="navbar-collapse collapse w-full h-[100vh] absolute top-0 left-0">
          <div class="navbar-inner h-full relative flex mt-16">
            <ul
              class="navbar-nav w-full sm:flex justify-center items-center sm:flex-row sm:flex-wrap my-[20vh] sm:mx-56 font-bold">
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-yellow-600">
                <a href="#banner">الصفحة الرئيسية</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-white">
                <a href="#services">دليل الخدمات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a href="#reportss">بلاغات عامة</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a href="#tenders">العطاءات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="#achievements">انجازاتنا بالارقام</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="#feedbacks">التعليقات و الاقتراحات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="#myReports"> بلاغاتي</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-300 text-white">
                <a href="./profile_settings.html"> الاعدادات </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
      `;

    // Initialize navigation behavior after the component is rendered
    this.initNavigation();
  }

  initNavigation() {
    const navButton = this.querySelector(".navbar-toggler");
    const menuPanel = this.querySelector(".navbar-collapse");
    const navLinks = this.querySelectorAll(".navbar-nav a");

    // Toggle menu when navbar toggler is clicked
    navButton.addEventListener("click", function () {
      menuPanel.classList.toggle("show");
      menuPanel.classList.toggle("collapse");

      // Update the aria-expanded attribute
      const isExpanded = menuPanel.classList.contains("show");
      navButton.setAttribute("aria-expanded", isExpanded);

      // Disable/enable scrolling based on menu state
      document.body.style.overflow = isExpanded ? "hidden" : "auto";
    });

    // Add click event to all nav links
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        // Prevent default navigation behavior temporarily
        e.preventDefault();

        console.log("Nav item clicked, closing menu");

        // Store the href value to navigate to later
        const href = this.getAttribute("href");

        // Close the menu
        menuPanel.classList.remove("show");
        menuPanel.classList.add("collapse");
        navButton.setAttribute("aria-expanded", "false");

        // Add a small delay before navigating to the link target
        setTimeout(function () {
          // Re-enable scrolling
          document.body.style.overflow = "auto";

          // Remove active class from all links and add to clicked link
          navLinks.forEach((nav) => nav.classList.remove("active"));
          link.classList.add("active");

          // Navigate to the link target
          if (href && href !== "") {
            if (href.startsWith("#")) {
              // Scroll to anchor
              const targetElement = document.querySelector(href);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              // Navigate to another page
              window.location.href = href;
            }
          }
        }, 1000); // 300ms delay, adjust as needed
      });
    });

    // Set the home link as active by default
    const homeLink = this.querySelector('.navbar-nav a[href="#banner"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }
  }
}

customElements.define("special-header", SpecialHeader);

// Handle scroll event
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  });
});
