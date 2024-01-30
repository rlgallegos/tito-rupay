import { HiEnvelope, HiPhone, HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdMail, IoMdText } from "react-icons/io";
import Image from "next/image";


const Contact: React.FC = () => {
    return (
        <div className="h-screen w-full bg-primary flex flex-col items-center justify-center relative">
            <h1 className="text-4xl z-10">Contact</h1>

            <div className="w-1/2 h-1/5 flex items-center justify-center z-10">
                <h1>For any questions or for information on setting up group sessions, don't hesitate to reach out:</h1>
            </div>

            {/* Contact Methods */}
            <div className="border border-black w-2/3 h-1/3 flex justify-evenly z-10 bg-primary">
                <a href="mailto:example.email@gmail.com" className="w-1/4 h-full">
                    <div className="w-full h-full flex flex-col justify-evenly py-12">
                        <HiEnvelope className="h-1/4 w-full" />
                        <h2 className="flex items-center justify-center text-xl">Email</h2>
                        <h2 className="flex items-center justify-center text-xl">example.email@gmail.com</h2>
                    </div>
                </a>
                <a href="tel:+15555551234" className="w-1/4 h-full">
                    <div className="w-full h-full flex flex-col justify-evenly py-12">
                        <HiPhone className="h-1/4 w-full" />
                        <h2 className="flex items-center justify-center text-xl">Call</h2>
                        <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                    </div>
                </a>
                <a href="smsto:+15555551234" className="w-1/4 h-full">
                    <div className="w-full h-full flex flex-col justify-evenly py-12">
                        <HiChatBubbleLeftRight className="h-1/4 w-full" />
                        <h2 className="flex items-center justify-center text-xl">Text</h2>
                        <h2 className="flex items-center justify-center text-xl">+1 (555) 555-1234</h2>
                    </div>
                </a>
            </div>

            {/* Image */}
            <div className="absolute h-full w-1/2 right-0 bg-blue-700 flex">
                <Image src='/images/contact-2.jpg' alt="mobile phone" layout="fill"  className=""/>
            </div>
        </div>
    )
  }
  export default Contact