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

      