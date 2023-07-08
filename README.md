# 07/01
## SPA(Single Page Aplication)
- 서버에 페이지를 요청할때마다 전체가 다시 랜더링 되는것이 아닌 하나의 html 페이지에 갱신에 필요한 데이터만 전달 받아서 페이지를 갱신. CSR(Client Side Rendering) 방식으로 렌더링

## MPA(Multiple Page Application)
- 새로운 페이지를 요청할 때마다 정적 리소스가 다운로드된다. 매번 전체 페이지가 다시 렌더링 된다. SSR(Server Side Rendering) 방식으로 렌더링

# 07/02

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

-매개변수(parameter)는 함수 선언 방식 괄호 사이에 있는 변수(선언 시 쓰이는 용어).
-인수(argument)는 함수를 호출할 때 매개변수에 전달되는 값(호출 시 쓰이는 용어).

## 기본값
- 함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 된다. 매개변수가 2개인 함수에 인수를 하나만 넣어서 호출해도 안넣은 인수는 undefined가 할당 되기 때문에 에러 없이 작동한다. 

- 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 함수를 선언할 때 =를 사용해 '기본값(default value)'을 설정해주면 된다.

`function App(arg1, arg2 = "apple"{})`

- 또는 if (text === undefined) { // 매개변수가 생략되었다면
    text = '빈 문자열';
  }

## 콜백 함수 또는 콜백
- 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것

```
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
```

## 함수 표현식 vs 함수 선언문
- 함수 선언문: 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
```
function sum(a, b) {
  return a + b;
}
```

- 함수 표현식: 함수는 표현식이나 구문 구성(syntax construct) 내부에 생성
```
let sum = function(a, b) {
  return a + b;
};
```

- 두 번째 차이는 자바스크립트 엔진이 언제 함수를 생성하는지에 있다. 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성하기 때문에 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있다. 하지만 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있다.(스크립트가 진짜 실행되기 전 "초기화 단계"에서 함수 선언 방식으로 정의한 함수가 생성되기 때문)

# 07/03
## < script >
- `<script>` 태그엔 자바스크립트 코드가 들어갑니다. 브라우저는 이 태그를 만나면 안의 코드를 자동으로 처리합니다.

## 문(statement)
- 문은 어떤 작업을 수행하는 문법 구조와 명령어를 의미한다. 서로 다른 문은 세미콜론(;)으로 구분한다. 줄바꿈으로 세미콜론을 생략할 수 있다.(그러나 이러한 세미콜론 자동삽입이 안될때도 있으니 세미콜론을 사용하는것이 안정적)

## 주석
- 한줄 주석은 `//` 두 줄 이상은 `/* ... */` 주석의 중첩(주석 안에 주석)은 안된다.

## 엄격 모드
- ES5에 새로운 기능이 추가 되고 기존 기능이 바뀜으로써 하위 호환성 문제가 생겼고 변경사항 대부분이 ES5의 기본 모드에선 활성화 되지 않도록 설계 되었다. 대신 `use strict`라는 지시자를 사용해 엄격 모드를 활성화 했을 때만 이 변경사항이 활성화되게 새놓았다.(반드시 최상단에 위치할것) 코드에 클래스와 모듈을 사용했다면 "use strict"를 생략해도 된다.

##동적 타입(dynamically typed) 언어
- 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어(ex- let)

## 숫자형 
- 정수 및 부동소수점 숫자. 일반적인 숫자 외에 Infinity, -Infinity, NaN같은 '특수 숫자 값(special numeric value)'이 포함. 정수의 한계는 ±2**53

## BigInt 
- BigInt형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있다. BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있습니다.

## 문자형 
-  자바스크립트에선 문자형을 따옴표로 묶는다. 
따옴표의 세종류.

큰따옴표: "Hello"
작은따옴표: 'Hello'
역 따옴표(백틱, backtick): `Hello`

## 불린형(논리 타입) 
- true와 false 두 가지 값밖에 없는 자료형.

## ‘null’ 값 
- null 값은 오로지 null 값만 포함하는 별도의 자료형으로 그 외 어느 자료형에도 속하지 않는다. 자바스크립트의 null은 다른 언어의 null과 성격이 다르다. 다른 언어에선 null을 '존재하지 않는 객체에 대한 참조’나 '널 포인터(null pointer)'를 나타낼 때 사용하지만 자바스크립트에선 null을 ‘존재하지 않는(nothing)’ 값, ‘비어 있는(empty)’ 값, ‘알 수 없는(unknown)’ 값을 나타내는 데 사용한다.

