<template>
  <div>
    <div class="relative">
        <Heading :bgImage="bgImage" :headingText="headingText" />
    </div>
    <Article :articles="articles" />
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
  name: "Workshop",
  components: {
    Heading,
    Article,
    Filtering,
    ImgGallery,
    Pagination
  },
  data: () => ({
    bgImage: {
      sm: "/workshops/workshop-header-bg-sm.jpg",
      lg: "/workshops/workshop-header-bg-lg.jpg",
    },
    headingText: {
      h2Color: "",  // Tailwind format
      textColor: "text-gray-500",
      title: "Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum fringilla ante. ",
      text: "Sed eu nisl id libero eleifend fringilla ac in nulla. Nunc ut commodo mi, id vestibulum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas imperdiet nulla id sagittis. Integer accumsan massa ex, at vulputate massa egestas vitae."
    },
    index: null,
    articles: [
      {
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/occasions/occasion-1.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum,  veniam architecto repel'
      },
      {
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/occasions/occasion-2.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
    ]
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
