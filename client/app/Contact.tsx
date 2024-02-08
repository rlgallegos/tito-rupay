import Image from "next/image";
import { HiEnvelope, HiPhone, HiChatBubbleLeftRight } from "react-icons/hi2";

import Socials from "./components/Socials"


const Contact: React.FC = () => {
    return (        
        <div className="w-full h-[33vh] bg-dark-green text-primary flex">
            <div className="w-1/3 py-6 h-full flex flex-col justify-evenly items-center">
                <Socials />
                <div className="flex gap-4 items-center w-2/3">
                    <HiEnvelope className="" />
                    <h2 className="flex items-center justify-center text-xl">example.email@gmail.com</h2>
                </div>
                <div className="flex gap-4 items-center w-2/3">
                    <HiPhone className="" />
                    <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                </div>
                <div className="flex gap-4 items-center w-2/3">
                    <HiChatBubbleLeftRight className="" />
                    <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                </div>
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center">
                <div className="flex justify-evenly items-center">
                    <Image width={200} height={200} alt="post" src='/images/sample-square-pic.png' className="bg-primary" />
                    <Image width={200} height={200} alt="post" src='/images/sample-square-pic.png' className="bg-primary" />
                    <Image width={200} height={200} alt="post" src='/images/sample-square-pic.png' className="bg-primary" />
                </div>
            </div>
        </div>
    )
}
export default Contact