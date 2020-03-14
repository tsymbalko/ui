export default {
  methods: {
    toLockLayout() {
      this.topScrollCoord = window.scrollY
      document.querySelector('.layout').classList.add('layout__locked')
      document.querySelector('.layout').style.top = `-${this.topScrollCoord}px`
    },
    unlockLayout() {
      document.querySelector('.layout').classList.remove('layout__locked')
      document.querySelector('.layout').style.top = ''
      window.scrollTo({
        top: this.topScrollCoord,
        behavior: 'instant'
      })
    }
  }
}
