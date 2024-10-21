import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Project1 from './components/Project1.jsx'
import Project2 from './components/Project2.jsx'
import Project3 from './components/Project3.jsx'
import Other from './components/Other.jsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'education',
        element: <Education />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'other',
        element: <Other />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'project1',
            element: <Project1 />,
          },
          {
            path: 'project2',
            element: <Project2 />,
          },
          {
            path: 'project3',
            element: <Project3 />,
          },
        ],
      },
      {
        path: '*',
        element: <h1>Not Found</h1>,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
