// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const terminal = document.getElementById('terminal');
  const services = [
      "Cybersecurity Assessment",
      "Custom Software Development",
      "Incident Response",
      "Cloud Security Solutions",
      "Data Protection and Privacy",
      "IT Consultation and Training"
  ];

  navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const target = this.getAttribute('data-target');

          sections.forEach(section => {
              section.classList.remove('active');
          });

          const section = document.getElementById(target);
          if (section) {
              decryptEffect(() => {
                  section.classList.add('active');
              });
          }

          if (target === 'services') {
              terminal.innerHTML = '';
              services.forEach((service, index) => {
                  setTimeout(() => {
                      terminal.innerHTML += `${service}<br>`;
                  }, 500 * index);
              });
          }
      });
  });

  const decryptEffect = (callback) => {
      const body = document.body;
      let opacity = 1;

      const interval = setInterval(() => {
          opacity -= 0.05;
          body.style.opacity = opacity;

          if (opacity <= 0) {
              clearInterval(interval);
              body.style.opacity = 1;
              callback();
          }
      }, 50);
  };

  // Show the home section by default
  document.getElementById('home').classList.add('active');
});
