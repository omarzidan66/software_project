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
              src="./image-removebg-preview.png"
              alt="" />
          </a>
        </div>
        <div
          class="navbar-collapse collapse w-full h-[100vh] absolute top-0 left-0">
          <div class="navbar-inner h-full relative flex mt-20">
            <ul
              class="navbar-nav w-full sm:flex justify-center items-center sm:flex-row sm:flex-wrap my-[20vh] sm:mx-56 font-bold">
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-yellow-600">
                <a href="">الصفحة الرئيسية</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-100 text-white">
                <a href="">دليل الخدمات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a  href="#balagh">بلاغات عامة</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-150 text-white">
                <a  href="#balagh">العطاءات</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="">انجازاتنا بالارقام</a>
              </li>
              <li
                class="nav-item sm:w-1/2 w-full min-h-[9vh] flex justify-center items-center sm:text-2xl text-lg sm:mb-5 delay-200 text-white">
                <a href="">التعليقات و الاقتراحات</a>
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
  }
}

customElements.define("special-header", SpecialHeader);

const navButton = document.querySelector(".navbar-toggler");
const menuPanel = document.querySelector(".navbar-collapse");
const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    console.log("Nav item clicked, closing menu");
    menuPanel.classList.remove("show");
    menuPanel.classList.add("collapse");
    navButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "auto";
  });
});

navButton.addEventListener("click", function () {
  // Toggle the "show" class on the menu panel
  menuPanel.classList.toggle("show");
  menuPanel.classList.toggle("collapse");

  // Get the current state of aria-expanded and toggle it
  const isExpanded = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", !isExpanded);
  // disable scrolling when menu is open
  if (!isExpanded) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
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
