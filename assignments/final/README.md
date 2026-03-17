# Which Balatro Joker Are You? - Cosmic Zodiac Casino

A retro-themed zodiac application that matches Western zodiac signs with Balatro jokers, featuring pixelated aesthetics, unique sounds, and casino vibes.

## 🎰 Features

### Core Functionality
- ✅ **Dual Input Methods**: Form entry (name + birth date) OR click zodiac symbols
- ✅ **Western Zodiac Algorithm**: Accurate date calculations for all 12 signs
- ✅ **Local Storage**: Persists name and birth date across page refreshes
- ✅ **Clear Button**: Reset all saved data
- ✅ **Single Page Application**: All content on one page, no navigation

### Visual & Audio
- ✅ **12 Unique Visuals**: Each zodiac sign has distinct icon and emoji
- ✅ **12 Unique Sounds**: Individual sound effect for each sign (with fallback tones)
- ✅ **Help Modal**: Complete instructions on how to use the app
- ✅ **Retro Balatro Theme**: Pixelated fonts, casino colors, card animations

### Technical Requirements
- ✅ **CSS Reset**: Modern normalization included
- ✅ **1280px Viewport**: Designed and tested at this width
- ✅ **No Console Errors**: Clean, error-free JavaScript
- ✅ **Valid Code**: HTML5 and CSS3 compliant
- ✅ **Keyboard Accessible**: Full tab navigation and keyboard support

### Bonus Features (Extra Credit)
- ✅ **Personalized Greeting**: Uses entered name in result
- ✅ **Date Formatting**: Displays birth date in readable format (e.g., "January 15, 2000")
- ✅ **Smooth Transitions**: CSS animations for cards, buttons, and modals
- ✅ **Keyboard Accessible**: Tab navigation, Enter to submit, focus states
- ✅ **Error Handling**: Validates date (not in future) with clear error messages
- ✅ **Custom Theme**: Cohesive Balatro-inspired color palette and typography
- ✅ **Loading State**: "Calculating..." feedback when form is submitted
- ✅ **Sound Toggle**: Mute/unmute button for user preference

## 📁 File Structure

```
final/
├── index.html          # Main HTML file
├── style.css           # Main styles with Balatro theme
├── reset.css           # CSS reset
├── script.js           # All JavaScript functionality
├── README.md           # This file
└── assets/
    └── audio/          # Audio files directory
        ├── explosion1.ogg
        ├── coin3.ogg
        ├── whoosh2.ogg
        ├── splash_buildup.ogg
        ├── win.ogg
        ├── card1.ogg
        ├── highlight1.ogg
        ├── explosion_buildup1.ogg
        ├── whoosh_long.ogg
        ├── coin5.ogg
        ├── holo1.ogg
        └── tarot2.ogg
```

## 🎵 Audio Files Needed

You need **12 unique sound files** (MP3 format recommended). Place them in a `sounds/` directory:

### Option 1: Use Balatro Game Sounds
Extract sound effects from the Balatro game (if you own it) for authenticity:
- Use victory jingles, card dealing sounds, joker activation sounds
- Each zodiac should have a distinct audio identity

### Option 2: Find Royalty-Free Sounds
Download from sites like:
- Freesound.org
- ZapSplat.com
- Mixkit.co
- BBC Sound Effects

### Option 3: Use Placeholder Sounds
The app includes a **fallback system** that generates simple tones if sound files are missing. For development, you can:
1. Create 12 empty MP3 files with the correct names
2. Or remove the files entirely - the app will generate beep tones as fallback

### Sound Characteristics by Sign
- **Aries**: Energetic, bold, upbeat
- **Taurus**: Steady, rich, grounded
- **Gemini**: Quick, dual-tone, playful
- **Cancer**: Gentle, nurturing, soft
- **Leo**: Royal, triumphant, grand
- **Virgo**: Precise, mechanical, clean
- **Libra**: Balanced, harmonious, melodic
- **Scorpio**: Intense, mysterious, deep
- **Sagittarius**: Adventurous, upbeat, dynamic
- **Capricorn**: Strategic, building, methodical
- **Aquarius**: Innovative, futuristic, unique
- **Pisces**: Dreamy, flowing, ethereal

## 🚀 Setup Instructions

1. **Download all files** to your `assignments/final/` folder

2. **Audio files**:
   - The app will use the built-in `assets/audio/` files by default.
   - If you'd rather provide your own sounds, create a `sounds/` directory next to `index.html` and add 12 MP3 files named exactly as shown above.

3. **Open in browser**:
   - Simply open `index.html` in any modern browser
   - Works best in Chrome, Firefox, Safari, or Edge

