document.addEventListener("DOMContentLoaded", function() {
        // Smooth scroll for navigation links
        const navLinks = document.querySelectorAll("nav a");
      
        navLinks.forEach(link => {
          link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
          });
        });
      });
      
     // Update the JavaScript code to navigate to the new page
document.querySelector('a[href="/form.html"]').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  window.location.href = '/form.html'; // Navigate to the new page
});

// Blog script
document.addEventListener('DOMContentLoaded', function() {
  const blogCards = document.querySelectorAll('.blog-card');
  
  blogCards.forEach(card => {
    card.addEventListener('click', function() {
      const postId = this.getAttribute('data-post');
      const post = document.getElementById(postId);
      
      // Toggle active class to expand/collapse post
      post.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const blogCards = document.querySelectorAll('.blog-card');
  const blogPost = document.querySelectorAll('.blog-post');
  
  // Function to close blog post content pop-up
  function closeBlogPost() {
    blogPost.forEach(post => {
      post.classList.remove('active');
    });
  }
  
  // Event listener to close blog post content when clicking outside the pop-up
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.blog-post') && !event.target.closest('.blog-card')) {
      closeBlogPost();
    }
  });

  // Event listener to close blog post content when "Escape" key is pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      closeBlogPost();
    }
  });
  
  // Event listener for each blog card to toggle blog post content pop-up
  blogCards.forEach(card => {
    card.addEventListener('click', function() {
      const postId = this.getAttribute('data-post');
      const post = document.getElementById(postId);
      
      // Close any open blog post content pop-ups
      closeBlogPost();
      
      // Toggle active class to expand/collapse post
      post.classList.toggle('active');
    });
  });
});
// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

// Dark/Light Mode toggle
function toggleMode() {
  var stylesheet = document.getElementById('stylesheet');
  if (stylesheet.getAttribute('href') == 'styles-light.css') {
      stylesheet.setAttribute('href', 'styles-dark.css'); // Switch to dark mode stylesheet
  } else {
      stylesheet.setAttribute('href', 'styles-light.css'); // Switch to light mode stylesheet
  }
}