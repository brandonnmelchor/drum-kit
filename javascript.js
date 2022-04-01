function playKey(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio || !key) return;
  playSound(audio, key);
}

function playClick(event) {
  event.preventDefault();
  const audio = document.querySelector(`audio[data-key="${event.path[1].attributes["data-key"].nodeValue}"]`);
  const key = document.querySelector(`.key[data-key="${event.path[1].attributes["data-key"].nodeValue}"]`);
  if (!audio || !key) return;
  playSound(audio, key);
}

function playSound(audio, key) {
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
  key.addEventListener("transitionend", removeTransition);
});

document.addEventListener("click", playClick);
document.addEventListener("touchstart", playClick);
document.addEventListener("keydown", playKey);