## ‘undefined’ 값
- null 값처럼 자신만의 자료형을 형성. '값이 할당되지 않은 상태’를 나타낼 때 사용한다. 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다.

## 객체와 심볼
- 객체(object)형은 특수한 자료형으로, 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부른다. 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있다.
- 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용된다.

## typeof 연산자 
- 피연산자의 자료형을 알려준다. typeof x 또는 typeof(x) 형태로 사용. 피연산자의 자료형을 문자열 형태로 반환. null의 typeof 연산은 "object"인데, 이는 언어상 오류로 null은 객체가 아니다.

## prompt 
- 브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받는다. title: 사용자에게 보여줄 문자열, default: 입력 필드의 초깃값(선택값)(default를 감싸는 대괄호는 이 매개변수가 필수가 아닌 선택값이라는 것을 의미)

## confirm 
- confirm 함수는 매개변수로 받은 question(질문)과 확인 및 취소 버튼이 있는 모달 창을 보여준다. 사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false를 반환한다.

## 일치 연산자
- 동등 연산자 `==`은 0과 false를 구별하지 못한다.(형변환이 일어나서 false가 0이 됨) 일치 연산자(strict equality operator) `===`를 사용하면 형 변환 없이 값을 비교할 수 있다.

## nullish 병합 연산자 '??'
- `??` 를 사용하면 짧은 문법으로 여러 피연산자 중 그 '값이 할당된' 변수를 빠르게 찾을 수 있다.
```
a ?? b의 평가 결과는 다음과 같다.

a가 null도 아니고 undefined도 아니면 a
그 외의 경우는 b

(a !== null && a !== undefined) ? a : b; 와 동일
```
- ?의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 = 보다는 높다. 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지

## break/continue와 레이블

- 레이블(label) 은 반복문 앞에 콜론과 함께 쓰이는 식별자

- break나 continue 같은 지시자는 삼항 연산자(`?`)에 사용하면 안 된다.

- 여러 개의 중첩 반복문을 한 번에 빠져나와야 하는 경우 반복문 안에서 break <labelName>문을 사용하면 레이블에 해당하는 반복문을 빠져나올 수 있다.

- 예시
```
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');
```


# 07/04
## 클래스- 객체를 위한 청사진. 메소드는 클래스에 정의한 함수, 프로퍼티는 클래스에 정의한 변수
컨스트럭터(생성자)- 클래스의 객체를 생성할 때마다 실행됨. 프로퍼티를 생성.
constructor() {
	this.name = 'Max'
	printname () {console.log(this.name)}
}
class 함수명1 extends 함수명2
extends를 통해 클래스를 상속받을 수 있음. 이경우 함수명1을 통해 함수명2의 메소드와 프로퍼티를 사용하고자 할 경우 함수명1의 생성자 안에 super()를 써서 상위클래스의 생성자 함수를 실행해야함.
최신구문 - 생성자 없이 바로 name = 'Max'로 프로퍼티 생성, 메소드는 화살표 함수를 사용. 상속시 super() 필요 없음

## 스프레드(spread)/레스트(rest) 연산자 - `...` 어디에서 사용하는지에 따라 스프레드 또는 레스트라고 부른다. 스프레드 연산자는 배열의 원소나 객체의 프로퍼티를 나누는데 사용. `...배열/객체`로 배열 또는 객체의 모든 값을 꺼내서 새 배열/객체의 값으로 추가한다.
const oldArray = [a,b,c]
const newArray = [...oldArray, 1,2] (=> [a,b,c,1,2] ...이 없다면 [[a,b,c],1,2])
cosnt newObject = {...oldObject, newProp:5}
레스트 연산자는 함수의 인수들을 배열로 합치는데 사용 
function sortArgs(...args){
return args.sort()
}
매개변수를 무제한으로 받는다. 매개변수가 몇개이든 합쳐서 배열이 된다.

## Destructuring(구조분할) 
- 배열의 원소또는 객체의 프로퍼티를 추출해서, 변수에 저장할 수 있도록 해줌
- 배열 구조분할 [a,b] = ['Hello', 'Max'] 변수 a와 b에 'Hello'와 'Max'를 각각 할당
- 객체 구조분할 {name} = {name:'Max', age:28}
이경우 console.log(name)은 Max로 나오지만 console.log(age)는 undefined가 나오는데 객체에서 age를 추출하지 않기 때문이다.

