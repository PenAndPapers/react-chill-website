import { OfficeModelList } from '@/models/OfficeModel'
import OfficeCard from './OfficeCard'
import style from './style.module.scss'

interface Props {
  officeList: OfficeModelList
}

const OfficeList = (props: Props) => {
  return (
    <div className={style.officeList}>
      {
        props.officeList.data.map(item => {
          return <OfficeCard data={item} key={item.id} />
        })
      }
    </div>
  )
}

export default OfficeList
