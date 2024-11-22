const loginForm = document.getElementById('form');
const loginBtn = document.getElementById('button');

const box= document.querySelector('.dv2');


loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("hello")

  box.style.display="block"
  const Email = document.getElementById('email').value;
  const Password = document.getElementById('password').value;

  // Validate username and password
  if (Email === '' || Password === '') {
    alert('Please fill in both Email and Password');
    return;
  }

  // Call login API or authenticate user
  console.log(`Logging in with email: ${email} and password: ${password}`);

  // Redirect to dashboard or next page
  window.location.href = 'home.html';
});
// GIT CHECK
