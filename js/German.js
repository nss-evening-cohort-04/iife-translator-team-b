//translator variable that is used in each of the four languages javascript
var Translator = (function(translator) {
//variable portuguese and its words that correspond with one another 
  var words = {
    "merry" : "Fröhlich",
    "christmas" : "Weihnachten", 
    "and" : "und", 
    "happy" : "Glücklich", 
    "new" : "Neu", 
    "year" : "Jahr"
  }

  translator.translateToGerman  = function(key) {
    if(words[key.toLowerCase()]){
      return words[key.toLowerCase()];
    }
    return key;
  };

  return translator;
})(Translator);