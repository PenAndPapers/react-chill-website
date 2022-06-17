import style from './style.module.scss'
import Dribble from '../Icons/Dribble'
import Instagram from '../Icons/Instagram'
import Behance from '../Icons/Behance'
import Facebook from '../Icons/Facebook'
import Spotify from '../Icons/Spotify'

const SocialLinks = () => {
  return (
    <div className={style.socialLinks}>
      <div>
        <h3>Check our works</h3>
        <a href="#">
          <Dribble />
        </a>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Behance />
        </a>
      </div>
      <div>
        <h3>Check on us</h3>
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Spotify />
        </a>
      </div>
      <div>
        <h3>Say hello</h3>
        <a href="#">
          👋 hello@agency.com
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
