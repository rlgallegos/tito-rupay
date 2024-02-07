import Image from "next/image"
import Link from "next/link"

interface Props {
    text: string
}

const Divider: React.FC<Props> = ({text}: Props) => {
    return <div className="w-full bg-primary flex flex-col gap-8 items-center py-24">
        <div className="w-full flex flex-col gap-4 items-center">
            <h1 className="text-3xl">{text}</h1>
            <Link href='/appointments' className="w-[200px] border-2 bg-green-1 text-primary hover:bg-secondary hover:text-green-1 hover:border-green-1 p-2 text-center rounded-xl">Book Your FREE Consultation</Link>
        </div>
        <div className="w-full flex items-center justify-center">
            <Image src={'/images/brushstroke-clear-bg.png'} alt="brushstroke" width={1412} height={42} />
        </div>
    </div>
}
export default Divider