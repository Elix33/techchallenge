const message="Thank you! We will respond you as soon as possible!"

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert(message);
});

