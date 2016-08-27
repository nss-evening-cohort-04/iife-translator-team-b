var Translator = (function(translator) {

  var words = {
    "merry":"Alegre",
    "christmas":"Navidad",
    "and":"y",
    "happy":"Contento",
    "new":"Nuevo",
    "year":"Año"}

  translator.translateToSpanish  = function(key) {
    return words[key.toLowerCase()];
  };

  return translator;
})(Translator);
