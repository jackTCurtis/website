var start1;
var weapon;
var q=0;
var j=0;
var tenmoLevel = 1;
var tenmoHealth = 100;
var playerHealth = 100;
var playerXp = 0;
var playerXpGain; //this is a fail safe with staff weapon gain
var e=0;
var k;
var t;
var p = 0;
var obsorbLevel=0; //lvl 0 is beginning
var enchantApplied=0; //make sure that when using this variable that it wont go over index based on weapon
var playerAttack; //this is ment for checking if a player landed a special number.
//for example when using a staff it can only go up to 4
var tenmoDamage; //this is ment for the enemys attack and its affect with any parameter
var enchantAppliedSword = [1,2,3,4,5]; //Enchant sword specific is called piercing
var enchantAppliedStaff = [1,2,3,4]; //Enchant staff specific is called Bludgeing 
var enchantAppliedArch = [1,2,3]; //Enchant Arch specific is called Archana

//note these are all obsolete, too lazy to delete them.

var enchantText = ["✂","✁","✆","✇","☜","☞","☟","☺","☹","☠","✈","☼","❄","✞","❖","⌖"];

var tenmoProfile = ["AatroxSquare","AniviaSquare","Aurelion_SolSquare","BardSquare","Cho%27GathSquare","MalphiteSquare","MalzaharSquare","Rek%27SaiSquare","RenektonSquare","RengarSquare_Unreleased","SkaarlSquare","WillumpSquare"];

var headerName = ["Oh no its ","Its the Mighty ", "Its the Powerful "];

var firstName = ["Andrej ","Andre ", "Andrew ", "Angel ", "Angela ", "Alec ","Alex ","Alexa ","Brandon ","Brendon ", "Charlie ","Carl ","Cass ","Dennis ","Daniel ","Daniela ","Dexter ","Eryk ","Erik ","Fred ","Fredrick ","Garry ", "Gerald "];
var tagName = ["The Terrible","The Horrible","The Rutheless","The Rampager","The Bloodless","The Adrenline Addict"];
for (var i = 0; i < enchantText.length; i++) {
    setText("label"+i,enchantText[i]);
  }


onEvent("button2", "click", function( ) {
  setProperty("button1","background-color","yellow");
  start1 = 1;
  weapon = 1;
});
onEvent("button3", "click", function( ) {
  setProperty("button1","background-color","yellow");
  start1 = 1;
  weapon = 2;
});
onEvent("button4", "click", function( ) {
  setProperty("button1","background-color","yellow");
  start1 = 1;
  weapon = 3;
});
//weapon 1 is the Sword
//weapon 2 is the Staff
//weapon 3 is the Arch

//WIP Health Bar

function updateTenmoHealth() {
      setFillColor("white");
  setStrokeColor("white");
  rect(0,0,320,10);
  setStrokeColor("red");
  setFillColor("red");
  rect(0,0,tenmoHealth * 3.2,10);
}
function updatePlayerHealth() {
      setFillColor("white");
  setStrokeColor("white");
  rect(0,10,320,10);
  setFillColor("green");
  setStrokeColor("green");
  rect(0,10,playerHealth * 3.2,10);
}
function updateXpBar() {
    if (playerXp >= 100) {
    showElement("enchantButton1");
  }
    setFillColor("white");
  setStrokeColor("white");
  rect(0,20,320,10);
  setFillColor("blue");
  setStrokeColor("blue");
  rect(0,20,playerXp * 3.2,10);

}

onEvent("button2","mouseover",function(){
  setText("text_area1","With a sword you'll be able to Stab and Chop the enemy away. \n\nOn a Stab you'll do 1d8 damage, and you'll have a chance to parry the next attack against you. When you parry an attack your next attack will do a bonus 2 damage, if you land a max (8 if stab, 16 if chop) hit you'll deal double the damage.\n\nOn a chop you'll do 2d8 Damage. When you land a even number you'll Stun the enemy, when an enemy is stunned there next attack against you will do -2 damage, if you land an odd number, then next attack against you will do a bonus 2 damage against you.");
});
onEvent("button3","mouseover",function(){
  setText("text_area1","With the staff you'll Swing your way to victory. \n\nOn a Swing you deal 1d4 damage (you'll gain XP far more frequent then other weapons) when you're Damaged you'll have 25% - Damage taken to gain an opertunity to attack. On your opertunity you'll be given a chance to Swoop, dealing 1d6 damage and empowering your next attack (adding +4 to the damage). If you dont swoop with your opertunity of attack you'll gain 5% of your missing max health back.");
});
onEvent("button4","mouseover",function(){
  setText("text_area1","With the Arch you'll destory the enemys with your flaming ball of archana. \n\nOn a cast you'll deal 1d8 damage. with the arch you'r Defend stance has be taken up by Obsorb. When you cast Obsorb, you'll enter a standard defense stance- but when the enemy attacks you they'll take 25% of the damage delt (minimum reflection damge is 1). everytime you Obsorb an attack your Cast will evolve, everytime your cast has had an evolution its maximum Damage will go up by 4, When you've had 3 evolutions you can cast demolish which will cast a powerful orb of magic dealing 25-100 damage!");
});



