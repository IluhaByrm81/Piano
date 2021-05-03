const piano = document.querySelector(".piano");

const whiteKey = document.querySelector(".whiteKey");
const blackKey = document.querySelector(".blacKey");

piano.addEventListener("click", (e) => {
  const currentNota = e.target.dataset.nota;
  const audio = new Audio(`./sounds/${currentNota}.ogg`);
  audio.currentTime = 0;
  audio.play();
});

// console.log(whiteKey);
