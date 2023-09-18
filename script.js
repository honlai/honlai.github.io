
const icon = document.querySelector('.icon');
let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showicon);
window.addEventListener("scroll", checkBoxes);
showicon();
checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);
  let triggerBottom = window.innerHeight * 0.66;
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
function showicon() {
  if (window.scrollY > 200) { // 調整這個數值以觸發顯示方塊的滾動位置
    icon.style.bottom = '20px'; // 顯示方塊
  } else {
    icon.style.bottom = '-100px'; // 隱藏方塊
  }
}
