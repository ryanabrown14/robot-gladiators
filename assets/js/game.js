var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;



var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames.length);
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask user if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if user picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney - 10);
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var damage = randomNumber(playerAttack -3, playerAttack);
      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack -3, enemyAttack);
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i <enemyNames.length; i++){
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40, 60);
        fight(pickedEnemyName);
// if player is still alive and we're not at the last enemy in the array
if (playerHealth > 0 && i < enemyNames.length - 1) {
  //ask if user would like to use the store before next round
  var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
  //if yes take them to the store
  if (storeConfirm) {
    shop();
  }
  
}

    }
    

    else {
        window.alert("You have lost your robot in battle! Game Over!")
        break;
    }

}
endGame();
};
//function to generate a random numeric value
var randomNumber = function(min, max){
  var value =Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
//function to end the entire game
var endGame = function(){
  //if the player is still alive, the player wins
  if (playerHealth > 0) {
        window.alert("Great Job, you're survived the game! You now have a score of " + playerMoney + ".");

    }
    else{
        window.alert("You've lost your robot in battle.")
    }
    var playAgainConfirm = window.confirm ("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! come back soon!");
    }

};
var shop = function() {
  // ask the player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
  );
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if (playerMoney >=7) {
      window.alert("Refilling players health by 20 for 7 dollars");
      //increase health and decrease money
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You don't have enough money!")
      }
      break;

      case "upgrade":
      case "UPGRADE": 
      if (playerMoney >=7) {
      window.alert("upgrading players attack by 6 for 7 dollars.");
      //increases attack and decreases money
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!")
      }
      break;

      case "leave":
      case "LEAVE":
        window.alert("Leaving the store.");
        break;

        default:
          window.alert("You did not pick a valid option. Try again.");
          //recall the shop
          shop();
          break;

  }
};
startGame();