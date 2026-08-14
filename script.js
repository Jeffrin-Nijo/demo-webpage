// Mobile menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Dark / light mode
function toggleTheme() {
  document.body.classList.toggle("light");

  const button = document.querySelector(".theme-btn");

  if (document.body.classList.contains("light")) {
    button.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    button.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// Remember theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    document.querySelector(".theme-btn").textContent = "☀️";
  }
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("formMessage");

  message.textContent = `Thanks ${name}! Your message has been received.`;

  this.reset();
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});