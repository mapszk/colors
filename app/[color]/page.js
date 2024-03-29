import { ColorButton } from "@/components/ColorButton";
import { Form } from "@/components/Form";
import { getColorData } from "@/services/main";
import { getColorShades, getCssCode, getSuggestedColors, getTailwindCode, hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from "@/utils/css";

export default async function Color({ params }) {
  const { color } = params

  const colors = [
    hexToRgb(`#${color}`),
    getSuggestedColors(hexToRgb(`#${color}`)),
    getSuggestedColors(hexToRgb(`#${color}`))
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

  return (
	  <section className="min-h-screen pt-12 justify-center flex flex-col">
        <h2 className="text-xl mb-2">Your colour</h2>
        <div className="w-full flex flex-row gap-2 mb-12">
            {shades[0].map(color => <ColorButton key={color} color={color}/>)}
        </div>

        <h2 className="text-xl mb-4">Suggested colours for your palette</h2>
        <div className="w-full flex flex-row gap-2 mb-12">
            {shades[1].map(color => <ColorButton key={color} color={color}/>)}
        </div>
        
        <div className="w-full flex flex-row gap-2 mb-12">
            {shades[2].map(color => <ColorButton key={color} color={color}/>)}
        </div>

        {/* <div className="flex gap-2 mt-6 mb-12">
          <code className="rounded-md whitespace-pre text-sm text-slate-400 w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-slate-800">{cssCode}</code>
          <code className="rounded-md whitespace-pre text-sm text-slate-400 w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-slate-800">{tailwindCode}</code>
        </div> */}
        
        <div className="flex items-center justify-between w-full">
          <a 
              href="/"
              className="drop-shadow-md min-w-40 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
          >Pick another color</a>
          <button
              href="/"
              className="drop-shadow-md min-w-40 inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
          >Try again</button>
        </div>
    </section>
  )
}
