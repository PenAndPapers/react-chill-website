import React, { useState} from 'react'
import style from './style.module.scss'

interface Form {
  service: string;
  budget: string;
  fname: string;
  lname: string;
  mobileNumber: string;
  email: string;
  message?: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<Form>({
    service: '',
    budget: '',
    fname: '',
    lname: '',
    mobileNumber: '',
    email: '',
    message: ''
  })
  const [formError, setErrors] = useState<Form | object>({})

  const handleFormUpdate = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const { name, value } = (event.target as HTMLInputElement)
    
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
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email is invalid'
    
    setErrors(errors)

    return Object.keys(errors).length ? errors : null
  }

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const errors = await handleValidate()

    if (!errors) {
      // submit data in API
    }
  }

  return (
    <div className={style.contactForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.row}>
          <h4>Service</h4>
          <div className={style.cols4}>
            <button name='service' value='Web Design' className={ form.service === 'Web Design' ? style.active : '' } onClick={handleFormUpdate}>Web Design</button>
            <button name='service' value='App Design' className={ form.service === 'App Design' ? style.active : '' } onClick={handleFormUpdate}>App Design</button>
            <button name='service' value='Development' className={ form.service === 'Development' ? style.active : '' } onClick={handleFormUpdate}>Development</button>
            <button name='service' value='Branding' className={ form.service === 'Branding' ? style.active : '' } onClick={handleFormUpdate}>Branding</button>
          </div>
          { formError.service && <p className={style.error}>{ formError.service }</p> }
        </div>
        
        <div className={style.row}>
          <h4>Budget in USD</h4>
          <div className={style.cols4}>
            <button name='budget' value='5k-10k' className={ form.budget === '5k-10k' ? style.active : '' } onClick={handleFormUpdate}>5k-10k</button>
            <button name='budget' value='10k-50k' className={ form.budget === '10k-50k' ? style.active : '' } onClick={handleFormUpdate}>10k-50k</button>
            <button name='budget' value='50k+' className={ form.budget === '50k+' ? style.active : '' } onClick={handleFormUpdate}>More than 50k</button>
          </div>
          { formError.budget && <p className={style.error}>{ formError.budget }</p> }
        </div>
        
        <div className={style.row}>
          <div className={style.cols2}>
            <div className={style.field}>
              <input
                type='text'
                placeholder='First name'
                name='fname'
                value={form.fname}
                onChange={handleFormUpdate}
              />
              { formError.fname && <p className={style.error}>{ formError.fname }</p> }
            </div>
            <div className={style.field}>
              <input
                type='text'
                placeholder='Last name'
                name='lname'
                value={form.lname}
                onChange={handleFormUpdate}
              />
              { formError.lname && <p className={style.error}>{ formError.lname }</p> }
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
                onChange={handleFormUpdate}
              />
              { formError.mobileNumber && <p className={style.error}>{ formError.mobileNumber }</p> }
            </div>
            <div className={style.field}>
              <input
                type='text'
                placeholder='Email address'
                name='email'
                value={form.email}
                onChange={handleFormUpdate}
              />
              { formError.mobileNumber && <p className={style.error}>{ formError.email }</p> }
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
              onChange={handleFormUpdate}
            />
          </div>
        </div>
        <button className={style.btnSend}>Send Request</button>
      </form>
    </div>
  )
}

export default ContactForm
