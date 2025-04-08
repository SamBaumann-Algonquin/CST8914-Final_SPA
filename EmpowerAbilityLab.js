  function announce(message) {
    const announcer = document.getElementById("ariaAnnouncer");
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = message;
    }, 5);
  }

  function updateFocus(id) {
    const section = document.getElementById(id);
    if (section) {
      section.focus();
      announce(`Navigated to ${id} section`);
    }
  }

  function toggleSwitch(element) {
    const email = document.getElementById("email");
    const isChecked = element.getAttribute("aria-checked") === "true";

    if (!email.value || !email.value.includes("@")) {
      announce("Please enter a valid email before toggling updates.");
      email.focus();
      return;
    }

    element.setAttribute("aria-checked", !isChecked);
    announce(`Email updates turned ${!isChecked ? "on" : "off"}`);
  }

  function toggleSwitchKey(event, element) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      toggleSwitch(element);
    }
  }

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const isExpanded = navLinks.classList.toggle("show");

    
    const hamburger = document.querySelector('.hamburger');
    hamburger.setAttribute('aria-expanded', isExpanded);
  }

  window.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1);
    if (hash) updateFocus(hash);
  });


  const modal = document.getElementById("communityModal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
    modal.querySelector(".modal-content").focus();
  });

  closeModalBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
    openModalBtn.focus();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
      openModalBtn.focus();
    }
  });


  function toggleSwitch(element) {
    const email = document.getElementById("email");
    const isChecked = element.getAttribute("aria-checked") === "true";

    if (!email.value || !email.value.includes("@")) {
      alert("Please enter a valid email address before enabling updates.");
      email.focus();
      return;
    }

    const newValue = !isChecked;
    element.setAttribute("aria-checked", newValue);
  }

  function toggleSwitchKey(event, element) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      toggleSwitch(element);
    }
  }

  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.querySelector(".hamburger");

    const isExpanded = navLinks.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", isExpanded);
  }

  function handleHamburgerKey(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleMenu();
    }
  }

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneInput = document.getElementById("phone").value.trim();
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/; 

    if (!phonePattern.test(phoneInput)) {
      alert(" Please enter a valid phone number in the format: (123) 456-7890");
      document.getElementById("phone").focus();
      return;
    }
    else
    alert("Thank you for reaching out! We’ll contact you soon.");
    this.reset();
  });





  document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll('input[name="topic"]');
    const eventDetailsContainer = document.getElementById("eventDetailsContainer");
    const eventDetailsTextarea = document.getElementById("eventDetails");

    
    eventDetailsContainer.style.display = "none";
    eventDetailsTextarea.removeAttribute("required");

  
    radioButtons.forEach(radio => {
      radio.addEventListener("change", () => {
        if (radio.value === "speaker" && radio.checked) {
          eventDetailsContainer.style.display = "block";
          eventDetailsTextarea.setAttribute("required", true);
        } else {
          eventDetailsContainer.style.display = "none";
          eventDetailsTextarea.removeAttribute("required");
          eventDetailsTextarea.value = "";
        }
      });
    });
  });
