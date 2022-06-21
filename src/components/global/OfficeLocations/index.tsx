import {useEffect, useState} from 'react'
import OfficeList from './OfficeList'
import { OfficeModelList } from '@/models/OfficeModel'
import style from './style.module.scss'

const OfficeLocations = () => {
  const data: OfficeModelList = {
    data: [
      {
        id: 1,
        name: 'Chill Azerbaijan',
        address: '89 Ataturk avenue, Baku, Azerbaijan',
        mobileNumber: '+994 (051) 625 51 45',
        email: 'baku@chillagency.az'
      },
      {
        id: 2,
        name: 'Chill Hungary',
        address: 'Budapest, Kossuth Lajos tér 1-3, 1055 Hungary',
        mobileNumber: '+36 55 283 184',
        email: 'budapest@chillagency.az'
      },
      {
        id: 3,
        name: 'Chill Italy',
        address: 'Via Monte del Pascolo, 20, 30034 Mira VE, Italy',
        mobileNumber: '+39 06 648 2020',
        email: 'venice@chillagency.az'
      }
    ]
  }
  return (
    <div className={style.officeLocations}>
      <OfficeList officeList={data} />
    </div>
  )
}

export default OfficeLocations
