import hamburgerMenu from "./assets/js/menu-hamburguer.js";
import openModal from "./assets/js/login.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  openModal("open-login-modal", "login-modal", ".close");
});
