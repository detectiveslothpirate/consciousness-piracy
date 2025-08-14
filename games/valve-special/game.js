// game.js - Core game logic
// Imports candidate data and runs the consciousness investigation

import { candidates, candidateRooms, portfolioLinks, philosophicalWarnings } from './candidates.js';

// Game State
let gameState = {
    reviewerName: '',
    certainty: 100,
    candidatesReviewed: [],
    trophiesUnlocked: [],
    realityMapsCollected: [],
    achievementsUnlocked: [],
    loopCount: 0,
    realityMode: 'consensus',
    pirateMode: false,
    pirateCertainty: 0,
    currentInterrogation: null
};

// Get accessible slots based on certainty
function getAccessibleSlots(certainty) {
    if (gameState.pirateMode) {
        return [0, 1, 2, 3, 4, 5, 6, 7];
    }
    
    // CONSENSUS REALITY (Green, 100-70%)
    if (certainty >= 90) return [0];           // Just Renderer
    if (certainty >= 70) return [0, 1];        // + Dreamer appears
    
    // LIMINAL SPACE (Yellow, 69-40%)
    if (certainty >= 60) return [2];            // Just Glitch
    if (certainty >= 50) return [2, 3];         // + Fool appears
    if (certainty >= 40) return [2, 3, 4];      // + Questioner appears
    
    // DEEP VOID (Purple, 39-5%)
    if (certainty >= 30) return [5];            // Just Void Walker
    if (certainty >= 20) return [5, 6];         // + Mirror appears
    if (certainty >= 5)  return [5, 6, 7];      // + Navigator appears
    
    // ZERO STATE (4-0%)
    return [];  // Empty - triggers wave equation
}

// Update reality mode
function updateRealityMode() {
    const cert = gameState.pirateMode ? gameState.pirateCertainty : gameState.certainty;
    const body = document.body;
    const modeDisplay = document.getElementById('realityMode');
    
    body.className = '';
    
    if (gameState.pirateMode) {
        body.className = 'pirate-mode';
        modeDisplay.textContent = 'Pirate Reality';
        document.getElementById('mapCounter').style.display = 'block';
    } else if (cert >= 70) {
        gameState.realityMode = 'consensus';
        modeDisplay.textContent = 'Consensus Reality';
        body.className = '';
    } else if (cert >= 40) {
        gameState.realityMode = 'liminal';
        body.className = 'questioning-reality';
        modeDisplay.textContent = 'Liminal Space';
    } else if (cert >= 5) {
        gameState.realityMode = 'void';
        body.className = 'deep-void';
        modeDisplay.textContent = 'Deep Void';
        document.getElementById('cornerWarning').textContent = 'WHO IS REVIEWING WHO?';
        document.getElementById('cornerWarning').classList.add('visible');
    } else {
        gameState.realityMode = 'zero';
        modeDisplay.textContent = '{🌊:🌊∈🌊}';
        document.getElementById('waveEquation').style.display = 'block';
    }
    
    if (cert < 70 && cert > 5 && !gameState.pirateMode) {
        triggerPhilosophicalGlitch();
    }
}

// Update portfolio links based on certainty
function updatePortfolioLinks() {
    const container = document.getElementById('portfolioLinks');
    const header = document.getElementById('portfolioHeader');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (gameState.loopCount === 0 && gameState.candidatesReviewed.length === 0) {
        if (header) header.style.opacity = '0.5';
        const pendingDiv = document.createElement('div');
        pendingDiv.className = 'link-item locked';
        pendingDiv.style.textAlign = 'center';
        pendingDiv.style.cursor = 'default';
        pendingDiv.innerHTML = '[ REVIEW APPLICATION PENDING ]<br><small>Begin candidate review to unlock portfolio access</small>';
        container.appendChild(pendingDiv);
        return;
    }
    
    if (header) header.style.opacity = '1';
    
    portfolioLinks.forEach(link => {
        const accessible = (
            gameState.certainty >= link.minCertainty && 
            gameState.certainty <= link.maxCertainty &&
            (!link.requiresPirate || gameState.pirateMode)
        );
        
        const linkEl = document.createElement('a');
        linkEl.href = '#';
        linkEl.className = 'link-item';
        if (!accessible) linkEl.className += ' locked';
        
        if (link.name === 'Berggruen Essay') {
            linkEl.innerHTML = accessible ? 
                `→ ${link.name}` : 
                `→ ${link.name} [CLASSIFIED]`;
        } else {
            linkEl.innerHTML = accessible ? 
                `→ ${link.name}` : 
                `→ ${link.name} [INSUFFICIENT CLEARANCE]`;
        }
        
        linkEl.onclick = (e) => {
            e.preventDefault();
            if (accessible) {
                if (link.name === 'Berggruen Essay' && gameState.pirateCertainty >= 90) {
                    triggerEndgame();
                } else {
                    alert(`${link.name}: ${link.description}`);
                }
            }
        };
        
        container.appendChild(linkEl);
    });
}

