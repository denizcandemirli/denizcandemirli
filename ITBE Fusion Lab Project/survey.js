document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get form values
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var dob = document.getElementById('dob').value.trim();
    var address = document.getElementById('address').value.trim();
  
    // Client-side validation
    if (firstName === '' || lastName === '' || dob === '' || address === '' || question1 === '' || question2 === '' || usageFrequency === '' || residencyDuration === '' || question5 === '' || question6 === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    // Validate date of birth
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var minDate = new Date(currentDate.getFullYear() - 100, currentDate.getMonth(), currentDate.getDate()); // Minimum age allowed (100 years old)
    if (dobDate >= currentDate || dobDate <= minDate) {
      alert('Please enter a valid date of birth.');
      return;
    }
  
    // Prepare data to send to the server (if needed)
    var formData = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      address: address,
      question1: question1,
      question2: question2,
      question3: question3,
      question4: question4,
      question5: question5,
      question6: question6,
    };
  
    // Example: sending data to the server using fetch API
    // Replace '/save-entry' with your actual server endpoint
    fetch('http://localhost:5500', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        // Entry saved successfully
        alert('Survey submitted successfully!');
        // You can redirect the user or do something else here
      } else {
        // Failed to save entry
        alert('Failed to submit survey. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
  