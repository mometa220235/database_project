import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Customer from "../Pages/Customer/Customer";
//import Supply from "../Pages/Supply";
// import Supply from "../Pages/Supply";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
           path:"/customer",
           element:<Customer></Customer>

        },
         //{
           //path:"/supply",
             // element:<Supply></Supply>
        // },
            
      ]
        
    },
    
  ]);

export default router;
