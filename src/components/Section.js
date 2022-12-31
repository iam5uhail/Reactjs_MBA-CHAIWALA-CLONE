import React from 'react'
import {motion} from "framer-motion" 

const Section = ({h3,text,hasBtn=true,btnTxt,imgSrc,imgSize="70%",backgroundColor,headingColor,textColor,btnColor,btnBgColor}) => {

  const headingOptions={
    initial:{
      y:"-100%",opacity:0
    },
    whileInView:{
      y:0,opacity:1
    }
  }
  const textOptions={
    ...headingOptions,
    transition:{
      delay:0.5
    }
  }
  const btnOptions={
    initial:{
      y:"100%",opacity:0
    },
    whileInView:{
      y:0,opacity:1
    },
    transition:{
      delay:0.5,ease:"easeIn"
    }
  }
  const imgOptions={
    initial:{
      scale:0.1,opacity:0
    },
    whileInView:{
      scale:1,opacity:1
    },
    transition:{
      delay:0.5
    }
  }

  return (
    <section className='section' style={{backgroundColor}}>
        <div className='div'>
            <motion.h3 {...headingOptions} style={{color:headingColor}} data-cursorpointer={true}>{h3}</motion.h3>
            <motion.p {...textOptions} style={{color:textColor}} data-cursorpointer={true}>{text}</motion.p>
            {hasBtn && <motion.button {...btnOptions} style={{color:btnColor,backgroundColor:btnBgColor}} data-cursorpointer={true}>{btnTxt}</motion.button>}
            <div>
                <motion.img {...imgOptions}  src={imgSrc} alt="img" style={{width:imgSize,}}/>
            </div>
        </div>
    </section>
  )
}

export default Section