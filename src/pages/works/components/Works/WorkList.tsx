import {useEffect, useState} from 'react'
import WorkCard from './WorkCard'
import { WorkListModel, WorkModel } from '@/models/WorksModel'
import style from './style.module.scss'

interface Props {
  data: WorkListModel
}

const WorkList = (props: Props) => {
  const [data, setData] = useState<WorkModel[] | null>()

  // trigger on component mount
  useEffect(() => {
    setData(props.data.data)
  }, [data])

  return (
    <div className={style.workList}>
      {
        (data && data.length) && data.map(item => <WorkCard {...item} key={item.id}/>) 
      }
    </div>
  )
}

export default WorkList
