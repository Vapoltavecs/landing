const modal1 = document.querySelector(".modal1");

const modal2 = document.querySelector(".modal2");

const modal3 = document.querySelector(".modal3");

const AddModal = (modalBlock, openBtn) => {
  const closeBtn = modalBlock.querySelector(".close");
  openBtn.addEventListener("click", () => {
    modalBlock.classList.add("active");
    const modal = modalBlock.querySelector(".modal");
    const overlay = modalBlock.querySelector(".overlay");

    toggleOpacityAnim(overlay);
    toggleAnim(modal);
  });
  closeBtn.addEventListener("click", () => {
    const modal = modalBlock.querySelector(".modal");
    toggleAnim(modal, "reverse").addEventListener("finish", () => {
      modalBlock.classList.remove("active");
    });
  });
};

[modal1, modal2, modal3].forEach((el, i) => {
  const openBtn = document.querySelector(`.open-modal-${i + 1}`);
  AddModal(el, openBtn);
});

function toggleAnim(element, direction) {
  return element.animate(
    [
      { transform: "translateX(-50%) translateY(-100%)", opacity: 0 },
      { transform: "translateX(-50%) translateY(-50%)", opacity: 1 },
    ],
    {
      duration: 300,
      fill: "forwards",
      easing: "ease-in",
      direction,
    }
  );
}

function toggleOpacityAnim(element, direction) {
  return element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 300,
    fill: "forwards",
    easing: "ease-in",
    direction,
  });
}

const langDiv = document.querySelectorAll(".languange-lang");
const langWrap = document.querySelectorAll(".languange");

[...langWrap].forEach((el) => {
  const lang = el.querySelector(".change-lang");
  const menu = el.querySelector(".languange__list");

  lang.addEventListener("click", () => {
    menu.classList.add("active");
    toggleOpacityAnim(menu);
  });

  menu.addEventListener("click", ({ target }) => {
    if (target.classList.contains("languange__list-item")) {
      langDiv.forEach((el) => (el.innerText = target.innerText));
      toggleOpacityAnim(menu, "reverse").addEventListener("finish", () => {
        menu.classList.remove("active");
      });
    }
  });
  window.addEventListener("click", ({ target }) => {
    if (
      !target.classList.contains("change-lang") &&
      !target.classList.contains("languange__list") &&
      !target.classList.contains("languange-icon") &&
      !target.classList.contains("languange-lang")
    ) {
      toggleOpacityAnim(menu, "reverse").addEventListener("finish", () => {
        menu.classList.remove("active");
      });
    }
  });
});
