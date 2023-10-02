import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './ActiveStyle.css'

const Home = () => {
   const [search, setSearch] = useState({})
   const [active, setActive] = useState(0);
   const [count, setCount] = useState();
   const navigate = useNavigate();



   const carData = useLoaderData();
   console.log(active);
   // Shear

   const newQuery = (e) => {

      // /project/${_id}
      navigate(`/cars?search=${search}&page=${active}`)
      // to={`/cars?search=${search}&page=${active}`}



      if (typeof (e) === 'number') {
         setActive(e)
      }
   }



   return (
      <div>
         <h1>Home { carData?.length }</h1>

         <div className='text-center'>
            {
               [...Array(10).keys()].map(i => <button key={ i } className={ `${active === i && 'active-page'} bg-base-300 text-center ml-3 px-3 py-1 rounded-full font-semibold text-gray-700 text-sm transition-all hover:scale-105` } onClick={ () => newQuery(i) }>{ i + 1 }</button>)
            }



         </div>
      </div>
   );
};

export default Home;