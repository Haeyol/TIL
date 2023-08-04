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

`let id = Symbol(); // id는 새로운 심볼이 됨`
`let id = Symbol("id");  // 심볼 id에는 "id"라는 설명이 붙음`

07/10

## 원시값의 메서드
- 자바스크립트는 원시값(문자열, 숫자 등)을 마치 객체처럼 다룰 수 있다. 원시값에도 객체에서처럼 메서드를 호출할 수 있다. 

## toString(base)
- `num.toString(base)` 메서드는 base진법으로 num을 표현한 후, 이를 문자형으로 변환해 반환한다.


## 어림수 
- Math.floor
소수점 첫째 자리에서 내림(버림). 3.1은 3, -1.1은 -2가 됨
Math.ceil
소수점 첫째 자리에서 올림. 3.1은 4, -1.1은 -1이 됨
Math.round
소수점 첫째 자리에서 반올림. 3.1은 3, 3.6은 4, -1.1은 -1이 됨
Math.trunc (IE에서는 지원하지 않음)
소수부를 무시. 3.1은 3이 되고 -1.1은 -1이 됨


## parseInt와 parseFloat
- 두 함수는 불가능할 때까지 문자열에서 숫자를 ‘추출’한다. 숫자를 읽는 도중 오류가 발생하면 이미 수집된 숫자를 반환함. parseInt는 정수, parseFloat는 부동 소수점 숫자를 반환

## `Math.random()`
- 0과 1 사이의 난수를 반환합니다(1은 제외).

##` Math.max(a, b, c...) / Math.min(a, b, c...)`
- 인수 중 최대/최솟값을 반환

## `Math.pow(n, power)`
- n을 power번 거듭제곱한 값을 반환

## 대·소문자 변경하기
- 메서드 `toLowerCase()`와 `toUpperCase()`는 대문자를 소문자로, 소문자를 대문자로 변경(케이스 변경)

## 부분 문자열 찾기

-  `str.indexOf(substr, pos)`: 문자열 str의 pos에서부터 시작해, 부분 문자열 substr이 어디에 위치하는지를 찾아준다. 원하는 부분 문자열을 찾으면 위치를 반환하고 그렇지 않으면 -1을 반환한다.

- 두 번째 매개변수 pos는 선택적으로 사용할 수 있는데, 이를 명시하면 검색이 해당 위치부터 시작됨.

## includes, startsWith, endsWith
- `str.includes(substr, pos)`는 str에 부분 문자열 substr이 있는지에 따라 true나 false를 반환.

- 메서드 str.startsWith와 str.endsWith는 메서드 이름 그대로 문자열 str이 특정 문자열로 시작하는지(start with) 여부와 특정 문자열로 끝나는지(end with) 여부를 확인할 때 사용.

## 부분 문자열 추출
- `str.slice(start [, end])`
문자열의 start부터 end까지(end는 미포함)를 반환

- `str.substring(start [, end])`
start와 end 사이에 있는 문자열을 반환.

substring은 slice와 아주 유사하지만 start가 end보다 커도 괜찮다는 데 차이가 있다.

- `str.substr(start [, length])`
start에서부터 시작해 length 개의 글자를 반환


## 배열 선언
```
아래 두 문법을 사용하면 빈 배열을 만들 수 있다.
let arr = new Array();
let arr = [];
```

## pop·push와 shift·unshift
- 큐(queue)는 배열을 사용해 만들 수 있는 대표적인 자료구조로, 배열과 마찬가지로 순서가 있는 컬렉션을 저장하는 데 사용

- push – 맨 끝에 요소를 추가.
- pop – 배열 끝 요소를 제거하고, 제거한 요소를 반환.
- shift – 제일 앞 요소를 꺼내 제거한 후 남아있는 요소들을 앞으로 밀어서 두 번째 요소가 첫 번째 요소가 됨. 제거한 요소를 반환
- unshift – 배열 앞에 요소를 추가.

- push와 pop은 빠르지만 shift와 unshift는 느리다. pop 메서드는 요소를 옮기지 않으므로 각 요소는 기존 인덱스를 그대로 유지한다. 배열 끝에 무언가를 해주는 메서드의 실행 속도가 빠른 이유.


## ‘length’ 프로퍼티
- 배열에 무언가 조작을 가하면 length 프로퍼티가 자동으로 갱신된다. length 프로퍼티는 배열 내 요소의 개수가 아니라 가장 큰 인덱스에 1을 더한 값이다.


# 07/11

## iterable 객체
- 반복 가능한(iterable, 이터러블) 객체는 배열을 일반화한 객체이다. 이터러블 이라는 개념을 사용하면 어떤 객체에든 for..of 반복문을 적용할 수 있다.

## for.. of 반복문
- for.. of 반복문은 일반적으로 배열에 많이 사용되는데, 배열의 요소 개수만큼 반복하고, 반복 때마다 각 요소들을 사용할 수 있는 변수가 주어지는 독특한 반복문이다.
```
for (변수 of 배열) {
    반복동작부분
}
```
- 인덱스를 가져오진 못한다.

## 이터러블과 유사 배열
- 이터러블(iterable) 은 위에서 설명한 바와 같이 메서드 Symbol.iterator가 구현된 객체.
유사 배열(array-like) 은 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체.


## `Array.from()`
- 범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 ‘진짜’ Array를 만들어준다.


## 맵
- 맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사하지만, 맵은 키에 다양한 자료형을 허용한다.

```
let map = new Map();

map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키
```
- 객체는 키를 문자형으로 변환하지만 맵은 키의 타입을 변환시키지 않고 그대로 유지한다. 맵은 객체로 키로 사용 가능하다.


## 셋
- 셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션. 키가 없다.


## 캐싱
- 시간이 오래 걸리는 작업의 결과를 저장해서 연산 시간과 비용을 절약해주는 기법. 예를들어 동일한 함수를 여러 번 호출해야 할 때, 최초 호출 시 반환된 값을 어딘가에 저장해 놓았다가 그다음엔 함수를 호출하는 대신 저장된 값을 사용하는것.

# 07/12

## 캐싱
- 시간이 오래 걸리는 작업의 결과를 저장해서 연산 시간과 비용을 절약해주는 기법. 예를들어 동일한 함수를 여러 번 호출해야 할 때, 최초 호출 시 반환된 값을 어딘가에 저장해 놓았다가 그다음엔 함수를 호출하는 대신 저장된 값을 사용하는것.


## Object.keys, values, entries
- Object.keys(obj) – 객체의 키만 담은 배열을 반환
- Object.values(obj) – 객체의 값만 담은 배열을 반환
- Object.entries(obj) – [키, 값] 쌍을 담은 배열을 반환


## 구조 분해 할당
- 객체나 배열을 변수로 '분해’할 수 있게 해주는 특별한 문법.

