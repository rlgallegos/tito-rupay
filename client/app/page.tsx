import Landing from './Landing'
import WhoWeAre from './WhoWeAre'
import Testimonials from './Testimonials'
import Certifications from './Certifications'
import NavBar from './components/NavBar'
import Contact from './Contact'
import Services from './Services'
import Divider from './components/Divider'


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full bg-primary relative">
        <NavBar />
        <Landing />
        <WhoWeAre />
        <Services />
        {/* <Certifications /> */}
        <Divider />
        <Testimonials />
        <Contact />
    </main>
  )
}
