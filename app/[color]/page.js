import { ColorButton } from "@/components/ColorButton";
import { Form } from "@/components/Form";
import { getColorData } from "@/services/main";
import { getCssCode, getTailwindCode } from "@/utils/css";

export default async function Color({ params }) {
  const { color } = params

  const res = await getColorData("#" + color)

  const data = JSON.parse(res.replace(/(\r\n|\n|\r)/gm, ""))

  const mainColor = data[0]
  const secondColor = data[1]
  const thirdColor = data[2]

  const tailwindCode = getTailwindCode(data)
  const cssCode = getCssCode(data)

  return (
	  <section class="min-h-screen pt-12 justify-center flex flex-col">
        <h2 class="text-xl mb-4">Your colour</h2>
        <div class="w-full flex flex-row gap-2 mb-2">
            {mainColor.scale.map(color => <ColorButton key={color} color={color}/>)}
        </div>
        <span class="text-md font-semibold mb-6">{mainColor.name}</span>

        <h2 class="text-xl mb-4">Suggested colours for your palette</h2>
        <div class="w-full flex flex-row gap-2 mb-2">
            {secondColor.scale.map(color => <ColorButton key={color} color={color}/>)}
        </div>
        <span class="text-md font-semibold mb-6">{secondColor.name}</span>
        
        <div class="w-full flex flex-row gap-2 mb-2">
            {thirdColor.scale.map(color => <ColorButton key={color} color={color}/>)}
        </div>
        <span class="text-md font-semibold mb-6">{thirdColor.name}</span>

        <div class="flex gap-2 mt-6 mb-12">
          <code class="rounded-md whitespace-pre text-sm text-slate-400 w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-slate-800">{cssCode}</code>
          <code class="rounded-md whitespace-pre text-sm text-slate-400 w-1/2 min-h-12 max-h-64 overflow-y-scroll p-4 bg-slate-800">{tailwindCode}</code>
        </div>
        
        <a 
            href="/"
            class="drop-shadow-md w-40 ml-auto inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
        >Try again</a>
    </section>
  )
}
