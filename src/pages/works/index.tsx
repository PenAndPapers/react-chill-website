import Hero from './components/Hero'
import Works from './components/Works'
import Clients from './components/Clients'
import WorkWithUs from '@/components/global/WorkWithUs'

const WorksPage = () => {
  return (
    <div className='works'>
      <Hero />
      <Works />
      <Clients />
      <WorkWithUs />
    </div>
  )
}

export default WorksPage