<template>
  <div class="w-full mx-auto block mt-28 sm:mt-20 md:mt-64px relative" >

    <div class=" flex flex-wrap flex-col sm:flex-row justify-between md:justify-evenly content-center mx-24px sm:mx-64px">
      <div v-for="(item, imgIndex ) in items" :key="imgIndex" class="relative m-2">
        <div class="relative">
          <img class=" cursor-pointer w-full sm:max-w-64" :src="item" @click="index = imgIndex">
        </div>
      </div>
    </div>

    <div class="">
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
          :slideshowDuration="1200"
          :effect="'fade'"
          :style="{ backgroundImage: `url(${image})` }"

        ></div>
      </div>
    </div>

  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "Index",
  components: {
    CoolLightBox
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data: () => ({
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
.pic {
  width: 300px;
  height: auto;
}
/* /* .image {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
.images-wrapper {
  display: flex;
  justify-content: center;
} */
</style>
