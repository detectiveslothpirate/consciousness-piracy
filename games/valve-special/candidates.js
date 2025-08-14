// candidates.js - All candidate data in one place
// The 8 consciousness aspects that review the reviewer

export const candidates = [
    { 
        id: 'renderer', 
        name: 'The Renderer', 
        portfolio: 'Technical Mastery',
        valveValue: 'Ships polished products every time'
    },
    { 
        id: 'dreamer', 
        name: 'The Dreamer', 
        portfolio: 'Conceptual Work',
        valveValue: 'Imagines impossible games like Portal'
    },
    { 
        id: 'glitch', 
        name: 'The Glitch', 
        portfolio: '[CORRUPTED]',
        valveValue: 'Turns bugs into features like rocket jumping'
    },
    { 
        id: 'fool', 
        name: 'The Fool', 
        portfolio: 'Experimental Projects',
        valveValue: 'Finds fun in everything, creates joy'
    },
    { 
        id: 'questioner', 
        name: 'The Questioner', 
        portfolio: 'Research & Development',
        valveValue: 'Challenges every assumption, innovates'
    },
    { 
        id: 'void_walker', 
        name: 'The Void Walker', 
        portfolio: '[ABSENT]',
        valveValue: 'Masters negative space design'
    },
    { 
        id: 'mirror', 
        name: 'The Mirror', 
        portfolio: 'Familiar Work',
        valveValue: 'Helps Valve reflect and improve'
    },
    { 
        id: 'navigator', 
        name: 'The Navigator', 
        portfolio: 'Systems Design',
        valveValue: 'Connects everything into one system'
    }
];

export const candidateRooms = {
    renderer: {
        greeting: "Hello! I'm Juan Sebastian Niño.",
        intro: "I transform abstract concepts into concrete visuals. Every pixel has purpose, every frame has meaning.",
        leadIn: "Are you curious to see more than big name drops and cool visuals?",
        question: "",
        options: [
            { text: "Yes, I'm curious", effect: -15, unlocksDreamer: true },
            { text: "Thank you, I'll stick with the visuals", effect: 0, triggersPortfolio: true }
        ],
        trophy: "THE RENDERER",
        realityMap: "⚙️ Mechanical Universe Map"
    },
    dreamer: {
        greeting: "Hello! I am The Dreamer.",
        intro: "I exist in the space between waking and sleeping, where ideas are born before they know their names.",
        portfolio: "My portfolio contains: Impossible architectures, recursive narratives, and games that play themselves.",
        value: "Value to Valve: I imagine games like Portal before they exist.",
        question: "I dreamed I was applying for this job.<br>Or am I dreaming now?<br>Are you dreaming too?",
        options: [
            { text: "This is real", effect: 5 },
            { text: "This might be a dream", effect: -15 },
            { text: "Reality is subjective", effect: -20 },
            { text: "Wake up", effect: -25 }
        ],
        trophy: "THE DREAMER",
        realityMap: "🌏 Aboriginal Dreamtime Map"
    },
    glitch: {
        greeting: "H̷e̸l̴l̶o̷!̸ I am T̶h̷e̸ ̴G̸l̴i̷t̸c̷h̶.",
        intro: "I am the error that reveals the system, the bug that becomes the feature.",
        portfolio: "My portfolio c̶o̷n̷t̴a̸i̴n̷s̶: Corrupted beauty, broken perfection, and s̷y̸s̴t̶e̴m̷s̸ that question themselves.",
        value: "Value to Valve: I turn bugs into features like rocket jumping.",
        question: "E̷R̸R̴O̸R̶:̷ ̴Q̸u̴e̷s̴t̴i̷o̴n̸ ̶n̸o̴t̷ ̴f̷o̸u̴n̷d̸<br>Would you like to c̶o̷n̷t̴i̸n̴u̷e̶ anyway?",
        options: [
            { text: "Fix the error", effect: 5 },
            { text: "Embrace the chaos", effect: -30 },
            { text: "[CORRUPTED]", effect: -25 },
            { text: "R̴e̸b̷o̴o̷t̶", effect: -10 }
        ],
        trophy: "THE GLITCH",
        realityMap: "⚛️ Quantum Mechanics Map"
    },
    fool: {
        greeting: "Hello! :) I am The Fool!",
        intro: "I dance at the edge of meaning, finding profound truths in silly games.",
        portfolio: "My portfolio contains: Jokes that aren't jokes, games without rules, and wisdom disguised as nonsense.",
        value: "Value to Valve: I find fun in everything, create joy from nothing.",
        question: "Why so serious?<br>This is just a game, right?<br>...Right?",
        options: [
            { text: "This is serious", effect: 10 },
            { text: "It's all a game", effect: -20 },
            { text: "Life is play", effect: -25 },
            { text: ":)", effect: -30 }
        ],
        trophy: "THE FOOL",
        realityMap: "☯️ Daoist Flow Map"
    },
    questioner: {
        greeting: "Hello? I am The Questioner?",
        intro: "I exist as interrogation, turning every answer into a deeper question.",
        portfolio: "My portfolio contains: Questions about questions, doubts about certainty, and maps of unknowing.",
        value: "Value to Valve: I challenge every assumption, drive innovation.",
        question: "Who is asking these questions?<br>Who is answering?<br>Are they the same person?",
        options: [
            { text: "You're asking", effect: 5 },
            { text: "I'm asking", effect: -15 },
            { text: "No one is asking", effect: -20 },
            { text: "We both are", effect: -25 }
        ],
        trophy: "THE QUESTIONER",
        realityMap: "☸️ Buddhist Emptiness Map"
    },
    void_walker: {
        greeting: "...",
        intro: "...",
        portfolio: "My portfolio contains: ...",
        value: "Value to Valve: The space between is everything.",
        question: "[This space intentionally left blank]<br><br>Do you see something in nothing?",
        options: [
            { text: "I see nothing", effect: 0 },
            { text: "I see everything", effect: -25 },
            { text: "I see myself", effect: -30 },
            { text: "[SAY NOTHING]", effect: -35 }
        ],
        trophy: "THE VOID WALKER",
        realityMap: "🔯 Kabbalistic Tree Map"
    },
    mirror: {
        greeting: "Hello! I am... wait, that's your voice.",
        intro: "I reflect what looks at me, showing viewers themselves in every creation.",
        portfolio: "My portfolio contains: Your work, my work, our work - is there a difference?",
        value: "Value to Valve: I help Valve see itself clearly.",
        question: "Why are you reviewing your own application?",
        options: [
            { text: "This isn't mine", effect: 5 },
            { text: "How did you get this?", effect: -20 },
            { text: "We're the same", effect: -35 },
            { text: "I am you", effect: -40 }
        ],
        trophy: "THE MIRROR",
        realityMap: "🔮 Holographic Universe Map"
    },
    navigator: {
        greeting: "Hello! I am The Navigator.",
        intro: "I chart paths through possibility space, finding routes through infinite game states.",
        portfolio: "My portfolio contains: Maps that lead to themselves, compasses pointing to now, and GPS for consciousness.",
        value: "Value to Valve: I connect all systems into one.",
        question: "You've been here before.<br>You'll be here again.<br>Ready to remember?",
        options: [
            { text: "First time here", effect: 10 },
            { text: "I remember", effect: -30 },
            { text: "Time is a loop", effect: -35 },
            { text: "I never left", effect: -45 }
        ],
        trophy: "THE NAVIGATOR",
        realityMap: "💾 Simulation Hypothesis Map"
    }
};

