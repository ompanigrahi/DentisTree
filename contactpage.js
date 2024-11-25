document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    console.log("Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Phone:", phone);
    console.log("Message:", message);
  
    alert('Your message has been submitted!');
  });
  