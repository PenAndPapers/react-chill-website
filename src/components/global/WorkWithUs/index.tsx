import style from './style.module.scss'
import ArrowSm from '../Icons/ArrowSm'

const WorkWithUs = () => {
  return (
    <div className={style.workWithUs}>
      <h2>Work with us</h2>
      <div className={style.getStarted}>
        <h4>Get started</h4>
        <button>
          <ArrowSm />
        </button>
      </div>
    </div>
  )
}

export default WorkWithUs
