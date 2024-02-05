import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { PiShootingStarFill } from "react-icons/pi";


import { testimonials, TestimonialType } from "@/data";
import { ReactNode } from "react";


const Testimonials: React.FC = () => {

    let quoteDivs: (ReactNode | null)[] = []
    testimonials.forEach(testimonial => {
        quoteDivs.push(
            <div className="flex flex-col gap-4">
                <ImQuotesLeft className="text-center w-full" />
                <p>{testimonial.text}</p>
                <p>- {testimonial.name}</p>
            </div>
        )
    })


    return (
      <div id="testimonials" className='h-[66vh] w-full bg-primary flex flex-col justify-between text-xl'>

        <div className="w-full h-1/2 flex">

        </div>

        <div className="h-[1px] w-1/4 mx-auto bg-black"></div>

        <div className="w-full h-1/2 flex justify-evenly items-center">
            {quoteDivs}
        </div>

      </div>
    )
  }
  export default Testimonials
