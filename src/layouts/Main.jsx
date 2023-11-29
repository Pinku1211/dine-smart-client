import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Button from '../components/Button/Button'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div> 
      <Footer />
    </div>
  )
}

export default Main
