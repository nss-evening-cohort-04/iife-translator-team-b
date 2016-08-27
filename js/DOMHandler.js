var translateBtn = document.getElementById("translateBtn");
var inputGreetingTA = document.getElementById("inputGreeting");
var outputGreetingDiv = document.getElementById("outputGreeting");
var languageSelect = document.getElementById("languages");
var clearButton = document.getElementById("clearBtn");

function validation() {
  if(inputGreetingTA.value !== ""){
    translate();
  } else {
    alert("Please enter a greeting.");
  }
}

function translate() {
  var language = languageSelect.value;
  var greeting = inputGreetingTA.value.trim();
  var greetingArr = greeting.split(" ");
  console.log("greetingArr", greetingArr);
  var newGreetingArr = greetingArr.map(function (key) {
    switch(language){
      case "spanish":
        return Translator.translateToSpanish(key);
        break;
      case "french":
        return Translator.translateToFrench(key);
        break;
      case "german":
        return Translator.translateToGerman(key);
        break;
      case "italian":
        return Translator.translateToItalian(key);
        break;
    }
  });

  Translator.setFinalGreeting(newGreetingArr.join(" "));
  outputGreetingDiv.innerHTML = Translator.getFinalGreeting();
  playBtn.classList.remove('hidden');
}

function speak() {
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  msg.text = Translator.getFinalGreeting();
  speechSynthesis.speak(msg);
}

translateBtn.addEventListener("click", validation);
playBtn.addEventListener("click", speak)
clearBtn.addEventListener("click", function(){
  document.getElementById("translateForm").reset();
  outputGreetingDiv.innerHTML = "";
  playBtn.classList.add('hidden');
});

inputGreetingTA.addEventListener("keypress", function(e){
  if (e && e.keyCode === 13){
    validation();
  }
});
