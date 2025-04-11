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
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-white">
                <a href="./home_page.html#banner">الصفحة الرئيسية</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-white">
                <a href="./home_page.html#services">دليل الخدمات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a href="./home_page.html#reportss">بلاغات عامة</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a href="./home_page.html#tenders">العطاءات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="./home_page.html#achievements">انجازاتنا بالارقام</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="./home_page.html#feedbacks">التعليقات و الاقتراحات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="./home_page.html#myReports"> بلاغاتي</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-300 text-white">
                <a href=""> اتصل بنا</a>
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
    const navButton = document.querySelector(".navbar-toggler");
    const menuPanel = document.querySelector(".navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav a");

    // Toggle menu when navbar toggler is clicked
    navButton.addEventListener("click", function () {
      menuPanel.classList.toggle("show");
      menuPanel.classList.toggle("collapse");

      const isExpanded = menuPanel.classList.contains("show");
      navButton.setAttribute("aria-expanded", isExpanded);
      document.body.style.overflow = isExpanded ? "hidden" : "auto";
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        // Close menu
        menuPanel.classList.remove("show");
        menuPanel.classList.add("collapse");
        navButton.setAttribute("aria-expanded", "false");

        setTimeout(function () {
          document.body.style.overflow = "auto";

          // Remove 'active' class and inline color from all links
          navLinks.forEach((nav) => {
            nav.classList.remove("active");
            nav.style.removeProperty("color");
          });

          // Set active class and inline color with !important
          link.classList.add("active");
          link.style.setProperty("color", "#CEB579", "important");

          // Handle navigation
          if (href && href !== "") {
            if (href.startsWith("#")) {
              const targetElement = document.querySelector(href);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            } else {
              window.location.href = href;
            }
          }
        }, 300);
      });
    });

    // Set the home link as active initially (and apply color)
    // const homeLink = document.querySelector('.navbar-nav a[href="#banner"]');
    // if (homeLink) {
    //   homeLink.classList.add("active");
    //   homeLink.style.setProperty("color", "#CEB579", "important");
    // }
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
