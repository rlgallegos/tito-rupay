import { MdHandshake, MdAccountTree, MdApartment, MdBusinessCenter, MdWork, MdOutlineInsights, MdExtension, MdFace, MdFace3, MdFace4, MdFace6 } from "react-icons/md";



const Services: React.FC = () => {
    return (
        <div className="h-[66vh] w-full relative">
            <div className="absolute h-full w-full bg-forest-stone bg-center bg-cover bg-fixed"></div>
            
            <div className="absolute w-full h-full flex justify-evenly items-center text-xl">

                <div className="w-1/4 h-1/2 bg-secondary border-2 border-green-1 flex flex-col items-center justify-evenly py-12">
                    <MdHandshake className="w-full h-1/2"/>
                    <h2 className="mt-6">1:1 Coaching</h2>
                </div>

                <div className="w-1/4 h-1/2 bg-secondary border-2 border-green-1 flex flex-col items-center justify-evenly py-12">
                    <MdBusinessCenter className="w-full h-1/2"/>
                    <h2 className="mt-6">Business Coaching</h2>
                </div>

                <div className="w-1/4 h-1/2 bg-secondary border-2 border-green-1 flex flex-col items-center justify-evenly py-12">
                    <div className="w-full h-1/2 flex flex-col gap-6 items-center justify-center px-24">
                        <div className="w-full h-1/2 flex">
                            <MdFace className="w-1/2 h-full" />
                            <MdFace3 className="w-1/2 h-full" />
                        </div>
                        <div className="w-full h-1/2 flex">
                            <MdFace4 className="w-1/2 h-full" />
                            <MdFace6 className="w-1/2 h-full" />
                        </div>
                    </div>
                    <h2 className="mt-6">Group Coaching</h2>
                </div>

            </div>

        </div>
    )
}
export default Services