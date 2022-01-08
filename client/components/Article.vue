<template>
  <div class="relative z-40 pt-12 sm:pt-20 md:pt-64px max-w-1800px h-auto"
       :class="bgColor">
    <div class="mx-24px md:mx-64px">
      <img class="sm:w-2/3 p-2"
          :class="[ numIsEven(article.id) ? 'float-right' : 'float-left']"
          :style="{ maskImage: 'url(' + shuffledMask + ')', maskSize: '100%', maskOrigin: 'content-box', objectFit: 'fill', maskRepeat: 'no-repeat' }"
          :src="article.url" alt=""
      >
      <div>
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
                  require('@/assets/images/masks/3.svg'),
                  require('@/assets/images/masks/4.svg'),
                  require('@/assets/images/masks/5.svg'),
                  require('@/assets/images/masks/6.svg')
                ]
  }),

  computed: {
    shuffledMask() {
      // const mask = this.arrOfMasks.sort((a,b) => 0.5 - Math.random());
      const mask = this.arrOfMasks[Math.floor(Math.random()*this.arrOfMasks.length)];

        // const mask = this.arrOfMasks.filter(item => item.id === this.article.id)

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
