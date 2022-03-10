// k present me, make cat function, make Info text, Make Cat AI, Make Items System
// make the weilding system work

//declare the variables here
var Turn = 1;
  //if turn is 1 its players turn
  //if turn is 2 its cats turn
var PlayerAttkDmg;
var PlayerHealth = 100;
var itemHeld = 1;
var Pager = 1;
hideElement("button4");
//cat attack shit here
var CatDecision;
var CatAttkDmg;
//infoPager = 1 that means cat is present, 2 = text is present
  //if itemHeld is 1, that means the player holds the sword; max damge 10-40
  //if itemHeld is 2, that means the player hold the staff; max dmage 5-50, grants 5-10 health on crit
var healthPot;
var healthPotGen = 1;
  //Health pot count will be 1-2 and decided the first time either Item or Check is clicked
var PlayerDfndShld;
//just work on player for now, declare cats stuff tommrow
var CatHealth = 100;
// text and such code here
setText("TurnText", "Turn: It's Your Turn");
hideElement("label1");
hideElement("button2");
//attack code here
onEvent("AttkBttn","click",function() {
  console.log("You Attacked");
  if (itemHeld == 1) {
    PlayerAttkDmg = 10 * randomNumber(1, 4);
    console.log("You Delt " + PlayerAttkDmg + " Damage!");
    if (PlayerAttkDmg == 40) {
      console.log("Critical Hit!");
    }
  } else if (itemHeld == 2) {
      PlayerAttkDmg = 5 * randomNumber(1, 10);
      console.log("You Delt " + PlayerAttkDmg + " Damage!");
      if (PlayerAttkDmg == 50) {
        PlayerHealth += 5;
        console.log("Critical Hit!");
      }
  }
  CatHealth -= PlayerAttkDmg;
  WinLossCheck();
  Turn = 2;
  setText("TurnText", "Turn: Cat's Turn");
  //put cat function here
  CatTurn();
});
//defend code here
onEvent("DfndBttn","click", function(){
  console.log("You Defended");
  PlayerDfndShld = randomNumber(1,10);
  if (PlayerDfndShld == 10) {
    PlayerHealth += 20;
  } else if (PlayerDfndShld < 10) {
    PlayerHealth += 10;
  }
  WinLossCheck();
  Turn = 2;
  setText("TurnText","Turn: Cat's Turn");
  //Put cat function here
  CatTurn();
});
//check code here
onEvent("CheckBttn", "click", function(){
  if (healthPotGen == 1){
    healthPot = randomNumber(1,2);
    healthPotGen = 2;
  }
  if (Turn == 1) {
    console.log("It's your turn");
  } else if (Turn == 2) {
    console.log("It's not your turn");
  }
  console.log("You are at " + PlayerHealth);
  console.log("The Cat is at " + CatHealth);
  if (healthPot == 1) {
    console.log("You have 1 Health Pot left");
  } else if (healthPot == 2) {
    console.log("You have 2 Health Pots left");
  } else {
    console.log("You Have no Health Pots");
  }
  if (itemHeld == 1) {
    console.log("You're weilding your Sword");
  } else if (itemHeld == 2) {
    console.log("You're weilding your Staff");
  }
  
});
//item code here
onEvent("ItemBttn", "click", function() {
  Pager = 2;
  if (healthPotGen == 1){
    healthPot = randomNumber(1,2);
    healthPotGen = 2;
  }
  hideElement("label3");
  hideElement("DfndBttn");
  hideElement("AttkBttn");
  hideElement("AttkBttnGroup");
  hideElement("CheckBttn");
  hideElement("label5");
  hideElement("ItemBttn");
  hideElement("label4");
  showElement("label1");
  if (itemHeld == 1) {
    hideElement("button2");
  } else if (itemHeld == 2) {
    if (Pager == 1) {
    showElement("button2");
  } else if (Pager == 2) {
    hideElement("button2");
  }
  }
  
});
//items code here
onEvent("ItemBtnn4", "click", function() {
  Pager = 1;
  showElement("label3");
  showElement("DfndBttn");
  showElement("AttkBttn");
  showElement("AttkBttnGroup");
  showElement("CheckBttn");
  showElement("label5");
  showElement("ItemBttn");
  showElement("label4");
  hideElement("label1");
  if (itemHeld == 1) {
    hideElement("button2");
  } else if (itemHeld == 2) {
    if (Pager == 1) {
    showElement("button2");
  } else if (Pager == 2) {
    hideElement("button2");
  }
  }
});

