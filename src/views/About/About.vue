<template>
  <div class="about">
    <div class="content">
      <section id="introduction">
        <h2>Introduction</h2>
        <p>…</p>
      </section>
      <section id="request-response">
        <h2>Request &amp; Response</h2>
        <p>…</p>
      </section>
      <section id="authentication">
        <h2>Authentication</h2>
        <p>…</p>
      </section>
      <section id="links">
        <h2>Links</h2>
        <p>…</p>
      </section>
      <section id="expanders">
        <h2>Expanders</h2>
        <p>…</p>
      </section>
      <section id="filters">
        <h2>Filters</h2>
        <p>…</p>
      </section>
    </div>
    <nav class="about_anchor vc-anchor">
      <div class="vc-anchor_list">
        <a class="vc-anchor_link" href="#introduction">Introduction</a>
        <a class="vc-anchor_link" href="#request-response"
          >Request &amp; Response</a
        >
        <a class="vc-anchor_link" href="#authentication">Authentication</a>
        <a class="vc-anchor_link" href="#links">Links</a>
        <a class="vc-anchor_link" href="#expanders">Expanders</a>
        <a class="vc-anchor_link" href="#filters">Filters</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkActiveLink()
    window.addEventListener('load', this.checkActiveLink)
  },
  methods: {
    checkActiveLink() {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id')
          if (entry.intersectionRatio > 0) {
            document
              .querySelector(`.vc-anchor_list a[href="#${id}"]`)
              .classList.add('vc-anchor_link__active')
          } else {
            //TODO убрать ошибку в консоли
            document
              .querySelector(`.vc-anchor_list a[href="#${id}"]`)
              .classList.remove('vc-anchor_link__active')
          }
        })
      })

      // Track all sections that have an `id` applied
      document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section)
      })
    }
  },
  beforeDestroy() {
    window.removeEventListener('load', this.checkActiveLink)
  }
}
</script>

<style lang="scss">
.about {
  display: grid;
  grid-template-columns: 1fr auto;

  & .content > section {
    padding-bottom: 1200px;
  }

  /* mix */
  &_anchor {
    position: sticky;
    top: 60px;
    align-self: start;
  }
}
.vc-anchor {
  &_list {
    padding: 12px 12px 12px 20px;
    border-left: 1px solid var(--base-border);
  }

  &_link {
    display: block;
    font-size: 14px;
    position: relative;
    color: var(--base-text);
    padding: 2px 4px;
    border-radius: var(--border-radius);
    transition: 0.15s ease-in-out;

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 1px;
      top: 0;
      bottom: 0;
      background-color: var(--blue);
      left: -21px;
      opacity: 0;
      transition: 0.15s ease-in-out;
    }

    &:hover {
      background-color: var(--base-hover);
    }

    &__active {
      color: var(--blue);

      &:before {
        opacity: 1;
      }
    }
  }
}
</style>
