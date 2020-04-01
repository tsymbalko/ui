export default {
  methods: {
    // TODO: Rename from 'focusVisible' into 'dropFocusFromMouseForInteractiveElements'
    focusVisible() {
      let clickedElement
      let startedFocusTime
      const maxDelayBeforeFocus = 999

      function getClickedElement(target) {
        if (
          'A' === target.tagName ||
          'BUTTON' === target.tagName ||
          'INPUT' === target.tagName ||
          'submit' === target.type
        ) {
          return target
        } else if (target.parentElement) {
          return getClickedElement(target.parentElement)
        } else {
          return null
        }
      }

      function dropFocus(event) {
        const isAcceptableToDropFocus =
          Date.now() - startedFocusTime < maxDelayBeforeFocus

        if (event.target === clickedElement && isAcceptableToDropFocus) {
          event.target.blur()
        }
      }

      document.addEventListener('mousedown', event => {
        clickedElement = getClickedElement(event.target)
        startedFocusTime = Date.now()
      })

      document.addEventListener('focusin', dropFocus)
    }
  }
}
