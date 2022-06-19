import { useEffect, useState} from 'react'
import style from './style.module.scss'

const ContactForm = () => {
  const [form, setForm] = useState({
    service: '',
    budget: '',
    fname: '',
    lname: '',
    mobileNumber: '',
    email: ''
  })

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault()
  }

  return (
    <div className={style.contactForm}>
      <form onSubmit={handleSubmit}>
        <h4>Service</h4>
        <div className={style.cols4}>
          <button>Web Design</button>
          <button>App Design</button>
          <button>Development</button>
          <button>Branding</button>
        </div>
        <h4>Budget in USD</h4>
        <div className={style.cols4}>
          <button>5k-10k</button>
          <button>10k-50k</button>
          <button>More than 50k</button>
        </div>
        <div className={style.cols2}>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <div className={style.cols2}>
          <input type='text' placeholder='Mobile number' />
          <input type='email' placeholder='Email address' />
        </div>
        <div className={'grid'}>
          <textarea name='' id='' placeholder='Enter your message' rows={7} />
        </div>
        <button className={style.btnSend}>Send Request</button>
      </form>
    </div>
  )
}

export default ContactForm
