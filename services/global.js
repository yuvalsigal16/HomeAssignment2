
document.querySelector("#hamburger").onclick = () => 
   document.querySelector(".navbar").classList.toggle("open");

    
   const themeToggle = document.querySelector(".theme-toggle");
   const body = document.body;

   themeToggle.onclick = function() {
      body.classList.toggle("dark-mode");
   
      if (body.classList.contains("dark-mode")) {
         localStorage.setItem("theme", "dark");
      } else {
         localStorage.setItem("theme", "light");
      }
   };

 