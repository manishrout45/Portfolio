//navmenu
const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');
    const closeMenu = document.getElementById('close-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileNav.classList.remove('-translate-y-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileNav.classList.add('-translate-y-full');
    });




// Add scroll animations
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
});






//contact form
(function(){
    emailjs.init("fEU-TIIKhblkEzyRu"); // Replace with your EmailJS Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_n8m2tf2", "template_mg8zy2e", templateParams)
    .then(function(response) {
        document.getElementById("status-message").innerHTML = "Message sent successfully!";
        document.getElementById("status-message").classList.add("text-green-400");
        document.getElementById("contact-form").reset();
    }, function(error) {
        document.getElementById("status-message").innerHTML = "Failed to send message. Try again later.";
        document.getElementById("status-message").classList.add("text-red-400");
    });
});





function openPopup(id) {
    document.getElementById(id).classList.remove('hidden');
}
function closePopup(id) {
    document.getElementById(id).classList.add('hidden');
}