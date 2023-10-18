import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//pages
import AboutPage from './pages/AboutMePage.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Resume from './pages/Resume.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />

)
