// ============= RESPONSIVE TYPEWRITER ============== //

const title = document.querySelector(".titre-cntemad");      
// ============= MAX-MD ===================== //
if (window.innerWidth < 768) {
  title.classList.remove("typewriter")
}

// ============== SHOW MENU ====================== //
// ============ CONST OF MENU =================== //
const nav_resp = document.querySelector(".nav_resp"),
      nav_liste = document.querySelector("#nav_liste"),
      nav_close = document.querySelector("#nav-close");

// ============== ADD MENU WITH RESP =============== //
if (nav_resp) {
  nav_resp.addEventListener('click', () => {
    nav_liste.classList.add("show_menu")
  })
}

// ============== REMOVE MENU IF EXIST ============ //
if (nav_close) {
  nav_close.addEventListener('click', () => {
    nav_liste.classList.remove("show_menu")
  })
}

// ============== ACTIVE LINK RESP =============== //

const linkNav = document.querySelectorAll(".link-nav")

function linkActive() {
  // ================= NAV LIST ================== //
  document.querySelector("#nav_liste").classList.remove("show_menu");
}
linkNav.forEach(link => link.addEventListener('click', linkActive));

const btn_form = document.querySelectorAll(".btn_form");

btn_form.forEach(btn => btn.addEventListener('click', () => {
  alert("Formulaire à remplir!")
}));