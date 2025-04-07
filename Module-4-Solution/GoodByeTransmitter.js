(function (window) {
  const farewellTransmitter = {
    transmit: function(name) {
      const message = `GoodBye ${name}!`;
      cosmicController.displayMessage(message, name);
    }
  };
  
  window.farewellTransmitter = farewellTransmitter;
})(window);