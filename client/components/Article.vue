<template>
  <div class="relative z-40 py-12 sm:py-20 md:py-64px max-w-1800px h-auto"
       :class="bgColor">
    <div class="mx-24px md:mx-64px">
      <img class="sm:w-3/4 md:w-1/2 lg:1/3 px-3 mb-3 sm:-py-2"
          :class="[ numIsEven(article.id) ? 'float-right' : 'float-left']"
          :style="{ maskImage: 'url(' + shuffledMask + ')', maskSize: '100%', maskOrigin: 'content-box', objectFit: 'fill', maskRepeat: 'no-repeat' }"
          :src="article.url" alt=""
      >
      <div class="">
        <h2 class="mb-3">{{ article.title }}</h2>
        <p class="block text-justify">{{ article.paragraph}} </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Article",
  props: {
    bgColor: {
      type: String,
      required: true
    },
    article: {
      type: Object,
      required: true
    },
  },

  data: () => ({
    arrOfMasks : [
                  require('@/assets/images/masks/1.svg'),
                  require('@/assets/images/masks/2.svg'),
                  require('@/assets/images/masks/4.svg'),
                  require('@/assets/images/masks/5.svg'),
                  require('@/assets/images/masks/6.svg')
                ]
  }),

  computed: {
    shuffledMask() {
      const mask = this.arrOfMasks[Math.floor(Math.random()*this.arrOfMasks.length)];

      return mask;
    }
  },

  methods: {
    numIsEven(index) {
      if(index % 2 === 0 ) {
        return true;
      } else {
        return false;
      }
    },
  },

}
</script>

<style>

</style>
