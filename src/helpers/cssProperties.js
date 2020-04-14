export function setCssProperties(name, value) {
  document.documentElement.style.setProperty(`--${name}`, value)
}

export function getCssProperties(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`)
    .trim()
}
