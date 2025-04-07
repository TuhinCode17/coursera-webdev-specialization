(function (window) {
  const cosmicController = {
    crew: ["Yaakov", "John", "Jen", "Jason", "Paul", 
           "Frank", "Larry", "Paula", "Laura", "Jim"],
    
    displayMessage: function(message, name) {
      const orbit = document.getElementById('messageDisplay');
      const card = document.createElement('div');
      card.className = `greeting-card ${name.toLowerCase().startsWith('j') ? 'j-name' : 'other-name'}`;
      card.textContent = message;
      orbit.appendChild(card);
      
      // Log to console as well
      console.log(message);
    },
    
    launchGreetings: function() {
      const orbit = document.getElementById('messageDisplay');
      orbit.innerHTML = ''; // Clear previous messages
      
      this.crew.forEach((name, index) => {
        setTimeout(() => {
          const firstLetter = name.charAt(0).toLowerCase();
          if (firstLetter === 'j') {
            farewellTransmitter.transmit(name);
          } else {
            greetGenerator.transmit(name);
          }
        }, index * 300); // Staggered animation
      });
    }
  };

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('startBtn');
    launchBtn.addEventListener('click', () => cosmicController.launchGreetings());
  });

  window.cosmicController = cosmicController;
})(window);