import React, { useState } from 'react'

export default function UseStateDemo() {

  const [fontSize, setFontSize] = useState(20);
  const [imgSrc, setImgSrc] = useState('https://i.pravatar.cc?u=1');
  const [imgCar, setImgCar] = useState('./img/products/red-car.jpg');

  const handleChangeColor = color => {
    const newImgCar = `./img/products/${color}-car.jpg`
    setImgCar(newImgCar);
  }


  return (
    <div className="container">
      <h3>Demo tăng giảm fontSize</h3>
      <p style={{ fontSize: fontSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam optio odit ullam non eligendi ea, quasi error fugiat nemo cum.</p>

      <button className='btn btn-success mx-2' onClick={() => {
        setFontSize(fontSize + 1)
      }}>+</button>
      <button className='btn btn-success mx-2' onClick={() => {
        setFontSize(fontSize - 1)
      }}>-</button>
      <hr />

      <h3>Demo Random Ảnh</h3>
      <div className="card w-25 my-2">
        <img src={imgSrc} alt="..." />
        <div className="card-body">
          <p>Name</p>
          <button className='btn btn-primary' onClick={() => {
            let randomNumber = Math.floor(Math.random() * 100);
            let newImg = 'https://i.pravatar.cc?u=' + randomNumber;
            //setState
            setImgSrc(newImg);
          }}>Random</button>
        </div>
      </div>
      <hr />

      <h3>Demo chọn xe</h3>
      <div className="row">
      <div className="col-6">
        <img src={imgCar} alt="..." className='w-100' />
      </div>
      <div className="col-6">
        <button className='btn btn-danger mx-2' onClick={()=>{
          handleChangeColor('red')
        }}>Red</button>
        <button className='btn btn-secondary mx-2' onClick={()=>{
          handleChangeColor('silver')
        }}>Silver</button>
        <button className='btn btn-dark mx-2' onClick={()=>{
          handleChangeColor('black')
        }}>Black</button>
        <button className='btn btn-light mx-2' onClick={()=>{
          handleChangeColor('steel')
        }}>Steel</button>
      </div>
      </div>
      

    </div>
  )
}
