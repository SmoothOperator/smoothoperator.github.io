document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    service_id: 'YOUR_EMAILJS_SERVICE_ID',
    template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
    user_id: 'YOUR_EMAILJS_USER_ID',
    template_params: {
      'name': name,
      'email': email,
      'message': message
    }
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message.');
    }
  })
  .catch(error => console.error('Error:', error));
});
