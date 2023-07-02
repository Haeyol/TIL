# TIL
#07/01
## SPA(Single Page Aplication)
- 서버에 페이지를 요청할때마다 전체가 다시 랜더링 되는것이 아닌 하나의 html 페이지를 리액트가  컨트롤함

#07/02
## < script >
- `<script>` 태그엔 자바스크립트 코드가 들어갑니다. 브라우저는 이 태그를 만나면 안의 코드를 자동으로 처리합니다.

## var, let, const
- var보다 let, const를 사용권장. let은 변수, const는 상수를 선언하는데 사용

## 화살표 함수
- const 함수명 = (인자) => {}
```
export: export default 함수명
여럿 export시 
export const 함수1
export const 함수2
```
- default 는 항상 default로 내보낸것을 기본값으로 가져온다는 의미. import시 객체의 이름을 정할 수 있다. 
- 하지만 여럿을 export 했을시 중괄호를 사용하여 import {함수2, 함수1} from ./~처럼 정확한 이름을 명시해야한다.
- {함수2 as AAA} 같이 as를 사용하여 별칭을 줄수 있다.
- import * as BBB from ~  처럼 *을 사용해 모두 불러온뒤 BBB.함수1, BBB.함수2 처럼 사용할 수 있다.
