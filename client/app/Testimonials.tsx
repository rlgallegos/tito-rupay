import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { PiShootingStarFill } from "react-icons/pi";


import { testimonials, TestimonialType } from "@/data";
import { ReactNode } from "react";


const Testimonials: React.FC = () => {

    let quoteDivs: (ReactNode | null)[] = []
    testimonials.forEach(testimonial => {
        quoteDivs.push(
            <div key={testimonial.name} className="w-1/5 flex items-center justify-center bg-primary p-6 h-3/4 border-2 border-green-1 z-10">
                <div className="flex flex-col gap-4 w-2/3">
                    <ImQuotesLeft className="text-center w-full" />
                    <p>{testimonial.text}</p>
                    <p>- {testimonial.name}</p>
                </div>
            </div>
        )
    })


    return (
      <div id="testimonials" className='h-[66vh] w-full bg-primary flex flex-col justify-between text-xl relative'>
        <div className="w-full h-full top-0 left-0 absolute "></div>

        <div className="w-full h-1/2 flex items-center justify-center z-10">
            <div className="h-4/5 w-1/2 bg-primary border-2 border-green-1 p-6 flex items-center justify-center">
                <div className="flex flex-col gap-4 w-4/5">
                    <ImQuotesLeft className="text-center w-full" />
                    <p>A much longer text here about how Roberto has had an incredible influence on this person / business. How he has changed so much about this entity's life and how he would 10/10 recommend him.</p>
                    <p className="w-full text-right">- Important Entity's Name</p>
                </div>
            </div>
        </div>

        <div className="h-[1px] w-1/4 mx-auto bg-black"></div>

        <div className="w-full h-1/2 flex gap-4 px-6 justify-evenly items-center">
            {quoteDivs}
        </div>


      </div>
    )
  }
  export default Testimonials
