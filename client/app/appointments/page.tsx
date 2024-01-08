



export default function Appointments() {

    return (
      <main className="min-h-screen flex flex-col items-center justify-center w-full bg-primary">
        <div className='w-1/2 h-[100px] flex justify-evenly'>

            <a className="w-1/2 border border-black flex flex-col justify-between p-6" href='/appointments/consultation'>
                <h1>Consultation</h1>
                <p>Book a FREE 15-min Consultation</p>
            </a>

            <a className="w-1/2 border border-black flex flex-col justify-between p-6" href='/appointments/meeting'>
                <h1>Meeting</h1>
                <p>Book a 60-min Session</p>
            </a>
            
        </div>
      </main>
    )
  }
  