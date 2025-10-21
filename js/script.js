// script.js - 修改 checkBoxes 函數

const icon = document.querySelector('.index');
let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showicon);
window.addEventListener("scroll", checkBoxes);
showicon();
checkBoxes();

function checkBoxes() {
  // 將視窗高度乘以一個比例 (例如 0.8)，讓動畫提前或延後觸發
  const triggerBottom = window.innerHeight / 5 * 4; // 例如：在視窗高度的 80% 處觸發

  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    
    // 當方塊頂部位置 (boxTop) 小於觸發點 (triggerBottom) 時，觸發動畫
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function showicon() {
  if (window.scrollY > 200) { 
    icon.style.bottom = '3%'; 
  } else {
    icon.style.bottom = '-50%';
  }
}
