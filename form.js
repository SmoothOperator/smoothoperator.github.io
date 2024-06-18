document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const data = {
    service_id: 'service_b2wr6md',
    template_id: 'template_7huea39',
    user_id: 'user_yEbR9FMh83PHJEnkP',
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
      return response.text().then(text => { throw new Error(text); });
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to send message: ' + error.message);
  });
});
