import React from 'react'
import '../../dist/css/pages.css'

const ButtonBayar = (props) => {
  const {children, style, onClick } = props
  return (
    <div className='justify-content-center align-items-center d-flex'>
    <button className='buttonpay' onClick={onClick}>
      {children}
    </button>
    </div>
  )
}

export default ButtonBayar