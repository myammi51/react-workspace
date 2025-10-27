import { useState, useEffect } from 'react'
import './App.css'
import Comments from './components/Comments';

let count = 0;

function Penguin({ setPenguinsShowing }) {

  useEffect(() => {
    console.log('펭귄이 최초로 그려질 때 한 번 호출됨');
    return () => {
      console.log('펭귄이 사라질 때 마지막으로 호출됨');
    }

  }, []);

  const onClick = () => {
    setPenguinsShowing(false);
  }

  return (
    <img
      src="https://www.chosun.com/resizer/v2/WO4SKPUA62ESBOT2QY7QB5XTAI.jpg?auth=16ca6714fbbbcc30710396a4a5a767db6c69d9e0c105d0a7390f273572142761&width=464" alt=""
      style={{ display: 'block', width: '200px', height: 'auto', padding: '5px' }}
      onClick={onClick}
    />
  )
}

function App() {

  const [text, setText] = useState('');
  const onInput = (e) => setText(e.target.value);

  const [penguinsShowing, setPenguinsShowing] = useState(true);

  // 최초로 초기화 할 때만 실행하고 싶다면? 클래스의 경우에는 componentDidMount 또는 생성자가 있었음
  // 함수형 컴포넌트의 경우에는? useEffect 훅을 사용한다

  // # useEffect(콜백, 배열) 
  //   1. 배열을 빈 값으로 둔 콜백은 이 컴포넌트를 최초로 생성했을 때 한 번만 실행하는 코드가 된다
  //   2. 배열을 빈 값으로 둔 콜백에서 반환하는 콜백은 이 컴포넌트가 사라질 때 마지막으로 한 번 실행하는 코드가 된다
  useEffect(() => {
    console.log('딱 한번만 실행되면 좋을 것 같은 코드 like 비동기 요청(ajax)');
    console.log('클래스 컴포넌트로 치면 componentDidMount와 같은 역할을 하는 장소');
    return () => {
      console.log('마지막으로 실행되면 좋을 것 같은 코드를 적는 곳 (componentWillUnmount)');
    };
  }, []);
  console.log('Hi', count++);

  return (
    <>
      <input type="text" value={text} onInput={onInput} />
      { penguinsShowing ?
        <div className="penguins">
          <Penguin setPenguinsShowing={ setPenguinsShowing }/>
          <Penguin setPenguinsShowing={ setPenguinsShowing }/>
          <Penguin setPenguinsShowing={ setPenguinsShowing }/>
        </div>
        : null
      }
      <Comments />
    </>
  )
}

export default App
