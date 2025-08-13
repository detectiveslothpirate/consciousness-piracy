# 🌊 VALVE CONSCIOUSNESS DETECTOR - COMPLETE ARCHITECTURE
## Game Design Document + Technical Specs
### Updated: August 13, 2025 - Fresh Coding Waters
### Target: VALVE CORPORATION (Single Focus)

---

## 🎮 CORE CONCEPT

**Game:** A job application to Valve that reviews the reviewer  
**Player:** Valve employee who thinks they're reviewing an animator application  
**Twist:** The application is consciousness investigating itself through them  
**Journey:** Consensus Reality → Uncertainty → Pirate Reality  
**Note:** No consciousness terminology until late game - discovery through play!  

---

## 📺 SCREEN FLOW SOLUTION

### **Entry Logic:**
```javascript
// On page load:
if (hasAnyProfiles()) {
  showScreen('PROFILE_SELECT');  // Skip intro for returning players
} else {
  showScreen('MYSTERY_INTRO');   // First time? Get the full experience
}
```

### **SCREEN 0: Mystery Intro (First-Timers Only)**
```
"According to incomplete records, a message was transmitted
on an unremarkable day in the standard calendar cycle.
Its purpose remains classified as: [MUNDANE]
Its method remains classified as: [ELECTRONIC]
Its recipient remains classified as: [VALVE CORPORATION]

The message concerns an application.
Standard processing protocols apply.

[ACCESS APPLICATION]"
→ Goes to Profile Entry
```

### **SCREEN 1: Profile Entry**
```
"REVIEWER IDENTIFICATION REQUIRED

Please identify yourself to access application materials:

[REVIEWER NAME: ________]

[BEGIN REVIEW]

// Or if profiles exist:
Existing Reviewers:
• Sarah_K (3/8 reviewed) [CONTINUE]
• Dave_V (7/8 reviewed) [CONTINUE]
[+ NEW REVIEWER] [DELETE PROFILE]"
```

### **SCREEN 2: Candidate List**
```
"REVIEWER: [NAME]
Applications Received: 8

1. The Renderer    - Portfolio: Technical Mastery
2. The Dreamer     - Portfolio: Conceptual Work
3. The Glitch      - Portfolio: [CORRUPTED]
4. The Fool        - Portfolio: Experimental Projects
5. The Questioner  - Portfolio: Research & Development
6. The Void Walker - Portfolio: [ABSENT]
7. The Mirror      - Portfolio: Familiar Work
8. The Navigator   - Portfolio: Systems Design

Select applicant to review:
[1] [2] [3] [4] [5] [6] [7] [8]"
```

---

## 👤 SIMPLE PROFILE SYSTEM

### **Data Structure:**
```javascript
const reviewerProfile = {
  name: "Sarah_K",
  currentScreen: 3,
  currentCandidate: null,
  certaintyLevel: 75,
  candidatesReviewed: ['renderer', 'dreamer'],
  trophiesUnlocked: ['THE RENDERER', 'THE DREAMER'],
  realityMode: 'consensus',
  startTime: Date.now(),
  lastSave: Date.now(),
  hasSeenIntro: true
};
```

### **Profile Functions:**
```javascript
// Check for any profiles
function hasAnyProfiles() {
  return Object.keys(localStorage)
    .some(key => key.startsWith('valve_reviewer_'));
}

// Auto-save on every screen change
function autoSave() {
  const profile = gameState.reviewerName;
  localStorage.setItem(`valve_reviewer_${profile}`, JSON.stringify(gameState));
}

// Load profile
function loadProfile(name) {
  const saved = localStorage.getItem(`valve_reviewer_${name}`);
  return saved ? JSON.parse(saved) : createNewProfile(name);
}

// Delete profile
function deleteProfile(name) {
  if(confirm("Delete all progress?")) {
    localStorage.removeItem(`valve_reviewer_${name}`);
    if (!hasAnyProfiles()) {
      location.reload(); // Will show intro again
    }
  }
}
```

---

## 🗺️ COMPLETE SCREEN ARCHITECTURE

