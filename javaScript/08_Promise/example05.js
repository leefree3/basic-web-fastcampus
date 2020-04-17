/*
 * executor 함수 인자 중 하나인 resolve 함수를 실행하면, fullfilled(이행) 상태가 됩니다.
 */

new Promise((resolve, reject) => {
  //pending상태 돌입
  //비 동기적인 상황
  resolve(); // fullfilled 상태
});
