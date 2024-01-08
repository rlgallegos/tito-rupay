import Script from "next/script"



const Meeting: React.FC = () => {
    return (
        <div className="h-screen w-full bg-primary">
            <div data-url="https://calendly.com/rlgallegos85/meeting" className="calendly-inline-widget min-w-[320px] h-[700px]"></div>
            <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
        </div>
    )
  }
  export default Meeting
