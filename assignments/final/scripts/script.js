// Zodiac Data - Western Zodiac System
const zodiacData = {
    aries: {
        name: 'Aries',
        symbol: '♈',
        emoji: '🔥',
        jokerName: 'THE JOKER',
        dateRange: 'March 21 - April 19',
        startMonth: 3,
        startDay: 21,
        endMonth: 4,
        endDay: 19,
        description: 'Bold, fearless, and ready to take risks. The classic joker that starts the game with pure energy and unmatched enthusiasm.',
        effect: '+4 Mult',
        sound: 'assets/audio/explosion1.ogg'
    },
    taurus: {
        name: 'Taurus',
        symbol: '♉',
        emoji: '💎',
        jokerName: 'BULL',
        dateRange: 'April 20 - May 20',
        startMonth: 4,
        startDay: 20,
        endMonth: 5,
        endDay: 20,
        description: 'Steady, reliable, values security. Builds wealth slowly but surely with every hand played.',
        effect: '+$2 for each hand played',
        sound: 'assets/audio/coin3.ogg'
    },
    gemini: {
        name: 'Gemini',
        symbol: '♊',
        emoji: '🎭',
        jokerName: 'DUSK',
        dateRange: 'May 21 - June 20',
        startMonth: 5,
        startDay: 21,
        endMonth: 6,
        endDay: 20,
        description: 'Adaptable and dual-natured. Retriggers your final played card for double the impact.',
        effect: 'Retrigger rightmost card',
        sound: 'assets/audio/whoosh2.ogg'
    },
    cancer: {
        name: 'Cancer',
        symbol: '♋',
        emoji: '🌙',
        jokerName: 'LOYALTY CARD',
        dateRange: 'June 21 - July 22',
        startMonth: 6,
        startDay: 21,
        endMonth: 7,
        endDay: 22,
        description: 'Nurturing and loyal. Rewards consistency and repeated plays of your favorite hand.',
        effect: 'X4 Mult every 5 hands',
        sound: 'assets/audio/splash_buildup.ogg'
    },
    leo: {
        name: 'Leo',
        symbol: '♌',
        emoji: '👑',
        jokerName: 'BARON',
        dateRange: 'July 23 - August 22',
        startMonth: 7,
        startDay: 23,
        endMonth: 8,
        endDay: 22,
        description: 'Regal and commanding. Every King in your hand adds to your royal multiplier.',
        effect: 'Each King held gives X1.5 Mult',
        sound: 'assets/audio/win.ogg'
    },
    virgo: {
        name: 'Virgo',
        symbol: '♍',
        emoji: '⚙️',
        jokerName: 'EVEN STEVEN',
        dateRange: 'August 23 - September 22',
        startMonth: 8,
        startDay: 23,
        endMonth: 9,
        endDay: 22,
        description: 'Detail-oriented perfectionist. Bonuses when everything is balanced and even.',
        effect: '+4 Mult for even ranked cards',
        sound: 'assets/audio/card1.ogg'
    },
    libra: {
        name: 'Libra',
        symbol: '♎',
        emoji: '⚖️',
        jokerName: 'EQUILIBRIUM',
        dateRange: 'September 23 - October 22',
        startMonth: 9,
        startDay: 23,
        endMonth: 10,
        endDay: 22,
        description: 'Seeks perfect balance. Creates equal chips and mult for harmonious scoring.',
        effect: 'Chips = Mult for scoring',
        sound: 'assets/audio/highlight1.ogg'
    },
    scorpio: {
        name: 'Scorpio',
        symbol: '♏',
        emoji: '🦂',
        jokerName: 'VAMPIRE',
        dateRange: 'October 23 - November 21',
        startMonth: 10,
        startDay: 23,
        endMonth: 11,
        endDay: 21,
        description: 'Intense and transformative. Removes enhanced cards to gain massive power.',
        effect: 'Gains X0.2 Mult per enhanced card removed',
        sound: 'assets/audio/explosion_buildup1.ogg'
    },
    sagittarius: {
        name: 'Sagittarius',
        symbol: '♐',
        emoji: '🎯',
        jokerName: 'SHOOT THE MOON',
        dateRange: 'November 22 - December 21',
        startMonth: 11,
        startDay: 22,
        endMonth: 12,
        endDay: 21,
        description: 'Adventurous risk-taker. Massive bonus when you hold every Queen in your deck.',
        effect: '+13 Mult for each Queen in hand',
        sound: 'assets/audio/whoosh_long.ogg'
    },
    capricorn: {
        name: 'Capricorn',
        symbol: '♑',
        emoji: '🏔️',
        jokerName: 'BLUEPRINT',
        dateRange: 'December 22 - January 19',
        startMonth: 12,
        startDay: 22,
        endMonth: 1,
        endDay: 19,
        description: 'Strategic planner. Copies the ability of the joker to its right for double effect.',
        effect: 'Copies joker to the right',
        sound: 'assets/audio/coin5.ogg'
    },
    aquarius: {
        name: 'Aquarius',
        symbol: '♒',
        emoji: '💫',
        jokerName: 'BRAINSTORM',
        dateRange: 'January 20 - February 18',
        startMonth: 1,
        startDay: 20,
        endMonth: 2,
        endDay: 18,
        description: 'Innovative thinker. Copies the leftmost joker for revolutionary combinations.',
        effect: 'Copies joker to the left',
        sound: 'assets/audio/holo1.ogg'
    },
    pisces: {
        name: 'Pisces',
        symbol: '♓',
        emoji: '🌊',
        jokerName: 'SEEING DOUBLE',
        dateRange: 'February 19 - March 20',
        startMonth: 2,
        startDay: 19,
        endMonth: 3,
        endDay: 20,
        description: 'Dreamy and intuitive. Scores clubs and multiplies when suit appears twice.',
        effect: 'X2 Mult if hand has Club suit',
        sound: 'assets/audio/tarot2.ogg'
    }
};

