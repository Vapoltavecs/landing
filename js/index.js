const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");

const burger = document.querySelector(".burger");

const mobileMenu = document.querySelector(".menu");
const html = document.querySelector("html");

const scrollLinks = document.querySelectorAll('a[href^="#"]');

[...scrollLinks].forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const selector = e.target.href.slice(e.target.href.indexOf("#") + 1);
    const blockToScroll =
      document.querySelector(`#${selector}`) ||
      document.querySelector(`.${selector}`);
    const toScroll = blockToScroll.getBoundingClientRect().top + scrollY;
    console.log(toScroll);
    mobileMenu.classList.remove("active");
    window.scrollTo({
      top: toScroll,
      behavior: "smooth",
    });
  });
});

const AddModal = (modalBlock, openBtn) => {
  const closeBtn = modalBlock.querySelector(".close");
  openBtn.addEventListener("click", () => {
    modalBlock.classList.add("active");
    const modal = modalBlock.querySelector(".modal");
    const overlay = modalBlock.querySelector(".overlay");
    html.classList.add("lock");

    toggleOpacityAnim(overlay);
    toggleAnim(modal);
  });
  closeBtn.addEventListener("click", () => {
    const modal = modalBlock.querySelector(".modal");
    toggleAnim(modal, "reverse").addEventListener("finish", () => {
      modalBlock.classList.remove("active");
    });
    html.classList.remove("lock");
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
  const arrow = lang.querySelector(".languange-icon");

  lang.addEventListener("click", () => {
    menu.classList.add("active");
    arrow.classList.add("active");
    toggleOpacityAnim(menu);
  });

  menu.addEventListener("click", ({ target }) => {
    if (target.classList.contains("languange__list-item")) {
      langDiv.forEach((el) => (el.innerText = target.innerText));
      arrow.classList.remove("active");
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
      arrow.classList.remove("active");
      toggleOpacityAnim(menu, "reverse").addEventListener("finish", () => {
        menu.classList.remove("active");
      });
    }
  });
});

burger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

const closeMenuBtn = mobileMenu.querySelector(".header__close");

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

new WOW().init();
