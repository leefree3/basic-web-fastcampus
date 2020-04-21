## 필요한 모듈 :

- npm install 시 자동 셋팅.(package.json에 dependency정보 있음.)

1. ESM

   - 설치 (new project)
     - npm install esm
     - npm init esm
     - yarn create esm
   - local run
     - node -r esm index.js

2. 기본 번들환경 세팅

   1. npm init -y => package.json 생성된다.

   2. 웹팩, 웹팩cli 설치
      - npm install webpack --save-dev
      - npm install webpack-cli --save-dev
      - 참고 save-dev: 앱 개발할 때 필요한 모듈 설치
   3. src 폴더 내부에 기존에 만들었던 index.js, log.js, mathUtil.js를 이동
   4. npx webpack => 현재 프로젝트에 설치된 dependency를 path로 잡은 것 처럼 맞바로 사용 가능하게 한다.
      - 나의 경우 모드를 넣지 않았지만 모드도 넣을 수 있다.
      - 예:
        - npx webpack --mode development
        - npx webpack --mode production
   5. 실행 결과 dist폴더에 번들링된 파일(main.js)이 만들어진다.

   - dist/main.js

3. index.js를 src 경로로 옮기면서 노드모듈의 readline을 인식하지 못한다.
   - target설정을 해야한다.
   - npx webpack --target=node
   - 설정이 잘 되었다면 터미널에 node ./dist/main.js 입력하면 실행된다!!
