//var name;(호이스팅 됨)

console.log(name); // undefine // hoisting은 됬어도, 값은 할당되지 않음

name = "Mark";

console.log(name); // name="Mark"로 값이 할당되었기 때문에, Mark가 찍힘

var name = "Woongjae"; // 웅재라고 선언했지만, 호이스팅시에는 var name;이런식으로만 됨.
