import style from './style.module.scss'
import arrowSm from '@/assets/images/icons/arrow-sm.svg'

const WorkWithUs = () => {
  return (
    <div className={style.workWithUs}>
      <h2>Work with us</h2>
      <div className={style.getStarted}>
        <h4>Get started</h4>
        <button>
          <img src={arrowSm} alt="" />
        </button>
      </div>
    </div>
  )
}

export default WorkWithUs
