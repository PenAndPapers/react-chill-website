import Art9 from '@/components/global/Art/Art9'
import Art8 from '@/components/global/Art/Art8'
import style from './style.module.scss'

const Hero = () => {
  return (
    <div className={style.hero}>
      <h2>About us</h2>
      <h1>Learn more <span><a>about us</a><Art8 fill='#EB0028' /></span></h1>
      <Art9 className={style.art9} />
    </div>
  )
}

export default Hero
