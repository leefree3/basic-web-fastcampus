//Promise(연속)
//async await

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      //reject(new Error("reason"));
    }, ms);
  });
}

// Promise 의 연속 처리
// 계속 chaning이 일어나면서 3초 후 실행
p(1000)
  .then(() => p(1000))
  .then(() => p(1000))
  .then(() => {
    console.log("3000ms 후에 실행");
  });

// async await 의 연속 처리
// 한줄 한줄이 비동기 끝나면 진행
// 로직의 이동이 한줄 한줄 과 순서가 맞아 들어간다.
(async function main() {
  await p(1000);
  await p(1000);
  await p(1000);
  console.log("3000ms 후에 실행");
})();