onEvent("ItemBtnn1", "click", function() {
  healthPot -= 1;
  PlayerHealth += 15;
  if (PlayerHealth > 110){
    PlayerHealth = 110;
  }
  if (healthPot < 1) {
    hideElement("ItemBtnn1");
  }
});
onEvent("ItemBtnn2", "click", function() {
  if (itemHeld == 1) {
    itemHeld = 2;
    setText("ItemBttn3", "Staff");
  } else if (itemHeld == 2) {
    itemHeld = 1;
    setText("ItemBttn3", "Sword");
  }
});

//enemey function here
function CatTurn() {
  showElement("button4");
  console.log("Cat is deciding");
  setText("TurnText","Turn: Cat's Turn");
  setTimeout(function(){
    CatDecision = randomNumber(1,2);
    if (CatDecision == 1) {
      console.log("The Cat Attacks!");
      CatAttkDmg = 10 * randomNumber(1, 4);
      console.log("The Cat Delt " + CatAttkDmg + " Damage!");
      if (CatAttkDmg == 40) {
        console.log("Critical Hit!");
      }
      PlayerHealth -= CatAttkDmg;
      WinLossCheck();
      setText("TurnText","Turn: Your Turn");
      hideElement("button4");
    } else if (CatDecision == 2) {
      console.log("Cat Defended");
      CatHealth += 10;
      WinLossCheck();
      setText("TurnText","Turn: Your Turn");
      hideElement("button4");
    } else {
      console.log("Error code: Banana!");
      hideElement("button4");
    }
    Turn = 1;
  }, randomNumber(500,2000));
  
}


function WinLossCheck() {
  if (PlayerHealth < 1){
    setScreen("screen4");
  } else if (CatHealth < 1){
    setScreen("screen2");
  }
}



//put info stuff here
onEvent("Item1Info","mouseover",function(){
  hideElement("CatProfile");
  if (Pager == 1) {
    setText("text_area1","In a Defense Action you will raise youre shield. You will negate 10 damage from the next attack, there is a 1/10 chance you will negate 20, this can heal if they hit a attack the deals 10 or below.");
  } else if (Pager == 2) {
    setText("text_area1", "In the begging of the match you will get either 1 or two health potions (you can check your amount by hitting check) Health Pots will heal 15 health, the maxium you can overheal is to 110.");
  }
 });
onEvent("Item1Info","mouseout",function() {
  showElement("CatProfile");
});
onEvent("Item2Info","mouseover", function(){
  hideElement("CatProfile");
  if (Pager == 1) {
    setText("text_area1","In a Attack Action depending on youre weapon of choice (you can switch weapons on the items page) you can deal up to 50 damge (40 if using the sword), and a minimum of 5 (10 if using the sword).");
  } else if (Pager == 2) {
    setText("text_area1", "You have two choices for weapons a Sword & Shield, or a Staff. With a Sword & Shield you can deal a minimum of 10 damage and a maximum of 40, you can also Defend negating 10 damage, and a 10% chance to negate 20 damage. With the Staff you'll deal a minimum of 5 damage and a maximum of 50, dealing 50 damage gives you 5 health on return!");
  }
});
onEvent("Item2Info","mouseout", function() {
  showElement("CatProfile");
});
onEvent("Item3Info","mouseover",function() {
  hideElement("CatProfile");
  if (Pager == 1) {
    setText("text_area1","Check wont use a turn, Checking will show things like: How many pots you have left, Health of you and youre enemy, whos turn it is, and what weapon your weilding.");
  } else if (Pager == 2) {
    if (itemHeld == 1) {
      setText("text_area1","With a Sword & Shield you will be hitting a minimum of 10 damage, and maximum of 40. You'll also be able to Defend which will negate 10 damage, and a 1/10 chance to negate 20.");
    } else if (Pager == 2) {
      setText("text_area1","With the Staff, you'll be able to hit a minimum of 5 damge, and a maximum of 50 damge! When you hit a Critical Hit (50 Damage) you will recive 5 extra health.");
    }
  }
    
});
onEvent("Item3Info","mouseout",function() {
  showElement("CatProfile");
});
onEvent("Item4Info","mouseover",function() {
  hideElement("CatProfile");
  if (Pager == 1) {
    setText("text_area1","Show your Items tab; Health Potions, and change your weapon");
  } else if (Pager == 2) {
    setText("text_area1","Head back to your actions page; Attack, Defend, or Check");
  }
});
onEvent("Item4Info", "mouseout", function() {
  showElement("CatProfile");
});
