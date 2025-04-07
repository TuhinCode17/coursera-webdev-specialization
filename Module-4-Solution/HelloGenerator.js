(function (window) {
  const greetGenerator = {
    transmit: function(name) {
      const message = `Hello ${name}!`;
      cosmicController.displayMessage(message, name);
    }
  };
  
  window.greetGenerator = greetGenerator;
})(window);