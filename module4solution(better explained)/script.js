// Wrapping our code in an IIFE bubble so it’s safe from other code messing with it.
(function () {

  // Here’s our list of names we’ll loop through. It’s like a guest list for our greeting party!
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Let’s loop through each name in the list. "for" is like a little train that stops at every name.
  for (var i = 0; i < names.length; i++) {

    // Grabbing the first letter of the current name (like "J" from "John") and making it lowercase 
    // so we can easily check if it’s a "j". charAt(0) means "give me the first character".
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Checking if the first letter is "j". If it is, we say goodbye; if not, we say hello!
    if (firstLetter === 'j') {
      // Calling our byeSpeaker helper from SpeakGoodBye.js to say "Good Bye" to this name.
      byeSpeaker.speak(names[i]);
    } else {
      // Calling our helloSpeaker helper from SpeakHello.js to say "Hello" to this name.
      helloSpeaker.speak(names[i]);
    }
  }

})(); // Run this bubble right away with the ()!