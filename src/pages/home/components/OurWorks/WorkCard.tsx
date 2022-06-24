import { WorkModel } from '@/models/WorksModel'

const WorkCard = (props: WorkModel) => {
  const { classes, img, title, type } = props
  return (
    <article className={classes.border}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className={classes.bg}>
        <h4>{ title }</h4>
        <p>{ type }</p>
      </div>
    </article>
  )
}

export default WorkCard
