import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <h1 className="tracking-widest text-myColor uppercase">404 | Not Found</h1>
    </div>
  )
}

export default ErrorPage
