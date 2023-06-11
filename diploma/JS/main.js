const cardBlocks = document.querySelectorAll('.card');

cardBlocks.forEach((block) => {
  const sButton = block.querySelector('.btn');

  sButton.addEventListener('click', () => {
    cardBlocks.forEach((block) => {
      block.classList.remove('active');
      block.querySelector('.btn').classList.remove('active');
    });

    block.classList.add('active');
    sButton.classList.add('active');
  });
});

function resetMobile() {
let isMobile = document.documentElement.clientWidth <= 1250;
for (let i = 0; i < comment.length; i++) {
comment[i].style.display = isMobile ? "none" : "block";
}
}

function reset() {
for (let i = 0; i < comment.length; i++) {
comment[i].style.border = "solid 2px #DDDDDD";
comment[i].style.transform = "scale(1)";
btn[i].style.background = "#F53838";
btn[i].style.width = "15px";
btn[i].style.height = "15px";
btn[i].style.background = "#DDE0E4";
button1.style.background = "white"
}
}

function startComment() {
comment[current].style.border = "solid 2px #F53838";
comment[current].style.transform = "scale(1.05)";
btn[current].style.background = "#F53838";
}

function showComment() {
reset();
resetMobile();
comment[current].style.border = "solid 2px #F53838";
comment[current].style.display = "block";
comment[current].style.transition = "all 0.5s ease";
comment[current].style.transform = "scale(1.05)";
btn[current].style.background = "#F53838";
btn[current].style.width = "40.1px";
btn[current].style.height = "15px";
btn[current].style.borderRadius = "10px";
btn[current].style.transition = "all 0.5s ease";
}

arrowLeft.addEventListener("click", function () {
arrowLeft.style.background = "#F53838";
arrow1 = "b6";
arrow1.style.transform = "rotate(180deg)";
arrowRight.style.background = "white";
arrow = "b7";
arrow.style.transform = "rotate(180deg)";
current--;
if (current < 0) {
current = comment.length - 1;
}
showComment(current);
});

arrowRight.addEventListener("click", function () {
arrowRight.style.background = "#F53838";
arrow = "b7";
arrow.style.transform = "rotate(0deg)";
arrowLeft.style.background = "white";
arrow1 = "b6";
arrow1.style.transform = "rotate(0deg)";
current++;
if (current >= comment.length) {
current = 0;
}
showComment(current);
});

btn.forEach(function (button, index) {
button.addEventListener("click", function () {
current = index;
showComment(current);
});
});

startComment();