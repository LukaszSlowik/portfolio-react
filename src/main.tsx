import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import './index.css'
import Root from '@/routes/Root'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  RouterProvider,
  Outlet,
  redirect
} from 'react-router-dom'
import Contact from './pages/KnowMeBetter'
import ErrorPage from './routes/Error-page'
import Home from './pages/Home'
import TechSkills from './pages/TechSkills'
import Hobbygame from './pages/Hobbygame'
import KnowMeBetter from './pages/KnowMeBetter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    errorElement: <ErrorPage />,
    children: [
      {
        path: 'KnowMeBetter',
        element: <KnowMeBetter />
      },
      {
        path: '',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/techskills',
        element: <TechSkills />
      },
      {
        path: '/hobbygame',
        element: <Hobbygame />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>
)
