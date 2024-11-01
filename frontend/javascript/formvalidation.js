function validateAndProceed() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('countrySelect').value;
  
    let isValid = true;
  
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-input').forEach(el => el.classList.remove('error'));
  
    // Validate each field
    if (!firstName) {
      document.getElementById('firstNameError').textContent = 'First name is required';
      document.getElementById('firstName').classList.add('error');
      isValid = false;
    }
  
    if (!lastName) {
      document.getElementById('lastNameError').textContent = 'Last name is required';
      document.getElementById('lastName').classList.add('error');
      isValid = false;
    }
  
    if (!email) {
      document.getElementById('emailError').textContent = 'Email is required';
      document.getElementById('email').classList.add('error');
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      document.getElementById('email').classList.add('error');
      isValid = false;
    }
  
    if (!phone || !country) {
      document.getElementById('phoneError').textContent = 'Phone number and country code are required';
      document.getElementById('phone').classList.add('error');
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById('initial-form').classList.add('hidden');
      document.getElementById('market-selection').classList.remove('hidden');
    }
  }
  
  function validateMarkets() {
    const selectedMarkets = document.querySelectorAll('input[name="market"]:checked');
    
    if (selectedMarkets.length === 0) {
      document.getElementById('marketError').textContent = 'Please select at least one market';
      return;
    }
  
    document.getElementById('market-selection').classList.add('hidden');
    document.getElementById('duration-selection').classList.remove('hidden');
  }
  
  function submitFinalForm() {
    const duration = document.querySelector('input[name="duration"]:checked');
    
    if (!duration) {
      document.getElementById('durationError').textContent = 'Please select a duration';
      return;
    }
  
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('countrySelect').value + document.getElementById('phone').value,
      markets: Array.from(document.querySelectorAll('input[name="market"]:checked')).map(cb => cb.value),
      duration: duration.value
    };
  
    console.log('Form submission data:', formData);
    // Add your API call here
    alert('Form submitted successfully!');
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  