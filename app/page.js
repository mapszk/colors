import { Form } from "@/components/Form";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl text-gray-800 font-bold mb-9 drop-shadow-md max-w-[450px]">Get your colour scale and palette</h1>
      <Form />
    </div>
  );
}