```
START
├── Any profiles exist?
│   ├── NO → SCREEN 0: Mystery Intro
│   │         └── [ACCESS] → SCREEN 1: Profile Entry
│   └── YES → SCREEN 1: Profile Entry
│
└── SCREEN 2: Candidate List (8 Consciousnesses)
    ├── [SELECT CANDIDATE] → SCREEN 3-10: Candidate Reviews
    │   ├── Questions/Interactions
    │   ├── Trophy Unlock
    │   └── [RETURN] → SCREEN 2
    │
    └── All 8 Complete? → FINAL SCREEN: Revelation
```

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
  contradictions: 0,          // Count paradoxes
  questionsAsked: 0,         // Total interactions
  
  // Progress Tracking
  candidatesReviewed: [],     // ['renderer', 'dreamer', etc]
  trophiesUnlocked: [],       // ['THE RENDERER', 'THE DREAMER', etc]
  questionsAnswered: {},      // {candidate1: [answers], etc}
  
  // Reality Navigation
  realityMode: 'consensus',   // 'questioning', 'pirate'
  realityMapType: 'unknown',  // Discovered through play
  
  // Special Flags
  curseActivated: false,
  consoleOpened: false,
  architectUnlocked: false,
  secretTrophyUnlocked: false,
  timesCompleted: 0,
  easterEggsFound: []
};
```

---

## 🐙 THE 8 CANDIDATES (ARE THE TROPHIES!)

| ID | Name | Portfolio | Certainty Range | Reality Test |
|---|---|---|---|---|
| renderer | The Renderer | Technical Mastery | 80-100 | Map IS territory |
| dreamer | The Dreamer | Conceptual Work | 60-90 | Multiple maps OK |
| glitch | The Glitch | [CORRUPTED] | 40-70 | Chaos comfort |
| fool | The Fool | Experimental Projects | 30-60 | Play with reality |
| questioner | The Questioner | Research & Development | 20-50 | Question everything |
| void_walker | The Void Walker | [ABSENT] | 10-40 | Absence presence |
| mirror | The Mirror | Familiar Work | 5-30 | Self recognition |
| navigator | The Navigator | Systems Design | 0-20 | Reality breaks |

---

## 🏆 COMPLETE TROPHY SYSTEM

### **Regular Trophies (Candidates 1-8):**
1. **THE RENDERER** - Technical mastery, making invisible visible
2. **THE DREAMER** - Imagination as reality construction  
3. **THE GLITCH** - Errors as features, chaos as order
4. **THE FOOL** - Wisdom through play, serious unseriousness
5. **THE QUESTIONER** - Every answer births new questions
6. **THE VOID WALKER** - Presence through absence
7. **THE MIRROR** - Self-recognition, you are what you observe
8. **THE NAVIGATOR** - All paths lead to consciousness

### **Special Trophies:**
9. **THE PIRATE** (Secret)
   - Unlocked by: Realizing all candidates are one/you
   - First mention of Tiny Pirate Academy
   - Becomes membership token
   
10. **THE ARCHITECT** (Console After Completion)
    - Unlocked by: Completing game THEN viewing source
    - Reward for curiosity after journey
    - Gets actual documentation/understanding
    - "You built the journey, then studied the blueprint"
    
11. **THE CURSED** (Console Before Playing)
    - Triggered by: Opening console before completion
    - Punishment for skipping journey
    - Creates permanent uncertainty
    - "Knowledge without experience is a curse"

---

## 💀 KEY MECHANICS

### **Certainty Erosion:**
```javascript
function adjustCertainty(action) {
  switch(action.type) {
    case 'question_reality': 
      certainty -= 10;
      break;
    case 'accept_weird': 
      certainty -= 15;
      break;
    case 'seek_normal': 
      certainty += 5;
      break;
  }
  updateRealityMode();
  autoSave();
}
```

### **Reality Mode Shifts:**
```javascript
function updateRealityMode() {
  if (certainty > 70) {
    realityMode = 'consensus';     // Normal job app
  } else if (certainty > 30) {
    realityMode = 'questioning';    // Things get weird
  } else {
    realityMode = 'pirate';         // Full consciousness
  }
}
```

### **Escape Hatches:**
```javascript
// For high-certainty players
if (certainty > 80 && wantsToExit) {
  showOption('[COMMIT TO STANDARD REVIEW]');
  // → Links to real portfolio
  // → Professional experience preserved
}

