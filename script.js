
//This function loops through a list of names and prints Hello or Goodbye ensuring that if the names starts with J or j it will print GoodBye else it will print Hello
(function () {
//Names of People to greet
var names = ["Tuhin", "Jayanta", "Subham", "Jagjeet", "Surjeet", "Jitendra", "Anjan", "Jaspreet", "Kanchan", "Jasvindar"];
//Loop that runs through the list of names and checks for the first letter
for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0).toLowerCase();

  // if the name starts with j or J print GoodBye else print Hello in the console. This conditional is bascially like a bouncer waiting outside the night club to toss those whose name starts with j or J and welcome those whose name is otherwise. Oh my God I feel bad for all you folks whose name starts with J or j. Poor souls
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