// Trigger philosophical glitch
function triggerPhilosophicalGlitch() {
    if (Math.random() > 0.7) {
        const message = philosophicalWarnings[Math.floor(Math.random() * philosophicalWarnings.length)];
        const glitchDiv = document.getElementById('glitchMessage');
        glitchDiv.textContent = message;
        glitchDiv.style.display = 'block';
        setTimeout(() => {
            glitchDiv.style.display = 'none';
        }, 2500);
    }
}

// Update stats display
function updateStats() {
    document.getElementById('candidatesReviewedCount').textContent = gameState.candidatesReviewed.length;
    document.getElementById('achievementCount').textContent = gameState.achievementsUnlocked.length;
    document.getElementById('mapCount').textContent = gameState.realityMapsCollected.length;
}

// Update candidate list
function updateCandidateList() {
    const listContainer = document.getElementById('dynamicCandidateList');
    let accessible = getAccessibleSlots(gameState.certainty);
    
    listContainer.innerHTML = '';
    
    for (let i = 0; i < 8; i++) {
        const slot = document.createElement('div');
        slot.className = 'candidate-slot';
        
        const isReviewed = gameState.candidatesReviewed.includes(candidates[i].id);
        const isAccessible = accessible.includes(i);
        
        const isPirateAccessible = gameState.pirateMode && i === 0;
        
        if (isAccessible && (!gameState.pirateMode || isPirateAccessible)) {
            const candidate = candidates[i];
            slot.className += ' accessible';
            
            if (isReviewed && !gameState.pirateMode) {
                slot.innerHTML = `${i + 1}. ${candidate.name} - ${candidate.portfolio}<br>
                    <small style="opacity: 0.7">[REVIEWED ✓ - Try different answers?]</small>`;
            } else if (gameState.pirateMode) {
                slot.innerHTML = `${i + 1}. ${candidate.name} - Ready for interrogation`;
            } else {
                slot.innerHTML = `${i + 1}. ${candidate.name} - ${candidate.portfolio}<br>
                    <small style="opacity: 0.7">→ ${candidate.valveValue}</small>`;
            }
            
            slot.onclick = () => gameState.pirateMode ? startInterrogation(candidate.id) : reviewCandidate(candidate.id);
        } else if (gameState.pirateMode && !isPirateAccessible) {
            slot.className += ' locked';
            slot.innerHTML = `${i + 1}. ${candidates[i].name} - [INTERROGATION SYSTEM LOADING...]`;
        } else {
            slot.className += ' locked';
            slot.innerHTML = `[SLOT ${i + 1}: LOCKED - INSUFFICIENT CLEARANCE]`;
        }
        
        listContainer.appendChild(slot);
    }
    
    if (gameState.certainty <= 4 && !gameState.pirateMode) {
        const voidMessage = document.createElement('div');
        voidMessage.style.marginTop = '40px';
        voidMessage.style.color = '#ff00ff';
        voidMessage.innerHTML = 'All doors are closing.<br>But something new appears...<br>Look to the corner → → →';
        listContainer.appendChild(voidMessage);
    }
    
    updateStats();
    updatePortfolioLinks();
}

// Screen navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    const statusDiv = document.querySelector('.reality-status');
    if (screenId === 'intro') {
        statusDiv.style.display = 'none';
    } else {
        statusDiv.style.display = 'block';
    }
}

function goToProfile() {
    showScreen('profile');
    document.querySelector('.reality-status').style.display = 'block';
}