`let[A, B] = ["apple", "banana"]`는
`let A = "apple"`, `let B = "banana"`와 같다.

- 할당 연산자 우측엔 모든 이터러블(반복 가능한 객체)이 올 수 있다. 할당 연산자 좌측엔 뭐든지 올 수 있다.

## JSON
- JSON (JavaScript Object Notation)은 값이나 객체를 나타내주는 범용 포맷으로 데이터 교환을 목적으로 사용하는 경우가 많다.
- JSON.stringify – 객체를 JSON으로 바꿔준다.
JSON.parse – JSON을 객체로 바꿔준다.

## 재귀적 구조
- 자기 자신의 일부를 복제하는 형태의 자료 구조. HTML과 XML도 재귀적 자료 구조 형태

## 재귀(recursion)
- 함수 내부에서 자기 자신을 호출하는 것을 나타내는 프로그래밍 용어

## 나머지 매개변수 `...`
- 임의의(정해지지 않은) 수의 인수를 받는 방법. 남아있는 매개변수들을 한데 모아 배열에 집어넣는다.

# 07/13

## 변수의 유효범위와 클로저

### 렉시컬 환경
- 자바스크립트에서는 실행 중인 함수, 코드 블록 {...}, 스크립트 전체는 렉시컬 환경(Lexical Environment) 이라 불리는 내부 숨김 연관 객체(internal hidden associated object)를 갖는다.

- 렉시컬 환경 객체는 두 부분으로 구성됨.
	- 환경 레코드(Environment Record) – 모든 지역 변수를 프로퍼티로 저장하고 있는 객체. this 값과 같은 기타 정보도 여기에 저장됨.
	- 외부 렉시컬 환경(Outer Lexical Environment) 에 대한 참조 – 외부 코드와 연관됨

- ’변수’는 특수 내부 객체인 환경 레코드의 프로퍼티일 뿐이다. '변수를 가져오거나 변경’하는 것은 '환경 레코드의 프로퍼티를 가져오거나 변경’함을 의미한다.

- 렉시컬 환경은 명세서에만 존재하기 때문에 직접 렉시컬 환경을 얻거나 조작하는것은 불가능하다.

- 함수는 변수와 마찬가지로 값이나 함수 선언문(function declaration)으로 선언한 함수는 일반 변수와는 달리 바로 초기화된다는 점에서 차이가 있다. 그래서 함수 선언문으로 선언한 함수는 즉시 사용 가능.

- 코드에서 변수에 접근할 땐, 먼저 내부 렉시컬 환경을 검색 범위로 잡는다. 원하는 변수를 찾지 못하면 검색 범위를 내부 렉시컬 환경이 참조하는 외부 렉시컬 환경으로 확장한다. 이 과정은 검색 범위가 전역 렉시컬 환경으로 확장될 때까지 반복된다.

- 모든 함수는 함수를 호출한 장소에 상관 없이 함수가 생성된 곳의 렉시컬 환경을 기억한다.


## 클로저
- 클로저는 외부 변수를 기억하고 이 외부 변수에 접근할 수 있는 함수를 의미. 자바스크립트에선 모든 함수가 자연스럽게 클로저가 된다.

- 함수 호출이 끝나면 함수에 대응하는 렉시컬 환경이 메모리에서 제거된다. 함수와 관련된 변수들은 이때 모두 사라짐.

- 중첩함수의 경우 겉의 큰 함수를 호출했을 때는 렉시컬 환경이 메모리에 유지된다. 호출시마다 각각 렉시컬 환경이 만들어진다.

```
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // g가 살아있는 동안엔 연관 렉시컬 환경도 메모리에 살아있음.

g = null; // 도달할 수 없는 상태가 되었으므로 메모리에서 삭제됨.
```

# 07/14


- map을 이용해 컴포넌트를 동적으로 생성해 랜더링하고 새 데이터를 배열에 넣어 컴포넌트를 추가할때 리액트는 새로운 아이템이 어디에 추가되어야 하는지 알려줘야 한다.


- key를 통해 리액트가 개별 아이템을 인식할수 있다
```
{props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
```
- `props.items.map((expense, index)`와 같이 index를 두번째 인자로 사용해 map에서 자동으로 인덱스를 관리하게 할수 있지만 버그를 발생시킬수 있어 권장하지 않는다.

- key에는 고유식별자가 들어가며 어떤 숫자나 문자열도 고유식별자가 될 수 있다.

- 즉 리스트인 아이템을 맵핑할때는 key를 추가해야한다. 그래야 효율적으로 html태그가 알맞는 위치에 생성된다.

#07/16

## 오래된 var

- var로 선언한 변수는 let으로 선언한 변수와 유사함. 대부분의 경우에 let을 var로, var를 let으로 바꿔도 큰 문제 없이 동작.

- var로 선언한 변수의 스코프는 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능하다.

- 한 스코프에서 같은 변수를 let으로 두 번 선언하면 에러가 발생 하지만 var로 같은 변수를 여러 번 중복으로 선언할 수 있다. 그러나 이미 선언된 변수에 var를 사용하면 두 번째 선언문은 무시된다.

- 함수 본문 내에서 var로 선언한 변수는 선언 위치와 상관없이 함수 본문이 시작되는 지점에서 정의된다.

- 이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다. var로 선언한 모든 변수는 함수의 최상위로 ‘끌어 올려지기(hoisted)’ 때문(hoist는 끌어올리다 라는 뜻)

- 선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.


## 전역 객체

- 전역 객체를 사용하면 어디서나 사용 가능한 변수나 함수를 만들 수 있다.

- 전역 객체엔 Array와 같은 내장 객체, window.innerHeight(뷰포트의 높이를 반환함)같은 브라우저 환경 전용 변수 등이 저장되어 있다

- 이해하기 쉽고 요구사항 변경에 쉽게 대응할 수 있는 코드를 구현하려면, window.x처럼 전역 객체의 프로퍼티에 직접 접근하자.


## 객체로서의 함수와 기명 함수 표현식

- 함수의 자료형은 객체이다. 함수는 호출이 가능한(callable) '행동 객체’라고 이해하면 쉽다. 함수는 호출 할 수 있을 뿐만 아니라 객체처럼 함수에 프로퍼티를 추가·제거하거나 참조를 통해 전달할 수도 있다.

## ‘name’ 프로퍼티

- 함수 이름을 가져올 수 있고 익명함수라도 자동으로 이름이 할당된다. 객체메서드의 이름도 가져올수있다.
```
function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi
```

## ‘length’ 프로퍼티
- 함수 매개변수의 개수를 반환한다.
```
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```
- `...`을 이용한 나머지 매개변수는 포함하지 않는다.


