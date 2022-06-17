import { Routes, Route } from 'react-router-dom'
import HomePage from "@/pages/home"
import AboutPage from "@/pages/about"
import WorksPage from "@/pages/works"
import ContactPage from "@/pages/contact"

const AppMain = () => {
  return (
    <main className='app-main'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </main>
  )
}

export default AppMain
