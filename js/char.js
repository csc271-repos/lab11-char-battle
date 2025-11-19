/* 
    TO-DO: Build the Character object constructor. 
    This object will be created using the form input values (done later in battle.js). 
    Your Character must include:

    ----------------------------------------------------
    PROPERTIES
    ----------------------------------------------------
    - Character name
    - Character level
    - Character HP (converted to Number)
    - Selected ability
    - Character image URL

    ----------------------------------------------------
    METHODS  
    ----------------------------------------------------

    fight(opp):
        - Given an opponent object as argument. 
        - Randomly deal between 10–20 damage.
        - Subtract the damage from the opponent’s HP.
        - If the opponent's HP goes below 0, update their HP to 0.
        - Return the damage dealt.

    useAbility(opp):
        - Given an opponent object as argument. 
        - Handle each ability as described below:
            • Power Strike → deal 30–50 damage.
            • Quick Shot   → deal 15–25 damage.
            • Mega Heal    → heal self 30–45 HP (max 100 HP).
            • Arcane Burst → deal 10–50 damage.
            • DEFAULT      → deal 10–20 damage.
        - For all damaging abilities, reduce the opponent’s HP and prevent opponent's HP from dropping below 0.
        - Return the damage or heal amount.

    heal():
        - Restore 10–20 self HP (max 100 HP).
        - Return the amount healed.

    run():
        - Return true with 60% probability, false otherwise.
*/

