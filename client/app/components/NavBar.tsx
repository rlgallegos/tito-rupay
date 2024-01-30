



const NavBar: React.FC = () => {
    return (
        <nav className="h-[120px] w-full bg-primary z-10 absolute top-0 flex flex-col justify-evenly items-center text-black">

            <h1 className="text-4xl">Roberto Rupay</h1>
            <div className="w-full flex justify-evenly">
                <p>Appointments</p>
                <p>Services</p>
                <p>Testimonials</p>
                <p>Contact</p>
            </div>
        </nav>
    )
}
export default NavBar