var textspeed = 150;
var context = "begginningScreen"; 
var gameScenario;
var v = 0;
var mapUpdate = 0;
var mapRadioSelection = 4;

//nav colors
var navR = 255;
var navG = 164;
var navB = 0;

setProperty("floor4RadioButton","checked",true);

//Screen 1
onEvent("image1","click",function() {
  setScreen("playScreen");
});
//Screen 2
function typeSentance(sentance,buttonRevealer) {
  
  console.log("test1");
  var n = 0;
  timedLoop(textspeed, function() {
    setText("outputBox",getText("outputBox")+sentance.substring(n,n+1));
    //console.log("y");
    //console.log("n");
    if (n > sentance.length-1) {
      
      
      stopTimedLoop();
    }
    // you might have to move line 23 to line 18 :/
    n++;
    
  });
  switch (buttonRevealer){
    case 1/4:
      showElement("optionButton1/4");
      showElement("optionButton2/4");
      showElement("optionButton3/4");
      showElement("optionButton4/4");
      break;
    case 1/2:
      showElement("optionButton1/2");
      showElement("optionButton2/2");
      break;
  }
}
onEvent("startButton","click",function(){
  typeSentance("You wake up in a ",1/4);
  hideElement("startButton");
});
function wipeScreen(){
  hideElement("optionButton1/2");
  hideElement("optionButton2/2");
  hideElement("optionButton1/4");
  hideElement("optionButton2/4");
  hideElement("optionButton3/4");
  hideElement("optionButton4/4");
}
function alertNotice(message){
  hideElement("alertLabel");
  setText("alertLabel",message);
  showElement("alertLabel");
  setTimeout(function(){
    hideElement("alertLabel");
  },3000);
  
}
//task stuff
onEvent("taskList","click",function(){
  setScreen("TaskScreen");
  hideElement("taskIndicator");
});
onEvent("notepad","click",function(){
  v++;
  if (v==1) {
    setText("notepad","");
  }
});
onEvent("taskScreenExit","click",function(){
  setScreen("playScreen");
});
//theres 3 task indicators, Task indicator which just highlights the task book
//when its first unlocked, Main task indicator, this shows when a new task
//has been added, and finally updated task indicator, which just shows when 
//a task or new useful information has been added.

//top left button 1/4
onEvent("optionButton1/4","click",function(){
  switch (context) {
    
    //space mission
    case "begginningScreen":
      console.log("test1");
      wipeScreen();
      typeSentance("Space Station, ",1/2);
      context = "space_station";
      break;
  }
});
//left button 1/2
onEvent("optionButton1/2","click",function(){
  switch (context) {
    
    //space mission
    case "space_station":
      gameScenario == "space_station_abondendScenario";
      showElement("taskList");
      showElement("taskIndicator");
      alertNotice("Task List added");
      break;
  }
});
  
//right button 2/2
onEvent("optionButton2/2","click",function(){
  switch (context){
    
    //space mision
    case "space_station":
      gameScenario == "space_station_thrivingScenario";
      showElement("taskList");
      showElement("taskIndicator");
      alertNotice("Task List added");
      
      break;
  }
});
  
//map screen
onEvent("mapScreenBackButton","click",function(){
  setScreen("playScreen");
});
onEvent("mapButton","click",function(){
  setScreen("mapScreen");
});
onEvent("mapButtonUpdateNotice","click",function(){
  setScreen("mapScreen");
  mapUpdate = 0;
  hideElement("mapButtonUpdateNotice");
});


//pain
onEvent("floor1RadioButton","click",function(){
  mapRadioSelection = 1;
  //insert the map load for floor 1 here
});
onEvent("floor1Label","click",function(){
  setProperty("floor1RadioButton","checked",true);
  mapRadioSelection = 1;
  //inser the map load for floor 1 here
});
onEvent("floor2RadioButton","click",function(){
  mapRadioSelection = 2;
});
onEvent("floor2Label","click",function(){
  setProperty("floor2RadioButton","checked",true);
  mapRadioSelection = 2;
});
onEvent("floor3RadioButton","click",function(){
  mapRadioSelection = 3;
});
onEvent("floor3Label","click",function(){
  setProperty("floor3RadioButton","checked",true);
  mapRadioSelection = 3;
});
onEvent("floor4RadioButton","click",function(){
  mapRadioSelection = 4;
});
onEvent("floor4Label","click",function(){
  setProperty("floor4RadioButton","checked",true);
  mapRadioSelection = 4;
});
onEvent("floor5RadioButton","click",function(){
  mapRadioSelection = 5;
});
onEvent("floor5Label","click",function(){
  setProperty("floor5RadioButton","checked",true);
  mapRadioSelection = 5;
});
onEvent("floor6RadioButton","click",function(){
  mapRadioSelection = 6;
});
onEvent("floor6Label","click",function(){
  setProperty("floor6RadioButton","checked",true);
  mapRadioSelection = 6;
});
//less pain yet still painfull
onEvent("floorarrowleft","click",function(){
  mapRadioSelection = mapRadioSelection - 1;
  if (mapRadioSelection < 1) {
    mapRadioSelection = 1;
  }
  setProperty("floor"+mapRadioSelection+"RadioButton","checked",true);
});
onEvent("floorarrowright","click",function(){
  mapRadioSelection = mapRadioSelection + 1;
  if (mapRadioSelection > 6) {
    mapRadioSelection = 6;
  }
  setProperty("floor"+mapRadioSelection+"RadioButton","checked",true);
});


