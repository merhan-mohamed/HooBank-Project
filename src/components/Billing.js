import React from 'react';
import {apple, google, bill} from '../assets';
import styles from '../style'


const Billing = () => {
  return (
    <section id='product' className={`flex md:flex-row flex-col-reverse  justify-between items-center ${styles.paddingY}`}>
      <div className='flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative'> 
        <img src={bill} alt='billing' className='w-[100%] h-[100%]'/>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className='flex-1' >
        <h2 className={styles.heading2}>Easily control your billing & invoicing.</h2>
        <p className={styles.paragraph}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        <div className='flex flex-row justify-start items-end flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple"  className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
          <img src={google} alt="google"  className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"  />
        </div>
      </div>
    </section>
  )
}

export default Billing