## 참조형 및 원시형 데이터 타입
- 변수A에 객체를 선언할 때 객체는 메모리에 저장되어있고 그 변수에는 메모리에 있는 주소를 가리키는 포인터를 저장한다. 따라서 변수B = 변수A로 선언했을때 변수A안의 객체의 내용을 바꾸고 B를 출력해보면 원시자료형을 복사 했을 때와 다르게 그 내용이 바뀌어있다.

- 원시 자료형이 할당될 때에는 변수에 값(value) 자체가 담긴다.
참조 자료형이 할당될 때는 보관함의 주소(reference)가 담긴다.

- 참조형을 복사했을때 혼란을 막기위해 스프레드 연산자를 통해 그 값을 가져와 복사함으로써 이런 문제를 방지할수있다.

## reduce() 
- 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환.

- ` arr.reduce(callback[, initialValue])`
callback
배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받는다.

accumulator
누산기는 콜백의 반환값을 누적한다. 콜백의 첫 번째 호출 또는 initialValue를 제공한 경우에는 initialValue의 값.

currentValue
처리할 현재 요소.

currentIndex (옵션)
처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작.

array (옵션)
reduce()를 호출한 배열.

initialValue (옵션)
callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.

## map()
- 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

- `arr.map(callback(currentValue[, index[, array]])[, thisArg])`
callback
새로운 배열 요소를 생성하는 함수. 다음 세 가지 인수를 가집니다.

currentValue
처리할 현재 요소.

index  (옵션)
처리할 현재 요소의 인덱스.

array  (옵션)
map()을 호출한 배열.

thisArg  (옵션)
callback을 실행할 때 this로 사용되는 값.


## find()
- 판별 함수를 만족하는 첫 번째 요소의 값을 반환. 그런 요소가 없다면 undefined를 반환.

- `arr.find(callback[, thisArg])`
callback
배열의 각 값에 대해 실행할 함수. 아래의 세 인자를 받는다.

element
콜백함수에서 처리할 현재 요소.

index(옵션)
콜백함수에서 처리할 현재 요소의 인덱스.

array(옵션)
find 함수를 호출한 배열.

thisArg
선택 항목. 콜백이 호출될 때 this로 사용할 객체.

## findIndex() 
- 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환. 만족하는 요소가 없으면 -1을 반환.

## filter() 
- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## concat()
- 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환. 기존배열을 변경하지 않고 추가된 새로운 배열을 반환한다.

```
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## slice() 
- 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않는다. 

- 얕은 복사(Shallow Copy)란 객체를 복사할 때 원본 값과 복사된 값이 같은 참조(=메모리 주소)를 가리키는 것

- 깊은 복사(Deep Copy)는 '실제 값'을 새로운 메모리 공간에 복사하는 것

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## splice() 
- 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경. 새 배열 생성x. 원본 배열을 바꾸는것o.

```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```



# 07/05

## 리액트 컴포넌트

- 모든 사용자 인터페이스는 컴포넌트로 구성된다. 재사용 가능(반복을 피함), 우려사항 분리가능(기능별로 코드를 나눌수있음)을 이유로 리액트는 컴포넌트 중심이다.

- 리액트는 html. css, javascript로 재사용 가능하고 반응형인 컴포넌트를 만들수 있게 해준다.

- create-react-app: 리액트 프로젝트를 쉽게 생성해줌.

- 리액트에 있는 컴포넌트는 단지 자바스크립트 함수일 뿐이다.

## JSX 
- 자바스크립트 XML. 우리가 코드를 작성하면 자동으로 브라우저가 사용하는 코드로 변환된다.

## 명령형 접근 방식 
- 단계별로 무엇을 해야하는지 정확히 지시.

# 07/06

## 이벤트 리스닝 및 이벤트 핸들러

- 리액트에서는 요소에 on으로 시작하는 함수 props를 통해 이벤트리스너를 추가한다.

`<button onClick = {clickHandler} />

- clickHandler()가 아닌 clickHandler만 쓰는 이유는 clickHandler()를 사용했을시 중괄호안의 함수가 이벤트와 상관없이 실행되기 때문에 포인터만 전달하는것.

## state

- 리액트는 반복하지 않기 때문에 처음 컴포넌트를 읽고 랜더링 된 후에 다시 호출되지 않는다. 클릭하거나 변수가 바뀌었을때 다시 실행하라는 트리거가 없기 때문. 이를 위해 useState라는 라이브러리를 사용한다.

