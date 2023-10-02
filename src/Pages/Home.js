import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ActiveStyle.css'

const Home = () => {
   const [search, setSearch] = useState('')
   const [active, setActive] = useState(1);
   const [count, setCount] = useState()


   const carData = useLoaderData();
   console.log(carData);
   // ?page=10&size=${size}

   return (
      <div>
         <h1>Home { carData?.length }</h1>

         <div className='text-center'>
            {
               [...Array(10).keys()].map(i => <button key={ i } className={ `${active === i && 'active-page'} bg-base-300 text-center ml-3 px-3 py-1 rounded-full font-semibold text-gray-700 text-sm transition-all hover:scale-105` } onClick={ () => setActive(i) }>{ i + 1 }</button>)
            }

            {/* <select
               onChange={ (event) => setSize(event.target.value) } defaultValue='6' className='bg-base-300 text-center ml-3 px-4 py-2 rounded font-bold text-gray-700 text-xl outline-sky-500'>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="6">6</option>
               <option value="10">10</option>
            </select> */}

         </div>
      </div>
   );
};

export default Home;