## new Function 문법
- 함수 표현식과 함수 선언문 이외에 함수를 만들 수도 있는 방법
```
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
```
- new Function을 이용해 만든 함수의 [[Environment]]는 외부 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하므로 외부 변수를 사용할 수 없다. 단점 같아 보이는 특징이지만 에러를 예방해 준다는 관점에선 장점이다.


## 호출 스케줄링
- 일정 시간이 지난 후에 원하는 함수를 예약 실행(호출)할 수 있게 하는 것

- setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법

`let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)`
- func|code
실행하고자 하는 코드로, 함수 또는 문자열 형태. 대개는 이 자리에 함수.
- delay
실행 전 대기 시간으로, 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0
- arg1, arg2…
함수에 전달할 인수들로, IE9 이하에선 지원하지 않는다.
```
function sayHi(who, phrase) {
  alert( who + ' 님, ' + phrase );
}

setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.
```

## clearTimeout으로 스케줄링 취소하기
- setTimeout을 호출하면 '타이머 식별자(timer identifier)'가 반환됩니다. 스케줄링을 취소하고 싶을 땐 이 식별자(아래 예시에서 timerId)를 사용하면 된다.
```
let timerId = setTimeout(...);
clearTimeout(timerId);
```

- setInterval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법
- setInterval 메서드는 setTimeout과 동일한 문법을 사용. 다만, setTimeout이 함수를 단 한 번만 실행하는 것과 달리 setInterval은 함수를 주기적으로 실행한다.
```
// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => alert('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);
```

- 중첩 setTimeout을 사용하면 setInterval을 사용한 것보다 유연하게 코드를 작성할 수 있습니다. 여기에 더하여 지연 간격 보장이라는 장점도 있다.

- 대기 시간이 0인 setTimeout(setTimeout(func, 0) 혹은 setTimeout(func))을 사용하면 ‘현재 스크립트의 실행이 완료된 후 가능한 한 빠르게’ 원하는 함수를 호출할 수 있다.

- 지연 없이 중첩 setTimeout을 5회 이상 호출하거나 지연 없는 setInterval에서 호출이 5회 이상 이뤄지면, 4밀리초 이상의 지연 간격이 강제로 더해진다. 이는 브라우저에만 적용되는 사항이며, 하위 호환성을 위해 유지되고 있다.

- 스케줄링 메서드를 사용할 땐 명시한 지연 간격이 보장되지 않을 수도 있다는 점에 유의.

## bind
- 모든 함수는 this를 수정하게 해주는 내장 메서드 bind를 제공한다.
`let boundFunc = func.bind(context);`
- func.bind(context)는 함수처럼 호출 가능한 '특수 객체(exotic object)'를 반환한다. 이 객체를 호출하면 this가 context로 고정된 함수 func가 반환됨.

따라서 boundFunc를 호출하면 this가 고정된 func를 호출하는 것과 동일한 효과가 나타난다.

- bind는 보통 객체 메서드의 this를 고정해 어딘가에 넘기고자 할 때 사용

## 화살표 함수의 몇 가지 독특하고 유용한 기능
- 화살표 함수에는 'this’가 없다. this가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없다. 그러므로 new와 함께 호출할 수 없다.

- 화살표 함수엔 'arguments’가 없다.


# 07/17

## 프로토타입 상속

- 기존에 있는 기능을 가져와 확장해야 하는 경우 자바스크립트 언어의 고유 기능인 프로토타입 상속(prototypal inheritance) 을 이용하면 실현가능하다.

## [[Prototype]]

- 자바스크립트의 객체는 명세서에서 명명한 [[Prototype]]이라는 숨김 프로퍼티를 갖는다. 이 숨김 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데, 다른 객체를 참조하는 경우 참조 대상을 '프로토타입(prototype)'이라 부른다.


- object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 자바스크립트는 자동으로 프로토타입에서 프로퍼티를 찾는다. 프로그래밍에선 이런 동작 방식을 '프로토타입 상속’이라 함.

- 프로토타입은 프로퍼티를 읽을 때만 사용. 프로퍼티를 추가, 수정하거나 지우는 연산은 객체에 직접 해야 함.

- this는 프로토타입에 영향을 받지 않는다. 메서드를 객체에서 호출했든 프로토타입에서 호출했든 상관없이 this는 언제나 `.` 앞에 있는 객체이다.

- Object.create(proto, [descriptors]) – [[Prototype]]이 proto를 참조하는 빈 객체를 만듭니다. 이때 프로퍼티 설명자를 추가로 넘길 수 있습니다.
Object.getPrototypeOf(obj) – obj의 [[Prototype]]을 반환합니다.
Object.setPrototypeOf(obj, proto) – obj의 [[Prototype]]이 proto가 되도록 설정합니다.
```
let animal = {
  eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성합니다.
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // rabbit의 프로토타입을 {}으로 바꿉니다.
```

# 07/18

## 클래스
- 클래스는 객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀로, 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다.

- 클래스는 다음과 같은 기본 문법을 사용해 만들 수 있다. 메서드 사이엔 쉼표가 없다.
```
class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```
- 이렇게 클래스를 만들고, new MyClass()를 호출하면 내부에서 정의한 메서드가 들어 있는 객체가 생성된다. 객체의 기본 상태를 설정해주는 생성자 메서드 constructor()는 new에 의해 자동으로 호출되므로, 특별한 절차 없이 객체를 초기화 할 수 있다.

- 함수처럼 클래스도 다른 표현식 내부에서 정의, 전달, 반환, 할당할 수 있다. 클래스 표현식에 이름을 붙이면, 이 이름은 오직 클래스 내부에서만 사용할 수 있다.

- 객체처럼 클래스도 getter나 setter, 계산된 프로퍼티(computed property)를 지원한다.


## 클래스 상속

- 클래스 상속을 사용하면 클래스를 다른 클래스로 확장할 수 있다. 기존에 존재하던 기능을 토대로 새로운 기능을 만드는 것이 가능.

## ‘extends’ 키워드

- 클래스 Animal을 만든뒤 클래스 Rabbit을 만드려면 동물 관련 메서드가 담긴 Animal을 확장해서 만들어야 한다. 이렇게 하면 Rabbit도 Animal이 할 수 있는 ‘일반적인’ 동작을 수행할 수 있다.

- 클래스 확장 문법 `class Child extends Parent`를 사용해 클래스를 확장
```
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }
}
// Animal을 상속받는 class Rabbit

let rabbit = new Rabbit("흰 토끼");
```
- 클래스 Rabbit을 사용해 만든 객체는 rabbit.hide() 같은 Rabbit에 정의된 메서드에도 접근할 수 있고, rabbit.run() 같은 Animal에 정의된 메서드에도 접근할 수 있다.


## 메서드 오버라이딩

