```js
const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

if (slider && leftBtn && rightBtn) {
  slider.scrollLeft = 0;
  leftBtn.style.display = "none";

  rightBtn.onclick = () => {
    slider.scrollLeft += slider.clientWidth;
  };

  leftBtn.onclick = () => {
    slider.scrollLeft = 0;
  };

  slider.addEventListener("scroll", () => {
    leftBtn.style.display = slider.scrollLeft > 0 ? "block" : "none";
    rightBtn.style.display =
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth
        ? "none"
        : "block";
  });
}

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const answer = box.nextElementSibling;
    const isOpen = box.classList.contains("active");

    faqBoxes.forEach(other => {
      other.classList.remove("active");
      other.nextElementSibling.style.maxHeight = "0px";
    });

    if (!isOpen) {
      box.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const footerBtn = document.getElementById("footerLangBtn");
const footerLang = document.getElementById("footerLang");

if (footerBtn && footerLang) {
  footerBtn.addEventListener("click", () => {
    footerLang.innerText =
      footerLang.innerText === "English" ? "Hindi" : "English";
  });
}

const langWrapper = document.querySelector(".lang-wrapper");
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
const currentLang = document.getElementById("currentLang");

if (langWrapper && langBtn && langDropdown && currentLang) {
  langBtn.addEventListener("click", e => {
    e.stopPropagation();
    langWrapper.classList.toggle("active");
  });

  langDropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", e => {
      e.stopPropagation();
      currentLang.innerText = item.dataset.lang;
      langWrapper.classList.remove("active");
    });
  });

  document.addEventListener("click", () => {
    langWrapper.classList.remove("active");
  });
}

function handleEmail(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const input = form.querySelector("input");
  const button = form.querySelector("button");
  const originalPlaceholder = input.placeholder;

  button.addEventListener("click", e => {
    e.preventDefault();

    button.style.opacity = "0.85";
    setTimeout(() => (button.style.opacity = ""), 120);

    if (!input.value.trim()) {
      input.focus();
      input.placeholder = "Please enter your email";
      return;
    }

    input.value = "";
    input.placeholder = "✓ Thank you";
    input.style.borderColor = "#4CAF50";
    button.disabled = true;

    setTimeout(() => {
      input.placeholder = originalPlaceholder;
      input.style.borderColor = "";
      button.disabled = false;
    }, 1200);
  });
}

handleEmail(".hero-cta");
handleEmail(".faq-cta-form");
```
