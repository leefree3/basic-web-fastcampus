<!-- 마크다운 랭귀지, 마크업(HTML)과 달라 -->
<!-- 파이선 markdown하던거랑 비슷해 !! 배워두변 표시하기 편하겠어 -->
<!-- 지원되는 플랫폼에 따라 다르다.. 표준이 아니라서 -->

<!-- 1.제목 -->
# 마크다운 문법 학습하기

## 마크다운 소개

### 마크다운 문법

#### 제목 

<hr>

<!-- 2. 강조 <em>, <strong>,-->
#### | 강조
이탤랙체는 *별표(asterisk)* 혹은 _언더바(underscore)_ 를 사용하세요.
두껌게는 **별표(asterisk) 2개** 혹은 __언더바(underscore)2개__ 를 사용하세요.
** _이텔릭체_ 와 두껍게** 를 같이 사용할 수 있습니다.
취소선은 ~~물결표시(tiled)~~를 사용하세요.
<u style="color:red">밑줄</u>은 `<u></u>`를 사용하세요.

<hr>

<!-- 3. 목록 <ol><ul>-->
#### | 목록(List)

- 순서 있을 때는 숫자. 으로 표기한다. (숫자를 1. 으로 해도 알아서 순서 count)
1. 라면을 구입
1. 물을 끓인다.
1. 라면을 넣는다.
1. 맛있게 끓인다.

- 순서 없을 때 사용방법 (-, + , *)
    + 사과
    * 파인애플
    - 딸기
    - 오렌지
<hr>

<!-- 링크 <a> -->
<!-- [텍스트](링크주소) -->
#### | 링크
[Google](https://google.com) <br>
[Naver](https://naver.com "링크 설명(title)을 작성하세요.") <br>

예제<br>
[구글](https://google.com)에 [마크다운(Markdown)](https://heropy.blog/2017/09/30/markdown/)을 검색하세요! <br>

<!-- 상대참조 -->
[상대참조](../users/login) <br>
<!-- [text][참조링크 이름] -->
[text][참조링크이름]<br>

[구글][google url]<br>
[GitHub][1] <br>

<!-- 참조링크(하단2줄) -->
[1]: https://github.com
[google url]: https://google.com

<!-- target 을 정하고 싶을 때는 a태그 사용! -->
<a href="https://google.com" target="_black">구글</a>

<hr>

#### | 이미지
<!-- ![text](링크) -->
<!-- <img src="" alt=""> -->
<!-- 랑크와 마찬가지로 아래에 선언되었던 참조링크를 사용할 수 있다. -->

<!-- 단순 이미지 삽입 -->
![logo](https://heropy.blog/css/images/logo.png)
<!-- 이미를 눌렀을 때, 해당 링크로 이동하기. -->
[![logo](https://heropy.blog/css/images/logo.png)](https://heropy.blog)

<hr>

#### | 코드(Code) 강조
<!-- <pre>,<code> 로 변환-->
<!-- `(Grave) 사용 -->

저는 `background` 속성과 `position: absolute;`를 적용하니까 잘되러다구요~

<!-- ```(Grave) 3번 이상 입력하고 문법(html,js, python..)을 정해서 명시한 뒤
        Grave사이에 코드를 적으면, 코드 알아볼수 있게 인식해서 색상 변화해줌. -->
```html
<div id="markdown" style="color:red;"></div>
```
```css
#markdown{
    position: absolute;
    margin: 10px;
    width:150px;
}
```

```js
function hello(){
    return {};
}
```
<hr>

<!-- 07. 표 <table> -->
<!-- |: column 구분,  : 정렬, 3개이상의 -기호 -->
#### | 표 (position의 값 예제)

값 | 의미
--:|--
`relative`|자신을 기준으로 배치
`absolute` | _부모 요소를 기준으로 배치_
`fixed`| **브라우저 창을 기준으로 배치**

<hr>

#### | 인용문
<!-- BlockQuote 인용문-->
<!-- '>' 인용문 -->
<!-- '>> ' 중첩된 인용문-->

> 여기에 인용문을 삽입하세요!
>> 이건 2번째 줄, 중첩 인용문 입니다.
>>> 세번째줄 중첩 인용문도 가능합니다.

>다시 인용문

<hr>

#### | 원시 HTML
<!-- 마크다운 문법이 아닌 원시 HTML 문법을 사용할 수 있음. -->

<blockquote>원시 HTML 인용문!</blockquote>
<img src="https://heropy.blog/css/images/logo.png" alt="HEROPY" width="100px">

<!-- <hr>태그 -->

---
***
___

<!-- <br>태그 (띄어쓰기 두번) -->
동해물과 백두산이 마르고 닳도록  
하느님이 보우하서 우리나라 만세  
무궁화 삼천리 화려 강산  
대한 사람 대한으로 길이 보전하세