- 특별한 사항이 없으면 class Rabbit은 class Animal에 있는 메서드를 ‘그대로’ 상속받지만 Rabbit에서 stop() 등의 메서드를 자체적으로 정의하면, 상속받은 메서드가 아닌 자체 메서드가 사용된다.

- 키워드 super는 이럴 때 사용한다.
	- super.method(...)는 부모 클래스에 정의된 메서드, method를 호출.
	- super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 할 수 있습니다.

- 화살표 함수엔 super가 없다.

## 생성자 오버라이딩

- 생성자는 기본적으로 부모 constructor를 호출하고 이때 부모 constructor에도 인수를 모두 전달한다. 클래스에 자체 생성자가 없는 경우엔 이런 일이 모두 자동으로 일어난다.

- Rabbit에 커스텀 생성자를 추가하면 에러가 발생하는데 이유는 
상속 클래스의 생성자에선 반드시 `super(...)`를 호출해야 하는데, super(...)를 호출하지 않아서 이다. super(...)는 this를 사용하기 전에 반드시 호출해야 한다.

-  `super(...)`를 호출해야 하는 이유는 일반 클래스가 new와 함께 실행되면, 빈 객체가 만들어지고 this에 이 객체를 할당하지만 상속 클래스에서는 이런 일이 안일어난다. this에 이 객체를 할당하는 일을 부모 클래스의 생성자가 처리해주기 때문이다.

- 그렇기 때문에 상속 클래스의 생성자에선 super를 호출해 부모 생성자를 실행해 주어야 한다. 그렇지 않으면 this가 될 객체가 만들어지지 않아 에러가 발생한다.


## 정적 메서드와 정적 프로퍼티

- "prototype"이 아닌 클래스 함수 자체에 메서드를 설정하는 메서드를 정적(static) 메서드라고 부른다. 정적 메서드는 특정 클래스 인스턴스가 아닌 클래스 '전체’에 필요한 기능을 만들 때 사용한다.

- 정적 메서드는 아래와 같이 클래스 안에서 static 키워드를 붙여 만들 수 있다.

```
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

- 정적 프로퍼티는 일반 클래스 프로퍼티와 유사하게 생겼는데 앞에 static이 붙는다.
```
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor
```
- 정적 프로퍼티와 메서드는 상속된다. 정적 프로퍼티는 데이터를 클래스 수준에 저장하고 싶을 때 사용한다.

## private, protected 프로퍼티와 메서드

- 객체 지향 프로그래밍에서 가장 중요한 원리 중 하나는 '내부 인터페이스와 외부 인터페이스를 구분 짓는 것(캡슐화)’이다.

- 내부 인터페이스를 엄격하게 구분하면, 클래스 개발자들은 사용자에게 알리지 않고도 자유롭게 내부 프로퍼티와 메서드들을 수정할 수 있다.

- 복잡성 은닉. 구현 세부 사항이 숨겨져 있으면 간단하고 편리해집니다. 외부 인터페이스에 대한 설명도 문서화하기 쉬워진다.

- public: 어디서든지 접근할 수 있으며 외부 인터페이스를 구성합니다. 지금까지 다룬 프로퍼티와 메서드는 모두 public이다.
- private: 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 때 쓰인다.


## instanceof 연산자

- instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지를 확인할 수 있다. 상속 관계도 확인해준다.

- `obj instanceof Class` obj가 Class에 속하거나 Class를 상속받는 클래스에 속하면 true가 반환
```
class Rabbit {}
let rabbit = new Rabbit();

// rabbit이 클래스 Rabbit의 객체인가요?
alert( rabbit instanceof Rabbit ); // true
```
- 클래스가 아닌 생성자 함수/Array 같은 내장 클래스에도 사용에도 사용가능.



# 07/19


- 리액트 jsx코드에서 중괄호 안에 조건문을 넣을때 삼항연산자를 사용하는 대신 &&를 이용하는 방법도 있다.
```
return(
...
{AAA.length  === 0 ? <p>zero</p> : <p>not zero</p>}
// 위와 아래가 같음
{filteredExpenses.length === 0 && <p>zero</p>}
{filteredExpenses.length > 0 && <p>not zero</p>}
```
- 또는 아예 밖에서 jsf코드를 변수에 넣어서 조건문을 사용할 수 도 있다.
```
let zeroContent = <p>zero</p>

  if (AAA.length > 0) {
    zeroContent = <p>not zero</p>
    ))
  }

