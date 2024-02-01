import Image from "next/image"



export default function Appointments() {

    return (
      <main className="h-screen flex items-center justify-center w-full bg-primary text-black">

        {/* Left Half */}
        <div className=" h-full w-1/2 right-0 flex relative">
            <Image src='/images/appointments-1-transparent.png' alt="plant" layout="fill"  className=""/>
        </div>

        {/* Right Half */}
        <div className="h-full w-1/2 p-12 flex items-center justify-center">
            <div className="h-4/5 w-4/5 bg-secondary border-2 border-green-1 flex-col">
                <div className="w-full h-1/2 flex items-center justify-center">
                    <h1 className="text-xl">Make <i>Your</i> Change</h1>
                </div>
                <div className="w-full h-1/2 flex items-center justify-center">
                    <div className='w-4/5 flex justify-evenly bg-primary border-2 border-green-1'>
                        <a className="w-1/2 border-r-2 border-green-1 flex flex-col p-2 gap-4" href='/appointments/consultation'>
                            <h1>Consultation</h1>
                            <p>Book a FREE 15-min Consultation</p>
                        </a>
                        <a className="w-1/2 flex flex-col p-2 gap-4" href='/appointments/meeting'>
                            <h1>Meeting</h1>
                            <p>Book a 60-min Session</p>
                        </a>
                    </div>
                </div>


            </div>

        </div>
      </main>
    )
  }
  