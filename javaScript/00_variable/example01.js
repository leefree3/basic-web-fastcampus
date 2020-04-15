//블록 스코프에서 선언하더라도 외부에서 사용 가능(var)
var c = 0;

{
  c++;
  console.log(c);
}

{
  var d = 0;
  console.log(d);
}

console.log(d);
