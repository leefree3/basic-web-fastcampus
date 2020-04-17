/*
생성자를 통해 프로미스 객체를 만드는 순간 pending(대기) 상태라고 합니다.
*/

//비동기 상황이 정상 종료 했을 경우, resolve()호출
//rejected: 에러가 발생한 상황

new Promise((resolve, reject) => {}); //pending상태
