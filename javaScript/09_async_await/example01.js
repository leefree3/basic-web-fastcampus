//async function 함수이름() {}
//const 함수이름 = async() => {}

//Promise 객체를 리턴하는 함수
function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

//Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then((ms) => {
  console.log(`${ms} ms 후에 실행됩니다`);
});

//Promise 객체를 리턴하는 함수를 await로 호출하는 방법
//아직 async를 적용한 함수가 없기 때문에 error 메세지 출력(await is only valid in async function)
const ms = await p(1000);
console.log(`${ms} ms 후에 실행됩니다.`);
