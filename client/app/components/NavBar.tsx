import Link from "next/link"

import Socials from "./Socials"



const NavBar: React.FC = () => {
    return (
        <nav className="h-[120px] w-full bg-primary z-10 absolute top-0 flex flex-col justify-between items-center pt-4">
            <div className="w-full flex items-center justify-evenly">
                <Socials />
                <h1 className="text-4xl">Roberto Rupay</h1>
                <Link href='/appointments' className="w-[200px] border-2 bg-green-1 text-primary hover:bg-secondary hover:text-green-1 hover:border-green-1 p-2 text-center rounded-xl">Book Your FREE Consultation</Link>
            </div>
            <div className="w-full flex justify-evenly text-lg">
                <Link href="#services">Services</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="/appointments">Appointments</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}
export default NavBar