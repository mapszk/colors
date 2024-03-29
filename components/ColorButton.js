'use client'

export function ColorButton ({ color }) {
  const copyHex = (color) => navigator.clipboard.writeText(color)
  return (
    <button onClick={() => copyHex(color)} className="grow h-16 rounded-md" style={{backgroundColor: color}}></button>
  )
}