// State management
let soundEnabled = true;
let currentAudio = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeStars();
    loadFromLocalStorage();
    setupEventListeners();
    populateSymbols();
});

// Generate animated stars
function initializeStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Local Storage Functions
function saveToLocalStorage() {
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    
    localStorage.setItem('zodiac_name', name);
    localStorage.setItem('zodiac_birthdate', birthdate);
}

function loadFromLocalStorage() {
    const savedName = localStorage.getItem('zodiac_name');
    const savedBirthdate = localStorage.getItem('zodiac_birthdate');
    
    if (savedName) {
        document.getElementById('name').value = savedName;
    }
    if (savedBirthdate) {
        document.getElementById('birthdate').value = savedBirthdate;
    }
}

function clearLocalStorage() {
    localStorage.removeItem('zodiac_name');
    localStorage.removeItem('zodiac_birthdate');
    document.getElementById('name').value = '';
    document.getElementById('birthdate').value = '';
    document.querySelector('.result-section').classList.remove('active');
}

// Event Listeners
function setupEventListeners() {
    // Form submission
    document.getElementById('zodiacForm').addEventListener('submit', handleFormSubmit);
    
    // Clear button
    document.getElementById('clearBtn').addEventListener('click', clearLocalStorage);
    
    // Help modal
    document.getElementById('helpBtn').addEventListener('click', () => {
        document.getElementById('helpModal').classList.add('active');
    });
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('helpModal').classList.remove('active');
    });
    
    // Close modal on outside click
    document.getElementById('helpModal').addEventListener('click', (e) => {
        if (e.target.id === 'helpModal') {
            document.getElementById('helpModal').classList.remove('active');
        }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('helpModal').classList.remove('active');
        }
    });
    
    // Sound toggle
    document.getElementById('soundToggle').addEventListener('click', toggleSound);
    
    // Save inputs on change
    document.getElementById('name').addEventListener('input', saveToLocalStorage);
    document.getElementById('birthdate').addEventListener('change', saveToLocalStorage);
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundToggle');
    btn.textContent = soundEnabled ? '🔊' : '🔇';
    
    if (!soundEnabled && currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
}

// Play sound
function playSound(soundFile) {
    if (!soundEnabled) return;
    
    // Stop current audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Create and play new audio with fallback
    currentAudio = new Audio(soundFile);
    currentAudio.volume = 0.5;
    
    // Fallback to beep if sound file doesn't exist
    currentAudio.addEventListener('error', () => {
        // Use Web Audio API to generate a simple tone as fallback
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 440 + Math.random() * 200;
        gainNode.gain.value = 0.3;
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2);
    });
    
    currentAudio.play().catch(() => {
        // Silently fail if audio can't play
    });
}

