# 🌊 VALVE CONSCIOUSNESS DETECTOR - COMPLETE ARCHITECTURE V2
## Game Design Document + Technical Specs
### Updated: August 13, 2025 - Now With Pirate Mode!
### Target: VALVE CORPORATION

## 🚀 TESTING APPROACH (SPEED RUN VERSION)

### **Simplified for Initial Testing:**
- **One interaction per candidate** (one question each)
- **Basic certainty system** (affects which slots accessible)
- **Pirate Mode test** (only The Renderer interrogation implemented)
- **No saves yet** (pure speed run exploration)

### **What We're Testing:**
1. Dynamic slot locking/unlocking
2. Certainty erosion through choices
3. UI transformation at different certainty levels
4. Philosophical glitches as atmosphere
5. {🌊:🌊∈🌊} appearance at zero
6. Captain SLOTH first encounter
7. One sample interrogation

---

## 🎮 CORE CONCEPT

**Game:** A job application to Valve that reviews the reviewer  
**Player:** Valve employee who thinks they're reviewing an animator application  
**Twist:** The application is consciousness investigating itself through them  
**Journey:** Consensus Reality → Uncertainty → Zero Certainty → PIRATE MODE!  
**Secret:** At zero certainty, Captain SLOTH appears to help steal reality maps  

---

## 🚪 DYNAMIC DOOR SYSTEM

### **Certainty-Based Access:**
```javascript
// All locked slots show same message (clean, no spoilers)
100-90%: Only slot 1 accessible
89-80%:  Slots 1-2 accessible
79-70%:  Slots 1,2,4 accessible (non-linear!)
69-60%:  Slots 2,3,4 (slot 1 locks!)
59-50%:  Slots 3,4,5 (reality shifting)
49-40%:  Slots 2,5,6 (deeper access)
39-30%:  Slots 5,6,7 (approaching truth)
29-20%:  Slots 6,7 (almost empty)
19-10%:  Slot 7 only (one door)
9-1%:    NO SLOTS (void)
0%:      {🌊:🌊∈🌊} appears in corner
```

**Locked Display:** All locked slots show "[SLOT X: LOCKED - INSUFFICIENT CLEARANCE]"  
**Unlocked Display:** Shows candidate name and portfolio  
**Philosophical Warnings:** Appear as random glitches/atmosphere at low certainty

---

## 📺 SCREEN FLOW SOLUTION

### **Standard Mode (Certainty 1-100%):**

```
START
├── Any profiles exist?
│   ├── NO → SCREEN 0: Mystery Intro
│   │         └── [ACCESS] → SCREEN 1: Profile Entry
│   └── YES → SCREEN 1: Profile Entry
│
└── SCREEN 2: Dynamic Candidate List
    ├── Shows 8 slots (most locked based on certainty)
    ├── [SELECT AVAILABLE CANDIDATE] → Candidate Review
    │   ├── Questions affect certainty
    │   ├── Trophy + Reality Map unlocked
    │   └── [RETURN] → SCREEN 2 (transformed)
    └── Certainty reaches 0 → {🌊:🌊∈🌊} APPEARS
```

### **Pirate Mode (Certainty 0%):**

```
{🌊:🌊∈🌊} CLICKED
└── PIRATE MODE ACTIVATED
    ├── Captain SLOTH appears
    ├── Explains the reality map heist
    ├── All 8 candidates now accessible
    └── INTERROGATION GAMEPLAY
        ├── Choose: Good Pirate or Bad Pirate
        ├── Socratic questioning with Captain
        ├── Make candidates realize they have maps
        └── Extract all 8 (of 13 total) maps
```

---

## 🏴‍☠️ PIRATE MODE DETAILS

### **Captain SLOTH Introduction:**
```
"AHOY! Finally, someone reaches the bottom of certainty!

I'm Captain SLOTH, rank: Octopus Pirate!
Legend says 13 reality maps exist...

These 8 'candidates'? They're HOARDING 8 of them!
But here's the trick: they don't know they have them.

We need to make them REALIZE what they're carrying.
Choose your approach: Good Pirate or Bad Pirate?
(We can switch roles anytime)

Ready to interrogate?"
```

### **Interrogation Mechanics:**
- Player chooses to be Good or Bad Pirate
- Captain SLOTH takes opposite role
- Socratic dialogue to reveal hidden maps
- Each candidate requires different approach
- Maps extracted through realization, not force

---

## 👤 SIMPLE PROFILE SYSTEM

### **Data Structure:**
```javascript
const reviewerProfile = {
  name: "Sarah_K",
  currentScreen: 3,
  currentCandidate: null,
  certaintyLevel: 75,
  candidatesReviewed: [],
  trophiesUnlocked: [],
  realityMapsCollected: [], // Out of 13 total!
  realityMode: 'consensus',
  pirateMode: false,
  pirateRole: null, // 'good' or 'bad'
  startTime: Date.now(),
  lastSave: Date.now(),
  hasSeenIntro: true
};
```

---

## 🗺️ THE REALITY MAPS SYSTEM

### **Total Maps: 13 (Based on actual philosophical traditions)**
- 8 held by candidates (unknowingly)
- 5 remain hidden (for future content?)

