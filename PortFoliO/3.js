// JavaScript for the Contact Form - Simple Form Validation and Interaction

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! We will respond to your message shortly.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields!');
    }
});
