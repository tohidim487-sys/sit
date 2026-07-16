// JavaScript Document

  const banner = document.getElementById("welcomeBanner");

  // نمایش هنگام ورود
  window.onload = function () {
    banner.style.display = "block";
  };

  // بستن با دکمه
  function closeBanner() {
    banner.style.display = "none";
  }

  // بستن با Enter یا Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === "Escape") {
      banner.style.display = "none";
    }
  });