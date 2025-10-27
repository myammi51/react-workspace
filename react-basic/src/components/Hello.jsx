import React from "react";

// # 클래스 방식 컴포넌트
//   1. 생성자에서 props를 받는다
//   2. 생성자에서 state객체를 정의한다 (useState() 훅을 사용하지 않음, 개별 setter가 없음)
//   3. render() 메서드를 정의해두면 렌더링시 호출된다
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
    }

    // 컴포넌트가 최초로 렌더링 될 때 한 번만 호출됨
    componentDidMount() {
        console.log(`${this.props.name} did mount`);
    }

    // 컴포넌트에 변화가 있을 때마다 호출됨
    componentDidUpdate() {
        console.log(`${this.props.name} did update`);
    }

    // 컴포넌트가 화면에서 제거되기 직전에 호출됨
    componentWillUnmount() {
        console.log(`${this.props.name} will unmount`);
    }

    onClickHandler = (e) => {
        console.log(`${this.props.name}에 있는 버튼 눌림`);
        this.setState({
            counter : this.state.counter + 1
        })
    }

    render() {
        console.log(`${this.props.name}이 다시 그려졌습니다!`);
        return (
            <>
                <h3>Hello! {this.props.name}</h3>
                <p>Nice to meet you { this.state.counter }</p>
                <button onClick={ this.onClickHandler }>눌러보세요</button>
            </>
        )
    }
}

export default Hello;