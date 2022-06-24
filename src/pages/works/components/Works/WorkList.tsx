import {useEffect, useState} from 'react'
import WorkCard from './WorkCard'
import { WorkModel } from '@/models/WorksModel'
import style from './style.module.scss'

interface Props {
  works: WorkModel[]
}

const WorkList = (props: Props) => {
  const [data, setData] = useState<WorkModel[] | null>()

  // trigger on component mount
  useEffect(() => {
    setData(data => data = props.works)
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
