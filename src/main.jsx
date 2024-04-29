import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowitsWorks from './pages/HowitsWorks.jsx';
import Testimonail from './pages/Testimonails.jsx';
import Contact from './pages/contact.jsx';
import Loader from './Components/Loader.jsx';
import Footer from './Components/footer.jsx';

const wireRouter = (setLoaded) => createBrowserRouter([

  {
    path: "/",
    element: <PageWrapper setLoaded={setLoaded} />,
    errorElement:<Error/>,
    children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/how-it-works",
      element: <HowitsWorks/>,
    },
    {
      path: "/testimonal",
      element: <Testimonail/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    ]
  },
]);

function PageWrapper({ setLoaded }) {
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
  return (
    <div>
     <Outlet/>
     <Footer/>
    </div>
  )
}
 
function Root() {
  const [pageLoaded, setLoaded] = useState(false);

return(
  <React.StrictMode>
      { !pageLoaded ? <Loader/> : null }
      <RouterProvider router={wireRouter(setLoaded)} />
  </React.StrictMode>
);
}
  ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

