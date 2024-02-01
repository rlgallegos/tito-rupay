import Image from "next/image"



export default function Appointments() {

    return (
      <main className="h-screen flex items-center justify-center w-full bg-primary ">

        <div className=" h-full w-1/2 right-0 flex relative">
            <Image src='/images/appointments-1-transparent.png' alt="plant" layout="fill"  className=""/>
        </div>

        <div className="h-full w-1/2">

            <div className='w-1/2 h-[100px] flex justify-evenly bg-primary'>

                <a className="w-1/2 border border-black flex flex-col justify-between p-6" href='/appointments/consultation'>
                    <h1>Consultation</h1>
                    <p>Book a FREE 15-min Consultation</p>
                </a>

                <a className="w-1/2 border border-black flex flex-col justify-between p-6" href='/appointments/meeting'>
                    <h1>Meeting</h1>
                    <p>Book a 60-min Session</p>
                </a>
                
            </div>
        </div>
      </main>
    )
  }
  