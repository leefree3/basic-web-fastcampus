//함수 먼저
function hello1() {
  console.log("hello1");
}

hello1();

//함수 호출을 먼저(호이스팅, Hosting)
//아래 있는 것을 위로 끌어올린다

hello2();

function hello2() {
  console.log("hello2");
}
