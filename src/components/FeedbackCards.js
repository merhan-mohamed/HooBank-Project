import React from 'react';
import {quotes} from '../assets/index';


const FeedbackCards = ({content, name, title, img}) => (
 
        <div className='flex justify-between flex-col px-6 py-12 max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px] feedback-card'>
        <img src={quotes} alt="quotes"  className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">{content}</p>
        <div className='flex flex-row'>
            <img src={img} alt="name" className="w-[48px] h-[48px] rounded-full" />
            <div className='flex flex-col ml-4'>
                <h4  className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
            </div>
        </div>
        </div>
      
   
  )


export default FeedbackCards
