import Link from "next/link"



export default function Appointments() {

    return (
      <main className="min-h-screen flex flex-col w-full bg-primary">
        <div className='w-1/2 h-[100px] flex justify-evenly'>
            <Link href='/appointments/consultation'>Consultation</Link>
            <Link href='/appointments/meeting'>Meeting</Link>
        </div>
      </main>
    )
  }
  