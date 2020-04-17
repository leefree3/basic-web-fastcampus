//Promise 객체가 rejected된 경우의 처리를 위해
// try, catch를 이용한다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

//async, await의 가장 큰 장점, 로직이 아래로 순차적으로 진행
async function main() {
  try {
    //정상 처리시 try쪽으로 들어오고
    const ms = await p(1000);
  } catch (error) {
    //비정상 처리시 에러객체를 받아서, console.찍도록 했음
    console.log(error);
  }
}

main();
