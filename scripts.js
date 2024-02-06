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
      
     
      