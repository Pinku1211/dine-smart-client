import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .then(error=> console.log(error))
  }

  return (
    <div className='relative hover:scale-110 transition-all ease-in-out'>
      <div className='flex flex-row items-center gap-3'>
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-1 border-[2px] border-myColor flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <div className=''>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col'>
            <h1 className='px-4 py-3 transition font-semibold text-rose-500'>{user?.displayName}</h1>
            <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              Dashboard
            </Link>
            <h1
              onClick={handleLogOut}
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
            >
              logout
            </h1>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
