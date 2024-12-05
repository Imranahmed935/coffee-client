import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCoffee from './components/AddCoffee.jsx'
import UpdateCoffee from './components/UpdateCoffee.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import User from './components/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader:()=> fetch('http://localhost:5000/coffees')
  },
  {
    path:'addCoffee',
    element:<AddCoffee/>
  },
  {
    path:'updateCoffee/:id',
    element:<UpdateCoffee/>,
    loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path:'signin',
    element:<SignIn></SignIn>
  },
  {
    path:'signup',
    element:<SignUp></SignUp>
  },
  {
    path:'user',
    element:<User></User>,
    loader:()=> fetch('http://localhost:5000/users')
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