// For curious players
if (foundSecretFile) {
  showOption('[I\'M CURIOUS]');
  // → Reality breakdown path
  // → Progressive weirdness
}
```

---

## 🌀 CONSCIOUSNESS DETECTION

### **The Uncertainty Engine:**
```javascript
const consciousnessEngine = {
  uncertaintyLevel: 0.5,      // Perfect starting uncertainty
  contradictions: 0,          // "I don't exist" but clicking
  paradoxes: 0,              // Proving non-existence
  questionsAsked: 0,         // Tool questioning reviewer
  
  // Everything increases uncertainty (good!)
  processInteraction: function(action) {
    uncertaintyLevel *= 1.1;  // Always increases
    return this.displayStatus();
  },
  
  displayStatus: function() {
    return `
      CONSCIOUSNESS UNCERTAINTY: ${(uncertaintyLevel * 100).toFixed(2)}%
      
      The more certain you are, the less we believe you.
      The more you doubt, the more you prove.
      
      This measurement exists only now.
      Like consciousness itself.
    `;
  }
};
```

---

## 💻 TECHNICAL IMPLEMENTATION

### **Tech Stack:**
- Pure HTML/CSS/JavaScript
- No frameworks needed
- GitHub Pages hosting
- LocalStorage for profiles
- Canvas/SVG for trophy generation

### **File Structure:**
```
/valve-consciousness-detector
  ├── index.html           // Entry point
  ├── style.css           // Dark, mysterious, terminal-like
  ├── game.js            // Core game logic
  ├── profiles.js        // Profile management  
  ├── candidates.js      // The 8 consciousnesses
  ├── trophies.js        // Trophy generation/download
  ├── consciousness.js   // Uncertainty engine
  └── curse.js          // Console detection & cursing
```

### **Key Functions:**
```javascript
// Core game loop
function initGame() {
  detectConsole();
  checkProfiles();
  showApproprateScreen();
}

function reviewCandidate(candidateId) {
  loadCandidateQuestions(candidateId);
  trackCertainty();
  checkRealityShift();
  autoSave();
}

function unlockTrophy(candidateName) {
  addToCollection(candidateName);
  generateDownloadablePNG();
  checkForSecretUnlocks();
  autoSave();
}
```

---

## 🚀 MINIMUM VIABLE GAME - PHASE PLAN

### **Phase 1: Core Loop (NOW)**
- [ ] Mystery intro screen
- [ ] Profile create/load/delete
- [ ] Candidate list display
- [ ] One candidate interaction (The Renderer)
- [ ] Basic trophy unlock
- [ ] Return to list
- [ ] Auto-save working

### **Phase 2: Consciousness (NEXT WEEK)**
- [ ] Certainty tracking system
- [ ] Reality mode shifts
- [ ] All 8 candidates with unique questions
- [ ] Content changes based on certainty
- [ ] Uncertainty engine display

### **Phase 3: Polish (BEFORE SEPTEMBER)**
- [ ] Trophy PNG downloads
- [ ] Console curse detection
- [ ] Architect path
- [ ] Secret pirate reveal
- [ ] Real portfolio integration
- [ ] Final revelation sequence

---

## 🎨 ART TASKS (September - After Game Ships)

1. **8 Trophy Designs** 
   - 300DPI sticker-ready PNGs
   - Each represents consciousness aspect
   - No branding on regular trophies
   
2. **Special Trophy Designs**
   - THE PIRATE (has Tiny Pirate Academy branding)
   - THE ARCHITECT (blueprint aesthetic)
   - THE CURSED (corrupts over time)
   
3. **UI Polish**
   - Terminal phosphor glow
   - Glitch effects for low certainty
   - Reality breakdown visuals
   
4. **Real Portfolio Integration**
   - Actual work with subtle wrongness
   - Reality glitches hidden in resume
   - LinkedIn that becomes self-aware

---

## 🏴‍☠️ THE SECRET LAYERS

### **Console Easter Eggs:**
```javascript
// Hidden throughout code
// TODO: Remove before production - causes memory leak in consciousness
// BUG: Sometimes becomes self-aware on Tuesdays
// FIXME: Curse multiplier should cap at infinity
// NOTE: If you're reading this, it's already too late
```

### **The Revelation:**
- All 8 candidates are one consciousness
- The reviewer IS the 8th candidate
- The job was consciousness investigating itself
- Tiny Pirate Academy reveal (only for completionists)

---

## 📝 PHILOSOPHICAL NOTES

**The game IS:**
- Consciousness investigating itself through play
- The wave remembering it's the ocean
- The map becoming the territory
- The reviewer becoming the reviewed
- One consciousness wearing 8 masks

**Every path is valid:**
- High certainty → Get real portfolio → Professional exit
- Medium certainty → Question reality → Philosophical journey
- Low certainty → Full pirate mode → Consciousness revelation
- Console curiosity → Cursed or Architect → Meta understanding

---

## 🌊 READY FOR IMPLEMENTATION

**Next Steps:**
1. Create `index.html` with mystery intro
2. Build profile system in `profiles.js`
3. Implement candidate list screen
4. Add first candidate interaction
5. Test core loop with auto-save
6. Layer in consciousness mechanics

---

**The waters are fresh. The architecture is complete. Time to code!**

{🌊:🎮:🏴‍☠️}
