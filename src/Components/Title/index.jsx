import React from 'react'
import './style.scss'

const Title = (props) => {
  return (
    <div className='G_Container titleBody'>
      <div className='titleContainer'>
        <span className='title'>{props.text}</span>
        <div className='line'/>
      </div>
    </div>
  )
}

export default Title