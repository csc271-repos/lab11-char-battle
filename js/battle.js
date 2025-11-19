/* Character objects */
let playerChar = null;
let oppChar = null;

/* Track whose turn it is */
let isPlayerTurn = true;



/* Battle button event */
document.getElementById('char-form').addEventListener('submit', function(e) {
  /* Prevent form from submitting normally */
  e.preventDefault();

  /* Switch from builder screen to battle screen */
  builderSection.classList.add('hidden');
  header.innerHTML = "<h1>Battle</h1><p class='subtitle'>Use the buttons to control your character.</p>";
  battleSection.classList.remove('hidden');
  enableButtons(true);
  
  /*
      TO-DO: Instantiate both Character objects using the form inputs.
             - Use Character 1 form inputs to create the player's Character.
             - Use Character 2 form inputs to create the opponent's Character.

             Then update the battle UI using each Character’s properties:
             - Set the player’s name, level, and image.
             - Set the opponent’s name, level, and image.
             - Call updatePlayerHP() and updateOppHP() to initialize their HP bars.

             Finally:
             - Update the messageBox with a “Battle start!” message that includes
               both character names and states that the player attacks first.

            ** All necessary DOM elements have already been selected for you in elements.js.**
            ** Do NOT use document.getElementById() or other selectors in this file. Just use the provided variables. **

  */

  

});



/* enableButtons: Enable or disable menu buttons */
function enableButtons(enable) {
    fightBtn.disabled = !enable;
    abilityBtn.disabled = !enable;
    healBtn.disabled = !enable;
    runBtn.disabled = !enable;
}

/* Disable battle buttons until the battle begins */
enableButtons(false);



/* updatePlayerHP: Updates the player's HP bar based on current HP */
function updatePlayerHP() {
  /*
      TO-DO: Replace ? with the appropriate property for player's current HP.
  */
  const pct = Math.max(0, Math.min(100, (? / 100) * 100));
  playerHPBar.style.width = pct + "%";
}


/* updateOppHP: Updates the opponent's HP bar based on current HP */
function updateOppHP() {
  /*
      TO-DO: Replace ? with the appropriate property for opponent's current HP.
  */
  const pct = Math.max(0, Math.min(100, (? / 100) * 100));
  oppHPBar.style.width = pct + "%";
}



/* endTurnIfGameOver: Checks for zero HP and ends the battle if needed. */
function endTurnIfGameOver() {
  /*
      TO-DO: Check if either character’s HP is 0 or below.
             - Determine the winner.
             - Update the messageBox with “Game Over — <winner> wins!”
             - Disable all battle buttons using enableButtons(false)
             - Return true if the game has ended; otherwise return false.
  */

  

}



/* fightBtn: Perform a basic attack when clicked */
fightBtn.addEventListener('click', function() {
  if (isPlayerTurn) {
    /*
        TO-DO: Call appropriate method for player and store damage.
               Update the messageBox to show the attack and damage dealt.
               Update the opponent’s HP bar.
    */



    if (endTurnIfGameOver()) {
        return;
    }

    isPlayerTurn = false;
    setTimeout(enemyAction, 1500);
  }
});


/* abilityBtn: Use the player's special ability */
abilityBtn.addEventListener('click', function() {
  if (isPlayerTurn) {
    /*
        TO-DO: Call appropriate method for player and store result.
               If Mega Heal: display “healed X HP”.
               Otherwise: display “dealt X damage”.
               Update both HP bars (player and opponent).
    */



    if (endTurnIfGameOver()) {
        return;
    }
    
    isPlayerTurn = false;
    setTimeout(enemyAction, 1500);
  }
});


/* healBtn: Restore HP when clicked */
healBtn.addEventListener('click', function() {
  if (isPlayerTurn) {
    /*
        TO-DO: Call appropriate method for player and store health.
               Display the amount healed in the messageBox.
               Update the player’s HP bar.
    */
    


    if (endTurnIfGameOver()) {
        return;
    }

    isPlayerTurn = false;
    setTimeout(enemyAction, 1500);
  }
});


/* runBtn: Attempt to escape the battle */
runBtn.addEventListener('click', function() {
  if (isPlayerTurn) {
    /*
        TO-DO: Call appropriate method for player and store result.
               - If run succeeds: display success message and disable all buttons.
               - If run fails: display failure message,
                               switch turn to opponent,
                               then call enemyAction().
    */



    isPlayerTurn = false;
    setTimeout(enemyAction, 1500);
  }
});



/* enemyAction: Opponent turn logic */
function enemyAction() {
  const roll = Math.random();

  /*
      TO-DO: Calculate the opponent’s HP ratio (current HP / 100).
             Use it along with a random roll to choose an action:
             - If HP is low (< 35%) and roll < 0.55 → Heal and display the amount healed in the messageBox.
             - Else if roll < 0.5 → Use ability and display the amount dealt/healed in the messageBox.
             - Otherwise → Use basic attack and display the amount damaged in the messageBox.

             After performing the action:
             - Update both HP bars.
  */



    if (endTurnIfGameOver()) {
        return;
    }

    isPlayerTurn = true;
}