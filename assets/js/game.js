var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth >0){
      
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "fight" || prompt === "FIGHT"){
        //subtract the vaslue of playerAttack from the value of enemyHealth and use the result to update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        // player skip or fight?
    
    
        //Log a resulting message to the console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //subtract the value of enemyAttack from the value of playerHealth and uses the result to update playerHealth
        playerHealth = playerHealth - enemyAttack;
    
        //log a resulting message to the console so we know it worked.
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        //check player's health
        if (playerHealth <= 0)  {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        }
        //if player choses to skip
        else if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract 2 player money for skiping
            playerMoney = playerMoney - 2;
            }
            //if no (false), ask question again by running fight() again
            else {
                fight();
            }
        
        }
        else {
            window.alert("You need to pick a valid option. Try again!");
        };        
    }
    
  

};

for(var i = 0; i <enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}