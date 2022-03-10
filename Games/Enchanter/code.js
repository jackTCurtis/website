var i;
var test
//----SCREEN 1------
onEvent("button1","click",function(){setScreen("screen2");});
//----SCREEN 2------

//left diamond
onEvent("image9","mouseover",function(){showElement("image10");});
onEvent("image10","mouseout",function(){hideElement("image10");});

//middle diamond
onEvent("image5","mouseover",function(){showElement("image8");});
onEvent("image8","mouseout",function(){hideElement("image8");});
onEvent("image5","click",function(){setScreen("screen3");});
onEvent("image8","click",function(){setScreen("screen3");});
//right Diamond
onEvent("image4","mouseover",function(){showElement("image6");});
onEvent("image6","mouseout",function(){hideElement("image6");});

//Staff
onEvent("image2","mouseover",function(){
for (i = 0; i===25; i++) {
  test += 1;
}
});
//i <= getProperty("image2", "width") && getProperty("image2", "height");

//------SCREEN 3------
//------SCREEN 4------
//------SCREEN 5------

