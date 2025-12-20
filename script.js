const slider = document.getElementById("slider");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

console.log("JS CONNECTED");

slider.scrollLeft = 0; 
leftBtn.style.display = "none";
rightBtn.style.display = "block";

rightBtn.onclick = () => {
  slider.scrollLeft += 1300;
};

leftBtn.onclick = () => {
  slider.scrollLeft = 0;
};

slider.addEventListener("scroll", () => {
  if (slider.scrollLeft > 0) {
    leftBtn.style.display = "block"; 
  } else {
    leftBtn.style.display = "none"; 
  }

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }
});



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
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    currentLang.innerText = item.dataset.lang;
    langWrapper.classList.remove("active");
  });
});

document.addEventListener("click", () => {
  langWrapper.classList.remove("active");
});







function handleEmail(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return;

  const input = form.querySelector("input");
  const button = form.querySelector("button");

  const originalPlaceholder = input.placeholder;

  // original button background store karo
  const originalBtnBg = getComputedStyle(button).backgroundColor;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    // 🔴 Button press feel (Netflix-style)
    button.style.backgroundColor = "rgb(180, 18, 18)";

    setTimeout(() => {
      // ⬅️ revert back so hover still works
      button.style.backgroundColor = originalBtnBg;
    }, 120);

    // ❌ Faltu click → input focus + outline
    if (!input.value.trim()) {
      input.focus();
      input.style.outline = "2px solid #ff7675";
      input.style.outlineOffset = "2px";

      setTimeout(() => {
        input.style.outline = "";
        input.style.outlineOffset = "";
      }, 800);

      return;
    }

    // ✅ Success state
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


