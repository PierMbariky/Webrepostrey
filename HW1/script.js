const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  // Toggle dark mode class on <body>
  body.classList.toggle('dark');
  
  // Update local storage with current dark mode state
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'true');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Check for existing preference in localStorage on page load
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark');
}
document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'navbar.html', true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              navbarContainer.innerHTML = xhr.responseText;
          } else {
              console.error('Failed to load navbar.html');
          }
      }
  };
  xhr.send();
});