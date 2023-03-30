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
