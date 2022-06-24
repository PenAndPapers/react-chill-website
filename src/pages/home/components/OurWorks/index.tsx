import style from './style.module.scss'
import WorkSlider from './WorkSlider'
import zearn from '@/assets/images/home/work/zearn.png'
import oneplus from '@/assets/images/home/work/oneplus.png'
import figma from '@/assets/images/home/work/figma.png'
import { WorkListModel } from '@/models/WorksModel'

const OurWorks = () => {
  const works: WorkListModel = {
    data: [
      {
        id: 1,
        img: zearn,
        classes: {
          border: 'border-yellow',
          bg: 'bg-yellow'
        },
        title: 'Zearn',
        type: 'Educational Platform'
      },
      {
        id: 2,
        img: oneplus,
        classes: {
          border: 'border-red',
          bg: 'bg-red'
        },
        title: 'One Plus',
        type: 'Mobile phone manufacturer'
      },
      {
        id: 3,
        img: figma,
        classes: {
          border: 'border-blue',
          bg: 'bg-blue'
        },
        title: 'Figma',
        type: 'Software'
      },
      {
        id: 4,
        img: zearn,
        classes: {
          border: 'border-yellow',
          bg: 'bg-yellow'
        },
        title: 'Zearn',
        type: 'Educational Platform'
      },
      {
        id: 5,
        img: oneplus,
        classes: {
          border: 'border-red',
          bg: 'bg-red'
        },
        title: 'One Plus',
        type: 'Mobile phone manufacturer'
      },
      {
        id: 6,
        img: figma,
        classes: {
          border: 'border-blue',
          bg: 'bg-blue'
        },
        title: 'Figma',
        type: 'Software'
      },
      {
        id: 7,
        img: zearn,
        classes: {
          border: 'border-yellow',
          bg: 'bg-yellow'
        },
        title: 'Zearn',
        type: 'Educational Platform'
      },
      {
        id: 8,
        img: oneplus,
        classes: {
          border: 'border-red',
          bg: 'bg-red'
        },
        title: 'One Plus',
        type: 'Mobile phone manufacturer'
      }
    ]
  }

  return (
    <div className={style.ourWorks}>
      <h2>Our works</h2>
      <WorkSlider works={works} />
    </div>
  )
}

export default OurWorks
