import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-200   hover:text-blue-900 rounded-lg ${
          isActive ? 'bg-gradient-to-r from-cyan-500 to-myColor  text-gray-700' : 'text-myColor'
        }`
      }
    >
      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}

export default MenuItem