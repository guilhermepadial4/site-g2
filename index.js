document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = mobileNav.querySelectorAll(".nav-link");
  const header = document.getElementById("header");

  // 1. Funcionalidade para abrir/fechar o menu mobile
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      mobileNav.classList.toggle("active");

      // Atualiza o atributo aria-expanded para acessibilidade
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
    });
  }

  // 2. Funcionalidade para fechar o menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mobileNav.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // 3. Adicionar sombra no cabeçalho ao rolar a página
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
});
