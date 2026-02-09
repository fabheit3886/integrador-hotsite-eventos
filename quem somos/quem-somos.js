const timelineData = [
  {
    year: "2012",
    title: "O começo de tudo.",
    text: "O CAJUfestival nasceu em Natal como um gesto cultural e coletivo. Um festival criado para valorizar a identidade nordestina, ocupar a cidade e conectar música, arte e pessoas. Pequeno em estrutura, grande em propósito. Ali, a história começou.",
    image: "assets/timeline/2012.png"
  },
  {
    year: "2018",
    title: "Um marco na trajetória.",
    text: "O CAJUfestival se consolidou como referência cultural no Rio Grande do Norte. Grandes encontros, curadoria madura e público diverso. A cidade viveu o festival  e o festival virou parte da cidade. Um ano inesquecível.",
    image: "assets/timeline/2018.png"
  },
  {
    year: "2022",
    title: "DEZ ANOS QUE VIRARAM HISTÓRIA",
    text: "Em 2022, o CAJUfestival celebrou uma década de trajetória. Foram dez anos transformando encontros em cultura, a cidade em palco e a música em experiência coletiva. O que nasceu como um sonho local se firmou como movimento cultural. Dez anos depois, o CAJUfestival mostrou que sua história continua sendo escrita junto ao público.",
    image: "assets/timeline/2022.png"
  },
  {
    year: "2025",
    title: "Presente vivo, olhar para o futuro.",
    text: "Após mais de uma década, o CAJUfestival chega fortalecido e consciente de sua identidade. Tradição e contemporaneidade em diálogo. Mais do que um evento, um movimento cultural. A história continua.",
    image: "assets/timeline/2025.png"
  }
];

const buttons = document.querySelectorAll(".year");

const yearEl = document.getElementById("timeline-year");
const titleEl = document.getElementById("timeline-title");
const textEl = document.getElementById("timeline-text");
const imageEl = document.getElementById("timeline-image");

function changeTimeline(index) {
  buttons.forEach(btn => btn.classList.remove("active"));
  buttons[index].classList.add("active");

  imageEl.style.opacity = 0;

  setTimeout(() => {
    yearEl.textContent = timelineData[index].year;
    titleEl.textContent = timelineData[index].title;
    textEl.textContent = timelineData[index].text;
    imageEl.src = timelineData[index].image;

    imageEl.style.opacity = 1;
  }, 200);
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => changeTimeline(index));
});

changeTimeline(0);
