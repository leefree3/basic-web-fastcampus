### 미니프로젝트 개요

1. 도서관리 프로그램 (CURD) 작성
   1. Login 페이지에서 로그인시 도서 목록 출력
   2. List 화면에서 상세보기, 등록, 수정, 삭제 가능
2. 사용 언어 javaScript
3. 서버 정보 (7개 API 사용)
   1. Login
      - [POST](https://api.marktube.tv/v1/me)
      - Body: {email, password}
   2. 내정보 가져오기
      - [GET](https://api.marktube.tv/v1/me)
      - Request Headers(이하, 3~8번 동일)
        - Authorzation: Bearer 3acc8490-ld5c-4148-a307-e5ded8fc6de0
   3. 책 목록 가져오기
      - [GET](https://api.marktube.tv/v1/book)
   4. 책 정보 가져오기
      - [GET](https://api.marktube.tv/v1/book/1)
   5. 책 추가하기
      - [POST](https://api.marktube.tv/v1/book)
      - Body: {title, message, author, url}
   6. 책 수정하기
      - [PATCH](https://api.marktube.tv/v1/book/1)
      - Body: {title, message, author, url}
   7. 책 삭제하기
      - [DELETE](https://api.marktube.tv/v1/book/1)
4. axios 라이브러리를 사용해서 서버 정보를 가져올 예정
5. 화면 디자인 - BootStrap4 template design 사용
6. id: test@marktube.tv pw: 1234
