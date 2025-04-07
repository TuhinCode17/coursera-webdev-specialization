
//This is a function experssion whose job is to wrap the code below and keep it in isolation
//Think of this as a strict Quarantine Officer who wont let the variables inside to sneak out and infect others with their flu ( that can result in a lughter attack)
(function(window) {
  
 // This variable helloSpeaker is the friendly face of this program, his job is to greet those whose name doesn't start with j or J. Kind of like a car salesman with a friendly smile
 //Right now it cant Greet all you folks whose name doesn't start with j or J but we will soon add features to it and enable it to do just that. So hold tight
  var helloSpeaker = {};
  
  //This variable stores the word Hello to use it when greeting people
  var speakWord = "Hello";
  
 //This adds a function named speak to my helloSpeaker object that takes a name and prints "Hello + whatever 'name' that doesn't start with j or J" in the console.
 //We are basically teaching our greeter aka our car salesman ie variable helloSpeaker how to greet people. Got it ? 
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  
 //Attaches helloSpeaker object to the global window object so that other javascript files can use it, in our case files like script.js
 // Its like telling the world if you need someone to greet you just call helloSpeaker who is right now sitting on the window. 
  window.helloSpeaker = helloSpeaker;

})(window);