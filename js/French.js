var Translator = (function(translator) {

  var words ={
    "merry":"joyeux",
    "christmas":"noel",
    "and":"et",
    "happy":"bon",
    "new":"nouveau",
    "year":"annee"}

  translator.translateToFrench  = function(key) {
    return words[key];
  };

  return translator;
})(Translator);