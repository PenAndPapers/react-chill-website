import {useEffect, useState} from 'react'
import WorkList from './WorkList'
import { WorkListModel } from '@/models/WorksModel'
import WorkImg from '@/assets/images/works/work.png'
import style from './style.module.scss'

const Works = () => {
  const works: WorkListModel = {
    data: [
      {
        id: 1,
        img: WorkImg,
        classes: {
          border: 'border-yellow',
          bg: 'bg-yellow'
        },
        title: 'Zearn',
        description: `
          <p>Est proident eiusmod dolore cillum ullamco non irure. Nulla exercitation ex sit voluptate mollit. Commodo nisi sit non adipisicing aliquip. Enim magna aliquip et laboris dolor ullamco cupidatat nulla pariatur nisi do mollit. Dolore adipisicing laborum duis consequat ex qui cillum nulla elit proident ex labore velit.</p>
          <p>Adipisicing do esse dolor id laboris nulla cillum et eu. Non ullamco irure pariatur culpa sit laboris aliqua qui. Tempor mollit labore magna ut quis laborum. Velit laborum enim est aute id sint laborum dolore minim. Consequat minim do ut occaecat anim culpa incididunt veniam exercitation proident pariatur exercitation pariatur. Esse laborum aliquip nisi Lorem. Do laborum et Lorem nostrud adipisicing nisi eiusmod eiusmod ex. Ex sunt adipisicing labore irure eu ea laborum fugiat eiusmod anim.</p>
        `,
        type: 'UI/UX Development',
        link: 'https://www.figma.com/community/file/1022049905118380948'
      },
      {
        id: 2,
        img: WorkImg,
        classes: {
          border: 'border-red',
          bg: 'bg-red'
        },
        title: 'One Plus',
        description: `
          <p>Ipsum pariatur reprehenderit duis incididunt est dolore culpa ad Lorem minim pariatur amet amet tempor. Laboris ipsum adipisicing non aliqua adipisicing irure nostrud consequat laborum ut sunt nisi id. Esse elit magna qui laboris culpa ad voluptate proident voluptate nostrud aliqua consectetur eiusmod in. Mollit tempor nulla dolor pariatur dolor aliqua nostrud id adipisicing esse voluptate fugiat sint nostrud.</p>
          <p>Exercitation consequat magna aute laborum aute enim ad reprehenderit veniam in. Laboris consequat dolor tempor sint nostrud enim officia qui est aliquip laboris. Quis ea nostrud elit laboris.</p>
          <p>Nostrud ex ut excepteur sunt reprehenderit adipisicing aute officia. Amet exercitation ad commodo voluptate ex.</p>
        `,
        type: 'UI/UX Development',
        link: 'https://www.figma.com/community/file/1022049905118380948'
      },
      {
        id: 3,
        img: WorkImg,
        classes: {
          border: 'border-blue',
          bg: 'bg-blue'
        },
        title: 'Figma',
        description: `
          <p>Lorem veniam reprehenderit dolore velit id mollit adipisicing nisi nulla laborum quis Lorem aute. Nostrud deserunt labore fugiat amet laborum pariatur nisi sint. Incididunt minim culpa ut proident deserunt dolor excepteur.</p>
          <p>Nostrud non et deserunt labore magna. Ad tempor occaecat nisi deserunt sunt Lorem ex ullamco sunt magna. Ex non aliqua ipsum in. Id sunt sit et irure fugiat excepteur cupidatat commodo. Ad mollit aliqua ea aliqua aliquip anim non id minim est anim id.</p>
        `,
        type: 'UI/UX Development',
        link: 'https://www.figma.com/community/file/1022049905118380948'
      }
      
    ]
  }

  return (
    <div className={style.works}>
      {
        (works && works.data.length) && <WorkList works={works.data} />
      }
    </div>
  )
}

export default Works
