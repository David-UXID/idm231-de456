//  Sound on Hover
const button = document.getElementById("hover.mp3");
const sound = document.getElementById("music.mp3");

button.addEventListener("mouseenter", () => {
  sound.currentTime = 0; // restarts the sound if hovered repeatedly
  sound.play();
});



// Volume Control
const audio = document.getElementById("audioPlayer");
const slider = document.getElementById("volumeSlider");
const percent = document.getElementById("volumePercent");

// Initialize audio volume
audio.volume = slider.value / 100;

slider.addEventListener("input", () => {
  // Convert slider value (0-100) to volume (0-1)
  const volume = slider.value / 100;
  audio.volume = volume;

  // Update UI
  percent.textContent = `${slider.value}%`;
});

