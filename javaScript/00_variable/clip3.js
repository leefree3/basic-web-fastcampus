console.log("Hello Javascript!");
// node clip3.js 를 터미널에 입력하면 콘솔 내용 출력됨

//Expression: 표현식
// 값을 만들어내는 간단한 코드
// 표현식은 값을 만들어 내기 때문에, 함수의 인자로 사용할 수 있다.

//Statement
//하나 혹은 여러개의 표현식이 모여 문장을 이룹니다.
//모든 표현식은 문장이 될 수 있습니다
//마지막에 세미콜론(;)으로 표현

//문장이 모여서 프로그램이 됩니다.

//키워드, 예약어
// 키워드 : 자바스크립트에서 특정한 목적을 위해 사용하는 단어
// 예약어 : 이런 키워드 들은 예약어로 지정되어 있다 - 이미 특정 목적을 위해 사용되고 있는 단어.
//(프로그램 작성할 때, 변수명, 함수명 등으로 사용할수 없음)

//future reserved keywords: 앞으로 특정 목적을 위해 사용될 예약어 (함수명, 변수명 등으로 사용X)

//식별자(identifier)" 코드내의 변수, 함수, 혹은 속성을 식별하는 문자열"
//식별자는 대소문자를 구분합니다
//유니코드문자, $, _, 숫자 를 사용할 수 있지만 숫자로 시작할 수 없다
//예약어는 사용할 수 없고, 공백문자도 사용할 수 없다
//프로그램에서 사용하는 변수나 함수의 이름을 짓는 것은 언제나 어려운 일
// 의미없는 이름은 사용하지 않고, 역할에 맞는 적절한 이름을 짓도록 노력해야한다.

//변수(variable) - let, var
//상수(constant) - const

//변수의 유효 범위(scope of variable)
//const, let의 유효범위(블록 스코프)
// 블럭
{
  const name = "Mark";
  console.log(name);
}

//console.log(name) //에러

//밖에서 안으로
let age = 37;
{
  age++;
  console.log(age);
}

// 중첩
{
  {
    age++;
    console.log(age);
  }
}

//var의 유효범위 : 함수 스코프
var a = 0;
console.log(a);
(function () {
  a++;
  console.log(a);
})();

(function () {
  var b = 0;
  console.log(b);
})();

// b++;
// console.log(b);
