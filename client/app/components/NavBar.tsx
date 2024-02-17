import Link from "next/link"

import Socials from "./Socials"



const NavBar: React.FC = () => {
    return (
        <nav className="h-[120px] w-full z-10 absolute top-0 flex flex-col justify-between items-center pt-4 text-dark-green">
            
            <div className="w-full h-full px-4 flex justify-between ">
                <h1 className="text-4xl px-4 flex items-center pl-4">Roberto Rupay</h1>
                <div className="px-4 flex justify-evenly gap-6 text-lg items-center">
                    <Link href="#services">Services</Link>
                    <Link href="#testimonials">Testimonials</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href='/appointments'>Book An Appointment</Link>
                </div>

            </div>
        </nav>
    )
}
export default NavBar