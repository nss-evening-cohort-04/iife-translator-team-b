var translateBtn = document.getElementById("translateBtn");
var inputGreetingTA = document.getElementById("inputGreeting");
var outputGreetingDiv = document.getElementById("outputGreeting");
var languageSelect = document.getElementById("languages");


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
    }
  });
  Translator.setFinalGreeting(newGreetingArr.join(" "));
  outputGreetingDiv.innerHTML = Translator.getFinalGreeting();
}

translateBtn.addEventListener("click", translate);
