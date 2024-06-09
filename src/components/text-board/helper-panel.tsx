import { GrHelpBook } from "react-icons/gr";

export default function HelperPanel() {
  return (
    <div className="flex flex-col justify-start text-center border-2 bg-white border-slate-300 w-[20vw] py-5 h-[80vh] rounded-3xl fixed right-5">
      <div className="text-2xl font-bold text-black flex flex-col justify-center items-center space-y-2">
        <GrHelpBook size={50} />
        <div>Helper Search</div>
      </div>
    </div>
  );
}
