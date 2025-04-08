// Wrapping everything in an IIFE again. It’s our little privacy bubble to keep things neat and tidy.
(function () {

  // Creating a byeSpeaker object. This is our helper who’s great at saying "Good Bye".
  var byeSpeaker = {};

  // The special word for goodbyes. It stays private inside this bubble, not glued to byeSpeaker.
  var speakWord = "Good Bye";

  // Teaching our byeSpeaker helper how to speak. It takes a name and says "Good Bye" followed by that name.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name); // Prints something like "Good Bye John" to the console.
  };

  // Sharing our byeSpeaker helper with the world by attaching it to the global "window" object.
  window.byeSpeaker = byeSpeaker;

})(); // The () means "start this bubble right now!"