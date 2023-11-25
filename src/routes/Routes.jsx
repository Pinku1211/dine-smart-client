import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Meals from '../pages/Meals/Meals'
import UpcomingMeals from '../pages/UpcomingMeals/UpcomingMeals'
import Notifications from '../pages/Notification/Notifications'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/meals',
        element: <Meals></Meals>
      },
      {
        path: '/upcomingMeals',
        element: <UpcomingMeals></UpcomingMeals>
      },
      {
        path: '/notification',
        element: <Notifications></Notifications>
      },
      // {
      //   path: '/meals/:id',
      //   element: 
      //   // loader: ({params}) => getMeal(params.id)
      // }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
