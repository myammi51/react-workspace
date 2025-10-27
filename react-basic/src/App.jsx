import { useState } from 'react'
import './App.css'
import {Apple as Ap, Banana as Ba} from './components/Fruit'
// 이렇게 써도 됨
// import Kiwi, {Apple as Ap, Banana as Ba} from './components/Fruit'
// 어차피 대표하는 애는 하나라서 이름을 뭐로 바꿔도 상관 X
import Ki from './components/Fruit'
import Hello from './components/Hello'

function App() {
  // 일반 자바스크립트 영역
  let english = 'Shopping Mall';
  // 리액트에서는 변수 대신 state라는 것을 사용할 수도 있다
  // state는 useState()라는 함수를 사용해 만든다
  // useState()는 import { useState } from 'react'로 가져와야 사용할 수 있다
  // let [productName, setProductName] = useState('바람막이');
  // let [productPrice, setProductPrice] = useState(50000);
  // let [modal, setModal] = useState(false);

  // function onClickHandler(e) {
  //   console.log('Hi!!', e);
  //   setProductPrice(productPrice + 500);
  // }

  // const arr1 = [1, 2, 3];

  // map : 배열의 각 값에 똑같은 작업을 수행한 새 배열을 만들어 주는 메서드
  // const result = arr1.map((value, index) => {
  //   return value + 10;
  // });

  // console.log(result);

  let [productNames, setProductNames] = useState(['오리털 패딩', '악어가죽 장갑', '구두 주걱']);
  let [modal, setModal] = useState('closed'); // open이면 보이게
  let [modalIndex, setModalIndex] = useState(0);
  let [inputText, setInputText] = useState("");

  return (
    <>
      <div className="nav-bar">
        <h4 style={{ color: 'orange', fontSize: '30px' }}>쇼핑몰 ({english})</h4>
      </div>
      {/* <div className="list">
        <h4>{productName} <button onClick={() => {
          // setter를 통한 state 수정은 화면을 다시 그릴 때 한번에 일괄처리하게끔 만들어져 있다 (비동기처리)
          setProductName('나이키 신발');
          console.log('클릭 후 : ', productName);
        }}>버튼</button></h4>
        <p>가격 : 오천만원</p>
      </div> */}
      {/* <div className="list">
        <h4 onClick={() => {
          setModal(modal === 'closed' ? 'open' : 'closed');
        }}>{productNames[0]}</h4>
        <p>가격 : 오천만원</p>
      </div>
      <div className="list">
        <h4>{productNames[1]} */}
          {/* <button onClick={() => {
          setProductNames(['오리털 패딩','레고 장갑', '구두 주걱']);
          console.log('클릭 후 : ', productNames);
        }}>버튼</button> */}

          {/* 강사님 모범답안 */}
          {/* <button onClick={() => {
          setProductNames([productNames[0], '크록스', productNames[2]]);
        }}>버튼</button> */}
          {/* <button onClick={() => {
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
        <h4>{productNames[2]}</h4>
        <p>가격 : {productPrice} <button onClick={onClickHandler}>버튼</button></p>
      </div> */}

      {
        productNames.map((v, i) => {
          return (
            <div className="list" key={i}>
              <h4>{v}</h4>
              <p>가격 : 오억원</p>
              <button onClick={() => {
                setModal('open');
                setModalIndex(i);
              }}>상세정보</button>
              <button onClick={() => {
                let deepcopy = [...productNames];
                deepcopy.splice(i, 1); // 배열 중간에 있는거 하나 삭제하기
                setProductNames(deepcopy);
              }}>삭제</button>
            </div>
          );
        })
      }

      {/* JSX에서는 끝에 닫는거 무조건 있어야된대 */}
      <input 
        type="text" 
        value={ inputText } 
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button 
        onClick={() => {
          if (inputText.trim() !== '') {
            setProductNames([...productNames, inputText]);
            setInputText('');
          } else {
            setInputText('');
          }
        }}
      >상품추가</button>

      {/* 부모 컴포넌트에서 자식 컴포넌트를 만들면서 속성처럼 추가하는 것을 props가 된다 */}
      {modal === 'open' ? 
      <Modal 
        modalIndex={ modalIndex } 
        productNames={ productNames } 
        setModal={ setModal }
      /> 
      : null}

      <Ap />
      <Ba />
      <Ki />

      <Hello name='김김김' />
      <Hello name='강강강' />
    </>
  );
}

// 새 컴포넌트 정의하기
function Modal(props) {

  function closeModal() {
    props.setModal('closed');
  }

  return (
    <div className="modal">
      <h4>{ props.productNames[props.modalIndex] }</h4>
      <p>가격</p>
      <p>상세내용</p>
      <button onClick={ closeModal }>닫기</button>
    </div>
  );
}

export default App
