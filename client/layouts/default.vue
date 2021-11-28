<template>
    <div class="z-20 ml-auto mr-auto max-w-1800px min-w-smallScreen">
      <div class="relative w-screen z-10">
          <img class="object-contain w-1/3 sm:w-20 absolute z-10 right-10 md:right-32" src="~/assets/images/stripe.svg" alt="" />
      </div>
      <Navbar />
        <Nuxt />
      <Footer />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './Nav/Navbar'
import Footer from './Footer'

export default {

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    direction: true
  }),

  computed: {
    ...mapState({
      scrollNav: 'nav/scrollNav'
    })
  },

  mounted() {
    this.getScrollNav();
  },

  methods: {
    ...mapActions({
          getScrollNav: 'nav/getScrollNav',
      }),
  },

}
</script>

<style>
/* hide scrollbar but allow scrolling */
.scrollbar {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
}

.scrollbar::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>
