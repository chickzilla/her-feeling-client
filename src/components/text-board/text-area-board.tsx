import TextAreaSendPrompt from "./text-area-send-prompt";

export default function TextAreaBoard() {
  return (
    <div className="space-y-8 flex flex-col pt-28 w-[100%] lg:w-[80%] lg:pr-40">
      <div className="title-1 move-up w-[100%] lg:w-auto">Predict Her Text</div>
      <div className="flex w-[90%] lg:w-[30vw] move-up description">
        Advanced mood detection technology. Understand your text, understand
        her.
      </div>
      <TextAreaSendPrompt />
    </div>
  );
}
