export default {
  methods: {
    toLockLayout() {
      this.topScrollCoord = window.scrollY
      const layout = document.querySelector('.vc-layout')
      layout.style.paddingRight = `${window.innerWidth -
        document.documentElement.clientWidth}px`
      layout.classList.add('vc-layout__locked')
      layout.style.top = `-${this.topScrollCoord}px`
    },
    unlockLayout() {
      const layout = document.querySelector('.vc-layout')
      layout.classList.remove('vc-layout__locked')
      layout.style.top = ''
      layout.style.paddingRight = ''
      window.scrollTo({
        top: this.topScrollCoord,
        behavior: 'instant'
      })
    }
  }
}
