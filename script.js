 if (localStorage.getItem("theme") === "light") {
  $("#checkbox").prop("checked", true);
}
var themeToggle = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  console.log(themeToggle);
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}
themeToggle.addEventListener("change", switchTheme, false);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const minSize = 12 / 16;
  const maxSize = 18 / 16;
  const step = 0.05;
  const adjustFontSize = (change) => {
    const currentSize =
      parseFloat(getComputedStyle(root).getPropertyValue("--fontSize")) || 1;
    const newSize = Math.max(
      minSize,
      Math.min(maxSize, currentSize + change * step)
    );
    root.style.setProperty("--fontSize", newSize + "rem");
    localStorage.setItem("fontSizeDefault", newSize);
  };
  const savedSize = localStorage.getItem("fontSizeDefault");
  if (savedSize) {
    root.style.setProperty("--fontSize", savedSize + "rem");
  }
  window.adjustFontSize = adjustFontSize;
});

function toggleMenu(toggleButton, menuContent) {
  toggleButton.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menuContent.hidden = expanded;
  });
}
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-content");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-content");
const switchToggle = document.querySelector(".switch-toggle");
const switchMenu = document.querySelector(".switch-content");
toggleMenu(navToggle, navMenu);
toggleMenu(menuToggle, menu);
toggleMenu(switchToggle, switchMenu);
$(document).ready(function () {
  var $topbarNav = $("#topbarNav");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
      $topbarNav.addClass("scrolled");
    } else {
      $topbarNav.removeClass("scrolled");
    }
  });
});

let t = document.querySelector("#subaccounts_menu select"),
  e = t.querySelectorAll("option"),
  n = `<div class="switch">`;
e.forEach((t, e) => {
  if (e !== 0) {
    // Skip the first option
    let name = t.innerText.trim().replace(/»/g, ""),
      value = t.value;
    n += `
            <a title="${name}">
                <label class="switch-block">
                    <input type="checkbox" value="${value}" onchange="this.form.submit()" name="sub_id" />
                    <div style="
                            width: 40px; 
                            height: 60px; 
                            border-radius: 0px 8px 8px 0px;
                            background-size: cover; 
                            background-position: center; 
                            background-image: 
                                url(https://files.jcink.net/uploads2/skinsbyoctober/av-${value}.png), 
                                url(https://files.jcink.net/uploads2/skinsbyoctober/av-${value}.gif), 
                                url(https://files.jcink.net/uploads2/skinsbyoctober/av-${value}.jpg), 
                                url(https://files.jcink.net/uploads2/skinsbyoctober/av-${value}.jpeg), 
                                url(https://s11.gifyu.com/images/SWRqs.png);
                             margin: 0px 0px 0px 0px;">
                    </div>
                    ${name}
                </label>
            </a>`;
  }
});
n += `</div>`;
t.insertAdjacentHTML("afterend", n);
t.remove();

$(document).ready(function () {
  $(".tabBtn").on("click", function () {
    const targetTab = $(this).data("tab");
    if (!$(`.tab-${targetTab}`).length) return;
    $(".tabBtn").removeClass("active");
    $(this).addClass("active");
    $(".tabContent > div").removeClass("active").hide();
    $(`.tab-${targetTab}`).addClass("active").fadeIn(200);
  });
  $(".tab-1").addClass("active").show();
});
