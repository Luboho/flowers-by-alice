<template>
  <div class="relative top-14 overflow-hidden">
    <img class="relative z-10" :src="[smallScreen ? bgImage.sm : bgImage.lg]" alt="">
    <div class="w-3/5 lg:w-2/5 absolute top-4 xs:top-20 xs:left-20 z-20 mx-5">
      <h2 class="" :class="textColor.h2">Lorem ipsum Dolor for every Occassion</h2>
      <p class=" mt-5 smallScreen:mt-12 sm:mt-18 leading-tight sm:leading-relaxed"
         :class="textColor.paragraph"> natus! Natus, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repellendus tenetur!</p>
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
    }
  },
  data: () => ({
    smallScreen: {
      type: Boolean,
      required: false
    }
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
