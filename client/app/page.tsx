import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-primary">
        <div className='h-1/2 w-4/5 flex'>
            <div className='h-full w-3/4 bg-gradient-to-r from-tertiary to-secondary'>
                <h1 className='text-6xl text-[#B89C6E]'>Tito Rupay</h1>
            </div>
        </div>
    </main>
  )
}
