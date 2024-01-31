import Socials from "./Socials"



const NavBar: React.FC = () => {
    return (
        <nav className="h-[120px] w-full bg-primary z-10 absolute top-0 flex flex-col justify-between items-center pt-4">
            <div className="w-full flex justify-evenly">
                <Socials />
                <h1 className="text-4xl">Roberto Rupay</h1>
                <button className="w-[200px] border border-accent bg-accent hover:bg-secondary rounded-xl ">Book Your FREE Consultation</button>
            </div>
            <div className="w-full flex justify-evenly text-lg">
                <p>Appointments</p>
                <p>Services</p>
                <p>Testimonials</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}
export default NavBar