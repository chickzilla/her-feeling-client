export default function Banner() {
  return (
    <div className="relative w-screen h-[100vh] overflow-hidden">
      <video autoPlay muted loop className="w-full h-[90%] object-cover">
        <source src="/videos/banner.mp4" type="video/mp4" />
        Her feeling banner video
      </video>
      <div className="absolute inset-0 flex justify-start mt-36 flex-col text-center">
        <div className="p-4 text-8xl text-white space-y-10 text-center">
          <div className="move-up">Understand Her Emotions</div>
          <div className="move-up-delay-1">Make Her Proud</div>
        </div>
        <div className="text-white move-up-delay-2">
          <div>
            By text classifier model, We can predict her feeling by text
          </div>
          <div>Let me help you.</div>
        </div>
      </div>
    </div>
  );
}
