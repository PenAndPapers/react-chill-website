import Location from '@/components/global/Icons/Location'
import { OfficeModel } from '@/models/OfficeModel'
import style from './style.module.scss'

interface Props {
  data: OfficeModel
}

const OfficeCard = (props: Props) => {
  return (
    <div className={style.officeCard}>
      <Location />
      <h4>{ props.data.name }</h4>
      <h2>{ props.data.address }</h2>
      <p>{ props.data.mobileNumber }</p>
      <p>{ props.data.email }</p>
    </div>
  )
}

export default OfficeCard
