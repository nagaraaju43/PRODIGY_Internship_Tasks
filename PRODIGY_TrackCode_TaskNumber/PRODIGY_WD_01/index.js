window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust the value as per your requirement
      navbar.style.backgroundColor = '#222';
    } else {
      navbar.style.backgroundColor = '#333';
    }
  });
  