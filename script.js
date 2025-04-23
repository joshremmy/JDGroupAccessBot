document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Auto theme based on time
  const hour = new Date().getHours();
  const darkModeStart = 19; // 7 PM
  const darkModeEnd = 7;    // 7 AM

  if (hour >= darkModeStart || hour < darkModeEnd) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }

  // Fade-in scroll effect
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
