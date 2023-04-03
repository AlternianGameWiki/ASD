// Get the navbar element
var navbar = document.querySelector('nav');

// Store the current scroll position
var prevScrollpos = window.pageYOffset;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    // If the user scrolled up, show the navbar
    navbar.style.opacity = 1;
  } else {
    // If the user scrolled down, hide the navbar
    navbar.style.opacity = 0;
  }

  // Store the new scroll position
  prevScrollpos = currentScrollPos;
});

// Add a hover event listener to the navbar
navbar.addEventListener('mouseenter', function() {
  navbar.style.opacity = 1;
});

navbar.addEventListener('mouseleave', function() {
  // Only hide the navbar if the user has scrolled down
  if (prevScrollpos > 0) {
    navbar.style.opacity = 0;
  }
});


// Get all the character elements
const characters = document.querySelectorAll('.character');

// Add event listener to each character element
characters.forEach(character => {
  character.addEventListener('click', () => {
    // Remove the active class from all character elements
    characters.forEach(character => {
      character.classList.remove('active');
    });
    
    // Add the active class to the clicked character element
    character.classList.add('active');
  });
});
