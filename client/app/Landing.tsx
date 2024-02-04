import Image from "next/image"



const Landing: React.FC = () => {
  return (
    <div className='h-screen w-full bg-secondary flex justify-between pt-[120px] text-black relative'>
        <div className="h-full w-1/2 flex flex-col justify-evenly px-8">

            <div className="bg-primary border-2 border-green-1 flex flex-col justify-evenly gap-2 text-3xl px-12 py-6">
                <h1>Certified</h1>
                <h1 className="indent-8">Accountability</h1>
                <h1 className="indent-16">& Life Coach</h1>
            </div>

            <div className="w-full border-2 border-green-1 flex  justify-evenly gap-4 text-3xl px-12 py-6 bg-primary">

                <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div>
                <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div>
                <div className="w-[100px] h-[100px] border-2 border-green-1 flex items-center justify-center text-base bg-secondary">Cert</div>

            </div>

        </div>
        <div className="relative w-1/2 h-full overflow-visible">
  <Image
    src="/images/roberto-headshot-resized.jpeg"
    alt="headshot"
    layout="fill"
    objectFit="contain"
    className="absolute right-0 top-0 w-full h-full transform translate-x-[9vw]"
  />
</div>


        {/* <div className="w-1/3 h-1/4 text-3xl flex items-center px-16 bg-primary">
            <div className="flex flex-col border-2 border-green-1">                
                <h1>Certified</h1>
                <h1>Accountability &</h1>
                <h1>Life Coach</h1>
            </div>
        </div> */}
    </div>
  )
}
export default Landing