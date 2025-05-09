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

// const menuToggle = document.getElementById("menuToggle");
// const navList = document.querySelector(".nav__list");
// const navClose = document.getElementById("menuClose");

// function closeMenu() {
//   navList.classList.remove("active");
//   menuToggle.style.display = "block";
//   navClose.style.display = "none";
// }

// menuToggle.addEventListener("click", () => {
//   navList.classList.add("active");
//   navClose.style.display = "block";
//   menuToggle.style.display = "none";
// });

// navClose.addEventListener("click", closeMenu);

// document.querySelectorAll(".nav__list a").forEach((link) => {
//   link.addEventListener("click", closeMenu);
// });



