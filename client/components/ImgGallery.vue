<template>
  <div id="gallery" class="w-full mx-auto block mt-6 sm:mt-48px relative" >

    <div class=" flex flex-wrap flex-col sm:flex-row justify-center md:justify-evenly content-center mx-24px sm:mx-64px">
      <div v-for="(item, imgIndex ) in items" :key="imgIndex" class="relative my-2">
        <div class="relative">
          <img class=" cursor-pointer w-full sm:max-w-64" :src="item.url" @click="index = imgIndex">
        </div>
      </div>
    </div>

    <div class="">
      <CoolLightBox :items="pictures"
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
import { mapActions, mapMutations } from 'vuex'
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

  computed: {
    pictures() {
      return this.items.map((item) => item.url)
    }
  },

  methods: {
    ...mapMutations({
      showNav: 'nav/SET_SCROLL_NAV'
    }),
    ...mapActions({
      getList: 'images/getList'
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
