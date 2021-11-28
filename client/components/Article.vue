<template>
  <div class="relative z-40 pt-12 sm:pt-20 md:pt-64px max-w-1800px h-auto"
       :class="bgColor">
    <div class="mx-24px md:mx-64px">
      <div v-for="(article, index) in articles"  :key="index" class="border-b border-opacity-30 flex overflow-x-hidden py-10" >
        <div class="">
          <img class="image-mask w-full h-auto sm:w-1/2 mb-3"
               :class="[ numIsEven(index) ? 'float-right' : 'float-left']"
               :src="article.url" alt="">
          <div>
            <h2 class="mb-3">{{ article.title }}</h2>
            <p class="block text-justify">{{ article.paragraph}} </p>
          </div>
        </div>
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
    articles: {
      type: Array,
      required: true
    }
  },

  methods: {
    numIsEven(index) {
      if(index % 2 === 0 ) {
        return true;
      } else {
        return false;
      }
    }
  },

}
</script>

<style>
.image-mask {
  /* width: 50vw;
  height: 50vh;
  position: relative;
  background-image: url('~/assets/images/headers/funeral-1.jpg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */

  mask-image: url('~/assets/images/masks/3.svg');
  mask-size: 100vmin;
  mask-repeat: no-repeat;
  }
</style>
