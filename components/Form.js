'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export function Form() {
  const router = useRouter()
  const [color, setColor] = useState("");

  const changeTextInput = (evt) => {
    const input = evt.currentTarget.value
    if (/^[#0-9a-f]+$/.test(input) || input === "") setColor(input)
    else setColor("")
  }
  
  const submit = async () => {
    if(/^#[0-9A-F]{6}$/i.test(color)) router.push("/" + color.replace("#", ''))
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center gap-x-2 w-full">
        <div className="flex flex-row gap-x-2 w-full">
          <input 
            type="color" 
            className="drop-shadow-md p-1 grow-1 h-12 block bg-white border border-gray-200 cursor-pointer rounded-lg focus:outline focus:outline-2 disabled:opacity-50 disabled:pointer-events-none" 
            id="hs-color-input" 
            value={color}
            onChange={(evt) => setColor(evt.currentTarget.value)}
          />
          <input 
            type="text"
            placeholder="Pick your colour or paste a hex code"
            className="drop-shadow-md grow h-12 placeholder:font-medium font-semibold border border-gray-200 rounded-lg px-4"
            value={color}
            onChange={changeTextInput}
          />
        </div>
        <button 
          onClick={submit}
          className="drop-shadow-md mt-4 md:mt-0 w-full md:w-auto inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
        >
          Generate
        </button>
      </div>
    </div>
  )
}