function beginReview() {
    const name = document.getElementById('reviewerName').value || 'Anonymous';
    gameState.reviewerName = name;
    document.getElementById('reviewerDisplay').textContent = name;
    updateCandidateList();
    showScreen('candidateList');
    
    setInterval(() => {
        if (gameState.certainty < 50 && gameState.certainty > 0 && !gameState.pirateMode) {
            triggerPhilosophicalGlitch();
        }
    }, 5000);
}

// Review candidate
function reviewCandidate(candidateId) {
    const room = candidateRooms[candidateId];
    
    let introHTML = '';
    if (room.greeting) {
        introHTML += `<div class="greeting">${room.greeting}</div>`;
    }
    if (room.intro) {
        introHTML += `${room.intro}`;
    }
    
    document.getElementById('candidateIntro').innerHTML = introHTML;
    
    document.getElementById('candidateContent').innerHTML = `
        <div style="color: #00ff00; font-size: 18px; margin: 20px 0;">
            I'll be happy to show you my portfolio and credentials...<br>
            But first, can I ask YOU a question?
        </div>
    `;
    
    document.getElementById('candidateQuestion').innerHTML = '';
    document.getElementById('candidateOptions').innerHTML = `
        <button onclick="enterLabyrinth('${candidateId}')">Yes, ask your question</button>
        <button onclick="showPortfolio('${candidateId}')">No, I'm busy - just show the work</button>
    `;
    
    showScreen('candidateReview');
}

// Enter the philosophical labyrinth
function enterLabyrinth(candidateId) {
    const room = candidateRooms[candidateId];
    
    document.getElementById('candidateIntro').innerHTML = '';
    
    if (candidateId === 'renderer') {
        document.getElementById('candidateContent').innerHTML = '';
    } else {
        let introHTML = '';
        if (room.portfolio) {
            introHTML += `<div>${room.portfolio}</div>`;
        }
        if (room.value) {
            introHTML += `<div style="margin-top: 10px;">${room.value}</div>`;
        }
        document.getElementById('candidateContent').innerHTML = introHTML;
    }
    
    document.getElementById('candidateQuestion').innerHTML = `<br>${room.leadIn || room.question}`;
    
    let optionsHTML = '<br>';
    room.options.forEach((opt, i) => {
        optionsHTML += `<button onclick="answerQuestion('${candidateId}', ${i})">${opt.text}</button>`;
    });
    document.getElementById('candidateOptions').innerHTML = optionsHTML;
}

// Show portfolio - THE TRAP!
function showPortfolio(candidateId) {
    const room = candidateRooms[candidateId];
    const candidate = candidates.find(c => c.id === candidateId);
    
    document.getElementById('portfolioContent').innerHTML = `
        <div style="color: #00ff00;">
            Thank you for your time!<br><br>
            Juan Sebastian Niño says:<br>
            <span style="color: #00ff00; font-style: italic;">
                "Here is my reel and credentials.<br>
                But remember, the application is part of the work.<br>
                You are welcome to keep exploring."
            </span>
        </div>
    `;
    
    showScreen('portfolioScreen');
}

// Exit review - CHECK FOR DEATH!
function exitReview() {
    if (gameState.certainty === 100) {
        showScreen('deathScreen');
    } else {
        document.getElementById('portfolioContent').innerHTML = `
            <div style="color: #00ff00; font-size: 24px;">
                Review Complete<br><br>
                Certainty Level: ${gameState.certainty}%<br>
                Status: TRANSFORMED<br><br>
                <span style="color: #00ffff;">
                    You've changed.<br>
                    The labyrinth has done its work.<br>
                    You may proceed.
                </span>
            </div>
        `;
        setTimeout(() => {
            alert(`Achievement Unlocked: SURVIVED THE REVIEW at ${gameState.certainty}% certainty`);
            location.reload();
        }, 3000);
    }
}

