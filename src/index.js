import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Aboutpg from './components/aboutpg/aboutpg';
import Propertypage from './components/propertypage/propertypage.js'
import Contact from './components/contacts/contact.js'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
// {
//     path: "/about",
//     element: <Aboutpg/>,
//   },
//   {
//     path: "/property",
//     element: <Propertypage/>,
//   },
//  {
//     path: "/contact",
//     element: <Contact/>,
//   },

// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <React.StrictMode>
//  <RouterProvider router={router}/>
//   </React.StrictMode>

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();


  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();

  