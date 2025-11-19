/* 
    IMPORTANT — READ THIS FIRST!

    This file stores ALL the DOM element variables used across the project.
    We do this so every script (preview.js, char.js and battle.js)
    can access the same elements without renaming or duplicating them.

    When you write your own code, ALWAYS use these variables instead of
    calling document.getElementById() again. 
    This prevents naming conflicts and ensures every script is talking 
    to the same elements in index.html.

    Example:
        ✓ Use:  playerHPBar.style.width = "80%";
        ✗ Do NOT use: document.getElementById("playerHP").style.width = "80%";

    You do NOT need to modify anything in this file.
*/


/* Builder section elements */
const startBattleBtn = document.getElementById('startBattleBtn');
const builderSection = document.getElementById('builder-section');
const header = document.getElementById('header');


/* Form inputs */
const c1Name = document.getElementById('c1Name');
const c1Level = document.getElementById('c1Level');
const c1HP = document.getElementById('c1HP');
const c1Ability = document.getElementById('c1Ability');
const c1Img = document.getElementById('c1Img');

const c2Name = document.getElementById('c2Name');
const c2Level = document.getElementById('c2Level');
const c2HP = document.getElementById('c2HP');
const c2Ability = document.getElementById('c2Ability');
const c2Img = document.getElementById('c2Img');


/* Preview section elements */
const prev1Img = document.getElementById('prev1Img');
const prev1Name = document.getElementById('prev1Name');
const prev1Level = document.getElementById('prev1Level');
const prev1HP = document.getElementById('prev1HP');
const prev1Ability = document.getElementById('prev1Ability');

const prev2Img = document.getElementById('prev2Img');
const prev2Name = document.getElementById('prev2Name');
const prev2Level = document.getElementById('prev2Level');
const prev2HP = document.getElementById('prev2HP');
const prev2Ability = document.getElementById('prev2Ability');


/* Battle section elements */
const battleSection = document.getElementById('battle-section');
const playerNameEl = document.getElementById('playerName');
const playerLevelEl = document.getElementById('playerLevel');
const playerHPBar = document.getElementById('playerHP');
const playerImg = document.getElementById('playerImg');

const oppNameEl = document.getElementById('oppName');
const oppLevelEl = document.getElementById('oppLevel');
const oppHPBar = document.getElementById('oppHP');
const oppImg = document.getElementById('oppImg');

const messageBox = document.getElementById('messageBox');
const fightBtn = document.getElementById('fightBtn');
const abilityBtn = document.getElementById('abilityBtn');
const healBtn = document.getElementById('healBtn');
const runBtn = document.getElementById('runBtn');