//translator variable that is used in each of the four languages javascript
var Translator = (function(translator) {
//variable portuguese and its words that correspond with one another 
  var german = {
    "merry" : "fröhlich",
    "christmas" : "Weihnachten", 
    "and" : "und", 
    "happy" : "glücklich", 
    "new" : "neu", 
    "year" : "Jahr"
  }

  translator.translatetoGerman = function(key) {
    return words[key];
  };

  return translator;
})(Translator);