const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const revealItems = document.querySelectorAll(".reveal");

if (menuToggle && navLinks) {
  const navItems = navLinks.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navItems.forEach((item) => item.classList.remove("nav-active", "nav-tap"));
      link.classList.add("nav-active", "nav-tap");

      window.setTimeout(() => {
        link.classList.remove("nav-tap");
      }, 260);

      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));
