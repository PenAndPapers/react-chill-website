import style from './style.module.scss'
import dribble from '@/assets/images/icons/dribble.svg'
import behance from '@/assets/images/icons/be.svg'
import instagram from '@/assets/images/icons/instagram.svg'
import facebook from '@/assets/images/icons/facebook.svg'
import spotify from '@/assets/images/icons/spotify.svg'

const SocialLinks = () => {
  return (
    <div className={style.socialLinks}>
      <div>
        <h3>Check our works</h3>
        <a href="#">
          <img src={dribble} alt="" />
        </a>
        <a href="#">
          <img src={instagram} alt="" />
        </a>
        <a href="#">
          <img src={behance} alt="" />
        </a>
      </div>
      <div>
        <h3>Check on us</h3>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
        <a href="#">
          <img src={spotify} alt="" />
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
