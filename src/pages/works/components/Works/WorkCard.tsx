import {useEffect, useState, useRef} from 'react'
import ArrowMd from '@/components/global/Icons/ArrowMd'
import { WorkModel } from '@/models/WorksModel'
import style from './style.module.scss'

const WorkCard = (props: WorkModel) => {
  const { id, img, classes, title, description, type, link } = props
  const divRef = useRef<HTMLDivElement>(null)

  const isReverse = id % 2 === 0 ? style.reverse : ''

  useEffect(() => {
    if (divRef.current && description) divRef.current.innerHTML = description
  }, [divRef])
  return (
    <div className={`${style.workCard} ${isReverse}`}>
      <div className={`${style.banner} ${classes.bg}`}>
        <img src={img} alt={title} />
      </div>
      <div className={style.details}>
        <p className={style.type}>{type}</p>
        <h2>{title}</h2>
        <div ref={divRef} />
        <a href={link} target='_blank'>
          <span>Visit site</span>
          <ArrowMd />
        </a>
      </div>
    </div>
  )
}

export default WorkCard
