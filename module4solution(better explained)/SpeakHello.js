// We’re wrapping everything in an IIFE (Immediately Invoked Function Expression). 
// It’s like putting our code in a bubble so it doesn’t mess with other code outside!
(function () {

  // Creating an object called helloSpeaker. Think of it as a little helper who knows how to say "Hello".
  var helloSpeaker = {};

  // This is the word we’ll use when greeting people. We don’t stick it directly on helloSpeaker 
  // because we want it to stay private inside this bubble.
  var speakWord = "Hello";

  // Attaching a speak function to our helloSpeaker object. 
  // This is like teaching our helper how to talk! It takes a name and says "Hello" followed by that name.
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name); // Prints something like "Hello Yaakov" to the browser console.
  };

  // Making our helloSpeaker helper available to the rest of the world (outside the bubble).
  // We’re attaching it to the global "window" object so other files can use it.
  window.helloSpeaker = helloSpeaker;

})(); // The () at the end means "run this bubble right away!"