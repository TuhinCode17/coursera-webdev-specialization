// A little private sandbox for our happy greetings.
(function () {
  // Our cheerful greeter object.
  var happyGreeter = {};

  // The joyful word we’ll use.
  var cheer = "Hello";

  // A method to craft a happy greeting.
  happyGreeter.cheerUp = function (name) {
    return cheer + " " + name; // Returns "Hello Sam" instead of printing it directly.
  };

  // Sharing our greeter with the world.
  window.happyGreeter = happyGreeter;
})();