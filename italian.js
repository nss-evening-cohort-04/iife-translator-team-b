
var Translator = (function(translator) {

	var words = {
		"merry" : "Allegro",
		"christmas" : "Natale",
		"and" : "e",
		"happy" : "Contento",
		"new" : "Nuovo",
		"year" : "Anno" }

 translator.translateToItalian = function(key) {
    return words[key.toLowerCase()];
  };

  return translator;
})(Translator);
  		
	