import LogoImg from './img/blog.png'
import { Link } from 'react-router-dom'

const Logo = ({title}) => {
  return (
    <div className="logo">
      <Link to="/" className="flex items-center justify-between">
        <img src={LogoImg} alt="brand-log" className="w-12"/>
        <h1 className="text-2xl pl-2">{title}</h1>
      </Link>
    </div>
  )
}

Logo.defaultProps = {
  title: 'React Js Blog'
}

export default Logo
