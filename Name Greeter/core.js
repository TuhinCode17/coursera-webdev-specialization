// Our epic saluting machine, locked in its own IIFE universe.
(function () {
  // A wild crew of names to salute, shuffled for fun.
  var squad = ["nova", "jazz", "quinn", "jolt", "ruby", "jade", "sky", "zane", "iris", "jester"];

  // A quirky ledger to track our salutes.
  var saluteLedger = {
    greetings: [],
    add: function (message) {
      this.greetings.push(message); // Stores a greeting like "Hello Nova".
    },
    reveal: function () {
      // Logs all greetings with a tiny delay for drama.
      this.greetings.forEach((msg, idx) => {
        setTimeout(() => console.log(msg), idx * 100); // 100ms delay per message.
      });
    }
  };

  // Our salute generator, the heart of the operation.
  function generateSalute(person) {
    // Check the first letter, ignoring case.
    var kickoff = person[0].toLowerCase();
    
    // Pick the right vibe: goodbye for 'j', hello for others.
    if (kickoff === "j") {
      return adieuArtist.depart(person); // Gets "Goodbye Jazz".
    } else {
      return joySaluter.bless(person); // Gets "Hello Nova".
    }
  }

  // Let’s roll! Process each name through our generator.
  squad.forEach(function (member) {
    var salute = generateSalute(member);
    saluteLedger.add(salute);
  });

  // Showtime: reveal the salutes with a flourish!
  saluteLedger.reveal();
})();