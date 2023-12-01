/* eslint-disable react/prop-types */
import { PropagateLoader } from 'react-spinners'

const Loader = ({ smallHeight, show }) => {
  return show && (
    <div
      className={` ${smallHeight ? 'h-[25px]' : 'h-[100vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <PropagateLoader size={10} color='#219C90' />
    </div>
  )
}

export default Loader
