export default {
  methods: {
    focusVisible() {
      let e, t
      //TODO перевести эту ебанину
      //eslint-disable-next-line
      function n(e) {
        return !(
          0 !== e.button ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey
        )
      }
      document.addEventListener('mousedown', n => {
        ;(e = (function e(t) {
          return 'A' === t.tagName ||
            'BUTTON' === t.tagName ||
            'INPUT' === t.tagName ||
            'submit' === t.type
            ? t
            : t.parentElement
            ? e(t.parentElement)
            : null
        })(n.target)),
          (t = Date.now())
      }),
        document.addEventListener('focusin', n => {
          n.target === e && Date.now() - t < 999 && n.target.blur()
        })
    }
  }
}
