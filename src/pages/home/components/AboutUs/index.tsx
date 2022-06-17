import style from './style.module.scss'
import artBoard1 from '@/assets/images/icons/artBoard1.svg'
import artBoard2 from '@/assets/images/icons/artBoard2.svg'
import artBoard3 from '@/assets/images/icons/artBoard3.svg'
import artBoard4 from '@/assets/images/icons/artBoard4.svg'

const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <h2>About us</h2>
      <div className={style.contents}>
        <div>
          <h1>Product Design<br/>with character</h1>
        </div>
        <div>
          <p>Labore sit in anim ex culpa nulla quis mollit in sit ea et aliqua. Ex et duis ex adipisicing veniam. Ad cupidatat incididunt minim aliquip esse. Consequat mollit ea fugiat eiusmod ea in id incididunt mollit ut.</p>
          <br />
          <br />
          <p>Ad et ad proident proident eiusmod fugiat amet excepteur. Excepteur velit occaecat adipisicing ad do consectetur proident nostrud enim exercitation qui id. Sint nisi eiusmod aliquip esse laboris magna. </p>
          <br />
          <br />
          <p>Amet eu cillum consequat nulla voluptate esse occaecat ut nisi. Deserunt cupidatat id aliquip proident ut ipsum id. Culpa velit enim in occaecat sunt non culpa ad proident aliquip amet ipsum adipisicing.</p>
        </div>
      </div>
      <img className={style.artBoard1} src={artBoard1} alt="" />
      <img className={style.artBoard2} src={artBoard2} alt="" />
      <img className={style.artBoard3} src={artBoard3} alt="" />
      <img className={style.artBoard4} src={artBoard4} alt="" />
    </div>
  )
}

export default AboutUs
