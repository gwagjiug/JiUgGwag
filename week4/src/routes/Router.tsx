// router.ts
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
