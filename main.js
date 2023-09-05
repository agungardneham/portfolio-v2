// go up button
window.addEventListener("scroll", () => {
  const goUp = document.querySelector("#go-up");
  if (window.scrollY > 0) {
    goUp.classList.remove("hidden");
    goUp.classList.add("flex");
  } else {
    goUp.classList.add("hidden");
    goUp.classList.remove("flex");
  }
});

// toggle dark mode
const toggleToDark = document.querySelector("#toggle");
const html = document.querySelector("html");
const sunIcon = document.querySelector("#sun");
const sunDarkIcon = document.querySelector("#sunDark");
const moonIcon = document.querySelector("#moon");
const moonDarkIcon = document.querySelector("#moonDark");

toggleToDark.addEventListener("click", () => {
  if (toggleToDark.checked) {
    html.classList.add("dark");
    sunIcon.classList.add("hidden");
    sunDarkIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    moonDarkIcon.classList.remove("hidden");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    sunIcon.classList.remove("hidden");
    sunDarkIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    moonDarkIcon.classList.add("hidden");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  toggleToDark.checked = true;
} else {
  toggleToDark.checked = false;
}

// Pop up
const workpopup = document.querySelector("#workpopup");
const softpopup = document.querySelector("#softpopup");
const darken = document.querySelector("#darken");

function openWorkPopup() {
  workpopup.classList.add("popup__open");
  workpopup.classList.remove("hidden");
  workpopup.classList.remove("top-0");
  darken.classList.remove("hidden");
}

function closeWorkPopup() {
  workpopup.classList.remove("popup__open");
  workpopup.classList.add("hidden");
  workpopup.classList.add("top-0");
  darken.classList.add("hidden");
}

function openSoftPopup() {
  softpopup.classList.add("popup__open");
  softpopup.classList.remove("hidden");
  softpopup.classList.remove("top-0");
  darken.classList.remove("hidden");
}

function closeSoftPopup() {
  softpopup.classList.remove("popup__open");
  softpopup.classList.add("hidden");
  softpopup.classList.add("top-0");
  darken.classList.add("hidden");
}

// text auto copy
let copiedTextPhone = document
  .querySelector(".copied-text__phone")
  .innerHTML.trim();
let copyPhoneLink = document.querySelector(".copy-item__phone");
let copiedTextEmail = document
  .querySelector(".copied-text__email")
  .innerHTML.trim();
let copyEmailLink = document.querySelector(".copy-item__email");

copyPhoneLink.addEventListener("click", () => {
  navigator.clipboard.writeText(copiedTextPhone);
  copyPhoneLink.classList.add("active");
  setTimeout(() => {
    copyPhoneLink.classList.remove("active");
  }, 2500);
});

copyEmailLink.addEventListener("click", () => {
  navigator.clipboard.writeText(copiedTextEmail);
  copyEmailLink.classList.add("active");
  setTimeout(() => {
    copyEmailLink.classList.remove("active");
  }, 2500);
});
