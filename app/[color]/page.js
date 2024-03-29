import { ColorGenerator } from "@/components/ColorGenerator";
import { getColorShades, getSuggestedColors, hexToRgb, hslToRgb, rgbToHex } from "@/utils/css";

export default async function Color({ params }) {
  const { color } = params

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

  return (
	  <section className="min-h-screen py-12 md:py-0 justify-center flex flex-col">
      <ColorGenerator color={color} firstShades={shades} />
    </section>
  )
}
