import {useEffect, useState} from 'react'
import ClientList from './ClientList'
import { ClientListModel } from '@/models/ClientModel'
import style from './style.module.scss'

const Clients = () => {
  const clients: ClientListModel = {
    data: [
      {
        id: 1,
        testimonial: 'Nulla sit nostrud dolore duis. Non ad non exercitation enim mollit mollit. Voluptate Lorem quis ad cupidatat ex. Laboris laboris sunt excepteur quis anim occaecat duis et dolor magna in tempor labore.',
        name: 'James Roy McFinn',
        role: 'CEO - Test Company',
        image: 'https://randomuser.me/api/portraits/men/43.jpg'
      },
      {
        id: 2,
        testimonial: 'Id exercitation culpa ullamco officia ad irure quis officia qui dolore. Incididunt ipsum consectetur irure enim nisi incididunt pariatur dolor dolor.',
        name: 'Ricky Levert',
        role: 'COO - Super Great Inc.',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
      },
      {
        id: 3,
        testimonial: 'Id exercitation culpa ullamco officia ad irure quis officia qui dolore. Incididunt ipsum consectetur irure enim nisi incididunt pariatur dolor dolor.',
        name: 'Annalyn Johnson',
        role: 'Senior Data Analyst - Green Company',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
      }
    ]
  }
  return (
    <div className={style.clients}>
      <h2>Our clients</h2>
      <ClientList clients={clients.data} />
    </div>
  )
}

export default Clients
