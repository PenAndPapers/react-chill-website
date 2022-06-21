import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import Details from './components/Details'
import OfficeLocations from '@/components/global/OfficeLocations'

const AboutPage = () => {
  return (
    <div className='about'>
      <Hero />
      <ImageSlider />
      <Details />
      <OfficeLocations />
    </div>
  )
}

export default AboutPage