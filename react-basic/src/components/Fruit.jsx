
// export : 내보낼 모듈이 여러개일 때 사용하는 문법
export function Apple(props) {
    return (
        <img 
            src="https://cdn.kormedi.com/wp-content/uploads/2023/10/ck-cm260029053-l-700x467.jpg.webp" 
            style={{
                display : 'block',
                width : '500px',
                height : 'auto'
            }}
        />
    )
}

export function Banana(props) {
    return (
        <button>바나나ㅏ나ㅏ나ㅏㄴ나ㅏ나</button>
    );
}

function Kiwi(props) {
    return (
        <table border = '3'>
            <thead>
                <tr>
                    <th>이름</th>
                    <td>가격</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>키위</th>
                    <td>1200원</td>
                </tr>
                <tr>
                    <th>골드키위</th>
                    <td>1400원</td>
                </tr>
            </tbody>
        </table>
    )
}

// export default : 이 파일을 대표하는 모듈({}없이 import하는 경우 불러지는 모듈) 
//                  하나를 지정할 때 사용하는 문법
export default Kiwi;