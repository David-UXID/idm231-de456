// ============================================
// Week 6: Events - Practice Exercises
// ============================================

console.log('--- Week 6: Events Exercises ---');
console.log('');

// ============================================
// Exercise 1: Show Alert
// ============================================

console.log('--- Exercise 1: Show Alert ---');

const alertBtn = document.querySelector('#alert-btn');

alertBtn.addEventListener('click', () => {
  alert('Hello from JavaScript!');
});

console.log('');

// ============================================
// Exercise 2: Double Click Counter
// ============================================

console.log('--- Exercise 2: Double Click Counter ---');

let doubleClickCount = 0;

const dblClickBox = document.getElementById('dblclick-box');
const dblClickOutput = document.getElementById('dblclick-output');

dblClickBox.addEventListener('dblclick', () => {
  doubleClickCount++;
  dblClickOutput.textContent = `Double-click count: ${doubleClickCount}`;
});

console.log('');

// ============================================
// Exercise 3: Character Counter
// ============================================

console.log('--- Exercise 3: Character Counter ---');

const charInput = document.getElementById('char-input');
const charOutput = document.getElementById('char-output');

charInput.addEventListener('keyup', () => {
  const length = charInput.value.length;
  charOutput.textContent = `${length} characters`;
});

console.log('');

// ============================================
// Exercise 4: Text Visibility Toggle
// ============================================

console.log('--- Exercise 4: Text Visibility Toggle ---');

const toggleBtn = document.getElementById('toggle-btn');
const toggleText = document.getElementById('toggle-text');

toggleBtn.addEventListener('click', () => {
  if (toggleText.style.display === 'none') {
    toggleText.style.display = 'block';
    toggleBtn.textContent = 'Hide Text';
  } else {
    toggleText.style.display = 'none';
    toggleBtn.textContent = 'Show Text';
  }
});

console.log('');

// ============================================
// Exercise 5: Number Validator
// ============================================

console.log('--- Exercise 5: Number Validator ---');

const numberInput = document.getElementById('number-input');
const validNotification = document.getElementById('valid-notification');

numberInput.addEventListener('blur', () => {
  const value = Number(numberInput.value);

  if (value >= 1 && value <= 100) {
    validNotification.style.display = 'block';
  } else {
    validNotification.style.display = 'none';
  }
});

console.log('');

// ============================================
// BONUS: Image Switcher
// ============================================

console.log('--- Bonus: Image Switcher ---');

const emojiDisplay = document.getElementById('emoji-display');

const emojiCat = document.getElementById('emoji-cat');
const emojiDog = document.getElementById('emoji-dog');
const emojiRocket = document.getElementById('emoji-rocket');
const emojiPizza = document.getElementById('emoji-pizza');

function changeEmoji(emoji) {
  emojiDisplay.textContent = emoji;
}

emojiCat.addEventListener('click', () => changeEmoji('🐱'));
emojiDog.addEventListener('click', () => changeEmoji('🐶'));
emojiRocket.addEventListener('click', () => changeEmoji('🚀'));
emojiPizza.addEventListener('click', () => changeEmoji('🍕'));

console.log('--- End of Exercises ---');

