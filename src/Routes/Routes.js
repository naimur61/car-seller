import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import QueryCars from "../Pages/QueryCars";

export const Routes = createBrowserRouter([
   {
      path: '/', element: <Main />, errorElement: <ErrorPage />, children: [
         { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/allCars') },

         // By search name & Pagination
         {
            path: '/car/:search/:page', element: <QueryCars />,
            loader: ({ params }) => fetch(`http://localhost:5000/cars?search=${params.search} & page=${params.page}`)
         },


         // loader: ({ params }) => fetch(`http://localhost:5000/cars?search=${encodeURIComponent(params.search)}&page=${encodeURIComponent(params.page)}`)


         //  { path: '/page/:page', element: <Home />, loader: ({ params }) => fetch(`cars.json/${params.page}`) },
      ]
   }
])