##useState
- 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state로 값을 정의할 수 있게 해주는 함수이다. 리액트 훅이라고도 함.

- 반드시 함수 안에 호출되어야함. 특수한 종류의 변수를 만든다. 늘 첫번째 요소가 변수 자체이고 두번째 요소가 변수 업데이트 함수인 배열을 반환한다.

`const [title, setTitle] = useState(props.title);`

- title은 초기값인 props.title이고 setTitle은 나중에 새로운 title을 설정하기 위해 호출할 수 있는 함수이다.

- setTitle은 변수를 새로 만들 뿐만 아니라 useState로 상태를 초기화 했던 곳에서 다시 실행되게 만든다.(즉 useState가 쓰인 컴포넌트를 다시 실행하고 그 JSX코드를 다시 평가해 지난 번과 비교해서 감지된 변화들을 랜더링.)

- 컴포넌트별 인스턴스를 기반으로 해서 독립적인 state를 갖는다. 그러므로 한 컴포넌트A를 여러번 사용해도 그 중 하나(A-1)에서 state가 변한다 할지라도 나머지(A-2,A-3...) 컴포넌트에는 영향이 없다.


# 07/07

## 사용자 입력 리스닝
- onChange를 통해 전달한 함수로 전달된 이벤트 객체의 value속성에 사용자 입력 값이 담겨있다.

## 여러 state 사용
- `const[~,~] = useState()`를 여러번 반복하는 대신
```
const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  })
```
이런식으로 state객체로 묶어서 사용할 수 있다. 값을 갱신할때는,
```
setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    })
```
스프레드 연산자(...)를 사용해 남은 값들을 보존시키고 갱신할 값을 갱신한다.

## 이전 state에 의존하는 경우 state 업데이트
- 항상 최신 상태의 스냅샷에서 작업하도록하는 안전한 방법.
```
setUserInput((prevState) => {
      return {...prevState, enteredTitle: event.target.value}
    })
```

## 양방향 바인딩
- 입력한 값을 받을 뿐아니라 다시 새로운 값을 입력에 전달할수 있다.
- 입력창에 입력을 완료한뒤 전송했을때 입력창을 다시 빈상태로 만들기 위해서 사용한다.
- input 태그의 value값에 useState로 만든 변수를 넣는다. 폼태그에 set으로 state를 빈값으로 업데이트 한다. 그러면 value가 가진 변수가 빈값이 되면서 입력창이 비워진다.
`<input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>`
```
const submitHandler = (event) => {
    event.preventDefault();
   
    setEnterdTitle('');
  }
```
- 폼으로 만들었을때 유용하다.

## 자식-부모 컴퍼넌트 통신(상향식)
- 하위 컴포넌트에 props로 함수의 포인터를 건네준다. 그 하위 컴포넌트에서 넘겨받은 props의 함수를 호출한다.
```
부모
const saveExpenseDataHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }

return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
```
```
자식
const ExpenseForm = (props) => {
~~~

const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    ~~~

  }
~~~
}
```
- 결과적으로 자식 컴포넌트인 ExpenseForm에서 부모 컴포너트로 함수onSaveExpenseData를 통해 데이터를 건네주게 된다.


# 07/08

## 객체
- 원시형 자료는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있지만 객체형은 원시형과 달리 다양한 데이터를 담을 수 있다.

- 객체는 중괄호 {…}를 이용해 만들 수 있다. 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용된다.

- 빈 객체(빈 서랍장)를 만드는 방법은 두 가지
```
let user = new Object(); // '객체 생성자' 문법
let user = {};  // '객체 리터럴' 문법
```

- 자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다는 것. 이런 특징을 응용하면 프로퍼티 존재 여부를 쉽게 확인가능.


- 객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것이다. 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장되는것.


- 객체를 사용하여 개체를 표현하는 방식을 객체 지향 프로그래밍(object-oriented programming, OOP) 이라 부른다.


## 메서드와 this
- 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있다.
```
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냄
    alert(this.name);
  }

};

user.sayHi(); // John
```
- 자바스크립트의 this는 다른 프로그래밍 언어의 this와 동작 방식이 다릅니다. 자바스크립트에선 모든 함수에 this를 사용할 수 있다.

- 화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않는다. 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져온다.

- 함수를 선언할 때 this를 사용할 수 있지만, 함수가 호출되기 전까지 this엔 값이 할당되지 않는다.


## 심볼
- '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용. Symbol()을 사용하면 심볼값을 만들 수 있다.






