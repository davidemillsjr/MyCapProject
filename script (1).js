
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from being submitted immediately

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const people = document.getElementById('people').value;

  // Check if all fields are filled
  if (name && email && date && time && people) {
    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';
    document.getElementById('bookingForm').reset(); // Clear the form fields
  } else {
    alert('Please fill out all fields!');
  }
});
