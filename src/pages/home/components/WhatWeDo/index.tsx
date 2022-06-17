import style from './style.module.scss'
import arrowLg from '@/assets/images/icons/arrow-lg.svg'

const WhatWeDo = () => {
  return (
    <div className={style.whatWeDo}>
      <h2>What we do?</h2>
      <div className={style.contents}>
        <div className={style.item1}>
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="" />
        </div>
        <div className={style.item2}>
          <h3>Branding</h3>
          <h3>Web Design</h3>
          <h3>Development</h3>

          <div>
            <p>See all</p>
            <button>
              <img src={arrowLg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