// Populate zodiac symbols
function populateSymbols() {
    const grid = document.querySelector('.symbols-grid');
    
    Object.keys(zodiacData).forEach(key => {
        const data = zodiacData[key];
        const btn = document.createElement('button');
        btn.className = 'symbol-btn';
        btn.setAttribute('aria-label', `View ${data.name} zodiac sign`);
        btn.innerHTML = `
            <span class="symbol-icon">${data.symbol}</span>
            <span class="symbol-name">${data.name.toUpperCase()}</span>
        `;
        
        btn.addEventListener('click', () => {
            displayResult(key, null);
        });
        
        // Keyboard support
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                displayResult(key, null);
            }
        });
        
        grid.appendChild(btn);
    });
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.form-input').forEach(el => el.classList.remove('error'));
    
    // Validation
    let hasError = false;
    
    if (!name) {
        showError('nameError', 'Please enter your name');
        document.getElementById('name').classList.add('error');
        hasError = true;
    }
    
    if (!birthdate) {
        showError('dateError', 'Please select your birth date');
        document.getElementById('birthdate').classList.add('error');
        hasError = true;
    } else {
        // Check if date is in the future
        const selectedDate = new Date(birthdate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate > today) {
            showError('dateError', 'Birth date cannot be in the future');
            document.getElementById('birthdate').classList.add('error');
            hasError = true;
        }
    }
    
    if (hasError) return;
    
    // Show loading state
    const loading = document.querySelector('.loading');
    loading.classList.add('active');
    
    // Simulate calculation delay
    setTimeout(() => {
        loading.classList.remove('active');
        
        const zodiacSign = calculateZodiacSign(birthdate);
        displayResult(zodiacSign, { name, birthdate });
        
        // Scroll to result
        document.querySelector('.result-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }, 800);
}

// Show error message
function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    errorEl.textContent = message;
    errorEl.classList.add('active');
}

// Calculate zodiac sign from birth date
function calculateZodiacSign(birthdate) {
    // Birthdate comes from an <input type="date"> which returns YYYY-MM-DD.
    // Parsing via Date() can shift the day depending on timezone (e.g. UTC vs local).
    // We only care about month/day, so parse explicitly to avoid off-by-one issues.
    let month;
    let day;

    if (typeof birthdate === 'string') {
        const parts = birthdate.split('-');
        if (parts.length >= 3) {
            month = Number(parts[1]);
            day = Number(parts[2]);
        }
    }

    if (!month || !day) {
        const date = new Date(birthdate);
        month = date.getMonth() + 1;
        day = date.getDate();
    }

    // Check each zodiac sign
    for (const [key, sign] of Object.entries(zodiacData)) {
        // Handle signs that span across year boundary (like Capricorn)
        if (sign.startMonth > sign.endMonth) {
            // Dec 22 - Jan 19 case
            if (month === sign.startMonth && day >= sign.startDay) {
                return key;
            }
            if (month === sign.endMonth && day <= sign.endDay) {
                return key;
            }
        } else {
            // Normal case
            if (month === sign.startMonth && day >= sign.startDay) {
                return key;
            }
            if (month === sign.endMonth && day <= sign.endDay) {
                return key;
            }
            if (month > sign.startMonth && month < sign.endMonth) {
                return key;
            }
        }
    }

    return 'aries'; // Fallback
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Display result
function displayResult(zodiacKey, userData) {
    const data = zodiacData[zodiacKey];
    const resultSection = document.querySelector('.result-section');
    
    // Play sound
    playSound(data.sound);
    
    // Update content
    let greetingHTML = '';
    let birthdateHTML = '';
    
    if (userData) {
        greetingHTML = `<div class="result-greeting">Hi ${userData.name}! 🎰</div>`;
        birthdateHTML = `<div class="result-birthdate">Born on ${formatDate(userData.birthdate)}</div>`;
    }
    
    resultSection.innerHTML = `
        ${greetingHTML}
        <h2 class="result-title">YOUR COSMIC JOKER IS...</h2>
        <div class="result-joker">${data.emoji}</div>
        <h3 class="result-name">${data.jokerName}</h3>
        <p class="result-zodiac">${data.symbol} ${data.name.toUpperCase()} ${data.symbol}</p>
        <p class="result-dates">${data.dateRange}</p>
        ${birthdateHTML}
        <p class="result-description">${data.description}</p>
        <div class="result-effect">
            <strong>JOKER EFFECT:</strong> ${data.effect}
        </div>
    `;
    
    // Show result with animation
    resultSection.classList.remove('active');
    // Force reflow to restart animation
    void resultSection.offsetWidth;
    resultSection.classList.add('active');
}
