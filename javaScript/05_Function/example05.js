//function 과 new Function의 차이
global.a = 0;
{
  //전역에 있는 값을 쓰고 싶을때, new Function
  const a = 1;
  const test = new Function("return a");
  console.log(test());
}

{
  // 블럭 내의 값을 쓰고 싶을 때, 익명함수
  const a = 2;
  const test = function () {
    return a;
  };
  console.log(test(a));
}
