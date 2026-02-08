fetch("/components/header.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("header").innerHTML = html;
  });

fetch("/components/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Header sólido após 80px
  if (currentScroll > 80) {
    header.classList.add("header--solid");
    header.classList.remove("header--transparent");
  } else {
    header.classList.add("header--transparent");
    header.classList.remove("header--solid");
  }

  // Esconde ao descer
  if (currentScroll > lastScroll && currentScroll > 200) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  lastScroll = currentScroll;
});
