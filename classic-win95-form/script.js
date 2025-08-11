const validator = new JustValidate('#registerForm');

validator
  .addField('#registerForm__name', [
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
  ])
  .addField('#registerForm__email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is not valid',
    },
  ])
  .addField('#registerForm__password', [
    {
      rule: 'required',
      errorMessage: 'Password is required',
    },
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'Password must be at least 6 characters',
    },
  ])
  .addField('#registerForm__Confirmpassword', [
    {
      rule: 'required',
      errorMessage: 'Confirm password is required',
    },
    {
      validator: (value, fields) => {
        return value === fields['#registerForm__password'].elem.value;
      },
      errorMessage: 'Passwords must match',
    },
  ])
  .addField('#registerForm__consent', [
    {
      rule: 'required',
      errorMessage: 'You must agree to the terms',
    },
  ])
  .addRequiredGroup(
    '.communication-checkbox',
    'Please select at least one communication method',
    {
      tooltip: {
        position: 'bottom',
      },
    }
  )
  .addRequiredGroup(
    'input[name="communication_radio_group"]',
    'Please select your preferred contact method',
    {
      tooltip: {
        position: 'bottom',
      },
    }
  )
  .onSuccess((event) => {
    event.preventDefault();
    alert('Validation passed! Form can be submitted.');
  });


const showPassBtn = document.getElementById('registerForm__showPass');
const passwordInput = document.getElementById('registerForm__password');
const confirmPasswordInput = document.getElementById('registerForm__Confirmpassword');

showPassBtn.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  confirmPasswordInput.type = type;

  showPassBtn.textContent = type === 'password' ? 'Show password' : 'Hide password';
});
