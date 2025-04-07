// Our app’s playground, wrapped in a private bubble.
(function () {
  // A quirky list of names to play with.
  var crew = ["alice", "jonas", "beth", "jade", "oscar", "jinx", "ella", "max", "ivy", "jolly"];

  // An empty box to store our greetings.
  var greetingBox = [];

  // Step 1: Fill the box with greetings for each name.
  for (var pos = 0; pos < crew.length; pos++) {
    // Peek at the first letter, lowercase it for a fair check.
    var leadLetter = crew[pos][0].toLowerCase();

    // If it’s a 'j', add a goodbye; otherwise, add a hello.
    if (leadLetter === "j") {
      greetingBox.push(farewellFriend.partWith(crew[pos])); // Adds "Goodbye Jonas".
    } else {
      greetingBox.push(happyGreeter.cheerUp(crew[pos])); // Adds "Hello Alice".
    }
  }

  // Step 2: Print the greetings in reverse order for a twist!
  for (var i = greetingBox.length - 1; i >= 0; i--) {
    console.log(greetingBox[i]);
  }
})();