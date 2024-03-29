import Image from "next/image"



const Landing: React.FC = () => {
  return (
    <div className='h-screen w-full bg-marble bg-cover bg-center flex justify-between pt-[120px] text-black relative'>
        <div className="bg-black w-full h-full opacity-90 absolute top-0"></div>

        <div className="h-full w-1/2 flex flex-col justify-evenly">

            <div className="text-dark-green flex flex-col justify-evenly gap-2 text-5xl px-12 py-6 w-[66vw]">
                <h1>Discover Strengths</h1>
                <h1 className="indent-16">Overcome Fears</h1>
                <h1 className="indent-32">Live Authentically</h1>
            </div>

            <div className="w-full flex justify-evenly gap-4 text-3xl px-12 py-6 ">
                {/* <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div>
                <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div>
                <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div> */}
            </div>

        </div>
        {/* <div className="relative w-1/2 h-full overflow-hidden">
            <Image
                src="/images/roberto-headshot-resized.jpeg"
                alt="headshot"
                layout="fill"
                objectFit="contain"
                className="absolute right-0 top-0 w-full h-full transform translate-x-[9vw]"
            />
        </div> */}

    </div>
  )
}
export default Landing