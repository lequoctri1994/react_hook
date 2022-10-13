import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UseEffectDidMountDemo() {

    const [arrProduct,setArrProduct] = useState([]);

    const getApi = async () =>{
        try {
            let result = await axios({
                url:'http://shop.cyberlearn.vn/api/product',
                method:'GET',
            });
            //result.data.content = [{...}], [{...}]
            setArrProduct(result.data.content);
            console.log('result', result.data.content)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect (()=> {
        //tham số thứ 2 là mảng rổng => hàm callback thứ 1 chỉ chạy 1 lần sau render (thứ tự tương tự didmount bên classs component)
        //callapi
        getApi();
    },[])


  return (
    <div className="container">
        <h3>Shoes Shop</h3>
        <div className="row">
            {arrProduct.map((item,index)=>{
                return  <div className="col-3" key={index}>
            
                <div className="card">
                    <img src={item.image} alt="..." />
                    <div className="card-body">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <button className='btn btn-dark'>Add to cart <i className='fa fa-cart-plus mx-1'></i></button>
                    </div>
                </div>
            </div>
            })}
       
        </div>
        
    </div>
  )
}
