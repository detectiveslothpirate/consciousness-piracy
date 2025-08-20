# MEAT PACK TEMPLATE v2.0
*Complete architecture with all discoveries from our voyage*

## ASCII ART SYSTEM

```javascript
// REUSABLE ASCII - Lives at top of MEAT object
ascii: {
    gameOver: `<pre style="color: #ff0000; font-size: 14px; font-weight: bold; text-align: center;">
 ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗ ██╗   ██╗███████╗██████╗ 
██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔═══██╗██║   ██║██╔════╝██╔══██╗
██║  ███╗███████║██╔████╔██║█████╗      ██║   ██║██║   ██║█████╗  ██████╔╝
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╔╝ ╚████╔╝ ███████╗██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝
</pre>`
}
```

## COMPLETE CANDIDATE STRUCTURE

```javascript
candidateId: {
    // CORE DATA
    name: 'DISPLAY_NAME',
    truth: 'One line truth statement',
    certDrop: -15,  // How much certainty drops
    unlocks: 'nextCandidateId',  // Who they unlock
    portfolioPiece: 'portfolio-id',  // What you collect
    isVoid: false,  // true only for navigator
    
    // DESCENT PATH - Interview
    intro: `Full intro text with <br><br> breaks between ideas`,
    
    inquiries: [
        `First inquiry level text`,
        `Second inquiry level text`,
        // As many levels as needed - dynamic!
    ],
    
    buttons: {
        intro: {
            deeper: "Custom deeper button text",
            flee: "Custom flee button text"
        },
        inquiry1: {
            deeper: "Go deeper button",
            flee: "Run away button"
        },
        inquiry2: {
            face: "Face truth button",  // Or deeper if more levels
            flee: "Escape button"
        },
        // inquiry3, inquiry4, etc as needed
        truth: {
            accept: "Accept gift button",
            reject: "Reject truth button"
        }
    },
    
    truthReveal: `The full truth revelation text`,
    
    deaths: {
        flee: `Death text when fleeing during interview`,
        reject: `Death text when rejecting truth`
    },
    
    // MAP CONTENT
    mapReceived: `Optional: Custom text when first receiving map`,
    
    mapExamine: {
        asciiArt: `<pre style="color: #9945ff;">ASCII TITLE</pre>`,
        subtitle: `<h3>Subtitle</h3>`,
        body: `Main map content`,
        mapEdges: `Footer/warning section`
    },
    // OR simple version:
    // mapExamine: `Simple text for basic maps`,
    
    // RETURN VISIT
    returnVisit: `Optional: Custom text for second visit`,
    
    // ASCENT PATH - Pirate Mode
    remember: `Text when remembering in pirate mode`,
    
    rememberButtons: {
        flow: "Hold the wind button",
        anchor: "Drop anchor button"
    }
}
```

## ANIMATOR - COMPLETE WORKING EXAMPLE

