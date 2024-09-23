const icon = document.querySelector('.index');
let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showicon);
window.addEventListener("scroll", checkBoxes);
showicon();
checkBoxes();

function checkBoxes() {
  console.log(window.innerHeight);
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    if (boxTop < window.innerHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
function showicon() {
  if (window.scrollY > 200) { // 調整這個數值以觸發顯示方塊的滾動位置
    icon.style.bottom = '3%'; // 顯示方塊
  } else {
    icon.style.bottom = '-50%'; // 隱藏方塊
  }
}