import { Form } from "@/components/Form";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl mb-6 w-full md:mb-9 md:max-w-[650px] text-gray-800 font-bold drop-shadow-md">Get your colour scale and palette</h1>
      <Form />
    </div>
  );
}
