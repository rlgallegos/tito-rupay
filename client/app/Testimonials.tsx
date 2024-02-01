



const Testimonials: React.FC = () => {
    return (
      <div id="testimonials" className='h-screen w-full bg-primary flex flex-col justify-between'>

        <div className="w-full h-1/2 flex">
            <div className="h-full w-1/4 border border-black">
                Picture
            </div>

            <div className="h-full w-3/4 flex items-center justify-center"> "Tito changed my life!"</div>
        </div>

        <div className="h-[1px] w-1/4 mx-auto bg-black"></div>

        <div className="w-full h-1/2 flex">
            <div className="h-full w-3/4 flex items-center justify-center">"Tito is the best! The best life coach ever!"</div>

            <div className="h-full w-1/4 border border-black">
                Picture
            </div>
        </div>

      </div>
    )
  }
  export default Testimonials
