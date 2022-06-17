import { WorkModel } from '@/models/WorksModel'

interface Props {
  data: WorkModel
}

const WorkCard = (props: Props) => {
  const data = props.data
  return (
    <article className={data.classes.border}>
      <figure>
        <img src={data.img} className={data.classes.bg} alt="" />
      </figure>
      <div className={data.classes.bg}>
        <h4>{ data.title }</h4>
        <p>{ data.type }</p>
      </div>
    </article>
  )
}

export default WorkCard
