import { useState, useEffect } from "react"
import axios from 'axios'
import './Comments.css'

function Comment({ info }) {
    return (
        <div className="comment">
            <span>{ info.user.username }</span>
            <span>{ info.body }</span>
            <span>👍 { info.likes }</span>
        </div>
    )
}

function Comments() {
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        // axios : XMLHttpRequest를 굉장히 편리하게 사용할 수 있게 해주는 라이브러리
        axios.get('https://dummyjson.com/comments')
            .then(response => {
                setCommentList(response.data.comments);
            })
            .catch(error => { console.log('Error : ', error) });
    }, []);

    return (
        <div className="comments">
            {
                commentList.length > 0 ?
                commentList.map(cmt => <Comment info={ cmt } key={ cmt.id } />)
                : '댓글이 아직 없습니다'
            }
        </div>
    )
}

export default Comments