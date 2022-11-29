
<h2 align="center"> TDD 개념 학습 </h1>
<h3 align="center"> TDD 에 대한 개념 학습 및 간단한 실습 </h3> 
<br />

<h2 id="프로젝트소개"> :book: 연습해본 라이브러리 </h2>

- jest

<br />

![--------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="프로젝트소개"> :book: 학습한 내용 </h2>
<br />

<h3 id="프로젝트소개"> :pen: Test Driven Development </h3>

<p align="justify">
  실제 코드를 작성하기 전에 먼저 테스트 코드를 작성합니다. 이후 이 테스트 코드를 Pass 할 수 있는 실제 코드를 작성합니다. 이러한 점에서 처음에는 무조건 테스트가 fail 이 나오게 됩니다. </p>
<br />

<h3 id="프로젝트소개"> :pen: TDD 를 하면 좋은 점 </h3>

- 소스 코드에 안정감을 부여할 수 있습니다.
- 실제 개발하면서 많은 시간이 소요되는 부분은 디버깅이기에 이를 줄임으로서 개발 시간 단축을 기대합니다.
- 소스 코드 하나하나 신중하게 작성하게 됩니다.
<br />


<h3 id="프로젝트소개"> :pen: React Testing Library </h3>

- Create React App 을 통해 생성된 프로젝트는 자동적으로 React Testing Library 를 지원합니다.
- 이 외 Facebook에 의해서 만들어진 테스트 라이브러리인 Jest 가 많이 사용됩니다.
- 주로 단위테스트를 위해서 이용합니다.
- 참고로 자동적으로 설치되는 테스트 라이브러리에 jest 도 포함됩니다.
<br />

![--------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2 id="프로젝트소개"> :book: 숫자 증감 어플리케이션 - Jest </h2>
<br />

- jest 라이브러리 설치 (Create-react-app 을 통한 설치면 생략해도 됩니다)

```
npm install jest --save-dev
```
<br />

- 간단한 숫자 증감소 어플리케이션을 통해 라이브러리 활용법을 학습했습니다
- +, - 버튼을 누르면 화면의 수가 증감을 하게됩니다.
- on/off 버튼을 누르면 +, - 버튼이 작동을 하지 않고, 색상이 변합니다.
<br />


<h3 id="프로젝트소개"> :pen: 첫 화면에 숫자는 0 </h3>

- 테스트 코드를 먼저 작성합니다. 이때 테스트는 fail 이 뜨게 됩니다.
- 테스트 라이브러리는 적절한 쿼리를 제공하는데, 밑 코드에서 .toHaveTextContent 부분이 쿼리입니다.
<br />

```js
test("the counter starts at 0", () => {
  // 어플리케이션을 랜더링한다
  render(<App />);
  // 화면에 있는 0을 가져온다
  const counterElement = screen.getByTestId("counter");
  // 시작시 이게 정말 0인지 테스트 해본다.
  expect(counterElement).toHaveTextContent(0);
});
```
<br />

- 실제 코드를 작성합니다.
<br />

```js
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <h3 data-testid="counter">{counter}</h3>
    </>
   )
 }
 ```
 <br />
 
 - 테스트를 다시 돌리면 통과하게 됩니다.
 - 나머지도 이러한 과정으로 진행하면 됩니다.
 
 <br />
 <h3 id="프로젝트소개"> :pen: 플러스, 마이너스 버튼 생성 </h3>
 <br />
 
 ```js
 test("minus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  expect(buttonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+");
});
```

 <br />
 <h3 id="프로젝트소개"> :pen: 플러스, 마이너스 버튼 기능 넣기(fire event) </h3>
 <br />

 - FireEvent API : 유저가 발생시키는 액션(이벤트)에 대한 테스트를 해야 하는 경우 사용합니다.
 
<br />

```js
test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});
```

 <br />
 <h3 id="프로젝트소개"> :pen: on/off 버튼 만들기(toHaveStyle) </h3>
 <br />
 
 ```js
 test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});
```

 <br />
 <h3 id="프로젝트소개"> :pen: on/off 버튼 클릭시 버튼 disabled </h3>
 <br />
 
 ```js
 test("when on/off button is pressed, last buttons click are prevent", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(buttonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(plusButtonElement).toBeDisabled();
  expect(minusButtonElement).toBeDisabled();
});
```

  <br />

![--------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
