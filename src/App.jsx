import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const my_router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",   // any path which is not defined above will match this *
      element: <NotFoundPage />,
    },
  ]);

  // console.log(my_router);
  
  return (
    <>
      <RouterProvider router={my_router} />
    </>
  )
}

export default App
