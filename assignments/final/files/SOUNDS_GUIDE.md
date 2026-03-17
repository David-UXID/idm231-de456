# Audio Files Quick Reference

## 📁 Required Files in `sounds/` Directory

Place these 12 MP3 files in the `sounds/` folder:

1. **aries.mp3** - Bold, energetic sound (fire element)
2. **taurus.mp3** - Steady, grounding sound (earth element)
3. **gemini.mp3** - Quick, dual-tone sound (air element)
4. **cancer.mp3** - Gentle, nurturing sound (water element)
5. **leo.mp3** - Royal, triumphant sound (fire element)
6. **virgo.mp3** - Precise, methodical sound (earth element)
7. **libra.mp3** - Balanced, harmonious sound (air element)
8. **scorpio.mp3** - Intense, mysterious sound (water element)
9. **sagittarius.mp3** - Adventurous sound (fire element)
10. **capricorn.mp3** - Strategic, building sound (earth element)
11. **aquarius.mp3** - Innovative, futuristic sound (air element)
12. **pisces.mp3** - Dreamy, flowing sound (water element)

## 🎵 Where to Get Sounds

### Option 1: Balatro Game Sounds (Most Authentic)
If you own Balatro, extract these sounds:
- Joker activation sounds
- Card play sounds
- Victory/scoring jingles
- Menu selection sounds

### Option 2: Royalty-Free Sources
**Recommended Sites:**
- **Freesound.org** - Search for "game," "card," "casino," "chip"
- **Mixkit.co** - Game sound effects section
- **ZapSplat.com** - Casino and card game sounds
- **BBC Sound Effects** - Various game sounds

**Search Terms:**
- "poker chip"
- "card shuffle"
- "casino win"
- "game victory"
- "notification beep"
- "magic spell"
- "power up"

### Option 3: Create Your Own
Use online tools:
- **BeepBox.co** - Create chiptune sounds
- **SFXR** - Generate retro game sound effects
- **Audacity** - Free audio editor

### Option 4: AI-Generated Sounds (if available)
- Use AI sound generators like Suno AI
- Describe the character you want (energetic, mystical, etc.)

## 🔧 If You Don't Have Sound Files

**Good News**: The app includes a fallback system!

If sound files are missing, the app will automatically generate simple beep tones using the Web Audio API. Each zodiac gets a slightly different pitch for variety.

**To test without sounds:**
1. Just skip creating the sounds folder
2. Or create empty files (they'll trigger the fallback)
3. The app works perfectly - just with synthesized tones instead

## 📝 File Format Requirements

- **Format**: MP3 (recommended) or WAV
- **Length**: 0.5 - 3 seconds ideal
- **Size**: Keep under 100KB each for fast loading
- **Bitrate**: 128kbps is sufficient
- **Naming**: MUST match exactly (lowercase, no spaces)

## 🎨 Sound Design Tips

Match the sound to the joker's personality:

**Fire Signs** (Aries, Leo, Sagittarius):
- Energetic, bold, rising tones
- Fast-paced, exciting

**Earth Signs** (Taurus, Virgo, Capricorn):
- Steady, grounding, low tones
- Methodical, reliable

**Air Signs** (Gemini, Libra, Aquarius):
- Light, airy, higher tones
- Quick, playful, intelligent

**Water Signs** (Cancer, Scorpio, Pisces):
- Flowing, mystical, ambient
- Emotional, dreamy, deep

## ✅ Quick Setup

1. Create `sounds/` folder next to `index.html`
2. Add 12 MP3 files with exact names above
3. Test by opening `index.html` and clicking symbols
4. If sounds don't play, check browser console (F12)

## 🎯 Testing Sounds

1. Open `index.html` in browser
2. Click the speaker icon (should be 🔊)
3. Click any zodiac symbol
4. You should hear a sound play
5. Click speaker again (🔇) to mute

If you don't hear anything:
- Check browser console for errors
- Verify file names are correct
- Ensure files are in `sounds/` folder
- Try with a different browser
- Check browser audio isn't muted

---

**Remember**: The app works great with OR without sound files! The fallback system ensures users always get audio feedback. 🎰
