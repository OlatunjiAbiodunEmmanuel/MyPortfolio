// Get references to the menu button and menu
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

// Add an event listener to the menu button
menuButton.addEventListener('click', () => {
  // Toggle the 'active' class on the menu to show/hide it
  menu.classList.toggle('active');
});

// Add smooth scrolling behavior for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substr(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Close the menu (remove 'active' class)
      menu.classList.remove('active');

      // Scroll to the target section
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});