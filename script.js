document.addEventListener("alpine:init", () => {
  Alpine.data("navHandler", () => ({
    open: false,
    scrolled: false,

    handleScroll() {
      this.scrolled = window.pageYOffset > 20;
    },
  }));
});

// Optional: Console Greeting for other developers
console.log(
  "%c👨‍💻 Built by Ferdian Dwi Putra",
  "color: #b91c1c; font-size: 20px; font-weight: bold;",
);
