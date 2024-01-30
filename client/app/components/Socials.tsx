
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";




const Socials: React.FC = () => {
    return (
        <div className="w-[180px] flex justify-evenly p-4">
            <SiInstagram />
            <SiFacebook />
            <SiTiktok />
        </div>
    )
}
export default Socials