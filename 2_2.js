// id를 통해서 객체를 찾는법
const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title);

// querySelector을 이용해서 객체를 찾는법
const title2 = document.querySelector("#title");
title2.innerHTML = "22Hi! From JS";
title2.style.color = "green";
console.dir(title2);

// 페이지의 타이틀 설정
document.title = "I own you ";

// js 사용하기
function handleResize(event) {
  // 어떤 이벤트가 발생했는지 알려줌 -> 나중에 폼에 입력하거나 링크 클릭 시 유용
  console.log(event);
  console.log("I have been resized");
}
// handelResize() -> 지금 바로 실행하라는 뜻
// handelResize -> 사이즈가 변경되면 실행하라는 뜻
window.addEventListener("resize", handleResize);

function handleClick(event) {
  title.style.backgroundColor = "blue";
}
window.addEventListener("click", handleClick);

// if-else
const age = prompt("How old are you");

console.log(age);
if (age > 18){
  console.log('You can drink')
} else {
  console.log('You can not drink')
}
