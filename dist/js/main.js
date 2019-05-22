
  //do work
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuNav = document.querySelector(".menu-nav");
  const menuBranding = document.querySelector(".menu-branding");
  const navItems = document.querySelectorAll(".nav-item");
 
  const view = document.querySelectorAll(".btn-light");
console.log("items on load")
  //set initial state of menu / overlay to false.
  let showMenu = false;

  
  menuBtn.addEventListener("click", toggleMenu);

(function() {
  const items = document.querySelectorAll(".btn-light");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", toggleMenu)
  }
})();

(function() {
  const items = document.querySelectorAll(".projectPicture");
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", toggleMenu)
  }
})();
  

  function toggleMenu(event) {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(item => {
        item.classList.add("show");
        showMenu = true;
      });
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(item => {
        item.classList.remove("show");
        showMenu = false;
      });
    }
  }

