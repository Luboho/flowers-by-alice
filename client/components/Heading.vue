<template>
  <div class="relative h-full mb-28" :class="headingText.bgColor">


    <!-- <img src="@/assets/images/back.png" class="w-screen mx-auto" alt=""> -->
    <!-- <div class="relative w-screen h-screen"> -->
      <!-- <img id="headBack" src="@/assets/images/middle.png" class="headBack absolute z-10 w-screen h-screen mx-auto" alt=""> -->
      <!-- <div class="absolute w-screen z-20 bg-black h-screen"></div> -->
      <!-- <img id="headFront" src="@/assets/images/front.png" class="headFront absolute z-20 w-auto h-screen mx-auto" alt=""> -->
    <!-- </div> -->

    <div class="">
      <div class="absolute z-30 overflow-hidden  mx-24px md:mx-64px sm:mt-2">
        <h2 class="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bolder text-shadow pt-16 xs:pt-48 sm:pt-12 md:pt-18 lg:pt-48 mt-32" :class="headingText.h2Color">{{ headingText.title }}</h2>
        <p class="mt-5 text-md sm:text-lg text-shadow smScreen:mt-12 text-shadow sm:mt-18 leading-tight sm:leading-relaxed"
          :class="headingText.textColor"> {{ headingText.text }}</p>
      </div>
      <img class="relative z-20 headBack top-10" :src="bgImage" alt="">
    </div>

    <!-- <div class="relative w-screen h-auto z-30 mx-24px sm:mx-64px overflow-hidden">
      <div class="absolute">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    bgImage: {
      type: String,
      required: true,
    },
    headingText: {
      type: Object,
      required: true
    }
  },

  computed: {
    currentPath() {
      return this.$route.path;
    },
  },

  mounted() {
    this.parallaxHeadBg();

  },

  methods: {
    parallaxHeadBg() {
         window.addEventListener('scroll', function(e) {
          const target = document.querySelector('.headBack');
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          target.style.transform = 'translate3d(0px,'+rate+'px, 0px)';
        })
      }
  },

}
</script>

<style scoped>
  .text-shadow {
    text-shadow: 2px 2px 3px rgb(49, 47, 47);
  }
</style>
