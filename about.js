
document.addEventListener("mousemove", function (e) {
    const navbar = document.getElementById("top-navbar");
    if (e.clientY < 60) {
      navbar.style.opacity = "1";
    } else {
      navbar.style.opacity = "0";
    }
  });

  const bubble = document.getElementById('bubble');
  const cardStack = document.getElementById('cardStack');

  bubble.addEventListener('click', () => {
    bubble.style.display = 'none';
    cardStack.classList.add('show');
  });




