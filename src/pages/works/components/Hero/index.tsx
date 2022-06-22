import Art10 from '@/components/global/Art/Art10'
import style from './style.module.scss'

const Hero = () => {
  return (
    <div className={style.hero}>
      <h2>About us</h2>
      <h1>Bringing founder’s ideas to <span><a>life</a><Art10 fill='#4DD78A' /></span></h1>
    </div>
  )
}

export default Hero