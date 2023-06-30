import React from 'react'
import loading from './Search.gif'
const Spin = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  )
}

export default Spin
