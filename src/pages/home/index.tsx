import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import AboutUs from './components/AboutUs'
import OurWorks from './components/OurWorks'
import WorkWithUs from '@/components/global/WorkWithUs'

const HomePage = () => {
  return (
    <div className='home'>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <OurWorks />
      <WorkWithUs />
    </div>
  )
}

export default HomePage