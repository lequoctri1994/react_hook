//component template (chứ các thành phần dùng chung)
import React from 'react'
import {Outlet} from 'react-router-dom'
import HeaderHome from '../components/HeaderHome/HeaderHome'
export default function HomeTemplates() {
  return (
    <>
    <HeaderHome/>

    <div style={{minHeight:600}}>
        <Outlet/>
    </div>


    <header className='bg-dark text-white text-center p-5'>Footer</header>
    </>
  )
}
