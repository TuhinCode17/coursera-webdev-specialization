// A secret clubhouse for our joyful salutes, wrapped in an IIFE.
(function () {
  // Our happy saluter, ready to spread cheer.
  var joySaluter = {};

  // The magic word for greetings.
  var salute = "Hello";

  // A method to sprinkle joy on a name.
  joySaluter.bless = function (person) {
    return `${salute} ${person}`; // Builds "Hello Luna" for later use.
  };

  // Sending our saluter out into the wild.
  window.joySaluter = joySaluter;
})();