```javascript
animator: {
    name: 'ANIMATOR',
    truth: 'Motion lives between frames',
    certDrop: -15,
    unlocks: 'dreamer',
    portfolioPiece: 'animation-reel',
    
    intro: `Hello there, my name is Juan!<br><br>
    I've been translating imagination into pixels since I was a kid. Now I work for big studios - same imagination, more expensive pixels.<br><br>
    But here's the thing - recently I've discovered that motion is way more interesting than animation...`,
    
    inquiries: [
        `Oh! OK so... *leans in*<br><br>
        When I animate Rocket punching Thor - frame 1: fist here, frame 2: fist in jaw. But the actual PUNCH? The motion? That's not in either frame. It's in the gap. Your brain creates it from nothing.<br><br>
        But here's what keeps me up at night...<br><br>
        WHO is watching? The frames are just dead pixels until YOUR... consciousness? awareness? - whatever that thing is - witnesses them in sequence.<br><br>
        *rubs neck*<br><br>
        Sorry, I know this sounds weird...`,
        
        `Well that's the thing - I don't really know what consciousness IS!<br><br>
        I just know something has to BE there to see motion where only stillness exists. Something that... experiences the continuity?<br><br>
        *laughs nervously*<br><br>
        Honestly, I'm just an animator who noticed something weird. Maybe one of the other candidates know more about this stuff...`
    ],
    
    buttons: {
        intro: {
            deeper: "Wait, isn't motion and animation the same thing?",
            flee: "I'd love to see those expensive pixels"
        },
        inquiry1: {
            deeper: "Consciousness? What do you mean?",
            flee: "That's... interesting. Let's see that animation now."
        },
        inquiry2: {
            face: "So what's your conclusion?",
            flee: "You're right, this is a bit weird. But hey, I'd love to see your animation!"
        },
        truth: {
            accept: "Receive Juan's Map",
            reject: "It's ok, thank you. I know what reality is all about."
        }
    },
    
    truthReveal: `Look, all I know is this:<br><br>
    Motion lives in the gaps between frames.<br><br>
    That's it. That's my whole discovery.<br><br>
    But maybe it helps? Here, let me give you my map - it's how I've been thinking about reality. Frame by frame. Maybe you'll see something I missed.`,
    
    deaths: {
        flee: `Juan lights up showing you his reel.<br><br>
        "Thank you so much for your time!<br><br>
        Let me show you the Rocket slapping Thor in the face - it felt nice to hit Chris Hemsworth's annoying perfect jawline through Rocket!"`,
        
        reject: `You declined Juan's gift, but he got even MORE excited.<br><br>
        "Hey that's cool, I wish I knew as much as you about reality!<br><br>
        The only thing I really know is making fake stuff look real.<br><br>
        On that note - check out these jellyfish I did for the Little Mermaid underwater sequence! The asset count on that sequence was unreal!"`
    },
    
    mapReceived: `This is the map everyone uses. What we all learned.<br><br>
    According to this map...<br>
    Reality is matter and energy. Nothing else.<br>
    Consciousness? Just neurons firing patterns.<br>
    Love? Dopamine hits. Death? Atoms dispersing.<br>
    Free will? Illusion. Soul? Superstition.<br>
    Everything reducible to physics equations.<br><br>
    This map built our entire world.<br>
    Every cure. Every machine. Every animated frame.<br>
    I trust it completely. Why wouldn't I?<br>
    It WORKS. Perfectly. Predictably.<br><br>
    It's just...<br><br>
    *pauses*<br><br>
    'Neurons firing patterns.' That's what creates consciousness?<br>
    But if that's true... what's experiencing the neurons?<br>
    The neurons can't watch themselves firing, right?<br><br>
    *shakes head*<br><br>
    Probably nothing. The map must be right.<br><br>
    There's another candidate here.<br>
    They see things... differently.<br>
    Maybe they can explain it better.`,
    
    mapExamine: {
        asciiArt: `<pre style="color: #9945ff; font-size: 14px; font-weight: bold; text-align: center;">
███████╗██████╗  █████╗ ███╗   ███╗███████╗    ██████╗ ██╗   ██╗    
██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝    ██╔══██╗╚██╗ ██╔╝    
█████╗  ██████╔╝███████║██╔████╔██║█████╗      ██████╔╝ ╚████╔╝     
██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝      ██╔══██╗  ╚██╔╝      
██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗    ██████╔╝   ██║       
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝    ╚═════╝    ╚═╝       
                                                                      
███████╗██████╗  █████╗ ███╗   ███╗███████╗    ███╗   ███╗ █████╗ ██████╗ 
██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝    ████╗ ████║██╔══██╗██╔══██╗
█████╗  ██████╔╝███████║██╔████╔██║█████╗      ██╔████╔██║███████║██████╔╝
██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝      ██║╚██╔╝██║██╔══██║██╔═══╝ 
██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗    ██║ ╚═╝ ██║██║  ██║██║     
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     
</pre>`,
        subtitle: `<h3 style="color: #666; text-align: center; margin: 20px 0;">The Cartographers</h3>`,
        body: `<div style="font-size: 16px; line-height: 1.8;">
<strong>DEMOCRITUS (460 BCE) - First Pirate to Sail These Waters</strong><br>
The mad bastard's discovery: 'Everything's atoms in void!' Revolutionary! Demolished the gods!<br>
His brilliant move: Even invented special round 'soul atoms' - consciousness as finest matter<br>
Where he earned respect: His own atoms told him: 'Wretched Mind, you overthrow us with evidence you got from us?'<br>
⚠️ Navigator's Note: First sailor to spot the paradox! Respect to the ancient Greek pirate!<br><br>

<strong>NEWTON - The Secret Alchemist Who Mapped the Heavens</strong><br>
His gift to pirates everywhere: Made the universe calculable! Navigation by mathematics!<br>
Hidden treasure: Million words of theology - the man searched EVERYWHERE for truth<br>
His honest admission: 'Gravity works, but I frame no hypotheses about WHY'<br>
⚠️ Navigator's Note: Brave enough to admit his map had edges. That takes pirate courage!<br><br>

<strong>DARWIN - The Naturalist Who Charted Life's Waters</strong><br>
What he gave us: Evolution! Bodies change! Life makes itself!<br>
His strategic wisdom: 'I'll leave consciousness to future pirates' - knew his limits<br>
Wallace's parallel discovery: Both hit the same reef independently!<br>
⚠️ Navigator's Note: Sometimes the bravest thing is knowing what waters you can't chart yet<br><br>
</div>`,
        mapEdges: `<div style="font-size: 16px; line-height: 1.8; margin-top: 20px; padding-top: 20px; border-top: 1px solid #333;">
<strong>The Map Edges</strong><br><br>
Now that we've honored these brave bastards, here's where they fucked up:<br><br>
• Democritus: 'It's all atoms!' (Except WHO'S COUNTING THE ATOMS, ye daft sea dog?)<br>
• Newton: 'Perfect mechanism!' (That mysteriously needs God to run it - make up yer mind!)<br>
• Darwin: 'Natural selection explains all!' (Except the selector watching selection happen!)<br><br>

Each one built a perfect map of everything EXCEPT the pirate reading the fucking map!<br>
They could explain the ship, the ocean, the stars - but not the consciousness steering through it all.<br><br>

<strong>THE PIRATE'S TRUTH:</strong> This map is so accurate, so complete, so fucking PERFECT that you'll forget it's just a map. You'll think you're looking at reality itself. Classic landlubber mistake - confusing the chart for the actual ocean!
</div>`
    },
    
    returnVisit: `Oh, you're back! I'd love to chat more about the motion thing!<br><br>
    *perks up*<br><br>
    Wait... *tilts head* ...oh, I think that's Mila - my daughter - calling for me. She's priority #1.<br><br>
    But hey, the other candidates are pretty cool, you should chat with them!`,
    
    remember: `Oh! I remember now... the gaps! The motion lives in the gaps between frames.<br><br>
    But also... maybe consciousness is like that too? Living in the spaces between things?<br><br>
    *rubs neck nervously*<br><br>
    I still don't fully understand it, but those empty spaces... they might be more important than what we fill them with.`,
    
    rememberButtons: {
        flow: "The gaps... yes, the emptiness matters",
        anchor: "No, there must be something solid creating motion"
    }
}
```

## KEY DISCOVERIES

### 1. Dynamic Inquiry Depth
- inquiries array can be ANY length
- Buttons numbered to match: inquiry1, inquiry2, etc.
- Last inquiry gets "face" button instead of "deeper"

### 2. Sectioned Map Structure
Instead of one HTML blob, maps have sections:
- asciiArt: Big title graphic
- subtitle: "The Cartographers" etc
- body: Main content
- mapEdges: Footer/warnings

### 3. Optional Custom Text
These fields are OPTIONAL - skeleton has fallbacks:
- mapReceived: Custom dialogue when getting map
- returnVisit: Custom second visit text
- rememberButtons: Custom pirate mode buttons

### 4. Death Variations
Each candidate can have:
- deaths.flee: When fleeing interview
- deaths.reject: When rejecting truth
- Or neither (uses generic text)

### 5. ASCII System
Reusable ASCII lives in MEAT.ascii:
- gameOver: Used by all death screens
- Can expand for victory screens, etc.

## MINIMAL TEMPLATE

```javascript
candidateId: {
    name: 'NAME',
    truth: 'Core truth',
    certDrop: -15,
    unlocks: 'nextId',
    portfolioPiece: 'portfolio-id',
    
    inquiries: [
        'First question',
        'Second question'
    ],
    
    intro: 'Introduction text',
    truthReveal: 'Truth revelation',
    remember: 'Pirate mode memory'
}
```

## FORMATTING RULES

1. **Break text with `<br><br>`** between ideas
2. **Use single quotes** with `\'` for apostrophes
3. **NO COMMENTS** inside objects (breaks JavaScript)
4. **Keep actions in asterisks**: `*leans in*`
5. **Dynamic buttons match inquiry count**

---
*This template contains ALL discoveries from our voyage. Use it to write the remaining 7 candidates with full richness and proper structure.*
