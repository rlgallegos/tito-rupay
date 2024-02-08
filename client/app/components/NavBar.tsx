import Link from "next/link"

import Socials from "./Socials"



const NavBar: React.FC = () => {
    return (
        <nav className="h-[120px] w-full z-10 absolute top-0 flex flex-col justify-between items-center pt-4 bg-primary border-b-2 border-dark-green text-black">
            <div className="w-full flex items-center justify-evenly">
                <Socials />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl">Roberto Rupay</h1>
                    <h1 className="text-xl">Certified Accountability & Life Coach</h1>
                </div>
                <Link href='/appointments' className="w-[200px] border bg-gradient-to-bl from-dark-gold via-light-gold to-dark-gold text-dark-green border-dark-green p-2 text-center rounded-xl">Book Your FREE Consultation</Link>
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