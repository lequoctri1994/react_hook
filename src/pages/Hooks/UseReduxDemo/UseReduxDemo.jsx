import React, { useRef } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addComment } from '../../../redux/fakebookMessReducer';

export default function UseReduxDemo() {

    const arrComment = useSelector(state => {
        console.log('1',state)
        return state.fakebookMessReducer.arrComment});
    const dispatch = useDispatch();
    const userCommentRef = useRef ({
        username:'',
        content:''
    });

    const handleChange = (e) => {
        const {id,value} = e.target;
        userCommentRef.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //gửi dữ liệu lên redux
        console.log(userCommentRef,e.target)
        let newComment = {...userCommentRef.current};
        const action = addComment(newComment);
        /**
         * action = {
         *      type:'fakebookMessReducer/addComment',
         *      padload: {
         *          username:'',
         *          content:''   
         *  }
         * }
         */
        dispatch(action)
    }
    


    console.log(arrComment)
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h2>Fakebook messenger</h2>
            <div className="card" >
                <div className="card-header bg-dark text-white">
                    User chat
                </div>
                <div className="card-body">
                    {arrComment.map((comment,index)=>{
                        return <div className="d-flex mt-2" key={index}>
                        <div style={{ width: 100 }}>
                            <img src={`https://i.pravatar.cc?u=${comment.username}`} alt="..." className='w-100' style={{borderRadius:50}} />
                        </div>
                        <div className="px-2">
                            <h3 className='text-danger'>{comment.username}</h3>
                            <p>{comment.content}</p>
                        </div>
                    </div>
                    })}
                </div>
            </div>

            <div className="form-group mt-2" id='username'>
                <p>username</p>
                <input type="text" className='form-control' id='username' />
            </div>
            <div className="form-group">
                <p>content</p>
                <input type="text" className='form-control' id='content' />
            </div>
            <div className="form-group mt-2">
                <button type='submit' className='btn btn-success'>Comment</button>
            </div>

        </form>
    )
}