onEvent("button1","click",function(){
  if (start1 === 1) {
    setScreen("screen2");
    createCanvas("tenmoHealth");
setActiveCanvas("tenmoHealth");
    updateTenmoHealth();
    updatePlayerHealth();
    updateXpBar();
    if (weapon === 1) {
      setProperty("image2","icon-color",rgb(156, 146, 128));
      setProperty("image3","icon-color",rgb(156, 146, 128));
      showElement("stabButton");
      showElement("chopButton");
      showElement("defendButton");
      hideElement("lockButton");
      hideElement("lockIcon");
    } else if (weapon === 2) {
      setProperty("image2","icon-color",rgb(78, 44, 20));
      setProperty("image3","icon-color",rgb(78, 44, 20));
      showElement("swingButton");
      showElement("swoopButton");
      showElement("lockButton");
      showElement("lockIcon");
      showElement("defendButton");
    } else {
      setProperty("image2","icon-color",rgb(149, 0, 255));
      setProperty("image3","icon-color",rgb(149, 0, 255));
      showElement("castButton");
      showElement("obsorbButton");
      hideElement("lockButton");
      
    }
  }
});
//note: tommrow finish, being able to kill teemo, attack, polish enchant 





onEvent("stabButton","click",function(){
  playerAttack=randomNumber(1,8+enchantApplied);
  tenmoHealth-=playerAttack;
  updateTenmoHealth();
  tenmoHealthCheck();
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }
});
onEvent("chopButton","click",function(){
  playerAttack=randomNumber(1,16+enchantApplied);
  tenmoHealth= tenmoHealth-playerAttack;
  if(playerAttack % 2 === 0) {

      if (!(tenmoHealth<0)) {
    tenmoAttack(-2);
  }
  } else {
  if (!(tenmoHealth<0)) {
    tenmoAttack(2);
  }
  }
  updateTenmoHealth();
  tenmoHealthCheck();
  updateXpBar();

  
});

onEvent("swingButton","click",function(){
  playerAttack=randomNumber(1,4+enchantApplied);
  tenmoHealth-=playerAttack+t;
    if (k === 4) {
    if (playerHealth>96) {
      playerHealth = 100;
    } else {
      playerHealth= playerHealth+ 5/100;
    }
    k=0;
      showElement("lockButton");
      showElement("lockIcon");
      hideElement("lockLabel");
  }

  updateTenmoHealth();
  tenmoHealthCheck();
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }

});
onEvent("swoopButton","click",function(){
  playerAttack=randomNumber(1,6);
  tenmoHealth=tenmoHealth-playerAttack;
  t=4;
    updateTenmoHealth();
  tenmoHealthCheck();
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }

});
onEvent("obsorbButton","click",function(){
  setProperty("castButton","background-color",rgb(255, 0, 200+obsorbLevel*10));
  if (obsorbLevel === 5){
    showElement("obliterateButton");
  }else if (obsorbLevel>5){
    obsorbLevel=5;
    showElement("obsorbButton");
  }
  else {
      obsorbLevel+=1;
  }
e = 1;
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }
  
});

onEvent("castButton","click",function(){
  playerAttack=randomNumber(1,8+enchantApplied);
  tenmoHealth=tenmoHealth-playerAttack;
  updateTenmoHealth();
  tenmoHealthCheck();
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }

});
onEvent("obliterateButton","click",function(){
  hideElement("obliterateButton");
  playerAttack=randomNumber(25+enchantApplied,100);
  tenmoHealth=tenmoHealth-playerAttack;
  updateTenmoHealth();
  tenmoHealthCheck();
 if (!(tenmoHealth<0)) {
    tenmoAttack(0);
  }

});