return (
{zeroContent}
```

## 리액트 인라인 스타일

- 태그 안에 style={{}}을 통해 스타일링한다.
`<input style={{borderColor: !isValid ? "red" : 'black' />`

- 태그에 className을 붙일때 
```
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>
```
이런식으로 isValid가 true인지 false인지에 따라 동적으로 'form-control' 스타일을 따를지 'form-control invalid'스타일을 따를지 정할 수 있다.

## 템플릿 리터럴

- 템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴로 이중 따옴표 나 작은 따옴표 대신 백틱(` `)을 이용한다.

- 표현식을 삽입할수 있다.
```
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// 위를 템플릿 리터럴 사용시
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
```

## styled-component
- styled-component로 설정한 스타일은 각각 고유한 클래스 이름을 갖기 때문에 다른 컴포넌트에 절대 영향을 주지 않는다.
  

# 07/20

## ‘try…catch’ 문법

```
try {

  // 코드...

} catch (err) {

  // 에러 핸들링

}
```

- 먼저, try {...} 안의 코드가 실행됨.
에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 건너뛴다.
에러가 있다면, try 안 코드의 실행이 중단되고, catch(err) 블록으로 제어 흐름이 넘어간다. 변수 err(아무 이름이나 사용 가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체이다. (err)은 생략 가능.

- try..catch는 오직 런타임 에러에만 동작. 즉 try..catch는 실행 가능한(runnable) 코드에만 동작한다. 실행 가능한 코드는 유효한 자바스크립트 코드를 의미함.


## 'throw' 연산자

- throw 연산자는 에러를 생성한다. `throw <error object>`처럼 사용.


## 'try…catch…finally'

```
try {
   ... 코드를 실행 ...
} catch(e) {
   ... 에러 핸들링 ...
} finally {
   ... 항상 실행 ...
}
```
- finally라는 코드 절을 하나 더 가질 수 있다. catch를 제외하고 `try..finally`도 가능. 



# 07/21

- <label>은 input의 이름을 적는 태그. htmlFor(props)에 input의 아이디나 네임을 적어 인풋과 연결합니다.
- 예시: `<label htmlFor='username'>Username</label>`


## promise

```
let promise = new Promise(function(resolve, reject) {
  // executor (개발자가 제작하는 코드)
});
```
- new Promise에 전달되는 함수는 executor(실행자, 실행 함수)라 부른다. executor는 new Promise가 만들어질 때 자동으로 실행된다.

- executor의 인수 resolve와 reject는 자바스크립트에서 자체 제공하는 콜백으로 개발자는 resolve와 reject를 신경 쓰지 않고 executor 안 코드만 작성하면 된다.

-  executor에선 처리 성공여부에 따라 인수로 넘겨준 콜백(resolve나 reject) 중 하나를 반드시 호출해야 한다.

- resolve(value) — 일이 성공적으로 끝난 경우 그 결과를 나타내는 value와 함께 호출
reject(error) — 에러 발생 시 에러 객체를 나타내는 error와 함께 호출

## then
- 프라미스에서 가장 중요하고 기본이 되는 메서드
```
promise.then(
  function(result) { /* 결과(result)를 다룹니다 */ },
  function(error) { /* 에러(error)를 다룹니다 */ }
);
```
- .then의 첫 번째 인수는 프라미스가 이행되었을 때 실행되는 함수로, 실행 결과를 다룸.

.then의 두 번째 인수는 프라미스가 거부되었을 때 실행되는 함수로, 에러를 다룸.

## catch

- .catch 는 프라미스에서 발생한 모든 에러를 다룬다. reject()가 호출되거나 에러가 던져지면 `.catch`에서 이를 처리한다. `.catch`는 에러를 처리하고 싶은 지점에 정확히 위치시켜야 한다.


## 프라미스 API

- Promise 클래스에는 5가지 정적 메서드가 있다.

## Promise.all

- `Promise.all`은 요소 전체가 프라미스인 배열(엄밀히 따지면 이터러블 객체이지만, 대개는 배열임)을 받고 새로운 프라미스를 반환.

`let promise = Promise.all([...promises...]);`

- 배열 안 프라미스가 모두 처리되면 새로운 프라미스가 이행되는데, 배열 안 프라미스의 결괏값을 담은 배열이 새로운 프라미스의 result가 된다.

- 배열 result의 요소 순서는 Promise.all에 전달되는 프라미스 순서와 같다. 첫 번째 프라미스는 가장 늦게 이행되더라도 처리 결과는 배열의 첫 번째 요소에 저장된다.

- 프라미스가 하나라도 거부되면(에러가 발생하면) Promise.all은 즉시 거부되고 배열에 저장된 다른 프라미스의 결과는 완전히 무시된다. 이행된 프라미스의 결과도 무시됨.


## Promise.allSettled

- 모든 프라미스가 처리될 때까지 기다린다. 반환되는 배열은 
응답이 성공할 경우 – {status:"fulfilled", value:result}
에러가 발생한 경우 – {status:"rejected", reason:error}
여러 요청 중 하나가 실패해도 다른 요청 결과는 여전히 필요할때 유용하다.

## Promise.race

- Promise.all과 비슷하다. 다만 가장 먼저 처리되는 프라미스의 결과(혹은 에러)를 반환한다.

## Promise.resolve와 Promise.reject

- Promise.resolve와 Promise.reject는 async/await 문법(뒤에서 다룸)이 생긴 후로 쓸모없어졌기 때문에 근래에는 거의 사용하지 않는다.

- Promise.resolve(value) – 주어진 값을 사용해 이행 상태의 프라미스를 만듭니다.
Promise.reject(error) – 주어진 에러를 사용해 거부 상태의 프라미스를 만듭니다.

## async와 await
 - async는 function 앞에 위치
```
async function f() {
  return 1;
}
```
function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환한다.(프라미스가 아닌 것은 프라미스로 감싸 반환)


- await는 async 함수 안에서만 동작
```
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();
```
await는 말 그대로 프라미스가 처리될 때까지 함수 실행을 기다리게 만든다. 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않는다.

- async 함수가 아닌데 await을 사용하면 문법 에러가 발생

- 에러가 발생하면 await가 에러를 던지는데 try..catch를 사용해 잡을 수 있다.


# 07/22


## 제너레이터

- 일반 함수는 하나의 값(혹은 0개의 값)만을 반환하지만 제너레이터(generator)를 사용하면 여러 개의 값을 필요에 따라 하나씩 반환(yield)할 수 있다.
```
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```
- next()는 제너레이터의 주요 메서드. next()를 호출하면 가장 가까운 yield <value>문을 만날 때까지 실행이 지속됨.

- 제너레이터는 이터러블 이라 for..of 반복문을 사용해 값을 얻을 수 있다.

## async 이터레이터

- 일반적인 이터레이터와 제너레이터는 데이터를 가져오는 데 시간이 걸리지 않을 때에 적합하다. 그런데 약간의 지연이 있어서 데이터가 비동기적으로 들어오는 경우 async 이터레이터와 async 제너레이터, for..of대신 for await..of를 사용한다.


## 모듈

- 개발하는 애플리케이션의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 하는데 이때 분리된 파일 각각을 '모듈(module)'이라고 부른다. 모듈은 대개 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된다.

- 모듈에 특수한 지시자 export와 import를 적용하면 다른 모듈을 불러와 불러온 모듈에 있는 함수를 호출하는 것과 같은 기능 공유가 가능
```
// export 지시자를 사용해 파일 sayHi.js 내부의 함수 sayHi를 외부로 내보기.
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```


# 07/23


## Proxy

-  특정 객체를 감싸 프로퍼티 읽기, 쓰기와 같은 `객체에 가해지는 작업을 중간에서 가로채는 객체`로, 가로채진 작업은 Proxy 자체에서 처리되기도 하고, 원래 객체가 처리하도록 그대로 전달되기도 한다.

`let proxy = new Proxy(target, handler)`

- target – 감싸게 될 객체로, 함수를 포함한 모든 객체가 가능.
handler – 동작을 가로채는 메서드인 '트랩(trap)'이 담긴 객체로, 여기서 프락시를 설정(예시: get 트랩은 target의 프로퍼티를 읽을 때, set 트랩은 target의 프로퍼티를 쓸 때 활성화됨)

- proxy에 작업이 가해지고, handler에 작업과 상응하는 트랩이 있으면 트랩이 실행되어 프락시가 이 작업을 처리한다. 트랩이 없으면 target에 작업이 직접 수행된다.


## get 트랩

- get메서드는 프로퍼티를 읽으려고 할 때 작동. 프로퍼티 읽기를 가로채려면 handler에 `get(target, property, receiver)` 메서드가 있어야 한다.

## set 트랩

- set 트랩은 프로퍼티에 값을 쓰려고 할 때 작동. `set(target, property, value, receiver)`

## 내장 함수 eval

- 문자열 형태의 코드를 실행. 잘사용되지 않음.
```
let value = eval('let i = 0; ++i');
alert(value); // 1
```
- 외부 변수에 접근/변경 가능하다.


# 07/24

## BigInt

- BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형. 정수 리터럴 끝에 n을 붙이거나 함수 BigInt를 호출하면 문자열이나 숫자를 가지고 BigInt 타입의 값을 만들 수 있다.

- BigInt형 값을 대상으로 한 연산은 BigInt형 값을 반환. 단항 덧셈 연산자는 bigint에 사용할 수 없다.
```
alert( +bigint ); // 에러
```

## 브라우저 환경

- 최상단엔 window라 불리는 ‘루트’ 객체가 있다. 자바스크립트 코드의 전역 객체이며 '브라우저 창(browser window)'을 대변하고, 이를 제어할 수 있는 메서드를 제공한다.

## 문서 객체 모델(DOM)

- 문서 객체 모델(Document Object Model, DOM)은 웹 페이지 내의 모든 콘텐츠를 객체로 나타내주며 이 객체는 수정 가능하다.

- document 객체는 페이지의 기본 ‘진입점’ 역할을 하며 document 객체를 이용해 페이지 내 그 무엇이든 변경할 수 있고, 원하는 것을 만들 수 있다.


## 브라우저 객체 모델(BOM)

- 브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 제어하기 위해 브라우저(호스트 환경- 자바스크립트가 돌아가는 플랫폼이 제공하는 특정기능)가 제공하는 추가 객체이다. (HTML 명세서의 일부)

	- 예 - navigator 객체:브라우저와 운영체제에 대한 정보를 제공, location 객체: 현재 URL을 읽기 및 새URL로 변경(redirect)할 수 있게 해줌.

## 커링 (Currying) 

- 커링은 f(a, b, c)처럼 단일 호출로 처리하는 함수를 f(a)(b)(c)와 같이 각각의 인수가 호출 가능한 프로세스로 호출된 후 병합되도록 변환하는 것.


# 07/25

## DOM 트리

- DOM은 HTML을 태그 트리 구조로 표현한다. 모든 HTML 태그는 객체이다. 태그 하나가 감싸고 있는 ‘자식’ 태그는 중첩 태그(nested tag)라고 부르고 태그 내의 문자(text) 역시 객체이다. 즉 트리에 있는 노드는 모두 객체이다.

- 기형적인 HTML을 만나면 브라우저는 DOM 생성과정에서 HTML을 자동으로 교정한다. 주석도 노드가 된다. HTML 내의 모든 것은 DOM을 구성한다.

- DOM에 수행하는 모든 연산은 document 객체에서 시작한다. document 객체는 DOM에 접근하기 위한 '진입점’으로 진입점을 통과하면 어떤 노드에도 접근할 수 있다.

- DOM 트리 상단의 노드들은 document가 제공하는 프로퍼티를 사용해 접근할 수 있다. `<html> = document.documentElement`, `<body> = document.body`, `<head> = document.head`

- childNodes 컬렉션은 텍스트 노드를 포함한 모든 자식 노드를 담고 있다. firstChild와 lastChild 프로퍼티를 이용하면 첫 번째, 마지막 자식 노드에 빠르게 접근할 수 있다.

- 요소 노드에만 적용: children 프로퍼티는 해당 요소의 자식 노드 중 요소 노드만 가리킨다.
firstElementChild와 lastElementChild 프로퍼티는 각각 첫 번째 자식 요소 노드와 마지막 자식 요소 노드를 가킨다.
previousElementSibling과 nextElementSibling은 형제 요소 노드를 가리킨다.
parentElement 는 부모 요소 노드를 가리킨다.


# 07/26

## 요소 검색

- 요소에 id 속성이 있으면 위치에 상관없이 메서드 `document.getElementById(id)`를 이용해 접근할 수 있다.

- `elem.querySelectorAll(css)` 메서드는 elem의 자식 요소 중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다.
```
// 아래 예시는 마지막 <li>요소 모두를 반환
 let elements = document.querySelectorAll('ul > li:last-child');
```
- `elem.querySelector(css)`는 주어진 CSS 선택자에 대응하는 요소 중 첫 번째 요소를 반환한다.

## 주요 노드 프로퍼티

- `nodeType` 프로퍼티는 DOM 노드의 '타입’을 알아내고자 할 때 쓰이는 구식 프로퍼티이다. 모던 자바스크립트에선 노드의 타입을 instanceof나 클래스 기반의 테스트를 이용해 확인한다.

- `nodeName`이나 `tagName` 프로퍼티를 사용하면 DOM 노드의 태그 이름을 알아낼 수 있다.

- `innerHTML` 프로퍼티를 사용하면 요소 안의 HTML을 문자열 형태로 받아올 수 있고 요소 안 HTML을 수정하는 것도 가능하다. innerHTML은 페이지를 수정하는 데 쓰이는 강력한 방법 중 하나이다.

- innerHTML 프로퍼티는 요소 노드에만 사용할 수 있기 때문에 텍스트 노드 같은 다른 타입의 노드에는 innerHTML과 유사한 역할을 해주는 프로퍼티인 `nodeValue`와 `data`를 사용해야한다.

- textContent를 사용하면 요소 내의 텍스트에 접근할 수 있다


# 07/27

## 클래스

- className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용.
classList – 클래스 하나를 관리할 수 있게 해주는 메서드.

- style 프로퍼티 – 카멜 표기법을 이용해 변경한 스타일이 있는 객체로, 이 객체를 조작하는 것은 "style" 속성과 대응하는 개별 프로퍼티를 조작하는 것과 같다.


## 요소 사이즈

- offsetLeft와 offsetTop 프로퍼티는 offsetParent를 기준으로 각각 요소가 오른쪽으로, 아래쪽으로 얼마나 떨어져 있는지를 나타낸다.

- offsetWidth와 offsetHeight: 두 프로퍼티는 각각 요소 '가장 바깥 부분(outer)'이 차지하는 너비와 높이 정보를 제공한다.

- clientTop과 clientLeft를 사용하면 테두리(border) 두께를 측정할 수 있다. 그런데 사실 정확히 일치하지 않다

- clientWidth와 clientHeight 프로퍼티는 테두리 안 영역의 사이즈 정보를 제공

- scrollWidth와 scrollHeight 프로퍼티는 clientWidth와 clientHeight 유사한데, 스크롤바에 의해 감춰진 영역도 포함한다.

- scrollLeft와 scrollTop은 가로 스크롤이 오른쪽, 세로 스크롤이 아래로 움직임에 따라 가려진 영역의 너비와 높이를 나타낸다.


## 브라우저 창의 너비와 높이

- 창이 차지하는 너비와 높이를 알려면 document.documentElement의 clientWidth와 clientHeight를 사용하면 된다.

## 좌표

- 창 기준 – position:fixed와 유사하게 창(window) 맨 위 왼쪽 모서리를 기준으로 좌표를 계산.  이 좌표를 clientX/clientY로 표시.


- 문서 기준 – 문서(document) 최상단(root)에서 position:absolute를 사용하는 것과 비슷하게 문서 맨 위 왼쪽 모서리를 기준으로 좌표를 계산.  좌표는 pageX/pageY로 표시

- getBoundingClientRect로 요소 좌표를 얻을 수 있다.


# 07/28

## 브라우저 이벤트

- 이벤트(event) 는 무언가 일어났다는 신호이고 모든 DOM 노드는 이런 신호를 만든다. (※ 이벤트는 DOM에만 한정되진 않음.)

## 마우스 이벤트

- `click` – 요소 위에서 마우스 왼쪽 버튼을 눌렀을 때(터치스크린이 있는 장치에선 탭 했을 때) 발생.
- `contextmenu` – 요소 위에서 마우스 오른쪽 버튼을 눌렀을 때 발생.
- `mouseover`와 `mouseout` – 마우스 커서를 요소 위로 움직였을 때, 커서가 요소 밖으로 움직였을 때 발생.
- `mousedown`과 `mouseup` – 요소 위에서 마우스 왼쪽 버튼을 누르고 있을 때, 마우스 버튼을 뗄 때 발생.
- `mousemove` – 마우스를 움직일 때 발생.


## 폼 요소 이벤트

- `submit` – 사용자가 <form>을 제출할 때 발생.
- `focus` – 사용자가 <input>과 같은 요소에 포커스 할 때 발생.

## 키보드 이벤트

- `keydown`과 `keyup` – 사용자가 키보드 버튼을 누르거나 뗄 때 발생.

## 문서 이벤트

- `DOMContentLoaded` – HTML이 전부 로드 및 처리되어 DOM 생성이 완료되었을 때 발생.

## CSS 이벤트

- `transitionend` – CSS 애니메이션이 종료되었을 때 발생.

## 이벤트 핸들러

- 이벤트에 반응하려면 이벤트가 발생했을 때 실행되는 함수인 핸들러(handler) 를 할당해야 한다. 핸들러는 사용자의 행동에 어떻게 반응할지를 자바스크립트 코드로 표현한 것이다.


## HTML 속성

- HTML 안의 on<event> 속성에 핸들러를 할당할 수 있다.
```
// 예시
<input value="클릭해 주세요." onclick="alert('클릭!')" type="button">
// 버튼을 클릭하면 onclick 안의 코드가 실행
```

## DOM 프로퍼티

- DOM 프로퍼티 on<event>을 사용해도 핸들러를 할당할 수 있다. (`elem.onclick`)
```
// 예시
<input id="elem" type="button" value="클릭해 주세요.">
<script>
//  elem.ONCLICK은 안된다.
  elem.onclick = function() {
    alert('감사합니다.');
  };
</script>
// 위의 예시와 동일한 결과
```
onclick 프로퍼티는 단 하나밖에 없기 때문에, 복수의 이벤트 핸들러를 할당할 수 없다. 여러번쓰면 마지막것이 기존 작성된 핸들러를 덮어쓴다.

- 핸들러 내부에 쓰인 this의 값은 핸들러가 할당된 요소이다.
```
// 아래 예시의 this는 button이므로 버튼을 클릭하면 버튼 안의 콘텐츠(클릭해 주세요.)가 얼럿창에 출력됨.
<button onclick="alert(this.innerHTML)">클릭해 주세요.</button>
```

- setAttribute로 핸들러를 할당하면 동작하지 않습니다.

- 핸들어에 함수를 할당할시 함수 호출이 아닌 포인터만 넘겨줘야한다.
```
// 올바른 방법
button.onclick = sayThanks;

// 틀린 방법
button.onclick = sayThanks();
```

## addEventListener

- 하나의 이벤트에 복수의 핸들러를 할당할 수 없다는 문제로 인해 핸들러를 여러 개 할당할 수 있도록 나온 메서드.

- 문법
`element.addEventListener(event, handler, [options]);`
event: 이벤트 이름(예: "click")
handler: 핸들러 함수
options: 아래 프로퍼티를 갖는 객체

- 핸들러 삭제는 removeEventListener로 한다. 핸들러를 삭제하려면 핸들러 할당 시 사용한 함수를 그대로 전달해주어야 한다


## 이벤트 객체

- 이벤트가 발생하면 브라우저는 *이벤트 객체(event object)*라는 것을 만들고 여기에 이벤트에 관한 상세한 정보를 넣은 다음, 핸들러에 인수 형태로 전달한다.

```
elem.onclick = function(event) {
    // 이벤트 타입과 요소, 클릭 이벤트가 발생한 좌표를 보여줌
    alert(event.type + " 이벤트가 " + event.currentTarget + "에서 발생했습니다.");
    alert("이벤트가 발생한 곳의 좌표는 " + event.clientX + ":" + event.clientY +"입니다.");
  };
```
- event.type: 이벤트 타입
- event.currentTarget: 이벤트를 처리하는 요소. 화살표 함수를 사용해 핸들러를 만들거나 다른 곳에 바인딩하지 않은 경우엔 this가 가리키는 값과 같음.
- event.clientX / event.clientY: 포인터 관련 이벤트에서, 커서의 상대 좌표(모니터 기준 좌표가 아닌, 브라우저 화면 기준 좌표)


- addEventListener를 사용하면 함수뿐만 아니라 객체를 이벤트 핸들러로 할당할 수 있다.


# 07/29

## 버블링

- 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작한다. 가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작한다.

```
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

// p → div → form 순서로 3개의 얼럿 창이 뜬다.
```
가장 안쪽의 <p>를 클릭하면 순서대로 다음과 같은 일이 벌어집니다.

1. <p>에 할당된 onclick 핸들러가 동작.
2. 바깥의 <div>에 할당된 핸들러가 동작.
3. 그 바깥의 <form>에 할당된 핸들러가 동작.
4. document 객체를 만날 때까지, 각 요소에 할당된 onclick 핸들러가 동작.


## event.target

- 부모 요소의 핸들러는 이벤트가 정확히 어디서 발생했는지 등에 대한 자세한 정보를 얻을 수 있다. 이벤트가 발생한 가장 안쪽의 요소는 타깃(target) 요소라고 불리고, `event.target`을 사용해 접근할 수 있다.

- `event.target`과 `this`(=`event.currentTarget`)의 차이
	- event.target은 실제 이벤트가 시작된 ‘타깃’ 요소로 버블링이 진행되어도 변하지 않음.
	- this는 ‘현재’ 요소로, 현재 실행 중인 핸들러가 할당된 요소를 참조.

- 위의 예시에서 this는 <form>요소이고, event.target은 폼 안쪽에 실제 클릭한 요소이다.

- event.stopPropagation()를 사용하면 버블링을 중단할 수 있다.
```
<body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
  <button onclick="event.stopPropagation()">클릭해 주세요.</button>
</body>
```


## 캡처링

- 이벤트가 최상위 조상에서 시작해 아래로 전파되는 단계. 캡처링 단계를 이용해야 하는 경우는 흔치 않기 때문에, 캡처링에 관한 코드를 발견하는 일은 거의 없다.

# 07/30

## 이벤트 위임

- 이벤트 위임을 사용하면 요소마다 핸들러를 할당하지 않고, 요소의 공통 조상에 이벤트 핸들러를 단 하나만 할당해도 여러 요소를 한꺼번에 다룰 수 있다. 공통 조상에 할당한 핸들러에서 event.target을 이용하면 실제 어디서 이벤트가 발생했는지 알 수 있어 이를 이용해 이벤트를 핸들링한다.


## 브라우저 기본 동작

- 브라우저 기본 동작을 취소할 수 있는 방법
```
<a href="/" onclick="return false">이곳</a>
이나
<a href="/" onclick="event.preventDefault()">이곳을</a> 클릭해주세요.
```
-  event 객체에 구현된 event.preventDefault() 메서드를 사용한다. 또는 핸들러가 addEventListener가 아닌 on<event>를 사용해 할당되었다면 false를 반환하게 해 기본 동작을 막을 수도 있다.


- `mousedown` – 마우스가 움직인 곳에서 선택을 시작.
- `<input type="checkbox">`를 click – input을 선택/선택해제 한다.
- `submit` – 폼 안에서 <input type="submit">을 클릭하거나 Enter를 누르면 이 이벤트가 발생하고, 브라우저는 폼을 서버로 전송한다.
- `keydown` – 키를 누르면 텍스트 박스에 글자를 추가하거나 그 외의 다른 동작을 수행한다.
- `contextmenu` – 마우스 오른쪽 버튼을 클릭하면 발생하는 이벤트로, 브라우저 컨텍스트 메뉴를 보여준다.


## 커스텀 이벤트

- Event 객체는 다음과 같이 생성한다.
 `let event = new Event(type[, options]);`
- type – 이벤트 타입을 나타내는 문자열로 "click"같은 내장 이벤트, "my-event" 같은 커스텀 이벤트가 올 수도 있다.

- 이벤트 객체를 생성한 다음엔 `elem.dispatchEvent(event)`를 호출해 요소에 있는 이벤트를 반드시 '실행’시켜줘야 한다.

- MouseEvent, KeyboardEvent 같은 네이티브 이벤트 클래스의 생성자들은 이벤트 특유의 프로퍼티를 받는다. (마우스 이벤트의 clientX가 대표적인 예)


# 08/03

## 마우스 이벤트

- mousedown·mouseup: 요소 위에서 마우스 왼쪽 버튼을 누를 때, 마우스 버튼 누르고 있다가 뗄 때 발생.

- mouseover·mouseout: 마우스 커서가 요소 바깥에 있다가 요소 안으로 움직일 때, 커서가 요소 위에 있다가 요소 밖으로 움직일 때 발생.

- mousemove: 마우스를 움직일 때 발생.

- click: 마우스 왼쪽 버튼을 사용해 동일한 요소 위에서 mousedown 이벤트와 mouseup 이벤트를 연달아 발생시킬 때 실행됨.

- dblclick: 동일한 요소 위에서 마우스 왼쪽 버튼을 빠르게 클릭할 때 발생. 요즘엔 잘 쓰이지 않음.

- contextmenu: 마우스 오른쪽 버튼을 눌렀을 때 발생.

-  click과 contextmenu 이벤트를 다룰 땐 보통 button 프로퍼티를 사용하지 않는다.

## shift, alt, ctrl, meta 프로퍼티

- 마우스 이벤트는 이벤트가 발생할 때 함께 누른 보조키가 무엇인지를 알려주는 프로퍼티. 마우스 이벤트가 발생하는 도중에 해당 키가 함께 눌러졌다면 프로퍼티 값은 true가 된다.

- shiftKey: Shift 키 / altKey: Alt (MacOS에선 Opt 키) / ctrlKey: Ctrl 키 / metaKey: MacOS에서 Cmd 키


## clientX, clientY와 pageX, pageY

- 마우스 이벤트는 두 종류의 좌표 정보를 지원한다.

- 클라이언트 좌표: clientX와 clientY
- 페이지 좌표: pageX와 pageY



# 08/04


## 드래그 앤 드롭과 마우스 이벤트

- 드래그 앤 드롭의 기본 알고리즘

1. mousedown에서는 움직임이 필요한 요소를 준비한다.이때 기존 요소의 복사본을 만들거나, 해당 요소에 클래스를 추가하는 등 원하는 형태로 작업할 수 있다.
2. 이후 mousemove에서 position:absolute의 left∙top을 변경한다.
3. mouseup에서는 드래그 앤 드롭 완료와 관련된 모든 작업을 수행한다.

- 이벤트 흐름: `ball.mousedown` → `document.mousemove` → `ball.mouseup`(ondragstart를 취소해야함)

- 드래그 시작 시 요소를 기준으로 포인터의 초기 이동을 기억하고 (shiftX∙shiftY) 드래그하는 동안 유지한다. `document.elementFromPoint`를 사용해 포인터 아래의 드롭할 수 있는 요소를 감지한다.


## 폼 프로퍼티와 메서드

- 폼은 특수한 컬렉션인 document.forms의 구성원으로 `document.forms`는 이름과 순서가 있는 '기명 컬렉션(named collection)'이다. 개발자는 이 이름이나 순서를 사용해 문서 내의 폼에 접근할 수 있다.

- 폼 요소는 form.elements[name/index] 또는 form[name/index]로 접근한다. 

- 각 요소의 값은 `input.value`, `textarea.value`, `select.value` 등으로 접근할 수 있다. 체크박스와 라디오 버튼에서는 `input.checked`를 사용할 수 있다.


## focus, blur 이벤트

- focus 이벤트는 요소가 포커스를 받을 때, blur 이벤트는 포커스를 잃을 때 발생

- `elem.focus()`와 `elem.blur()` 메서드를 사용하면 요소에 포커스를 줄 수도 있고 제거할 수도 있다.

-  <div>, <span>, <table>같이 무언가를 표시하는 용도로 사용하는 요소들은 포커싱을 지원하지 않는다. 그럼에도 불구하고 포커스를 하고 싶다면 tabindex HTML 속성을 사용하면 된다. tabindex 속성이 있는 요소는 종류와 상관없이 포커스가 가능하다.

- focus와 blur 이벤트는 버블링 되지 않으나 캡처링이나 focusin, focusout을 사용하면 이벤트 위임 효과를 볼 수 있다.