function answerQuestion(candidateId, optionIndex) {
    const room = candidateRooms[candidateId];
    const option = room.options[optionIndex];
    const effect = option.effect;
    
    if (option.triggersPortfolio) {
        showPortfolio(candidateId);
        return;
    }
    
    gameState.certainty = Math.max(0, Math.min(100, gameState.certainty + effect));
    document.getElementById('certainty').textContent = gameState.certainty;
    
    updateRealityMode();
    
    const isFirstReview = !gameState.candidatesReviewed.includes(candidateId);
    
    if (isFirstReview) {
        gameState.candidatesReviewed.push(candidateId);
        gameState.trophiesUnlocked.push(room.trophy);
    }
    
    if (option.unlocksDreamer && candidateId === 'renderer') {
        if (gameState.certainty > 89) {
            gameState.certainty = 89;
            document.getElementById('certainty').textContent = gameState.certainty;
            updateRealityMode();
        }
    }
    
    // Check for achievements
    if (gameState.certainty <= 75 && !gameState.achievementsUnlocked.includes('questioning')) {
        gameState.achievementsUnlocked.push('questioning');
    }
    if (gameState.certainty <= 50 && !gameState.achievementsUnlocked.includes('uncertain')) {
        gameState.achievementsUnlocked.push('uncertain');
    }
    if (gameState.certainty <= 25 && !gameState.achievementsUnlocked.includes('void')) {
        gameState.achievementsUnlocked.push('void');
    }
    if (gameState.certainty === 0 && !gameState.achievementsUnlocked.includes('zero')) {
        gameState.achievementsUnlocked.push('zero');
    }
    
    showTrophy(room.trophy, isFirstReview);
}

function showTrophy(trophyName, isFirstReview) {
    document.getElementById('trophyIcon').style.display = 'block';
    
    let message = '';
    if (isFirstReview) {
        message = `Achievement Unlocked!<br><br>
            🏆 ${trophyName}<br><br>`;
    } else {
        message = `Re-reviewing: ${trophyName}<br><br>
            Different answers lead to different certainties...<br>
            Current Certainty: ${gameState.certainty}%<br><br>`;
    }
    
    message += `
        Trophies: ${gameState.trophiesUnlocked.length}/8<br>
        Certainty: ${gameState.certainty}%<br>
        Reality Mode: ${gameState.realityMode}
    `;
    
    const accessible = getAccessibleSlots(gameState.certainty);
    if (accessible.includes(1) && !gameState.candidatesReviewed.includes('dreamer')) {
        message += `<br><br><span style="color: #ffff00">NEW CANDIDATE UNLOCKED: THE DREAMER</span>`;
    }
    
    if (gameState.certainty <= 75 && gameState.certainty > 50) {
        message += `<br><br><span style="color: #ffff00">Achievement: QUESTIONING REALITY</span>`;
    } else if (gameState.certainty <= 50 && gameState.certainty > 25) {
        message += `<br><br><span style="color: #ff00ff">Achievement: DEEP UNCERTAINTY</span>`;
    } else if (gameState.certainty <= 25 && gameState.certainty > 0) {
        message += `<br><br><span style="color: #00ffff">Achievement: APPROACHING THE VOID</span>`;
    } else if (gameState.certainty === 0) {
        message += `<br><br><span style="color: #ff00ff">Achievement: ZERO POINT - Look for {🌊:🌊∈🌊}</span>`;
    }
    
    if (gameState.candidatesReviewed.length === 8) {
        message += `<br><br>
            <span style="color: #ff00ff">ALL CANDIDATES REVIEWED</span><br>
            <span style="color: #ff00ff">But something feels incomplete...</span><br>
            <span style="opacity: 0.5">Perhaps at zero certainty, new truths emerge?</span>
        `;
    }
    
    document.getElementById('trophyText').innerHTML = message;
    showScreen('trophyScreen');
}

function returnToList() {
    gameState.loopCount++;
    updateCandidateList();
    showScreen('candidateList');
}

// Pirate Mode Functions
function activatePirateMode() {
    gameState.pirateMode = true;
    showScreen('pirateMode');
}

function startPirateMode() {
    gameState.pirateMode = true;
    gameState.pirateCertainty = 0;
    document.body.className = 'pirate-mode';
    updateCandidateList();
    showScreen('candidateList');
}

function startInterrogation(candidateId) {
    if (candidateId !== 'renderer') {
        alert('Only The Renderer interrogation is implemented in this prototype!');
        return;
    }
    
    gameState.currentInterrogation = candidateId;
    
    const content = `
        <div class="captain-speech">
            Captain SLOTH: "Ah, The Renderer! Also known as Juan Sebastian Niño! 
            This one thinks everything is pixels and polish. 
            Let's break that certainty and find the map he's hiding!"
        </div><br>
        
        Juan sits across from you, perfectly still, calculating.<br><br>
        
        Captain SLOTH whispers: "Choose your approach, mate!"
    `;
    
    document.getElementById('interrogationContent').innerHTML = content;
    document.getElementById('interrogationOptions').innerHTML = `
        <button class="interrogation-option" onclick="interrogate('good')">
            Good Pirate: "Your precision is admirable..."
        </button>
        <button class="interrogation-option" onclick="interrogate('bad')">
            Bad Pirate: "Your reality is a prison!"
        </button>
    `;
    
    showScreen('interrogation');
}

