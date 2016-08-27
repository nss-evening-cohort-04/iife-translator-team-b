//translator variable that is used in each of the four languages javascript
var Translator = (function(translator) {
//variable portuguese and its words that correspond with one another 
  var french = {
    "merry" : "Joyeux",
    "christmas" : "Noel", 
    "and" : "et", 
    "happy" : "Bon", 
    "new" : "Nouveau", 
    "year" : "Annee"
  }

  translator.translatetoFrench = function(key) {
    return words[key.toLowerCase()];
  };

  return translator;
})(Translator);