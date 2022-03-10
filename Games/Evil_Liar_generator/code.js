//this is a test to my ASCII art abilities
var templateList = [" | |  |  |","~~~~~~~~~~"," /| ^ /|^ ","--{____}--","--[____]--","F=@______"];
var v;


//use n for the which details it should use
function useTemplate(n) {
  for (var i = 0; i < randomNumber(5, 10); i++) {
    setText("text_area1", getText("text_area1") + "_");
    v = i+1;
  }
  setText("text_area1", getText("text_area1")+templateList[(randomNumber(0, templateList.length - 1))]);
  for (i = 0; i < 25 - v; i++) {
    setText("text_area1", getText("text_area1") + "_");
  }
  for (i = 0; i < 3; i++) {
    setText("text_area1", getText("text_area1") + "\n");
    if (n == 1) {
      for (var s = 0; s < randomNumber(5, 72); s++) {
        setText("text_area1", getText("text_area1") + " ");
      }
      setText("text_area1", getText("text_area1") + "~\n");
    } else {
      setText("text_area1", getText("text_area1") + "\n");
    }
  }
}

//if the idea works use some of these to generate tempalates
//the Idea is a liar is generated top to bottom, when generating it will plot the ground,
//then pick a template, and then generate the rest of the floor

onEvent("button1", "click", function() {
  useTemplate();
});
//hitting the orange button triggers advanced generation.
//advanced generation will at a little particle in between floors
onEvent("button2","click",function(){
  useTemplate(1);
});

//when the user hits add, it wont force the next generation to be the text input, but instead add it to the template list
// if the user hits add but there is no input it should blink 

onEvent("button3","click",function(){
  if (getText("text_input1") == "") {
    setProperty("text_input1", "border-color", "yellow");
    setTimeout(function() {
      setProperty("text_input1", "border-color", rgb(77, 87, 95));
    }, 200);
  } else {
    appendItem(templateList,getText("text_input1"));
    setText("text_input1","");
  }
});

