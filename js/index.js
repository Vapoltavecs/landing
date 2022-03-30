const modal1 = document.querySelector(".modal1");
const openModal1Btn = document.querySelector(".meta-rent");
const closeModal1Btn = modal1.querySelector(".close");

const modal2 = document.querySelector(".modal2");
const openModal2Btn = document.querySelector(".scholarship");
const closeModal2Btn = modal2.querySelector(".close");

const modal3 = document.querySelector(".modal3");
const open3Modal = document.querySelector(".clan");

const closeModal3Btn = modal3.querySelector(".close");

openModal1Btn.addEventListener("click", () => {
  modal1.classList.add("active");
});

closeModal1Btn.addEventListener("click", () => {
  modal1.classList.remove("active");
});

openModal2Btn.addEventListener("click", () => {
  modal2.classList.add("active");
});

closeModal2Btn.addEventListener("click", () => {
  modal2.classList.remove("active");
});

open3Modal.addEventListener("click", () => {
  modal3.classList.add("active");
});

closeModal3Btn.addEventListener("click", () => {
  modal3.classList.remove("active");
});

// function toggleAnim(element, direction) {
//   return element.animate(
//     [
//       { transform: "translate3D(0, 0, 0)" },
//       { transform: "translate3D(0, -300px, 0)" },
//     ],
//     {
//       duration: 500,
//       direction,
//     }
//   );
// }
