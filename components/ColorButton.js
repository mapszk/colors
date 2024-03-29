'use client'

export function ColorButton ({ color }) {
  const copyHex = (color) => navigator.clipboard.writeText(color)
  return (
    <button onClick={() => copyHex(color)} className="grow h-20 rounded-md shadow-lg" style={{backgroundColor: color}}></button>
  )
}