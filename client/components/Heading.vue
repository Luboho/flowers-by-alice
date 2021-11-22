<template>
  <div class="relative top-12 md:top-20 overflow-hidden">

    <img class="relative z-10" :src="[smallScreen ? bgImage.sm : bgImage.lg]" alt="">
    <div class="z-20 w-3/5 lg:w-2/5 absolute top-48px sm:top-64px mx-24px sm:mx-64px">
      <h2 class="" :class="textColor.h2">{{ headingText.title }}</h2>
      <p class=" mt-5 smallScreen:mt-12 sm:mt-18 leading-tight sm:leading-relaxed"
         :class="textColor.paragraph"> {{ headingText.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    bgImage: {
      type: Object,
      required: true,
    },
    textColor: {
      type: Object,
      required: true
    },
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

    articles: [
      {
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        title: 'LOrem Ipsum Dolor',
        url: '/weddings/wedding-1-600x750px.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      }
    ]
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

</style>
