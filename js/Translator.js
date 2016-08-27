var Translator = (function() {

  var greeting = "";

  return {
    setFinalGreeting: function (newGreeting) {
      greeting = newGreeting;
    },
    getFinalGreeting: function () {
      return greeting;
    }
  };
})();
