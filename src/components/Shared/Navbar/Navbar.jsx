import { Link, NavLink, useLocation } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/logo.png'
import MenuDropdown from './MenuDropdown'
import { FaAlignJustify, FaBell } from "react-icons/fa6";
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
  const location = useLocation()
  const { user } = useAuth();

  const navLinks = <>
    <NavLink className={location.pathname === '/' ? 'text-white text-center font-semibold bg-myColor px-2 py-1 rounded-md' : "font-semibold"} to="/">Home</NavLink>
    <NavLink className={location.pathname === '/meals' ? 'text-white text-center font-semibold bg-myColor px-2 py-1 rounded-md' : "font-semibold"} to="/meals">Meals</NavLink>
    <NavLink className={location.pathname === '/upcomingMeals' ? 'text-white text-center font-semibold bg-myColor px-2 py-1 rounded-md' : "font-semibold"} to="/upcomingMeals">Upcoming Meals</NavLink>
  </>

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn px-3 hover:bg-myColor hover:text-white mr-3 lg:hidden">
                    <FaAlignJustify className='text-myColor hover:text-white text-xl'></FaAlignJustify>
                  </label>
                  <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                  </div>
                </div>
                <div className='flex items-center'>
                  <img className='w-12 md:w-16' src={logoImg} alt="logo" />
                  <h1 className='text-2xl md:text-4xl font-bold text-myColor'>DineSmart</h1>
                </div>
              </div>
              <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal items-center gap-4 px-1">
                  {navLinks}
                </div>
              </div>
              <div className="navbar-end">
                <div className='flex gap-3 items-center'>
                  {
                    user ? '' : <Link to='/login'><button className='px-4 py-1 border-[2px] border-myColor rounded-lg hover:bg-myColor hover:text-white'>JoinUs</button></Link>
                  }
                  <NavLink className={location.pathname === '/notification' && 'text-white text-center font-semibold bg-[#b1dcd8] px-2 py-1 rounded-md'} to="/notification"><FaBell className='text-myColor text-3xl hover:scale-125 transition-all ease-in-out'></FaBell></NavLink>
                  <MenuDropdown />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
