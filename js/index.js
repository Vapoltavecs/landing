const modal1 = document.querySelector(".modal1");
const openModal1Btn = document.querySelector(".meta-rent");
const closeModal1Btn = modal1.querySelector(".close");

const modal2 = document.querySelector(".modal2");
const closeModal2Btn = modal1.querySelector(".close");

const modal3 = document.querySelector(".modal3");
const closeModal3Btn = modal1.querySelector(".close");

openModal1Btn.addEventListener("click", () => {
  modal1.classList.add("active");
});

closeModal1Btn.addEventListener("click", () => {
  modal1.classList.remove("active");
});

function toggleAnim(element, direction) {
  return element.animate(
    [
      { transform: "translate3D(0, 0, 0)" },
      { transform: "translate3D(0, -300px, 0)" },
    ],
    {
      duration: 500,
      direction,
    }
  );
}
