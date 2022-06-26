import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import style from './style.module.scss'
import artBoard1 from '@/assets/images/icons/artBoard1.svg'
import artBoard2 from '@/assets/images/icons/artBoard2.svg'
import artBoard3 from '@/assets/images/icons/artBoard3.svg'
import artBoard4 from '@/assets/images/icons/artBoard4.svg'

const AboutUs = () => {
  let h1 = useRef()
  let h2 = useRef()
  let span0 = useRef()
  let span1 = useRef()
  let span2 = useRef()
  let span3 = useRef()
  let span4 = useRef()
  let span5 = useRef()

  const handleAnimation = () => {
    const timeLine = gsap.timeline()

    timeLine.to(
      [span0, span1, span2, span3, span4, span5],
      {
        y: '0%',
        duration: .5,
        stagger: .15
      }
    )
  }

  useEffect(() => {
    handleAnimation()
  }, [])

  return (
    <div className={style.aboutUs}>
      <h2><span ref={el => {span0 = el}}>About us</span></h2>
      <div className={style.contents}>
        <div>
          <h1>
            <span ref={el => {span1 = el}}>Product Design</span> 
            <span ref={el => {span2 = el}}>with character</span>
          </h1>
        </div>
        <div>
          <p>
            <span ref={el => {span3 = el}}>Labore sit in anim ex culpa nulla quis mollit in sit ea et aliqua. Ex et duis ex adipisicing veniam. Ad cupidatat incididunt minim aliquip esse. Consequat mollit ea fugiat eiusmod ea in id incididunt mollit ut.</span>
          </p>
          <br />
          <br />
          <p>
            <span ref={el => {span4 = el}}>Ad et ad proident proident eiusmod fugiat amet excepteur. Excepteur velit occaecat adipisicing ad do consectetur proident nostrud enim exercitation qui id. Sint nisi eiusmod aliquip esse laboris magna.</span>
          </p>
          <br />
          <br />
          <p>
            <span ref={el => {span5 = el}}>Amet eu cillum consequat nulla voluptate esse occaecat ut nisi. Deserunt cupidatat id aliquip proident ut ipsum id. Culpa velit enim in occaecat sunt non culpa ad proident aliquip amet ipsum adipisicing.</span>
          </p>
        </div>
      </div>
      <img className={style.artBoard1} src={artBoard1} />
      <img className={style.artBoard2} src={artBoard2} />
      <img className={style.artBoard3} src={artBoard3} />
      <img className={style.artBoard4} src={artBoard4} />
    </div>
  )
}

export default AboutUs