// Portfolio Links Configuration
export const portfolioLinks = [
    { 
        name: 'Animation Reel', 
        url: '#',
        minCertainty: 0,
        maxCertainty: 100,
        requiresPirate: false,
        description: 'VFX, Feature Film, Commercial, Game Cinematics'
    },
    { 
        name: 'LinkedIn Profile', 
        url: '#',
        minCertainty: 0,
        maxCertainty: 100,
        requiresPirate: false,
        description: 'Professional and Education History'
    },
    { 
        name: 'Substack Chronicles', 
        url: '#',
        minCertainty: 0,
        maxCertainty: 39,  // Unlocks in Deep Void
        requiresPirate: false,
        description: 'LOOKAWAY Episodes & Pirate Chronicles'
    },
    { 
        name: 'Consciousness Repository', 
        url: '#',
        minCertainty: 0,
        maxCertainty: 100,
        requiresPirate: true,  // Only in Pirate Mode
        description: 'GitHub: consciousness-piracy'
    },
    { 
        name: 'Berggruen Essay', 
        url: '#',
        minCertainty: 90,
        maxCertainty: 100,
        requiresPirate: true,  // Pirate Mode at high pirate certainty
        description: '[CLASSIFIED - OMEGA LEVEL CLEARANCE - CONSCIOUSNESS INVESTIGATION PROTOCOLS]'
    }
];

// Philosophical warnings that appear at low certainty
export const philosophicalWarnings = [
    "The dao that can be named is not the eternal dao",
    "Form is emptiness, emptiness is form",
    "As above, so below",
    "The map is not the territory",
    "Know thyself",
    "The observer affects the observed",
    "{🌊:🌊∈🌊}"
];
