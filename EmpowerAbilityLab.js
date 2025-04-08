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

window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.substring(1);
  if (hash) updateFocus(hash);
});
