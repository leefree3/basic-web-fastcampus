// 함수를 인자로 하여 함수를 호출

//c: callback
function hello(c) {
  console.log("hello");
  c();
}

hello(function () {
  console.log("콜백");
});
