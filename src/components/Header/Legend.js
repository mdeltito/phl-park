import React from 'react'
import './Legend.scss'

export const Legend = () => {
  return (
    <div className='legend'>
      <span className='tag tag-available'>😎 Available</span>
      <span className='tag tag-occupied'>☹ Occupied</span>
      <span className='tag tag-ada'>♿ Accessible</span>
    </div>
  )
}

export default Legend
