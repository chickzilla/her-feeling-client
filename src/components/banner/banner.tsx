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
        <div className="p-4 text-5xl md:text-7xl lg:text-8xl text-white text-center">
          <div className="move-up">Understand Her Emotions</div>
          <div className="move-up-delay-1">Make Her Proud</div>
        </div>
        <div className="text-white move-up-delay-2 text-sm lg:text-base px-5">
          <div>
            By text classifier model, We can predict her feeling by text.
          </div>
          <div>So, let me help you.</div>
        </div>
        <TextArea />
      </div>
    </div>
  );
}
