const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

console.log("JS CONNECTED");


slider.scrollRight = 1300;
leftBtn.style.display = "none";
rightBtn.style.display = "block";            

rightBtn.onclick = () => {
  slider.scrollLeft += 1300;
  leftBtn.style.display = "block";
};

leftBtn.onclick = () => {
  slider.scrollLeft = 0;
  leftBtn.style.display = "none";
};


const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const answer = box.nextElementSibling;

    const isOpen = box.classList.contains("active");

    faqBoxes.forEach(other => {
      other.classList.remove("active");
      other.nextElementSibling.style.maxHeight = null;
    });

    if (!isOpen) {
      box.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});



const footerBtn = document.getElementById("footerLangBtn");
const footerLang = document.getElementById("footerLang");

footerBtn.addEventListener("click", () => {
  footerLang.innerText =
    footerLang.innerText === "English" ? "Hindi" : "English";
});


document.querySelectorAll(".faq-box").forEach((box) => {
  box.addEventListener("click", () => {
    const answer = box.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});





const langWrapper = document.querySelector(".lang-wrapper");
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
const currentLang = document.getElementById("currentLang");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langWrapper.classList.toggle("active");
});

langDropdown.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", () => {
    currentLang.innerText = item.dataset.lang;
    langWrapper.classList.remove("active");
  });
});

function handleEmail(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const input = form.querySelector("input");
  const button = form.querySelector("button");

  const originalPlaceholder = input.placeholder;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    if (!input.value.trim()) return;


    input.value = "";
    input.placeholder = "✔ Done";
    input.style.color = "#2ecc71";
    input.style.borderColor = "#2ecc71";

    button.disabled = true;


    setTimeout(() => {
      input.placeholder = originalPlaceholder;
      input.style.color = "";
      input.style.borderColor = "";
      button.disabled = false;
    }, 1000);
  });
}

handleEmail(".hero-cta");
handleEmail(".faq-cta-form");
