import { HiEnvelope, HiPhone, HiChatBubbleLeftRight } from "react-icons/hi2";

import Socials from "./components/Socials"


const Contact: React.FC = () => {
    return (        
        <div className="w-full h-[25vh] bg-secondary flex">
            <div className="w-1/2 h-full">
                <Socials />
            </div>
            <div className="w-1/2 px-12 py-6 h-full flex flex-col justify-evenly">
                <div className="flex">
                    <HiEnvelope className="" />
                    <h2 className="flex items-center justify-center text-xl">example.email@gmail.com</h2>
                </div>
                <div className="flex">
                    <HiPhone className="" />
                    <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                </div>
                <div className="flex">
                    <HiChatBubbleLeftRight className="" />
                    <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                </div>
            </div>
        </div>
    )
}
export default Contact