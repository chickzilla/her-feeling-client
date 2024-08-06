export default function LoginPage() {
  return (
    <main className="w-[100vw] px-10 lg:px-20 pt-[20px] lg:pt-[100px] space-y-12 h-[100vh] overflow-y-hidden text-black bg-[#0e1111] overflow-x-hidden pb-20 flex flex-col items-center justify-center text-center">
      <div className="title-3 ">
        <div>Create an account</div>
        <div className="description font-normal">
          Enter your email below to create your account
        </div>
      </div>
      <div className="border-t-2 description font-normal border-gray-400 pt-2 w-56">
        OR
      </div>
    </main>
  );
}
