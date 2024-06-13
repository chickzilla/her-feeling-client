import CookiePanel from "../cookie-drawer/cookie-panel";
import Button from "./button";
import TextArea from "./textArea";

export default function Banner() {
  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/videos/banner.mp4" type="video/mp4" />
        Her feeling banner video
      </video>
      <div className="absolute inset-0 flex justify-center flex-col text-center space-y-9 items-center">
        <div className="px-4 text-5xl md:text-7xl lg:text-8xl text-white text-center move-up">
          <div className="">Understand Her Emotions</div>
          <div className="">Make Her Proud</div>
        </div>
        <div className="text-white move-up-delay-1 text-sm lg:text-base px-5 move-up-delay-1">
          <div>
            By leveraging a text and image classifier model, we can determine
            her emotional state.
          </div>
          <div>
            If you have a problem on how to tell someone feeling, I am here to
            help you.
          </div>
        </div>
        <TextArea />
      </div>
    </div>
  );
}
