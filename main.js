// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector(".nav__list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToggle.classList.toggle("open"); // Por si quieres animar el botón
});

// Cerrar el menú al hacer clic en un enlace (móvil)
document.querySelectorAll(".nav__list a").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// Scroll suave 
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const btnCopiar = document.getElementById("copiarCorreo");
const correo = document.getElementById("correo");
const copiadoMsg = document.getElementById("copiadoMsg");

btnCopiar.addEventListener("click", () => {
  navigator.clipboard.writeText(correo.textContent).then(() => {
    copiadoMsg.hidden = false;
    setTimeout(() => {
      copiadoMsg.hidden = true;
    }, 2000);
  });
});

