
//This function's job is to keep everything inside bottled up, so that it doesnot interfere with other codes. 
(function(window) {
  
 //Here I create a byeSpeaker Object
  var byeSpeaker = {};
  
  //This variable stores the word Good Bye to show door to anyone whose name starts with J or j 
  var speakWord = "Good Bye";
  
 //Here I am adding a function speak to the byeSpeaker object, so that I can print out Good Bye before the names of persons whose name starts with j or J so that they dont come back and interrupt me when I am writing this assignment. 
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };
  
//this makes the byeSpeaker Object available to the rest of my Javascript files by attaching it to the window object.I can't stress enough how important this is, without this my script.js file would be clueless just as I was before joining this course   
  window.byeSpeaker = byeSpeaker;

})(window);