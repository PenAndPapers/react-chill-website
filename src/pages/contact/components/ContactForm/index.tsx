import { useState} from 'react'
import style from './style.module.scss'

const ContactForm = () => {
  const [form, setForm] = useState({
    service: '',
    budget: '',
    fname: '',
    lname: '',
    mobileNumber: '',
    email: '',
    message: ''
  })
  const [formError, setErrors] = useState({})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    
    setForm({ ...form, [name]: value })
  }

  const handleValidate = () => {
    const errors = {}

    if (!form.service) errors.service = 'Service is required'
    if (!form.budget) errors.budget = 'Budget is required'
    if (!form.fname) errors.fname = 'First name is required'
    if (!form.lname) errors.lname = 'Last name is required'
    if (!form.mobileNumber) errors.mobileNumber = 'Mobile number is required'
    if (!form.email) errors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email is invalid'
    
    setErrors(errors)
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault()
    handleValidate()
  }

  return (
    <div className={style.contactForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.row}>
          <h4>Service</h4>
          <div className={style.cols4}>
            <button>Web Design</button>
            <button>App Design</button>
            <button>Development</button>
            <button>Branding</button>
          </div>
          <p className={style.error}>{ formError.service }</p>
        </div>
        
        <div className={style.row}>
          <h4>Budget in USD</h4>
          <div className={style.cols4}>
            <button>5k-10k</button>
            <button>10k-50k</button>
            <button>More than 50k</button>
          </div>
          <p className={style.error}>{ formError.budget }</p>
        </div>
        
        <div className={style.row}>
          <div className={style.cols2}>
            <div className={style.field}>
              <input
                type='text'
                placeholder='First name'
                name='fname'
                value={form.fname}
                onChange={handleChange}
              />
              <p className={style.error}>{ formError.fname }</p>
            </div>
            <div className={style.field}>
              <input
                type='text'
                placeholder='Last name'
                name='lname'
                value={form.lname}
                onChange={handleChange}
              />
              <p className={style.error}>{ formError.lname }</p>
            </div>
          </div>
        </div>

        <div className={style.row}>
          <div className={style.cols2}>
            <div className={style.field}>
              <input
                type='text'
                placeholder='Mobile number'
                name='mobileNumber'
                value={form.mobileNumber}
                onChange={handleChange}
              />
              <p className={style.error}>{ formError.mobileNumber }</p>
            </div>
            <div className={style.field}>
              <input
                type='text'
                placeholder='Email address'
                name='email'
                value={form.email}
                onChange={handleChange}
              />
              <p className={style.error}>{ formError.email }</p>
            </div>
          </div>
        </div>

        <div className={style.row}>
          <div className={'grid'}>
            <textarea
              placeholder='Enter your message'
              name='message'
              rows={7} 
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={style.btnSend}>Send Request</button>
      </form>
    </div>
  )
}

export default ContactForm
