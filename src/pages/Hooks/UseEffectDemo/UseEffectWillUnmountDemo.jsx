import React, { useState } from 'react'
import { useEffect } from 'react';

let counter = 60;
let timeout = {};
export default function UseEffectWillUnmountDemo() {


    const [count, setCount] = useState(60);

    const setCountDown = () => {
        timeout = setInterval(()=>{
            // setCount(count - 1);
            counter--;
            console.log(123)
        },1000)
    }
    useEffect(()=>{
        return () => {
            //hàm này sẽ tự động kích hoạt khi dependency (tham s ố thứ 2 của hàm thay đổi) hoặc component này mất khỏi giao diện (wiillunmount)
            clearInterval(timeout);
        }
    },[]);
  return (
    <div className="container">
        <h3 id='txt-count'>Count : {counter}</h3>
        <button className='btn btn-dark' onClick={()=>{
            setCountDown();
        }}>Start</button>
    </div>
  )
}
