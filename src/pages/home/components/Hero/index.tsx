import style from './style.module.scss'
import Art1 from './art/Art1'
import Art2 from './art/Art2'
import Art3 from './art/Art3'
import Art4 from './art/Art4'
import Art5 from './art/Art5'

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.text}>
        <h1>We make products that <span><a>matter</a> <Art3 /></span></h1>
        <p>We are more than an agency. We want to be a team within your team, sharing knowledge, and helping one</p>
      </div>
      <Art1 className={style.art1} />
      <Art2 className={style.art2} />
      <Art4 className={style.art4} />
      <Art5 className={style.art5} />
    </div>
  )
}

export default Hero
