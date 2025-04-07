// Our main code lives in its own little world with an IIFE.
(function () {
  // A fresh list of names to greet or say goodbye to.
  var folks = ["mike", "jane", "bob", "julia", "emma", "jack", "sophie", "liam", "zoe", "jimmy"];

  // Rolling through each name like a friendly host.
  for (var i = 0; i < folks.length; i++) {
    // Snagging the first letter of the name and making it lowercase to check for 'j'.
    var firstChar = folks[i].charAt(0).toLowerCase();

    // If it starts with 'j', we say goodbye; otherwise, hello!
    if (firstChar === "j") {
      goodbyePal.farewell(folks[i]); // Says "Goodbye Jane" or "Goodbye Jack".
    } else {
      helloBuddy.greet(folks[i]); // Says "Hello Mike" or "Hello Bob".
    }
  }
})();