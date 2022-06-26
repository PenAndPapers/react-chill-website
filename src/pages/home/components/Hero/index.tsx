import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Art1 from '@/components/global/Art/Art1'
import Art2 from '@/components/global/Art/Art2'
import Art3 from '@/components/global/Art/Art3'
import Art4 from '@/components/global/Art/Art4'
import Art5 from '@/components/global/Art/Art5'
import Art6 from '@/components/global/Art/Art6'
import style from './style.module.scss'

const Hero = () => {
  let span0 = useRef()
  let span1 = useRef()
  let span2 = useRef()
  let art1 = useRef()
  let art2 = useRef()
  let art3 = useRef()
  let art4 = useRef()
  let art5 = useRef()

  const handleAnimation = () => {
    const timeLine = gsap.timeline()

    timeLine.to(
      [span0, span1, span2],
      {
        y: '0%',
        duration: .5,
        stagger: .15
      }
    )

    timeLine.to(
      [art1, art5],
      {
        y: '0rem',
        stagger: .15,
        duration: 1,
        ease: 'easeOut'
      },
      '-=.5'
    )

    timeLine.to(
      [art2, art3, art4],
      {
        y: '0rem',
        stagger: .15,
        duration: 1,
        ease: 'easeOut'
      },
      '-=.5'
    )
  }

  useEffect(() => {
    handleAnimation()
  }, [])

  return (
    <div className={style.hero}>
      <div className={style.text}>
        <h1><span ref={el => {span0 = el}}>We make products </span></h1>
        <h1>
          <span ref={el => {span1 = el}}>
            that <span><a>matter</a> <Art3 /></span>
          </span>
        </h1>
        <p>
          <span ref={el => {span2 = el}}>We are more than an agency. We want to be a team within your team, sharing knowledge, and helping one</span>
        </p>
      </div>
      <span className={style.art1} >
        <Art1 ref={el => {art1 = el}} />
      </span>
      <span className={style.art2}>
        <Art2 ref={el => {art2 = el}} />
      </span>
      <span className={style.art4}>
        <Art4 ref={el => {art3 = el}} />
      </span>
      <span className={style.art5}>
        <Art5 ref={el => {art4 = el}} />
      </span>
      <span className={style.art6}>
        <Art6 ref={el => {art5 = el}} />
      </span>
    </div>
  )
}

export default Hero
