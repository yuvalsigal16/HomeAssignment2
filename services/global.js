
document.querySelector("#hamburger").onclick = () => 
document.querySelector(".navbar").classList.toggle("open");

var themeIcons = document.querySelectorAll(".theme-toggle img");
   var body = document.body;

        if (localStorage.getItem("theme") === "dark") {
            body.className = "dark-mode";
        }

        for (var i = 0; i < themeIcons.length; i++) {
            themeIcons[i].addEventListener("click", function () {
                if (body.className === "dark-mode") {
                    body.className = "";
                    localStorage.setItem("theme", "light");
                } else {
                    body.className = "dark-mode";
                    localStorage.setItem("theme", "dark");
                }
            });
        }