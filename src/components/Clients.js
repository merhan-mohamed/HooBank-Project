import React from 'react';
import {clients} from '../constants/index'
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter}  flex-wrap w-full`}>
    {clients.map((client) => (
      <div key={client.id} className={`flex-1 sm:min-w-[192px] min-w-[120px] m-5 ${styles.flexCenter}`}>
        <img src={client.title} alt="client_logo" className='sm:w-[192px] w-[100px] object-contain'/>
      </div>
   
    ))}
    </div>
  </section>
)

export default Clients
