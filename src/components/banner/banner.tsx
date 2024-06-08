export default function Banner() {
  return (
    <div className="w-screen h-[90vh] overflow-hidden">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/videos/banner_3.mp4" type="video/mp4" />
        Her feeling banner video
      </video>
    </div>
  );
}
