import { Link } from "react-router-dom"
import style from './style.module.scss'

const AppNavigation = () => {
  return (
    <nav className={style.appNavigation}>
      <Link to='/' className={style.logo}>chill.</Link>
      <div>
        <Link to='works'>works</Link>
        <Link to='/about-us'>about</Link>
        <Link to='/contact-us'>contact</Link>
      </div>
    </nav>
  )
}

export default AppNavigation