onEvent("button7","click",function(){
  setKeyValue(getColumn("scoreBoard", "Name"), getText("text_input1"), function () {
    
  });
});

function playerHealthCheck(){
  if (playerHealth <= 0) {
    setScreen("screen6");
    
  }
}

function tenmoHealthCheck(){
  if (tenmoHealth<=0){
    playerXpGain = randomNumber(25,32) + randomNumber(1,8);
    tenmoLevel=tenmoLevel+1;
      playerHealth=100;
    tenmoHealth=100;
    setText("label24",tenmoLevel);
    if (weapon===2){
      playerXpGain=playerXpGain+playerXpGain/25;
    }
    playerXp = playerXp + playerXpGain;
    showElement("image4");
    setImageURL("image4",tenmoProfile[randomNumber(0,tenmoProfile.length-1)]+".png");
    showElement("labelName");
    setText("labelName",headerName[randomNumber(0,headerName.length-1)]+firstName[randomNumber(0,firstName.length-1)]+tagName[randomNumber(0,tagName.length-1)]);
  
    updateXpBar();
    updatePlayerHealth();
    updateTenmoHealth();
  }
  updateXpBar();
}

function tenmoAttack(n){
  tenmoDamage=randomNumber(1,8+n);
  if (tenmoDamage<1) {
    tenmoDamage=1;
  }
  if (e === 1) {
    tenmoHealth=tenmoHealth/25;
  }
  if (weapon === 2) {
    k = randomNumber(1,100);
    if (k > 0 && k <=25-tenmoDamage) {
      hideElement("lockButton");
      hideElement("lockIcon");
      showElement("lockLabel");
    }
  }
  playerHealth-=tenmoDamage;
  updateXpBar();
  updatePlayerHealth();
  tenmoHealthCheck();
  
}


onEvent("enchantButton1","click",function(){
  setScreen("screen3");
});

onEvent("enchantButtonHover4","mouseover",function(){
if (q===0) {
  

showElement("label0");
showElement("label1");
showElement("label2");
showElement("label3");
showElement("label4");
}
});
onEvent("enchantButtonHover3","mouseover",function(){
  if (q===0) {
showElement("label0");
showElement("label1");
showElement("label2");
showElement("label3");
showElement("label4");
showElement("label5");
showElement("label6");
showElement("label7");
showElement("label8");
}
});
onEvent("enchantButtonHover2","mouseover",function(){
  if (q===0) {
showElement("label0");
showElement("label1");
showElement("label2");
showElement("label3");
showElement("label4");
showElement("label5");
showElement("label6");
showElement("label7");
showElement("label8");
showElement("label9");
showElement("label10");
showElement("label11");
showElement("label12");
}
});
onEvent("enchantButtonHover1","mouseover",function(){
  if (q===0) {
showElement("label0");
showElement("label1");
showElement("label2");
showElement("label3");
showElement("label4");
showElement("label5");
showElement("label6");
showElement("label7");
showElement("label8");
showElement("label9");
showElement("label10");
showElement("label11");
showElement("label12");
showElement("label13");
showElement("label14");
showElement("label15");
}
});
onEvent("enchantButton","click",function(){
q=1;
timedLoop(100, function() {
  hideElement("label"+j);
  j=j+1;
  if (j===16){
    stopTimedLoop();
  }
});
console.log("test");

 onEvent("button5","click",function(){
   setScreen("screen3");
 });
showElement("label16");
if (weapon === 1) {
    enchantApplied = randomNumber(1,4);
    setText("label17","Piercing "+enchantApplied);
    showElement("label17");
  } else if (weapon === 2){
    enchantApplied = randomNumber(1,3);
    setText("label17","Bluntness "+enchantApplied);
    showElement("label17");
  } else if (weapon === 3){
    enchantApplied = randomNumber(1,2);
    setText("label17","Archana "+enchantApplied);
    showElement("label17");
  } else {
    setText("label17","bro what, how. oh btw this is Error#01");
    showElement("label17");
  }
hideElement("enchantButton");
});
onEvent("button6","click",function(){
  setScreen("screen2");
  hideElement("enchantButton1");
  playerXp = 0;
});
onEvent("button5","click",function(){
  setScreen("screen3");
  p++;
  if (p >= 1) {
    
  }
});
