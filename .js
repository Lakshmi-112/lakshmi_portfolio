// Typing effect using Typed.js
const typed = new Typed(".text", {
  strings: ["Frontend Developer", "UI/UX Designer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Scroll to top button
let topBtn = document.querySelector(".top");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

// Google Sheet Form Submission
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'; // Replace with your actual script URL
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => { msg.innerHTML = ""; }, 3000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "Message failed to send!";
    });
});

// Animate circular progress bars
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll("circle.progress-bar");
  const offsets = [416, 442, 468, 364]; // Based on percentages 80%, 75%, 70%, 90%
  circles.forEach((circle, i) => {
    circle.style.strokeDashoffset = offsets[i];
  });
});
