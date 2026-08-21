
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from "./Components/Home";
import Service from "./Components/Service";
import Product from "./Components/Product";
import MainLayout from './Routes/MainLayout';
import Contact from './Components/Contact';

const App = () => {
  const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"service",
        element:<Service/>
      },
      {
        path:"product/:id",
        element:<Product/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ]
  }])
  return <RouterProvider router={router} />;
}

export default App
