'use client'
import {  useState } from "react";
import { ColorButton } from "./ColorButton";
import Link from "next/link";
import { getColorShades, getCssCode, getSuggestedColors, getTailwindCode, hexToRgb, hslToRgb, rgbToHex } from "@/utils/css";

export function ColorGenerator({ color, firstShades }) {
  const [shades, setShades] = useState(firstShades)

  const generateColors = () => {
    const colors = [
      hexToRgb(`#${color}`),
      getSuggestedColors(hexToRgb(`#${color}`)),
      getSuggestedColors(getSuggestedColors(hexToRgb(`#${color}`)))
    ]
  
    const shades = [
      getColorShades(colors[0])
        .map(hsl => hslToRgb(hsl[0], hsl[1], hsl[2]))
        .map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2])),
      getColorShades(colors[1])
        .map(hsl => hslToRgb(hsl[0], hsl[1], hsl[2]))
        .map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2])),
      getColorShades(colors[2])
        .map(hsl => hslToRgb(hsl[0], hsl[1], hsl[2]))
        .map(rgb => rgbToHex(rgb[0], rgb[1], rgb[2])),
    ]
    setShades(() => shades)
  }

  const cssCode = getCssCode(shades)
  const tailwindCode = getTailwindCode(shades)

  return (
    <>
    <div className="flex md:flex-col gap-2">
      <h2 className="hidden md:block drop-shadow-md text-xl mb-2">Your colour</h2>
      <div className="w-full flex flex-col md:flex-row gap-2 md:mb-6">
          {shades[0].map(color => <ColorButton key={color} color={color}/>)}
      </div>

      <h2 className="hidden md:block drop-shadow-md text-xl mb-4">Suggested colours for your palette</h2>
      <div className="w-full flex flex-col md:flex-row gap-2 md:mb-4">
          {shades[1].map(color => <ColorButton key={color} color={color}/>)}
      </div>
      
      <div className="w-full flex flex-col md:flex-row gap-2">
          {shades[2].map(color => <ColorButton key={color} color={color}/>)}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-2 mt-6 mt-12">
      <code className="rounded-md whitespace-pre text-sm text-gray-400 w-full md:w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-neutral-950">{cssCode}</code>
      <code className="rounded-md whitespace-pre text-sm text-gray-400 w-full md:w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-neutral-950">{tailwindCode}</code>
    </div>
    
    <div className="flex order-first md:order-last items-center mb-4 md:mt-6 justify-between w-full">
      <Link
          href="/"
          className="drop-shadow-md min-w-40 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
      >Pick another color</Link>
      <button
          href="/"
          onClick={generateColors}
          className="drop-shadow-md min-w-40 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
      >Try again</button>
    </div>
    </>
  )
}