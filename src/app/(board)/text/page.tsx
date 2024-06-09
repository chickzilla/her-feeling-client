import ResultPane from "@/components/text-board/resultPane";
import TextAreaBoard from "@/components/text-board/text-area-board";

export default function BoardTextPage() {
  return (
    <>
      <main className="w-full pl-20 pr-5 pt-[100px] space-y-12 min-h-[100vh] overflow-y-hidden text-black bg-slate-100">
        <div className="">
          <TextAreaBoard />
        </div>
        <div>
          <ResultPane />
        </div>
      </main>
    </>
  );
}
