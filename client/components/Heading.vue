<template>
  <div class="relative" :class="headingText.bgColor">

    <!-- <img class="relative z-10" :src="[smallScreen ? bgImage.sm : bgImage.lg]" alt=""> -->
    <div class=" z-20 mx-24px sm:mx-64px pt-28px md:pt-32 overflow-hidden">
      <h2 class="text-md" :class="headingText.h2Color">{{ headingText.title }}</h2>
      <p class="mt-5 smallScreen:mt-12 sm:mt-18 leading-tight sm:leading-relaxed"
         :class="headingText.textColor"> {{ headingText.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    // bgImage: {
    //   type: Object,
    //   required: true,
    // },
    headingText: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    smallScreen: {
      type: Boolean,
      required: false
    },

    // articles: [
    //   {
    //     title: 'LOrem Ipsum Dolor',
    //     url: '/weddings/wedding-1-600x750px.jpg',
    //     paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
    //   },
    //   {
    //     title: 'LOrem Ipsum Dolor',
    //     url: '/weddings/wedding-1-600x750px.jpg',
    //     paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
    //   },
    //   {
    //     title: 'LOrem Ipsum Dolor',
    //     url: '/weddings/wedding-1-600x750px.jpg',
    //     paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
    //   }
    // ]
  }),
  computed: {
    currentPath() {
      return this.$route.path;
    },
  },

  mounted() {
        if(process.browser) {
          if (window.innerWidth < 768){
            this.smallScreen = true;
          } else {
            this.smallScreen = false;
          }
      }

        window.onresize = () => {
          if (window.innerWidth < 768){
            this.smallScreen = true;
          } else {
            this.smallScreen = false;
          }
        };
  },

}
</script>

<style scoped>
  /* .bg-image {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url('~/assets/images/headers/wedding-header.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  mask-image: url('~/assets/images/masks/header-mask.svg');
  mask-size: 100vmin;
  mask-repeat: no-repeat;
  } */

</style>
