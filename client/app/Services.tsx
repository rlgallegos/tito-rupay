'use client'

import { useState } from "react";
import { MdHandshake, MdAccountTree, MdApartment, MdBusinessCenter, MdWork, MdOutlineInsights, MdExtension, MdFace, MdFace3, MdFace4, MdFace6 } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


import { ServiceTypes, ServiceType, services } from "@/data";


const Services: React.FC = () => {
    const [selected, setSelected] = useState<string>('')

    const handleClick: (service: string) => void = (service) => {
        if (selected === ''){
            setSelected(service)
        } else {
            setSelected('')
        }
    }

    let serviceDescription: string = ''
    let serviceBullets: string[] = ['', '']
    if (selected !== ''){
        serviceDescription = services[selected]['text']
        serviceBullets = services[selected]['bullets']
    }

    return (
        <div id="services" className="h-[66vh] w-full relative">
            <div className="absolute h-full w-full bg-blurry-gold bg-center bg-cover bg-fixed"></div>
            
            <div className="absolute w-full h-full flex justify-evenly items-center text-xl ">

                <div className={`w-1/4 h-1/2 cursor-pointer hover:bg-primary bg-secondary border-2 border-dark-green flex flex-col items-center justify-evenly py-12 transition-all duration-500 ease-in-out
                ${selected == 'coaching' || selected == '' ? 'opacity-1' : 'opacity-0 translate-x-4 pointer-events-none'}
                ${selected == 'coaching' ? '' : ''} `}
                onClick={() => handleClick('coaching')}>
                    <MdHandshake className="w-full h-1/2"/>
                    <h2 className="mt-6">1:1 Coaching</h2>
                </div>

                <div className={`w-1/4 h-1/2 cursor-pointer hover:bg-primary bg-secondary border-2 border-dark-green flex flex-col items-center justify-evenly py-12 transition-all duration-500 ease-in-out
                ${selected == 'business' || selected == '' ? 'opacity-1' : 'opacity-0 translate-x-4 pointer-events-none'}
                ${selected == 'business' ? '-translate-x-[31.25vw]' : ''}  `}
                onClick={() => handleClick('business')}>
                    <MdBusinessCenter className="w-full h-1/2"/>
                    <h2 className="mt-6">Business Coaching</h2>
                </div>

                <div className={`w-1/4 h-1/2 cursor-pointer hover:bg-primary bg-secondary border-2 border-dark-green flex flex-col items-center justify-evenly py-12 transition-all duration-500 ease-in-out
                ${selected == 'group' || selected == '' ? 'opacity-1' : 'opacity-0 translate-x-4 pointer-events-none'}
                ${selected == 'group' ? '-translate-x-[62.5vw]' : ''}  `}
                onClick={() => handleClick('group')}>
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

                <div className={`h-1/2 bg-secondary transition-all absolute left-[37.5vw] overflow-hidden indent-5 flex flex-col items-center justify-evenly
                ${selected === '' ? 'w-0 duration-100' : 'delay-500 w-[56.25vw] border-2 border-dark-green duration-500 p-6'} `}>
                    <p className={`${selected === '' ? 'opacity-0' : 'opacity-1 delay-1000 duration-500'} `}>{serviceDescription}</p>
                    <div className="w-full flex justify-evenly">
                        {serviceBullets.map(bull =>
                        <div key={bull} className={`flex gap-0 ${selected === '' ? 'opacity-0' : 'opacity-1 delay-1000 duration-500'} `}>
                            <FaCheck className={`${selected === '' ? 'opacity-0' : 'opacity-1 delay-1000 duration-500'} `} />
                            <p className={`${selected === '' ? 'opacity-0' : 'opacity-1 delay-1000 duration-500'} `}>{bull}</p>
                        </div>
                            )}
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Services