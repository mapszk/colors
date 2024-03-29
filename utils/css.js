export const rgbToHex = (r, g, b) => {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

export const hexToRgb = (h) => {
  let r = 0, g = 0, b = 0;

  // 6 digits
  r = "0x" + h[1] + h[2];
  g = "0x" + h[3] + h[4];
  b = "0x" + h[5] + h[6];
  
  return [+r, +g, +b]
}

export const rgbToHsl = (r, g, b) => {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  // Calculate hue
  // No difference
  if (delta == 0)
    h = 0;
  // Red is max
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g)
    h = (b - r) / delta + 2;
  // Blue is max
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);
    
  // Make negative hues positive behind 360°
  if (h < 0)
    h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
  // Multiply l and s by 100
  s = +(s * 100).toFixed(0);
  l = +(l * 100).toFixed(0);

  return [h, s, l]
}

export const hslToRgb = (h, s, l) => {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b]
}

export const getSuggestedColors = (rgb) => {
  let r = Math.round(Math.random() * 256)
  let g = Math.round(Math.random() * 256)
  let b = Math.round(Math.random() * 256)

  // mix the color
  r = Math.round((r + rgb[0]) / 2)
  g = Math.round((g + rgb[1]) / 2)
  b = Math.round((b + rgb[2]) / 2)

  return [r, g, b]
}

export const getColorShades = (rgb) => {
  const [h, s, l] = rgbToHsl(rgb[0], rgb[1], rgb[2])
  let shades = Array.from({length: 11}, () => null)
  return shades.map((val, i) => ([h, s, Math.min((l % 10) + 10 * i, 100)]))
}

export const getCssCode = (colors) => {
  return `// CSS Code

:root {
\t${colors[0].map((color, index) => `--main-${Math.max(Math.min(index * 100, 950), 50)}: ${color};`).join("\n\t")}

\t${colors[1].map((color, index) => `--second-${Math.max(Math.min(index * 100, 950), 50)}: ${color};`).join("\n\t")}

\t${colors[2].map((color, index) => `--third-${Math.max(Math.min(index * 100, 950), 50)}: ${color};`).join("\n\t")}
}`
}

export const getTailwindCode = (colors) => {    
  return `// Tailwind config

module.exports = {
  theme: {
  colors: {
    // ...
    main: {
      ${colors[0].map((color, index) => `\t${Math.max(Math.min(index * 100, 950), 50)}: "${color}",`).join("\n\t")}
    },
    second: {
      ${colors[1].map((color, index) => `\t${Math.max(Math.min(index * 100, 950), 50)}: "${color}",`).join("\n\t")}
    },
    third: {
      ${colors[2].map((color, index) => `\t${Math.max(Math.min(index * 100, 950), 50)}: "${color}",`).join("\n\t")}
    },
    // ...
  },
  },
}
`
}