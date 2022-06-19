import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import OfficeLocations from '@/components/global/OfficeLocations'

const ContactPage = () => {
  return (
    <div className='contact'>
      <Hero />
      <ContactForm />
      <OfficeLocations />
    </div>
  )
}

export default ContactPage