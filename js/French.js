var Translator = (function(translator) {

  var words ={
    "merry":"Joyeux",
    "christmas":"Noel",
    "and":"et",
    "happy":"Bon",
    "new":"Nouveau",
    "year":"Annee"}

  translator.translateToFrench  = function(key) {
    return words[key.toLowerCase()];
  };

  return translator;
})(Translator);