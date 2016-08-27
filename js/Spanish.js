var Translator = (function(translator) {

  var words ={
    "merry":"alegre",
    "christmas":"Navidad",
    "and":"y",
    "happy":"contento",
    "new":"nuevo",
    "year":"año"}

  translator.translateToSpanish  = function(key) {
    return words[key];
  };

  return translator;
})(Translator);
