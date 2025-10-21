import { useState } from 'react'
import './App.css'

function App() {
  // 일반 자바스크립트 영역
  let english = 'Shopping Mall';
  // 리액트에서는 변수 대신 state라는 것을 사용할 수도 있다
  // state는 useState()라는 함수를 사용해 만든다
  // useState()는 import { useState } from 'react'로 가져와야 사용할 수 있다
  let [productName, setProductName] = useState('바람막이');
  let [productNames, setProductNames] = useState(['오리털 패딩', '악어가죽 장갑', '구두 주걱']);
  let [productPrice, setProductPrice] = useState(50000);
  // let [modal, setModal] = useState(false);
  let [modal, setModal] = useState('closed'); // open이면 보이게

  function onClickHandler(e) {
    console.log('Hi!!', e);
    setProductPrice(productPrice + 500);
  }

  return (
    <>
      <div className="nav-bar">
        <h4 style={{ color: 'orange', fontSize: '30px'}}>쇼핑몰 ({english})</h4>
      </div>
      <div className="list">
        <h4>{ productName } <button onClick={() => { 
          // setter를 통한 state 수정은 화면을 다시 그릴 때 한번에 일괄처리하게끔 만들어져 있다 (비동기처리)
          setProductName('나이키 신발');  
          console.log('클릭 후 : ', productName); 
          }}>버튼</button></h4>
        <p>가격 : 오천만원</p>
      </div>
      <div className="list">
        <h4 onClick={() => {
          setModal(modal === 'closed' ? 'open' : 'closed');
        }}>{ productNames[0] }</h4>
        <p>가격 : 오천만원</p>
      </div>
      <div className="list">
        <h4>{ productNames[1] } 
        {/* <button onClick={() => {
          setProductNames(['오리털 패딩','레고 장갑', '구두 주걱']);
          console.log('클릭 후 : ', productNames);
        }}>버튼</button> */}

        {/* 강사님 모범답안 */}
        {/* <button onClick={() => {
          setProductNames([productNames[0], '크록스', productNames[2]]);
        }}>버튼</button> */}
        <button onClick={() => {
          let deepcopy = [...productNames];
          deepcopy[1] = '크록스';
          // state가 배열인 경우 배열 자체를 새 배열로 갈아 끼워야 값이 변한 것으로 간주되어
          // 화면의 재랜더링이 발생하게 된다
          setProductNames(deepcopy);
        }}>버튼</button>
        </h4>
        <p>가격 : 오천만원</p>
      </div>
      <div className="list">
        <h4>{ productNames[2] }</h4>
        <p>가격 : { productPrice } <button onClick={ onClickHandler }>버튼</button></p>
      </div>

      { modal === 'closed' ? null : <Modal /> }
    </>
  );
}

// 새 컴포넌트 정의하기
function Modal() {
  return (
    <div className="modal">
      <h4>상품명</h4>
      <p>가격</p>
      <p>상세내용</p>
    </div>
  );
}

export default App
