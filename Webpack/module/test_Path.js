const path = require("path");

//절대 경로
console.log(__dirname);

//절대경로/abc 출력
//resolve 메서드는 , 를 기준으로 /를 써서 만들어준다
const pathTest = path.resolve(__dirname, "abc");
console.log(pathTest);
