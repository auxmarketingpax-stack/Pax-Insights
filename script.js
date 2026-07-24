const header = document.querySelector(".site-header");
const menuToggleBtn = document.getElementById("menuToggleBtn");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));

if (menuToggleBtn && header) {
  menuToggleBtn.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

for (const link of navLinks) {
  link.addEventListener("click", () => {
    if (!header || !header.classList.contains("is-open")) {
      return;
    }
    header.classList.remove("is-open");
    menuToggleBtn?.setAttribute("aria-expanded", "false");
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, {
    threshold: 0.18,
  });

  for (const item of revealItems) {
    observer.observe(item);
  }
} else {
  for (const item of revealItems) {
    item.classList.add("is-visible");
  }
}
