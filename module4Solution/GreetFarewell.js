// A cozy corner for our farewell greetings.
(function () {
  // Our farewell friend object.
  var farewellFriend = {};

  // The parting phrase we’ll use.
  var parting = "Goodbye";

  // A method to say farewell with style.
  farewellFriend.partWith = function (name) {
    // Making sure the first letter is capitalized (e.g., "jim" -> "Jim").
    var styledName = name[0].toUpperCase() + name.slice(1);
    return parting + " " + styledName; // Returns "Goodbye Jim".
  };

  // Letting the world say goodbye with us.
  window.farewellFriend = farewellFriend;
})();