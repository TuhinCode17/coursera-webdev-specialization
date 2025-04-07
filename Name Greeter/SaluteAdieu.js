// A hidden nook for our farewells, safe in an IIFE.
(function () {
  // Our adieu artist, master of goodbyes.
  var adieuArtist = {};

  // The word for parting ways.
  var adieu = "Goodbye";

  // A method to craft a fancy farewell.
  adieuArtist.depart = function (person) {
    // Capitalizing the first letter (e.g., "jazz" -> "Jazz").
    var grandName = person[0].toUpperCase() + person.slice(1);
    return `${adieu} ${grandName}`; // Builds "Goodbye Jazz".
  };

  // Sharing our artist with the world.
  window.adieuArtist = adieuArtist;
})();