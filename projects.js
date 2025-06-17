// Navbar fade in/out on scroll

  document.addEventListener("mousemove", function (e) {
    const navbar = document.getElementById("top-navbar");
    if (e.clientY < 60) {
      navbar.style.opacity = "1";
    } else {
      navbar.style.opacity = "0";
    }
  });

  