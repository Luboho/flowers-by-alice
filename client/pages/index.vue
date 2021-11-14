<template>
  <!-- <div class="z-10 relative" >
    <div class="relative">
      <Heading :bgImage="bgImage" :textColor="textColor" />
    </div>
    <Article />
    <Filtering />
    <div v-for="item in items" :key="item">
      <img :src="item" @click="index = 2" alt="">
    </div>
    <div class="m-48px">
      <CoolLightBox :items="items"
                    :index="index"
                    @on-open="showNav(false)"
                    @close="index = null">
      </CoolLightBox>

      <div class="images-wrapper">
        <div
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          class="image"
          :effect="'fade'"
          :style="{ backgroundImage: `url(${image})` }"

        ></div>
      </div>
    </div>


  </div> -->


  <div>
    <div class="relative">
        <Heading :bgImage="bgImage" :textColor="textColor" />
    </div>
    <Article />
    <Filtering />
    <ImgGallery :items="items" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import CoolLightBox from "vue-cool-lightbox";
// import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import Filtering from '../components/Filtering.vue'
import ImgGallery from '../components/ImgGallery.vue'

// import Gallery from '../components/Gallery.vue'

export default {
  name: "Index",
  components: {
    Heading,
    Article,
    Filtering,
    ImgGallery,
    // CoolLightBox,
  },
  data: () => ({
    bgImage: {
      sm: "/occasions/occasions-header-bg-sm.jpg",
      lg: "/occasions/occasions-header-bg-lg.jpg",
    },
    textColor: {
      h2: "",
      paragraph: "text-gray-500"
    }, // TAilwind v-bind :class format
      items: [
        'weddings/gallery/wedding-1.jpg',
        'weddings/gallery/wedding-2.jpg',
        'weddings/gallery/wedding-3.jpg',
        'weddings/gallery/wedding-4.jpg',
        'weddings/gallery/wedding-5.jpg',
        'weddings/gallery/wedding-1.jpg',
      ],
      index: null,
  }),

  methods: {
    ...mapMutations({
      showNav: 'nav/SET_SCROLL_NAV'
    })
  }
}
</script>

<style scoped>
/* .image {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
.images-wrapper {
  display: flex;
  justify-content: center;
} */
</style>
