import React from 'react'
import './Legend.scss'

export const Legend = () => {
  return (
    <div className='legend'>
      <span className='tag tag-available'><i className='fa fa-smile-o' aria-hidden='true' /> Available</span>
      <span className='tag tag-occupied'><i className='fa fa-frown-o' aria-hidden='true' /> Occupied</span>
      <span className='tag tag-ada'><i className='fa fa-universal-access' aria-hidden='true' /> Accessible</span>
    </div>
  )
}

export default Legend
