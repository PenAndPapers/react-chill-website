import WorkCard from './WorkCard'
import { WorkModelList } from '@/models/WorksModel'
import style from './style.module.scss'

interface Props {
  works: WorkModelList
}

const WorkSlider = (props: Props) => {
  const data = props.works.data
  return (
    <div className={style.workSlider}>
      {
        data.map(item => <WorkCard data={item} key={item.id} />)
      }
    </div>
  )
}

export default WorkSlider
