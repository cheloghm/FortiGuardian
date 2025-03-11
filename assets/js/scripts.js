// Typing effect
const textArray = ["Simplifying I.T", "Fortifying Security"];
let textIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typedText.innerHTML += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 150);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedText.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 100);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeText);

// Services tab functionality
function openService(evt, serviceName) {
  let i, services, tablinks;
  services = document.getElementsByClassName("service");
  for (i = 0; i < services.length; i++) {
    services[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("w3-dark-grey");
  }
  document.getElementById(serviceName).style.display = "block";
  evt.currentTarget.classList.add("w3-dark-grey");
}
document.getElementById("defaultOpen").click();
