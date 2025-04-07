// A private bubble for our goodbye logic, neat and contained.
(function () {
  // Our goodbye pal who’ll bid farewell.
  var goodbyePal = {};

  // The farewell phrase, kept snug inside.
  var byeWord = "Goodbye";

  // Teaching our pal to say goodbye, capitalizing the first 'J' in the name.
  goodbyePal.farewell = function (name) {
    // Capitalize the first letter of the name (like "john" -> "John").
    var formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(byeWord + " " + formattedName); // Outputs "Goodbye John".
  };

  // Letting the world use our goodbye pal.
  window.goodbyePal = goodbyePal;
})();