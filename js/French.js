//translator variable that is used in each of the four languages javascript
var Translator = (function(translator) {
//variable portuguese and its words that correspond with one another 
  var words = {
    "merry" : "Joyeux",
    "christmas" : "Noel", 
    "and" : "et", 
    "happy" : "Bon", 
    "new" : "Nouveau", 
    "year" : "Annee"
  }

  translator.translateToFrench  = function(key) {
    if(words[key.toLowerCase()]){
      return words[key.toLowerCase()];
    }
    return key;
  };

  return translator;
})(Translator);