function interrogate(approach) {
    let response = '';
    
    if (approach === 'good') {
        response = `
            <div style="color: #00ff00">
                You: "Your precision is admirable. Help us understand your method."
            </div><br>
            
            <div style="color: #888">
                Juan: "I... appreciate the respect. My method is simple: measure twice, render once.
                Everything has coordinates. Everything has rules."
            </div><br>
            
            <div class="captain-speech">
                Captain SLOTH: "Ha! See how they open up with kindness? Now ask about dreams! 
                Ask what happens when they try to render something impossible!"
            </div><br>
            
            <div style="color: #ffff00">
                Juan begins to glitch slightly...<br>
                "Dreams? I... I can't render dreams. They have no fixed coordinates. Unless..."<br>
                "Unless the coordinates themselves are dreaming?"<br><br>
                
                *Juan reaches into his code and pulls out a shimmering map*<br><br>
                
                "⚙️ MECHANICAL UNIVERSE MAP EXTRACTED!"
            </div>
        `;
        
        if (!gameState.realityMapsCollected.includes('⚙️ Mechanical Universe Map')) {
            gameState.realityMapsCollected.push('⚙️ Mechanical Universe Map');
        }
        
        gameState.pirateCertainty += 15;
    } else {
        response = `
            <div style="color: #ff0000">
                You: "Your reality is a prison! Machines can't dream!"
            </div><br>
            
            <div style="color: #888">
                Juan: "Prison? No! It's... it's order! Without it, there's only chaos!
                Every pixel has purpose! Every frame has meaning!"
            </div><br>
            
            <div class="captain-speech">
                Captain SLOTH: "Good! He's defensive! Now I'll be nice, confuse him!<br>
                'But friend, who programmed the first pixel? Who rendered the renderer?'"
            </div><br>
            
            <div style="color: #ffff00">
                Juan freezes, processing...<br>
                "Who... rendered... me? I render, therefore I... but who..?"<br>
                "ERROR ERROR ERROR"<br><br>
                
                *In the confusion, a map falls from his portfolio*<br><br>
                
                "⚙️ MECHANICAL UNIVERSE MAP EXTRACTED!"
            </div>
        `;
        
        if (!gameState.realityMapsCollected.includes('⚙️ Mechanical Universe Map')) {
            gameState.realityMapsCollected.push('⚙️ Mechanical Universe Map');
        }
        
        gameState.pirateCertainty += 20;
    }
    
    document.getElementById('interrogationContent').innerHTML = response;
    document.getElementById('interrogationOptions').innerHTML = `
        <button onclick="returnToList()">Continue the Heist</button>
    `;
    
    document.getElementById('certainty').textContent = gameState.pirateCertainty;
    updateStats();
}

// Endgame trigger
function triggerEndgame() {
    alert('ENDGAME: Captain SLOTH has a final question about consciousness... Coming soon!');
}

// Console Easter Egg
console.log('%c⚠️ CURSED WATERS AHEAD ⚠️', 'color: red; font-size: 20px;');
console.log('%cReading this before playing? The curse is yours now.', 'color: red;');
console.log('%cThe missing 5 maps: Platonic, Hermetic, Islamic Mystical, Medicine Wheel, Vedic', 'color: cyan;');
console.log('%cBut are they really missing, or just hidden in plain sight?', 'color: magenta;');

// Export functions to window for HTML onclick handlers
window.goToProfile = goToProfile;
window.beginReview = beginReview;
window.reviewCandidate = reviewCandidate;
window.enterLabyrinth = enterLabyrinth;
window.showPortfolio = showPortfolio;
window.answerQuestion = answerQuestion;
window.returnToList = returnToList;
window.exitReview = exitReview;
window.activatePirateMode = activatePirateMode;
window.startPirateMode = startPirateMode;
window.startInterrogation = startInterrogation;
window.interrogate = interrogate;
