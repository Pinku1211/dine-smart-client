import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Meals from '../pages/Meals/Meals'
import UpcomingMeals from '../pages/UpcomingMeals/UpcomingMeals'
import Notifications from '../pages/Notification/Notifications'
import MealDetails from '../pages/MealDetails/MealDetails'
import { getMeal } from '../hooks/meal'
import Dashboard from '../layouts/Dashboard'
import AddMeals from '../components/Dashboard/Admin/AddMeals'
import ManageUsers from '../components/Dashboard/Admin/ManageUsers'
import AllMeals from '../components/Dashboard/Admin/AllMeals'
import AllReviews from '../components/Dashboard/Admin/AllReviews'
import ServeMeals from '../components/Dashboard/Admin/ServeMeals'
import Upcoming from '../components/Dashboard/Admin/Upcoming'
import MyProfile from '../components/Dashboard/User/MyProfile'
import RequestedMeals from '../components/Dashboard/User/RequestedMeals'
import MyReviews from '../components/Dashboard/User/MyReviews'

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
      {
        path: '/meals/:id',
        element: <MealDetails></MealDetails>,
        loader: ({params}) => getMeal(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'add-meal',
        element: <AddMeals></AddMeals>
      },
      {
        path: 'manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'all-meals',
        element: <AllMeals></AllMeals>
      },
      {
        path: 'all-reviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: 'serve-meals',
        element: <ServeMeals></ServeMeals>
      },
      {
        path: 'upcoming-meals',
        element: <Upcoming></Upcoming>
      },
      {
        path: 'my-profile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'requested-meals',
        element: <RequestedMeals></RequestedMeals>
      },
      {
        path: 'my-reviews',
        element: <MyReviews></MyReviews>
      }
    ]
  }
])
