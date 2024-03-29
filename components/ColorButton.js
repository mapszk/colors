export function ColorButton ({ color }) {
  const copyHex = (color) => navigator.clipboard.writeText(color)
  return (
    <button onClick={() => copyHex(color)} class="grow h-16 rounded-md" style={`background-color: ${color}`}></button>
  )
}