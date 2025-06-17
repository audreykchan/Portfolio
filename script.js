document.addEventListener("DOMContentLoaded", function () {
    const phrases = [
      "efficiency and impact.",
      "hands-on iteration.",
      "community and mentorship."
    ];
  
    let currentPhrase = 0;
    let currentChar = 0;
    const typedText = document.getElementById("typed-text");
    const container = document.getElementById("intro-container");
  
    function typePhrase() {
      if (currentChar <= phrases[currentPhrase].length) {
        typedText.textContent = phrases[currentPhrase].substring(0, currentChar++);
        setTimeout(typePhrase, 70);
      } else {
        setTimeout(() => {
          currentChar = 0;
          currentPhrase = (currentPhrase + 1) % phrases.length;
          typedText.textContent = "";
          typePhrase();
        }, 1500);
      }
    }
  
    setTimeout(() => {
      container.style.opacity = 1;
      typePhrase();
    }, 5000);
  });
  
  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("right-navbar").style.opacity = 30;
    }, 5000); // show after 5 seconds
  });
  