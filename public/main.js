// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Sticky Navigation
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = '4caf50';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
    navbar.style.background = '4caf50';
    navbar.style.boxShadow = 'none';
  }
});



window.onclick = function (event) {
  if (event.target == document.getElementById("contactModal")) {
    document.getElementById("contactModal").style.display = "none";
  }
};

// Fake OTP send logic (for now)


document.getElementById("contact_form").addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "/server_error.html";
  // const formData = {
  //   name_: document.getElementById('name_').value,
  //   phone: document.getElementById('phone').value,
  //   email: document.getElementById('email').value,
  //   company: document.getElementById('company').value,
  //   service: document.getElementById('service').value,
  //   message: document.getElementById('message_user').value
  // };
  // fetch("/database_insert",{
  //   method:'POST',
  //   headers : {
  //     'Content-Type':'application/json'
  //   },
  //   body:JSON.stringify(formData)
  // }).then(res => {return res.json();}).
  // then(data =>{
  //   if (data.report === 1){
  //     alert("Form submitted successfully!");
  //   }
  //   else{
  //     alert('something went wrong!!')
  //   }
  // })
});

// Admin panel


//     function validateLogin() {
//       const inputPassword = document.getElementById('adminPassword').value;
//       if (inputPassword === correctPassword) {
//         document.getElementById('loginContainer').style.display = 'none';
//         document.getElementById('entriesSection').style.display = 'block';
//         loadEntries();
//       } else {
//         alert("Incorrect password!");
//       }
//     }

//     function loadEntries() {
//       fetch('/admin/entries')
//         .then(res => res.json())
//         .then(data => {
//           const tbody = document.querySelector('#entriesTable tbody');
//           tbody.innerHTML = '';
//           data.forEach(entry => {
//             const row = `<tr>
//               <td>${entry.name}</td>
//               <td>${entry.phone}</td>
//               <td>${entry.email}</td>
//               <td>${entry.company}</td>
//               <td>${entry.service}</td>
//               <td>${entry.message}</td>
//               <td>${new Date(entry.submittedAt).toLocaleString()}</td>
//             </tr>`;
//             tbody.innerHTML += row;
//           });
//         });
// }