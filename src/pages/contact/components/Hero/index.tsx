import {useEffect, useState} from 'react'
import style from './style.module.scss'
import Art7 from '@/components/global/Art/Art7'
import Art8 from '@/components/global/Art/Art8'

const Hero = () => {
  return (
    <div className={style.hero}>
      <h2>Contact us</h2>
      <h1>Have a <span><a>project</a><Art8 /></span></h1>
      <Art7 className={style.art7} />
    </div>
  )
}

export default Hero
