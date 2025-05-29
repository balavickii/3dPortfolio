import React from 'react'

const Buttons = ({text,className,id}) => {
  return (
   <a className={`${className ?? ' '} cta-wrapper`}>
    <div className=' cta-button group'>
        <div className='bg-circle'/>
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
            <img src="assets\assets\public\images\arrow-down.svg" alt="arrow" />
        </div>

    </div>
   </a>
  )
}

export default Buttons