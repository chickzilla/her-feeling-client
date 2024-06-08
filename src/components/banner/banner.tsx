export default function Banner() {
  return (
    <div className="relative w-screen h-[100vh] overflow-hidden ">
      <video autoPlay muted loop className="w-full h-[90%] object-cover">
        <source src="/videos/banner.mp4" type="video/mp4" />
        Her feeling banner video
      </video>
      <div className="absolute inset-0 flex justify-start mt-24 flex-col text-center">
        <div className="p-4 text-8xl font-semibold text-white space-y-10 text-center">
          <div>Understand Her Emotions</div>
          <div>Make Her Pround</div>
        </div>
        <div className="text-white">
          <div>
            By text classifier model, We can predict her feeling by text
          </div>
          <div>let me help you.</div>
        </div>
      </div>
    </div>
  );
}
