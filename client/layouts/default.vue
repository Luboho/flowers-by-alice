<template>
      <div class="z-20 flex justify-center">
        <div id="parallax" class="absolute stripe">
          <Navbar />
          <UiMessages />
          <Nuxt />
              <div id="fb-root"></div>
              <div id="latest" class="w-screen flex justify-center bg-gray-100">
                <div class="w-150 m-64px">
                  <div class="fb-page ml-0 sm:ml-10 md:ml-12 lg:ml-14" data-href="https://www.facebook.com/FlowersAliceFlowers" data-tabs="timeline" data-width="500" data-height="550" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/FlowersAliceFlowers" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/FlowersAliceFlowers">Flowers By Alice</a></blockquote></div>
                </div>
              </div>
          <Footer />
          </div>
      </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from './Nav/Navbar'
import Footer from './Footer'
import UiMessages from './../components/UiMessages.vue'

export default {

  components: {
    Navbar,
    Footer,
    UiMessages,
  },

  data: () => ({
    direction: true
  }),
  head: {
    title: "Flowers by Alice - flowers for you, for every occasion",
      titleTemplate: '%s - Flowers by Alice',
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Flowers by Alice - flowers for you, for every occasion'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Eaque eius autem facilis omnis dignissimos officia eligendi unde beatae laudantium, cupiditate nam molestiae numquam perspiciatis veniam '
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.baseUrl +'/logo.png'}`
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `${process.env.baseUrl +'/logo.png'}`
        },
      ],
    script: [
      // Supported since Nuxt 1.0
      { src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0' ,defer: true,  nonce: 'GSJ4A8LJ'}
    ],
  },

  computed: {
    ...mapState({
      scrollNav: 'nav/scrollNav'
    })
  },

  mounted() {
    this.getScrollNav();
    this.parallaxStripe();
  },
  methods: {
    ...mapActions({
          getScrollNav: 'nav/getScrollNav',
      }),

      parallaxStripe() {
        const parallax = document.getElementById("parallax");

        window.addEventListener("scroll", function() {
          const offset = window.pageYOffset;
          parallax.style.backgroundPositionY = offset * -0.7 + "px";
        })
      }
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

.stripe {
  background-image: url('~/assets/images/stripe2.svg');
  background-repeat: repeat-y;
  background-size: 20%;
  background-position: right ;
}

</style>
