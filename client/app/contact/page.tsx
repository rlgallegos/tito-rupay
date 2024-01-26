import { HiEnvelope, HiPhone, HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoMdMail, IoMdText } from "react-icons/io";


const Contact: React.FC = () => {
    return (
        <div className="h-screen w-full bg-primary flex flex-col items-center justify-center">
            <div className="w-1/2 h-1/5 border border-black flex items-center justify-center">
                <h1>For any questions or for information on setting up group sessions, don't hesitate to reach out:</h1>
            </div>

            {/* Contact Methods */}
            <div className="border border-black w-2/3 h-1/3 flex justify-evenly">
                <div className="w-1/4 h-full flex flex-col justify-evenly py-12">
                    <HiEnvelope className="h-1/4 w-full" />
                    <h2 className="flex items-center justify-center text-xl">Email</h2>
                    <h2 className="flex items-center justify-center text-xl">example.email@gmail.com</h2>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-evenly py-12">
                    <HiPhone className="h-1/4 w-full" />
                    <h2 className="flex items-center justify-center text-xl">Call</h2>
                    <h2 className="flex items-center justify-center text-xl">(555) 555-1234</h2>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-evenly py-12">
                    <HiChatBubbleLeftRight className="h-1/4 w-full" />
                    <h2 className="flex items-center justify-center text-xl">Text</h2>
                    <h2 className="flex items-center justify-center text-xl">(555) 555-1234</h2>
                </div>
            </div>
        </div>
    )
  }
  export default Contact