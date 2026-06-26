// ^ Variables
var currentCardIndex = 0;
// ^ HTML Elements
var themeToggleBtn = document.getElementById("theme-toggle-button");
var scrollToTopBtn = document.getElementById("scroll-to-top");
var heroLink = document.querySelector("a[href='#hero-section']");
var aboutLink = document.querySelector("a[href='#about']");
var testimonialsLink = document.querySelector("a[href='#testimonials']");
var portfolioLink = document.querySelector("a[href='#portfolio']");
var experienceLink = document.querySelector("a[href='#experience']");
var contactLink = document.querySelector("a[href='#contact']");
var navLinks = document.querySelectorAll("a");
var portfolioItem = document.querySelectorAll(".portfolio-item");
var allPortfolioBtn = document.querySelector('button[data-filter="all"]');
var webPortfolioBtn = document.querySelector('button[data-filter="web"]');
var appPortfolioBtn = document.querySelector('button[data-filter="app"]');
var designPortfolioBtn = document.querySelector('button[data-filter="design"]');
var ecommercePortfolioBtn = document.querySelector(
  'button[data-filter="ecommerce"]',
);
var portfolioFilterBtns = document.querySelectorAll(".portfolio-filter");
var settingsBtn = document.getElementById("settings-toggle");
var settingsCloseBtn = document.getElementById("close-settings");
var settingsSidebar = document.getElementById("settings-sidebar");
var resetSettings = document.querySelector("#reset-settings");
var fontOptionBtns = document.querySelectorAll(".font-option");
var carouselContainer = document.querySelector("#testimonials-carousel");
var carouselCards = document.querySelectorAll(".testimonial-card");
var nextCarouselBtn = document.querySelector("#next-testimonial");
var prevCarouselBtn = document.querySelector("#prev-testimonial");
var carouselIdicatorBtns = document.querySelectorAll(".carousel-indicator");
var sections = document.querySelectorAll("section");

