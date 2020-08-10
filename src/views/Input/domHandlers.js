export default class domHandlers {
  static relativePosition(element, target) {
    let elementDimensions = element.offsetParent
      ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        }
      : this.getHiddenElementDimensions(element)
    const targetHeight = target.offsetHeight
    const targetOffset = target.getBoundingClientRect()
    const viewport = this.getViewport()
    let top, left

    if (
      targetOffset.top + targetHeight + elementDimensions.height >
      viewport.height
    ) {
      top = -1 * elementDimensions.height
      element.style.transformOrigin = 'bottom'
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top
      }
    } else {
      top = targetHeight
      element.style.transformOrigin = 'top'
    }

    if (elementDimensions.width > viewport.width) {
      // element wider then viewport and cannot fit on screen (align at left side of viewport)
      left = targetOffset.left * -1
    } else if (targetOffset.left + elementDimensions.width > viewport.width) {
      // element wider then viewport but can be fit on screen (align at right side of viewport)
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1
      //eslint-disable-next-line
      console.log(
        targetOffset.left,
        elementDimensions.width,
        viewport.width,
        targetOffset.left + elementDimensions.width > viewport.width
      )
    } else {
      // element fits on screen (align with target)
      left = 0
    }

    element.style.top = top + 'px'
    element.style.left = left + 'px'
  }

  static absolutePosition(element, target) {
    let elementDimensions = element.offsetParent
      ? { width: element.offsetWidth, height: element.offsetHeight }
      : this.getHiddenElementDimensions(element)
    let elementOuterHeight = elementDimensions.height
    let elementOuterWidth = elementDimensions.width
    let targetOuterHeight = target.offsetHeight
    let targetOuterWidth = target.offsetWidth
    let targetOffset = target.getBoundingClientRect()
    let windowScrollTop = this.getWindowScrollTop()
    let windowScrollLeft = this.getWindowScrollLeft()
    let viewport = this.getViewport()
    let top, left

    if (
      targetOffset.top + targetOuterHeight + elementOuterHeight >
      viewport.height
    ) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight
      element.style.transformOrigin = 'bottom'

      if (top < 0) {
        top = windowScrollTop
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop
      element.style.transformOrigin = 'top'
    }

    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(
        0,
        targetOffset.left +
          windowScrollLeft +
          targetOuterWidth -
          elementOuterWidth
      )
    else left = targetOffset.left + windowScrollLeft

    element.style.top = top + 'px'
    element.style.left = left + 'px'
  }

  static getHiddenElementDimensions(element) {
    let dimensions = {}
    element.style.visibility = 'hidden'
    element.style.display = 'block'
    dimensions.width = element.offsetWidth
    dimensions.height = element.offsetHeight
    element.style.display = 'none'
    element.style.visibility = 'visible'

    return dimensions
  }

  static getWindowScrollTop() {
    let doc = document.documentElement
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
  }

  static getWindowScrollLeft() {
    let doc = document.documentElement
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
  }

  static getViewport() {
    let win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight

    return { width: w, height: h }
  }
}
