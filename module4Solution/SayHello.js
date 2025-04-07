// A private bubble for our hello logic, keeping things tidy with an IIFE.
(function () {
  // Our hello buddy who’ll greet people.
  var helloBuddy = {};

  // The greeting word we’ll use, tucked away privately.
  var helloWord = "Hello";

  // Giving our buddy the ability to say hello to a name.
  helloBuddy.greet = function (name) {
    console.log(helloWord + " " + name); // Outputs "Hello Sam".
  };

  // Sharing our hello buddy with the outside world.
  window.helloBuddy = helloBuddy;
})();