onEvent("mapNavigatorDown","mouseover",function(){
  setProperty("mapNavigatorDown","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorDown","mouseout",function(){
  setProperty("mapNavigatorDown","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorUp","mouseover",function(){
  setProperty("mapNavigatorUp","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorUp","mouseout",function(){
  setProperty("mapNavigatorUp","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorLeft","mouseover",function(){
  setProperty("mapNavigatorLeft","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorLeft","mouseout",function(){
  setProperty("mapNavigatorLeft","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorRight","mouseover",function(){
  setProperty("mapNavigatorRight","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorRight","mouseout",function(){
  setProperty("mapNavigatorRight","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorUp+Left","mouseover",function(){
  setProperty("mapNavigatorUp+Left","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorUp+Left","mouseout",function(){
  setProperty("mapNavigatorUp+Left","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorUp+Right","mouseover",function(){
  setProperty("mapNavigatorUp+Right","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorUp+Right","mouseout",function(){
  setProperty("mapNavigatorUp+Right","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorDown+Left","mouseover",function(){
  setProperty("mapNavigatorDown+Left","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorDown+Left","mouseout",function(){
  setProperty("mapNavigatorDown+Left","border-color",rgb(navR, navG, navB,0));
});

onEvent("mapNavigatorDown+Right","mouseover",function(){
  setProperty("mapNavigatorDown+Right","border-color",rgb(navR, navG, navB));
});
onEvent("mapNavigatorDown+Right","mouseout",function(){
  setProperty("mapNavigatorDown+Right","border-color",rgb(navR, navG, navB,0));
});

//option Screen
onEvent("optionButton","click",function(){
  setScreen("optionScreen");
});
onEvent("dropdown1","input",function(){
  setProperty("textAreaPreview","font-family",getText("dropdown1"));
  setProperty("outputBox","font-family",getText("dropdown1"));
});
onEvent("textColorSliderRed", "input", function( ) {
  setProperty("textAreaPreview", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
  setProperty("outputBox", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));

});
onEvent("textColorSliderGreen","input",function(){
  setProperty("textAreaPreview", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
  setProperty("outputBox", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
});
onEvent("textColorSliderBlue","input",function(){
  setProperty("textAreaPreview", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
  setProperty("outputBox", "text-color", rgb(getProperty("textColorSliderRed", "value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
});

onEvent("bgColorSliderRed","input",function(){
  setProperty("textAreaPreview", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
  setProperty("outputBox", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
});
onEvent("bgColorSliderGreen","input",function(){
  setProperty("textAreaPreview", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
  setProperty("outputBox", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
});
onEvent("bgColorSliderBlue","input",function(){
  setProperty("textAreaPreview", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
  setProperty("outputBox", "background-color", rgb(getProperty("bgColorSliderRed", "value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
});
onEvent("navigationColorRed","input",function(){
  navR = getProperty("navigationColorRed","value");
  navG = getProperty("navigationColorGreen","value");
  navB = getProperty("navigationColorBlue","value");
  setProperty("navigationColorPreview","border-color",rgb(navR,navG,navB));
});
onEvent("navigationColorGreen","input",function(){
  navR = getProperty("navigationColorRed","value");
  navG = getProperty("navigationColorGreen","value");
  navB = getProperty("navigationColorBlue","value");
  setProperty("navigationColorPreview","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorDown","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorDown+Left","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorDown+Right","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorLeft","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorRight","border-color",rgb(navR,navG,navB));
  setProperty("mapNavigatorUp+Left","border-color",rgb(navR,navG,navB));  
  setProperty("mapNavigatorUp+Right","border-color",rgb(navR,navG,navB));
});

onEvent("navigationColorBlue","input",function(){
  navR = getProperty("navigationColorRed","value");
  navG = getProperty("navigationColorGreen","value");
  navB = getProperty("navigationColorBlue","value");
  setProperty("navigationColorPreview","border-color",rgb(navR,navG,getProperty("navigationColorBlue", "value")));
});
onEvent("backtoplayscreen","click",function(){
  setScreen("playScreen");
});

onEvent("resetButton1","click",function(){
  setProperty("textColorSliderRed","value",77);
  setProperty("textColorSliderGreen","value",87);
  setProperty("textColorSliderBlue","value",95);
  setProperty("textAreaPreview","text-color",rgb(getProperty("textColorSliderRed","value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
  setProperty("outputBox","text-color",rgb(getProperty("textColorSliderRed","value"),getProperty("textColorSliderGreen","value"),getProperty("textColorSliderBlue","value")));
  setProperty("navigationColorRed","value",255);
  setProperty("navigationColorGreen","value",164);
  setProperty("navigationColorBlue","value",0);
  navR = getProperty("navigationColorRed","value");
  navG = getProperty("navigationColorGreen","value");
  navB = getProperty("navigationColorBlue","value");
});
onEvent("resetButton2","click",function(){
  setProperty("bgColorSliderRed","value",242);
  setProperty("bgColorSliderGreen","value",242);
  setProperty("bgColorSliderBlue","value",242);
  setProperty("textAreaPreview","background-color",rgb(getProperty("bgColorSliderRed","value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
  setProperty("outputBox","background-color",rgb(getProperty("bgColorSliderRed","value"),getProperty("bgColorSliderGreen","value"),getProperty("bgColorSliderBlue","value")));
  
});



onEvent("textSpeedSlider","input",function(){
  textspeed = 1000 - 10 * getProperty("textSpeedSlider","value");
});


