
var Translator = (function(translator) {

	var words = {
		"Merry" : "Allegro",
		"Christmas" : "Natale",
		"And" : "e",
		"Happy" : "Contento",
		"New" : "Nuovo",
		"Year" : "Anno" }

 translator.translateToItalian = function(key) {
    return words[key];
  };

  return translator;
})(Translator);
  		
	