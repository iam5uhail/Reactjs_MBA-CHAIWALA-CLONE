import React from 'react'
import video from "../images/MBA Chai Wala.mp4"

const Introvideo = () => {
  return (
    <div className='intro'>
        <video src={video} muted autoPlay loop controlsList="nodownload"></video>
        <div></div>
    </div>

  )
}

export default Introvideo