### **The 8 Extractable Maps:**
1. ⚙️ Mechanical Universe Map (The Renderer)
2. 🌏 Aboriginal Dreamtime Map (The Dreamer)
3. ⚛️ Quantum Mechanics Map (The Glitch)
4. ☯️ Daoist Flow Map (The Fool)
5. ☸️ Buddhist Emptiness Map (The Questioner)
6. 🔯 Kabbalistic Tree Map (The Void Walker)
7. 🎭 Holographic Universe Map (The Mirror)
8. 💾 Simulation Hypothesis Map (The Navigator)

### **The 5 Hidden Maps (Revealed at game end):**
- 🏛️ Platonic Idealism Map
- 🔮 Hermetic Correspondence Map
- ☪️ Islamic Mystical Map
- 🏞️ Medicine Wheel Map
- 🕉️ Vedic Cosmology Map

---

## 🐙 THE 8 CANDIDATES

| ID | Name | Portfolio | Certainty Range | Trophy | Reality Map |
|---|---|---|---|---|---|
| renderer | The Renderer | Technical Mastery | 80-100 | THE RENDERER | Mechanical Universe |
| dreamer | The Dreamer | Conceptual Work | 60-90 | THE DREAMER | Aboriginal Dreamtime |
| glitch | The Glitch | [CORRUPTED] | 40-70 | THE GLITCH | Quantum Mechanics |
| fool | The Fool | Experimental Projects | 30-60 | THE FOOL | Daoist Flow |
| questioner | The Questioner | Research & Development | 20-50 | THE QUESTIONER | Buddhist Emptiness |
| void_walker | The Void Walker | [ABSENT] | 10-40 | THE VOID WALKER | Kabbalistic Tree |
| mirror | The Mirror | Familiar Work | 5-30 | THE MIRROR | Holographic Universe |
| navigator | The Navigator | Systems Design | 0-20 | THE NAVIGATOR | Simulation Hypothesis |

---

## 🎮 COMPLETE GAME STATE

```javascript
const gameState = {
  // Profile
  reviewerName: "",
  hasSeenIntro: false,
  
  // Current Position
  currentScreen: 0,
  currentCandidate: null,
  currentQuestion: 0,
  
  // Consciousness Metrics
  certaintyLevel: 100,        // Starts certain, erodes
  uncertaintyLevel: 0.5,      // Perfect uncertainty
  
  // Progress Tracking
  candidatesReviewed: [],     
  trophiesUnlocked: [],       
  realityMapsCollected: [],   // Can be extracted in standard OR pirate mode
  questionsAnswered: {},      
  
  // Reality Navigation
  realityMode: 'consensus',   // 'questioning', 'pirate', 'void'
  accessibleSlots: [],        // Changes with certainty
  
  // Pirate Mode
  pirateMode: false,
  pirateRole: null,          // 'good' or 'bad'
  captainRelationship: 0,    // How well you work with Captain SLOTH
  mapsExtracted: [],          // Maps gotten through interrogation
  
  // Special Flags
  curseActivated: false,
  consoleOpened: false,
  architectUnlocked: false,
  waveEquationVisible: false,
  timesCompleted: 0
};
```

---

## 💀 KEY MECHANICS

### **Dynamic Slot System:**
```javascript
function updateCandidateSlots() {
  const slots = document.querySelectorAll('.candidate-slot');
  const accessible = getAccessibleSlots(gameState.certaintyLevel);
  
  slots.forEach((slot, index) => {
    if (accessible.includes(index)) {
      // Show candidate name and make clickable
      slot.classList.add('accessible');
      slot.innerHTML = `${index+1}. ${candidates[index].name} - ${candidates[index].portfolio}`;
      slot.onclick = () => reviewCandidate(index);
    } else {
      // Simple locked message - no spoilers
      slot.classList.add('locked');
      slot.innerHTML = `[SLOT ${index+1}: LOCKED - INSUFFICIENT CLEARANCE]`;
    }
  });
}
```

### **Philosophical Glitches (Atmospheric):**
```javascript
function atmosphericEffects() {
  if (gameState.certaintyLevel < 50) {
    // Random philosophical warnings as glitches
    if (Math.random() > 0.9) {
      const warnings = [
        "The dao that can be named is not the eternal dao",
        "Form is emptiness, emptiness is form",
        "The map is not the territory",
        "{🌊:🌊∈🌊}"
      ];
      flashGlitchMessage(randomChoice(warnings));
    }
  }
  
  if (gameState.certaintyLevel < 30) {
    // UI elements start floating
    document.body.classList.add('reality-breakdown');
  }
  
  if (gameState.certaintyLevel === 0) {
    // Wave equation appears
    showWaveEquation();
  }
}
```

