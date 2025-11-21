document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function createContactForm() {
  const form = document.createElement('form');
  form.className = 'contact-form';
  form.innerHTML = `
    <h3>Contact Me</h3>
    <input type="text" id="name" placeholder="Name" required>
    <input type="email" id="email" placeholder="Email" required>
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit">Send Message</button>
  `;
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    console.log('Form submitted:', { name, email, message });
    alert('Message sent successfully!');
    form.reset();
  });
  
  return form;
}

function createCVButton() {
  const button = document.createElement('a');
  button.href = 'Резюме_Программист_Айнур_Суранчина.pdf';
  button.download = 'Ainur_Suranchina_CV.pdf';
  button.className = 'cv-button';
  button.textContent = 'Download CV';
  
  button.addEventListener('click', e => {
    console.log('CV download initiated');
    fetch(button.href).catch(() => {
      e.preventDefault();
      alert('CV file not available yet');
    });
  });
  
  return button;
}

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.site-footer');
  footer.appendChild(createContactForm());
  
  const aboutContent = document.querySelector('.about-content');
  aboutContent.appendChild(createCVButton());
});