import {useEffect, useState} from 'react'
import { ClientModel } from '@/models/ClientModel'
import style from './style.module.scss'

const ClientCard = (props: ClientModel) => {
  const { testimonial, name, role, image } = props
  return (
    <article className={style.clientCard}>
      <p>"{ testimonial }"</p>
      <div className={style.details}>
        <img src={image} alt={name} />
        <div>
          <p>{ name }</p>
          <span>{ role }</span>
        </div>
      </div>
    </article>
  )
}

export default ClientCard