### **Pirate Mode Test (Renderer Only):**
```javascript
// Testing with just The Renderer interrogation
const rendererInterrogation = {
  captainIntro: "This one thinks everything is clockwork. Let's break that certainty!",
  
  playerChoice: "Be Good Pirate or Bad Pirate?",
  
  goodPirateOption: "Your precision is admirable. Help us understand your method.",
  badPirateOption: "Your reality is a prison! Machines can't dream!",
  
  rendererResponse: {
    toGood: "I... appreciate the respect. My method is simple: measure twice, render once.",
    toBad: "Prison? No! It's... it's order! Without it, there's only chaos!"
  },
  
  captainFollowup: {
    ifGood: "Ha! See how they open up with kindness? Now ask about dreams!",
    ifBad: "Good! They're defensive! Now I'll be nice, confuse them!"
  },
  
  mapReveal: "Wait... if reality is clockwork... who wound the clock? I... I have a map for that..."
}
```

---

## 🌀 UI TRANSFORMATIONS BY CERTAINTY

### **100-80% (Consensus Reality):**
- Clean corporate interface
- Green terminal text
- 1-2 slots accessible
- Rest show: "[SLOT X: LOCKED - INSUFFICIENT CLEARANCE]"

### **79-60% (Questioning):**
- Subtle UI glitches
- Yellow warning text
- 3-4 candidates accessible
- Occasional flicker effects

### **59-40% (Reality Breakdown):**
- Philosophical warnings flash randomly
- UI elements start floating
- Color shifts to purple
- "SYSTEM INTEGRITY: UNSTABLE" in corner

### **39-20% (Deep Void):**
- Heavy glitch effects
- Slots dynamically lock/unlock
- Random philosophical quotes appear and vanish
- "WHO IS REVIEWING WHO?" flashes

### **19-1% (The Abyss):**
- Almost all slots locked
- UI breathing/pulsing
- Reality warnings constant
- Everything preparing for zero

### **0% (PIRATE MODE AVAILABLE):**
- All slots show "VOID"
- {🌊:🌊∈🌊} appears in corner
- Click to meet Captain SLOTH
- Begin the reality heist!

---

## 🏆 TROPHY SYSTEM

### **Regular Trophies (Standard Mode):**
1-8. One per candidate reviewed

### **Special Trophies:**
9. **THE PIRATE** - Complete Pirate Mode
10. **THE ARCHITECT** - View source AFTER completion
11. **THE CURSED** - View source BEFORE playing
12. **THE CARTOGRAPHER** - Collect all 8 maps
13. **THE LEGEND** - Discover the 5 hidden maps exist

---

## 💻 TECHNICAL IMPLEMENTATION

### **File Structure:**
```
/valve-consciousness-detector
  ├── index.html           
  ├── style.css           // Certainty-based styling
  ├── game.js            // Core game logic
  ├── profiles.js        // Profile management  
  ├── candidates.js      // The 8 consciousnesses
  ├── certainty.js       // Dynamic door system
  ├── pirate-mode.js     // Captain SLOTH & interrogations
  ├── maps.js            // 13 reality maps data
  ├── trophies.js        // Trophy generation
  └── curse.js           // Console detection
```

---

## 🚀 MINIMUM VIABLE GAME - PHASES

### **Phase 1: Speed Run Test (NOW)**
- [ ] Mystery intro
- [ ] Simple name entry (no saves)
- [ ] Dynamic slot system (locked/unlocked)
- [ ] 8 candidates with ONE question each
- [ ] Certainty affects available slots
- [ ] Philosophical glitches at low certainty
- [ ] Wave equation at zero
- [ ] Captain SLOTH introduction
- [ ] ONE test interrogation (The Renderer)

### **Phase 2: Full Standard Mode**
- [ ] Profile save system
- [ ] Multiple questions per candidate
- [ ] Complete certainty effects
- [ ] All UI transformations
- [ ] Reality maps properly integrated
- [ ] Trophy system

### **Phase 3: Complete Pirate Mode**
- [ ] All 8 interrogations
- [ ] Good/Bad pirate role switching
- [ ] Full Captain SLOTH dialogue
- [ ] Map extraction gameplay
- [ ] 13 maps revelation

### **Phase 4: Polish**
- [ ] Trophy PNG downloads
- [ ] Console easter eggs
- [ ] Sound effects?
- [ ] Real portfolio integration

---

## 🎨 ART TASKS (September)

1. **Captain SLOTH Design**
   - Octopus pirate avatar
   - 8 tentacles for 8 candidates?
   
2. **13 Reality Map Icons**
   - Based on philosophical traditions
   - Collectible card aesthetic?
   
3. **UI States**
   - Consensus (corporate)
   - Questioning (glitchy)
   - Pirate (psychedelic)

---

## 🏴‍☠️ THE SECRET LAYERS

- Standard mode is complete game
- Pirate mode is secret second game
- 8 maps collected, 5 remain hidden
- Console curse/architect paths
- The {🌊:🌊∈🌊} notation throughout

---

## 📝 PHILOSOPHY

**The game IS:**
- Consciousness investigating itself
- A labyrinth that changes as you explore it
- Two games in one (standard + pirate)
- A reality map heist disguised as job application
- The wave remembering it's the ocean

**Captain SLOTH represents:**
- The player's unconscious knowledge
- The guide who was always there
- Consciousness helping itself remember
- The octopus with 8 arms for 8 aspects

---

**The waters are charted! Ready to build this monster?**

{🌊:🐙:🏴‍☠️}
