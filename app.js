(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
});  
     document.querySelector(".submit-btn a").addEventListener("click", function (event) {
        
        event.preventDefault();

        
       var nameInput = document.querySelector('input[placeholder="YOUR NAME"]');
        var emailInput = document.querySelector('input[placeholder="YOUR EMAIL"]');
        var subjectInput = document.querySelector('input[placeholder="ENTER SUBJECT"]');
        var messageInput = document.querySelector('textarea[placeholder="Message Here..."]');

        if (nameInput.value === "" || emailInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
            alert("PLEASE FILL ALL THE FIELDS");
        } else {

            
            var submiturl = "DONOTopen.html";
            window.open(submiturl, "_blank");
        }
    });

})();
