<template>
  <div id="gallery" class="w-full mx-auto block mt-6 sm:mt-48px relative" >
    <div class="mx-24px md:mx-64px max-w-1800px">

        <Filtering :items="items" :notPaginatedItems="notPaginatedItems" @update-limit="updateLimit" />

        <div v-if="spin">
          <Spinner />
        </div>
        <!-- No Masonry Gallery -->
        <!-- <div v-else class=" flex flex-wrap flex-col sm:flex-row justify-center content-center mx-24px sm:mx-64px">
          <div v-for="(item, imgIndex) in items" :key="imgIndex" class="relative m-1">
            <transition name="loadMoreImages">
              <img
                  v-show="loaded"
                  class="cursor-pointer w-full sm:max-w-64"
                  :src="item.url"
                  @load="onLoadEnd"
                  @click="index = imgIndex">
            </transition>
          </div>
        </div> -->
        <!-- End Of No Masonry Gallery -->

        <!-- Masonry -->
        <!-- Columns of Masonry depends and counted on window.innerWidth. When the div, padding, column width will change the size, Masonry will collapse. -->
        <div v-else id="wall" class="mt-6 sm:mt-48px mx-auto">
          <masonry-wall
            :items="items"
            :ssr-columns="columns"
            :column-width="colWidth"
            :padding="1"
          >
            <template #default="{ item }">
              <article class="card m-1 cursor-pointer transition transform hover:scale-95 duration-300">
                <transition name="loadMoreImages">
                  <img
                    :src="item.url"
                    class="card-img-top"
                    @click="initialIndex(item.id)"
                  />
                </transition>
              </article>
            </template>
          </masonry-wall>
        <!-- End Of Masonry -->

          <!-- Receiving Array of Strings -->
          <CoolLightBox :items="pictures"
                        :index="imgIndex"
                        @on-open="showNav(false)"
                        @close="imgIndex = null">
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
    </div>

</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import MasonryWall from "@yeger/vue2-masonry-wall";
import CoolLightBox from "vue-cool-lightbox";
import Filtering from './Filtering.vue';
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Spinner from './Spinner';

export default {
  name: "Index",
  components: {
    CoolLightBox,
    Spinner,
    Filtering,
    MasonryWall
  },
  data: () => ({
      imgIndex: null,
      limit: 20,
      columns: 3,
      colWidth: 200
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
      items: state => state.images.items.data,
      loaded: state => state.images.loaded,
      spin: state => state.spinner.spin,
      filterByCategory: state => state.filterByCategory.filterByCategory,
      notPaginatedItems: state => state.images.notPaginatedItems.data
    }),

  },
   watch: {
    limit: {
      handler(newVal, oldVal) {
        if(newVal){
          this.$store.dispatch('images/getList', { pageNumber: 0, category: this.filterByCategory, qty: this.limit});
        }
      },
    },
  },
  mounted() {
    window.onload = () => {
      if (window.innerWidth >= 100 && window.innerWidth <= 447){
        this.columns = 1;
        this.colWidth = 200;
      } else if(window.innerWidth >= 448 && window.innerWidth <= 647) {
        this.columns = 2;
        this.colWidth = 200;
      } else if(window.innerWidth >= 648 && window.innerWidth <= 927){
        this.columns = 3;
        this.colWidth = 200;
      } else if(window.innerWidth >= 928 && window.innerWidth <= 1127){
        this.columns = 4;
        this.colWidth = 200;
      } else if(window.innerWidth >= 1128 && window.innerWidth <= 1327){
        this.columns = 5;
        this.colWidth = 200;
      } else if(window.innerWidth >= 1328 && window.innerWidth <= 1527){
        this.columns = 3;
        this.colWidth = 350;
      } else if(window.innerWidth >= 1528){
        this.columns = 4;
        this.colWidth = 350;
      }
    };
    window.onresize = () => {
      if (window.innerWidth >= 100 && window.innerWidth <= 447){
        this.columns = 1;
        this.colWidth = 200;
      } else if(window.innerWidth >= 448 && window.innerWidth <= 647) {
        this.columns = 2;
        this.colWidth = 200;
      } else if(window.innerWidth >= 648 && window.innerWidth <= 927){
        this.columns = 3;
        this.colWidth = 200;
      } else if(window.innerWidth >= 928 && window.innerWidth <= 1127){
        this.columns = 4;
        this.colWidth = 200;
      } else if(window.innerWidth >= 1128 && window.innerWidth <= 1327){
        this.columns = 5;
        this.colWidth = 200;
      } else if(window.innerWidth >= 1328 && window.innerWidth <= 1527){
        this.columns = 3;
        this.colWidth = 350;
      } else if(window.innerWidth >= 1528){
        this.columns = 4;
        this.colWidth = 350;
      }
    };

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
      this.setLoaded(true);
    },
    initialIndex(id) {
      // const index = this.items.map(function(item){ return item.id;}).indexOf(id);
      const index = this.items.map(item => item.id).indexOf(id);
      this.imgIndex = index;
    },
    ifLimitExists(limit) {
        if(limit){
            return limit;
        }
    },
    loadMoreImgs() {
      const gallery = document.getElementById("gallery");
      return gallery.scrollIntoView();
    },
    updateLimit(data) {
      this.limit = data;
    },
  },


}
</script>

<style scoped>

.card {
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.652);
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
/* Load More Images*/
.loadMoreImages-leave-active {

    animation: disappear .6s reverse;
}
.loadMoreImages-enter-active {

    animation: appear .8s ease-in-out;
}
.loadMoreImages-enter, .loadMoreImages-leave-to {
    opacity: 0;
}
.loadMoreImages-enter-to, .loadMoreImages-leave {
    opacity: 1;
}
@keyframes showModal {
     0% { opacity: 0; }
    100% { opacity: 1; }
}
@keyframes move {
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
/* Load More Images */
.loadMoreImages-leave-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: move .8s ease-in-out;
}
.loadMoreImages-enter-active {
    /* transition: opacity 1s ease-in-out, transform 1s ease-in-out; */
    animation: move .8s ease-in-out;
}
.loadMoreImages-enter, .loadMoreImages-leave-to {
    opacity: 0;
}
.loadMoreImages-enter-to, .loadMoreImages-leave {
    opacity: 1;
}
</style>