5. **Test at 1280px width**:
   - Resize browser window or use dev tools (F12)
   - Set responsive mode to 1280px wide

## 🎮 How to Use

### Method 1: Form Entry
1. Enter your name
2. Select your birth date
3. Click "REVEAL" to see your cosmic joker
4. View personalized result with your name and formatted date

### Method 2: Symbol Click
1. Click any of the 12 zodiac symbols
2. Instantly see that sign's joker and information
3. Each click plays a unique sound

### Additional Features
- **Sound Toggle**: Click speaker icon (top-left) to mute/unmute
- **Help**: Click "HELP" button (top-right) for instructions
- **Clear**: Reset form and clear saved data
- **Keyboard Navigation**: Tab through elements, Enter to select

## 🎨 Design System

### Colors
- **Primary Background**: #1a0b2e (deep purple)
- **Secondary Background**: #2d1b4e (lighter purple)
- **Accent Gold**: #ffd700 (highlights, borders)
- **Accent Red**: #d4145a (CTAs, important text)
- **Accent Purple**: #6b4c9a (buttons, borders)
- **Accent Blue**: #4dabf7 (info text)

### Typography
- **Headings**: Press Start 2P (pixelated retro font)
- **Body**: VT323 (monospace retro font)

### Animations
- Pulsing title
- Card slide-in entrance
- Button hover effects
- Twinkling stars background
- Modal fade-in

## ♈ Zodiac-Joker Mappings

| Zodiac Sign | Dates | Joker Name | Effect |
|-------------|-------|------------|--------|
| ♈ Aries | Mar 21 - Apr 19 | THE JOKER | +4 Mult |
| ♉ Taurus | Apr 20 - May 20 | BULL | +$2 per hand |
| ♊ Gemini | May 21 - Jun 20 | DUSK | Retrigger rightmost |
| ♋ Cancer | Jun 21 - Jul 22 | LOYALTY CARD | X4 every 5 hands |
| ♌ Leo | Jul 23 - Aug 22 | BARON | X1.5 per King |
| ♍ Virgo | Aug 23 - Sep 22 | EVEN STEVEN | +4 for evens |
| ♎ Libra | Sep 23 - Oct 22 | EQUILIBRIUM | Chips = Mult |
| ♏ Scorpio | Oct 23 - Nov 21 | VAMPIRE | X0.2 per enhanced |
| ♐ Sagittarius | Nov 22 - Dec 21 | SHOOT THE MOON | +13 per Queen |
| ♑ Capricorn | Dec 22 - Jan 19 | BLUEPRINT | Copy right joker |
| ♒ Aquarius | Jan 20 - Feb 18 | BRAINSTORM | Copy left joker |
| ♓ Pisces | Feb 19 - Mar 20 | SEEING DOUBLE | X2 if Club suit |

## ✅ Requirements Checklist

### Core Functionality
- [x] Form with name and birth date input
- [x] Clickable zodiac symbols (all 12)
- [x] Re-enter date without page reload
- [x] Local storage persistence (name + date)
- [x] Clear button to wipe storage
- [x] Western zodiac algorithm with correct date ranges

### Visual & Audio
- [x] 12 unique visuals (symbols + emojis)
- [x] 12 unique sounds (with fallback system)
- [x] Help section/modal

### Technical
- [x] CSS reset included
- [x] Single HTML page
- [x] No console errors
- [x] Works at 1280px viewport
- [x] Valid HTML and CSS code
- [x] Best practices for naming and structure

### Bonus Features
- [x] Personalized greeting with name
- [x] Formatted birth date display
- [x] Smooth CSS transitions/animations
- [x] Full keyboard accessibility
- [x] Error validation with clear messages
- [x] Custom cohesive theme
- [x] Loading state feedback
- [x] Sound toggle button

## 🐛 Troubleshooting

### Sounds Not Playing
- Check that `sounds/` directory exists in the same location as `index.html`
- Verify MP3 files are named correctly (lowercase, .mp3 extension)
- Try clicking sound toggle button to ensure sound is enabled
- If files are missing, app will generate fallback tones

### Local Storage Not Working
- Ensure you're not in private/incognito mode
- Check browser settings allow local storage
- Try clearing browser cache and reload

### Layout Issues
- Ensure viewport is set to 1280px width
- Check browser zoom is at 100%
- Use modern browser (Chrome, Firefox, Safari, Edge)

## 📝 Credits

**Design Inspiration**: Balatro (roguelike deckbuilder game)  
**Fonts**: Press Start 2P & VT323 (Google Fonts)  
**Zodiac System**: Western astrology date ranges  

---

**Built with**: HTML5, CSS3, Vanilla JavaScript  
**No frameworks or libraries required**

Good luck at the cosmic casino! 🎰✨
