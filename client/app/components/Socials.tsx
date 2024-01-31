
import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";




const Socials: React.FC = () => {
    return (
        <div className="w-[200px] flex justify-evenly p-4 text-xl">
            <SiInstagram />
            <SiFacebook />
            <SiLinkedin />
        </div>
    )
}
export default Socials