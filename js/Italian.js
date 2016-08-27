
var Translator = (function(translator) {

	var words = {
		"merry" : "Allegro",
		"christmas" : "Natale",
		"and" : "e",
		"happy" : "Contento",
		"new" : "Nuovo",
		"year" : "Anno",
		"birthday" : "compleanno"}

 translator.translateToItalian = function(key) {
    if(words[key.toLowerCase()]) {
    	return words[key.toLowerCase()];
    }
    return key;
  };

  return translator;
})(Translator);
  		
	