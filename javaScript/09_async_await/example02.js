//await를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

//async, await의 가장 큰 장점, 로직이 아래로 순차적으로 진행
async function main() {
  const ms = await p(1000);
  console.log(`${ms} ms 후에 실행됩니다.`);
}

main();
