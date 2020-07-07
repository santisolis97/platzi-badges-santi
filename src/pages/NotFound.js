import React from 'react'
import notf from '../images/404.svg'
import './styles/NotFound.css'

 function NotFound() {
     return (
    <div className="container-fluid d-flex justify-content-center">
        <img className='img_notf' alt='' src={notf} />
    </div>
     )
     
 }
 export default NotFound