import Image from 'next/image'
import Landing from './Landing'
import WhoWeAre from './WhoWeAre'
import Testimonials from './Testimonials'
import Certifications from './Certifications'
import NavBar from './components/NavBar'
import Contact from './Contact'


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-primary relative">
        <NavBar />
        <Landing />
        <div className='w-full h-screen'>
            <WhoWeAre />
            <Certifications />
        </div>
        <Testimonials />
        <Contact />
    </main>
  )
}
