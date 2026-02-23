
// Problem 1: Sound on Hover

// Create Audio object (sound_1)
const hoverSound = new Audio('sounds/sound_1.mp3');

// Select elements
const hoverBtn = document.querySelector('#hover-btn');
const hoverStatus = document.querySelector('#hover-status');

// Add mouseenter event
hoverBtn.addEventListener('mouseenter', () => {
  hoverSound.currentTime = 0; // restart if hovering repeatedly
  hoverSound.play();

  hoverStatus.textContent = 'Hover detected! 🎯 Playing sound_1...';
});



// Problem 2: Volume Control

// Create Audio object (sound_2)
const volumeAudio = new Audio('sounds/sound_2.mp3');

// Select elements
const volumePlayBtn = document.querySelector('#volume-play-btn');
const volumeSlider = document.querySelector('#volume-slider');
const volumeDisplay = document.querySelector('#volume-display');
const volumeStatus = document.querySelector('#volume-status');

// Set initial volume from slider (50%)
volumeAudio.volume = volumeSlider.value / 100;

// Play button event
volumePlayBtn.addEventListener('click', () => {
  volumeAudio.currentTime = 0;
  volumeAudio.play();

  volumeStatus.textContent = `Playing sound_2 at ${volumeSlider.value}% volume 🔊`;
});

// Real-time volume control
volumeSlider.addEventListener('input', () => {
  const volumeValue = volumeSlider.value;

  // Convert 0–100 → 0–1
  volumeAudio.volume = volumeValue / 100;

  volumeDisplay.textContent = `Volume: ${volumeValue}%`;
});

