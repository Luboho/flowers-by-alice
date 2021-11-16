<template>
  <div>
    <div class="relative">
        <Heading :bgImage="bgImage" :textColor="textColor" />
    </div>
    <Article />
    <Filtering />
    <ImgGallery :items="items" />

    <div v-if="items" v-show="paginationTotal > 10">
        <Pagination store="images" collection="images" :filter="filter" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import Filtering from '../components/Filtering.vue'
import ImgGallery from '../components/ImgGallery.vue'
import Pagination from './../components/Pagination.vue'
// import Gallery from '../components/Gallery.vue'

export default {
  name: "Index",
  components: {
    Heading,
    Article,
    Filtering,
    ImgGallery,
    Pagination
  },
  data: () => ({
    filter: {
      filterByCategory: ['funeral']
    },
    bgImage: {
      sm: "/occasions/occasions-header-bg-sm.jpg",
      lg: "/occasions/occasions-header-bg-lg.jpg",
    },
    textColor: {
      h2: "",
      paragraph: "text-gray-500"
    }, // TAilwind v-bind :class format
      index: null,
  }),

  async fetch() {
      await this.$store.dispatch('images/getList', { pageNumber: 0, filterByCategory: this.filter.filterByCategory});
  },

  computed: {
    ...mapState({
      items: state => state.images.images.data,
      paginationTotal: state => state.images.images.meta.total
    })
  },

  watch: {
      filter: {
          deep: true,
          handler(newVal, oldVal) {
              if(newVal) {
                  this.$store.dispatch('images/getList', { pageNumber: 0, category: this.filter.filterByCategory })
              }
          }
      }
  },

  methods: {
    ...mapMutations({
      showNav: 'nav/SET_SCROLL_NAV'
    }),
    ...mapActions({
        refreshData: 'images/getList',
        getList: 'users/getList',
    }),
  },

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
