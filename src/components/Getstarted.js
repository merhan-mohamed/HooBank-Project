import React from 'react'
import styles from '../style';
import { arrowUp } from '../assets';

const Getstarted = () => {
  return (
    <div className='rounded-full bg-blue-gradient w-[140px] h-[140px] cursor-pointer p-[2px]'>
     <div className= {`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}> 
    <div className={`${styles.flexStart}`}>
        <p className="font-poppins font-medium text-[18px] leading-[20px] ">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrowUp"  
        className='w-[23px] h-[23px] object-contain'/>
    </div>

    <p className="font-poppins font-medium text-[18px] leading-[20px]">
        <span className="text-gradient">Started</span>
    </p>
    </div>

        
      
    </div>
  )
}

export default Getstarted
