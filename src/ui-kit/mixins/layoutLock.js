export default {
  methods: {
    toLockLayout() {
      this.topScrollCoord = window.scrollY
      const layout = document.querySelector('.vc-layout')
      layout.classList.add('vc-layout__locked')
      layout.style.top = `-${this.topScrollCoord}px`
    },
    unlockLayout() {
      const layout = document.querySelector('.vc-layout')
      layout.classList.remove('vc-layout__locked')
      layout.style.top = ''
      window.scrollTo({
        top: this.topScrollCoord,
        behavior: 'instant'
      })
    }
  }
}
