
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import Home from './components/Home.jsx';
import { Toaster } from "sonner";


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
    {
    path:'/login',
    element:<Login/>
  },
   {
    path:'/signup',
    element:<Signup/>
  }
])

export default function App() {
  return (
    <>
    <Toaster richColors position="top-right" />
      <RouterProvider router={appRouter}/>
    </>
  );
}
