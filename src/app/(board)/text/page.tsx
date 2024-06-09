import TextAreaBoard from "@/components/text-board/text-area-board";

export default function BoardTextPage() {
  return (
    <>
      <main className="w-full pl-20 pr-5 pt-[68px] space-y-5 h-min-[100vh] text-black bg-slate-100">
        <div className="mt-10">
          <TextAreaBoard />
        </div>
      </main>
    </>
  );
}
