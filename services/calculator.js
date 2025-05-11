
        function calculatePrice() {
        const siteType = document.getElementById("site-type").value;
        const numPages = document.getElementById("pages").value;
        const customDesign = document.getElementById("custom-design").value;
        let price = 0;
        if (siteType === "Business") 
        {
          price += 1000;
        } 
        else if (siteType === "Store") 
        {
          price += 2000;
        }
        else if (siteType === "Blog")
        {
          price += 1500;
        }

        if (numPages > 1)
        {price += 200* (numPages - 1);}

        if (customDesign === "yes") 
        {price += 1000;};

        document.getElementById("result").innerHTML = 
        "Site Type: " + siteType + "<br>" + "<br>"+
        "Number of Pages: " + numPages + "<br>" + "<br>"+
        "Custom Design: " + customDesign + "<br>" + "<br>"+
        "Estimated Price: ₪" + price;} 

        {document.getElementById("project-form").addEventListener("reset", function(){
        document.getElementById("result").textContent = "";});}
