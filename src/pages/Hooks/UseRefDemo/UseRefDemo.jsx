import React, { useRef } from 'react'
import { useState } from 'react'

export default function UseRefDemo() {

    // const [userLogin, setUserLogin] = useState({
    //     usename:'',
    //     passowrd:''
    // })
    //ý nghĩa useRef: lưu lại giá trị sau mỗi lần component render lại
    const userLoginRef = useRef({username:'',password:''})
    const [test,setTest]=useState('1')
    console.log(userLoginRef.current)
    const handleChange = (e) => {
        let {id, value} = e.target;
        userLoginRef.current[id] = value;
    
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value,
        // })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLoginRef.current)
        setTest(userLoginRef.current.username)
    }
  return (
    <form className="container" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>Username</p>
            <input className='form-control' id='username' type="text" onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>Password</p>
            <input className='form-control' id='password' type="text" onChange={handleChange} />
        </div>
        {userLoginRef.current.username}
        <div className="form-group mt-4">
            <button className='btn btn-success'>Login</button>
        </div> 
        {test}
    </form>
  )
}
