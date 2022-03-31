window.addEventListener("keydown", playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", click);
});

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function click(event) {
  const audio = document.querySelector(`audio[data-key="${event.path[1].attributes["data-key"].nodeValue}"]`);
  const key = document.querySelector(`.key[data-key="${event.path[1].attributes["data-key"].nodeValue}"]`);
  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
}