// ^ initializations
getInitialStyle();
// ^ btns event handeling
themeToggleBtn.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});
heroLink.addEventListener("click", function () {
  if (this.classList.contains("active")) return;
  else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  if (
    scrollToTopBtn.classList.contains("invisible") &&
    scrollToTopBtn.classList.contains("opacity-0")
  ) {
    // console.log("Scroll to top button is already hidden.");
    return;
  } else {
    hideScrollToTopBtn();
  }
});
aboutLink.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  showScrollToTopBtn();
});
testimonialsLink.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  showScrollToTopBtn();
});
portfolioLink.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  showScrollToTopBtn();
});
experienceLink.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  showScrollToTopBtn();
});
contactLink.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    return;
  } else {
    this.classList.add("active");
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i] !== this) {
        navLinks[i].classList.remove("active");
      }
    }
  }
  showScrollToTopBtn();
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo((top = 0), (behavior = "smooth"));
  hideScrollToTopBtn();
  heroLink.classList.add("active");
  for (var i = 0; i < navLinks.length; i++) {
    if (navLinks[i] !== heroLink) {
      navLinks[i].classList.remove("active");
    }
  }
});
webPortfolioBtn.addEventListener("click", function () {
  // for (var i = 0; i < portfolioItem.length; i++) {
  //   if (portfolioItem[i].getAttribute("data-category") === "web") {
  //     portfolioItem[i].style.display = "block";
  //   } else {
  //     portfolioItem[i].style.display = "none";
  //   }
  // }
  // if (webPortfolioBtn.classList.contains("active")) {
  //   return;
  // }
  // else {
  //   webPortfolioBtn.classList.add("active");
  //   for (var i = 0; i < portfolioFilterBtns.length; i++) {
  //     if (portfolioFilterBtns[i] !== webPortfolioBtn) {
  //       portfolioFilterBtns[i].classList.remove("active");
  //       console.log('done')
  //     }
  //   }
  // }
  for (var i = 0; i < portfolioItem.length; i++) {
    if (portfolioItem[i].getAttribute("data-category") === "web") {
      portfolioItem[i].style.display = "block";
    } else {
      portfolioItem[i].style.display = "none";
    }
  }
  for (var i = 0; i < portfolioFilterBtns.length; i++) {
    if (portfolioFilterBtns[i] === webPortfolioBtn) {
      // clicked button
      webPortfolioBtn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      webPortfolioBtn.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "dark:border-slate-700",
      );
      webPortfolioBtn.setAttribute("aria-pressed", "true");
    } else {
      portfolioFilterBtns[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      portfolioFilterBtns[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      portfolioFilterBtns[i].setAttribute("aria-pressed", "false");
    }
  }
});
designPortfolioBtn.addEventListener("click", function () {
  for (var i = 0; i < portfolioItem.length; i++) {
    if (portfolioItem[i].getAttribute("data-category") === "design") {
      portfolioItem[i].style.display = "block";
    } else {
      portfolioItem[i].style.display = "none";
    }
  }
  for (var i = 0; i < portfolioFilterBtns.length; i++) {
    if (portfolioFilterBtns[i] === designPortfolioBtn) {
      // clicked button
      designPortfolioBtn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      designPortfolioBtn.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "dark:border-slate-700",
      );
      designPortfolioBtn.setAttribute("aria-pressed", "true");
    } else {
      portfolioFilterBtns[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      portfolioFilterBtns[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      portfolioFilterBtns[i].setAttribute("aria-pressed", "false");
    }
  }
});
appPortfolioBtn.addEventListener("click", function () {
  for (var i = 0; i < portfolioItem.length; i++) {
    if (portfolioItem[i].getAttribute("data-category") === "app") {
      portfolioItem[i].style.display = "block";
    } else {
      portfolioItem[i].style.display = "none";
    }
  }
  for (var i = 0; i < portfolioFilterBtns.length; i++) {
    if (portfolioFilterBtns[i] === appPortfolioBtn) {
      // clicked button
      appPortfolioBtn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      appPortfolioBtn.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "dark:border-slate-700",
      );
      appPortfolioBtn.setAttribute("aria-pressed", "true");
    } else {
      portfolioFilterBtns[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      portfolioFilterBtns[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      portfolioFilterBtns[i].setAttribute("aria-pressed", "false");
    }
  }
});
ecommercePortfolioBtn.addEventListener("click", function () {
  for (var i = 0; i < portfolioItem.length; i++) {
    if (portfolioItem[i].getAttribute("data-category") === "ecommerce") {
      portfolioItem[i].style.display = "block";
    } else {
      portfolioItem[i].style.display = "none";
    }
  }
  for (var i = 0; i < portfolioFilterBtns.length; i++) {
    if (portfolioFilterBtns[i] === ecommercePortfolioBtn) {
      // clicked button
      ecommercePortfolioBtn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      ecommercePortfolioBtn.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "dark:border-slate-700",
      );
      ecommercePortfolioBtn.setAttribute("aria-pressed", "true");
    } else {
      portfolioFilterBtns[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      portfolioFilterBtns[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      portfolioFilterBtns[i].setAttribute("aria-pressed", "false");
    }
  }
});
allPortfolioBtn.addEventListener("click", function () {
  for (var i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].style.display = "block";
  }
  for (var i = 0; i < portfolioFilterBtns.length; i++) {
    if (portfolioFilterBtns[i] === allPortfolioBtn) {
      // clicked button
      allPortfolioBtn.classList.add(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      allPortfolioBtn.classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "dark:border-slate-700",
      );
      allPortfolioBtn.setAttribute("aria-pressed", "true");
    } else {
      portfolioFilterBtns[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
      );
      portfolioFilterBtns[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      portfolioFilterBtns[i].setAttribute("aria-pressed", "false");
    }
  }
});
settingsBtn.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-full");
  settingsBtn.style.right = "20rem";
});
settingsCloseBtn.addEventListener("click", function () {
  settingsSidebar.classList.add("translate-x-full");
  settingsBtn.style.right = "0rem";
});
nextCarouselBtn.addEventListener("click", function () {
  currentCardIndex++;
  if (currentCardIndex >= 4) {
    currentCardIndex = 0;
  }
  var shiftPercent = currentCardIndex * 33.33;
  carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
});
prevCarouselBtn.addEventListener("click", function () {
  currentCardIndex--;
  if (currentCardIndex < 0) {
    currentCardIndex = carouselCards.length - 1 - 2;
  }
  var shiftPercent = currentCardIndex * 33.33;
  carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
});
carouselIdicatorBtns.forEach(function (clickedBtn) {
  clickedBtn.addEventListener("click", function () {
    var options = clickedBtn.getAttribute("data-index");
    switch (options) {
      case "0": {
        currentCardIndex = 0;
        var shiftPercent = currentCardIndex * 33.33;
        carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
        break;
      }
      case "1": {
        currentCardIndex = 1;
        var shiftPercent = currentCardIndex * 33.33;
        carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
        break;
      }
      case "2": {
        currentCardIndex = 2;
        var shiftPercent = currentCardIndex * 33.33;
        carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
        break;
      }
      case "3": {
        currentCardIndex = 3;
        var shiftPercent = currentCardIndex * 33.33;
        carouselContainer.style.transform = "translateX(" + shiftPercent + "%)";
        break;
      }
    }
  });
});
resetSettings.addEventListener("click", function () {
  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo",
  );
  fontOptionBtns.forEach(function (btn) {
    console.log("yes");
    btn.classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    btn.classList.add("border-slate-200", "dark:border-slate-700");
  });
  settingsCloseBtn.click();
});
//* scroll spy
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    var top = section.offsetTop - 120;
    var height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      if (current === "hero-section") hideScrollToTopBtn();
      else showScrollToTopBtn();
    }
  });
});
// ^ functions
fontOptionBtns.forEach(function (clickedbtn) {
  clickedbtn.addEventListener("click", function () {
    fontOptionBtns.forEach(function (btn) {
      if (btn === clickedbtn) {
        selectedFont = clickedbtn.getAttribute("data-font");
        document.body.classList.remove(
          "font-alexandria",
          "font-tajawal",
          "font-cairo",
        );
        document.body.classList.add("font-" + selectedFont);
        if (btn.classList.contains("active") === false) {
          btn.classList.remove("border-slate-200", "dark:border-slate-700");
          btn.classList.add(
            "active",
            "border-primary",
            "bg-slate-50",
            "dark:bg-slate-800",
          );
        } else {
          btn.classList.remove(
            "active",
            "border-primary",
            "bg-slate-50",
            "dark:bg-slate-800",
          );
          btn.classList.add("border-slate-200", "dark:border-slate-700");
          document.body.classList.remove(
            "font-alexandria",
            "font-tajawal",
            "font-cairo",
          );
        }
      } else {
        btn.classList.remove(
          "active",
          "border-primary",
          "bg-slate-50",
          "dark:bg-slate-800",
        );
        btn.classList.add("border-slate-200", "dark:border-slate-700");
      }
    });
  });
});
function getInitialStyle() {
  document.body.classList.remove(
    "font-alexandria",
    "font-tajawal",
    "font-cairo",
  );
}
function showScrollToTopBtn() {
  scrollToTopBtn.classList.remove("invisible");
  scrollToTopBtn.classList.remove("opacity-0");
}
function hideScrollToTopBtn() {
  scrollToTopBtn.classList.add("invisible");
  scrollToTopBtn.classList.add("opacity-0");
}
