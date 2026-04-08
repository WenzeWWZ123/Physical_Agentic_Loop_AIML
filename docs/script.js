document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".reveal");
  const navLinks = document.querySelectorAll(".nav-links a");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.9;
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) {
        section.classList.add("visible");
      }
    });
  };

  const setActiveNav = () => {
    let currentId = "";
    document.querySelectorAll("section[id]").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  revealOnScroll();
  setActiveNav();

  window.addEventListener("scroll", () => {
    revealOnScroll();
    setActiveNav();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
