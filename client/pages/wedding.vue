<template>
  <div>
    <div class="relative">
        <Heading :bgImage="bgImage" :textColor="textColor" :headingText="headingText" />
    </div>
    <Article />
    <Filtering :items="items" :notPaginatedItems="notPaginatedItems" />
    <ImgGallery :items="items" />

    <div v-if="items" v-show="paginationTotal > 10">
        <Pagination store="images" collection="items" :filterByCategory="filterByCategory" />
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
    bgImage: {
      sm: "/occasions/occasions-header-bg-sm.jpg",
      lg: "/occasions/occasions-header-bg-lg.jpg",
    },
    textColor: {
      h2: "",
      paragraph: "text-gray-500"
    }, // TAilwind v-bind :class format
    headingText: {
      title: "Lorem Ipsum Dolor Natus cum aspernatur",
      text: "Jatus! Natus, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repellendus tenetur!"
    },
      index: null,
  }),

  async fetch() {
      await this.$store.dispatch('images/getList', { pageNumber: 0, category: 'all'});
      await this.$store.dispatch('images/getNotPaginatedList')

  },
  computed: {
    ...mapState({
      filterByCategory: state => state.filterByCategory.filterByCategory,
      paginationTotal: state => state.images.items.meta.total,
      items: state => state.images.items.data,
      notPaginatedItems: state => state.images.notPaginatedItems.data
    })
  },

  mounted() {
    // this.$store.dispatch('images/getNotPaginatedList')
  },
  methods: {
    ...mapMutations({
      showNav: 'nav/SET_SCROLL_NAV'
    }),
    ...mapActions({
        refreshData: 'images/getList',
        getList: 'users/getList',
        getNotPaginatedList: 'images/getNotPaginatedList'
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
