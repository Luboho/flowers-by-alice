<template>
  <div id="gallery" class="w-full mx-auto block mt-6 sm:mt-48px relative" >
    <div v-if="spin">
      <Spinner />
    </div>
    <div v-else class=" flex flex-wrap flex-col sm:flex-row justify-center content-center mx-24px sm:mx-64px">
      <div v-for="(item, imgIndex) in items" :key="imgIndex" class="relative m-1">
        <transition name="loadMoreImages" appear>
          <img
               v-show="loaded"
               class="cursor-pointer w-full sm:max-w-64"
               :src="item.url"
               @load="onLoadEnd"
               @click="index = imgIndex">
        </transition>
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
import { mapActions, mapMutations, mapState } from 'vuex'
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Spinner from './Spinner'

export default {
  name: "Index",
  components: {
    CoolLightBox,
    Spinner
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
      let pics;
      if(this.items !== undefined){
        pics = this.items.map((item) => item.url)
      }
      return pics;
    },
    ...mapState({
      loaded: state => state.images.loaded,
      spin: state => state.spinner.spin
    })
  },

  methods: {
    ...mapMutations({
      showNav: 'nav/SET_SCROLL_NAV',
    }),
    ...mapActions({
      getList: 'images/getList',
      setLoaded: 'images/setLoaded'
    }),
    onLoadEnd() {
      this.$store.dispatch('images/setLoaded', { bool: true});
    }
  }
}
</script>

<style scoped>
.pic {
  width: 300px;
  height: auto;
}
@keyframes disappear {
     0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes appear {
  0% {
    transform: scale(0.9) translateY(100px);
  }
  50% {
    transform: scale(1.05) translateY(-3px);
  }
  100% {
    transform: scale(1.0) translateY(0);
  }
}

/* Category btn */
.fade-enter-active {
    animation: disappear .4s;
}
.fade-leave-active {
    animation: appear .4s reverse;
}
/* Load More Images */
.loadMoreImages-leave-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: disappear .6s reverse;
}
.loadMoreImages-enter-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: appear .8s ease-in-out;
}
.loadMoreImages-enter, .loadMoreImages-leave-to {
    opacity: 0;
}
.loadMoreImages-enter-to, .loadMoreImages-leave {
    opacity: 1;
}
</style>
