import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import ArrowLg from '@/components/global/Icons/ArrowLg'
import style from './style.module.scss'


const WhatWeDo = () => {
  let img = useRef()
  let curtain = useRef()
  let h1 = useRef()
  let h2 = useRef()
  let h3 = useRef()
  let h4 = useRef()
  let p = useRef()
  let btn = useRef()
  let arrow = useRef()

  const handleAnimation = () => {
    const timeLine = gsap.timeline()

    timeLine.fromTo(
      [h1],
      {
        opacity: 0,
        x: '10rem',
      },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: 'bounce'
      }
    )

    timeLine.fromTo(
      [curtain],
      {
        width: '100%',
        duration: 1,
      },
      {
        width: 0,
        ease: 'easeOut'
      },
      '-=.25'
    )

    timeLine.fromTo(
      [h2, h3, h4], 
      {
        opacity: 0,
        x: '10rem'
      }, 
      {
        opacity: 1,
        x: 0,
        stagger: .25,
        ease: 'bounce'
      },
      '-=.5'
    )

    timeLine.fromTo(
      [p], 
      {
        opacity: 0,
        x: '5rem',
      },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: 'bounce'
      },
      '-=1'
    )

    timeLine.fromTo(
      [btn], 
      {
        opacity: 0,
        x: '-5rem',
      },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: 'bounce'
      },
      '-=.75'
    )

    timeLine.fromTo(
      [arrow], 
      {
        opacity: 0,
        x: '-10rem',
      },
      {
        opacity: 1,
        x: 0,
        duration: .5,
        ease: 'bounce'
      },
      '-=.5'
    )
  }

  useEffect(() => {
    handleAnimation()
  }, [])

  return (
    <div className={style.whatWeDo}>
      <h2 ref={el => {h1 = el}}>What we do?</h2>
      <div className={style.contents}>
        <div className={style.item1}>
          <img ref={el => {img = el}} src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
          <div ref={el => {curtain = el}} className={style.curtain} />
        </div>
        <div className={style.item2}>
          <h3 ref={el => {h2 = el}}>Branding</h3>
          <h3 ref={el => {h3 = el}}>Web Design</h3>
          <h3 ref={el => {h4 = el}}>Development</h3>

          <div>
            <p ref={el => {p = el}}>See all</p>
            <button ref={el => {btn = el}}>
              <ArrowLg ref={el => {arrow = el}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
