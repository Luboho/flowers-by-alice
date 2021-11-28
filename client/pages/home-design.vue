<template>
  <div>
    <div class="relative">
        <Heading :bgImage="bgImage" :headingText="headingText" />
    </div>
    <Article :bgColor="bgColor" :articles="articles" />
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
  name: "HomeDesing",
  components: {
    Heading,
    Article,
    Filtering,
    ImgGallery,
    Pagination
  },
  data: () => ({
    bgImage: {
      sm: "/home-design/home-design-header-bg-sm.jpg",
      lg: "/home-design/home-design-header-lg.jpg",
    },
    headingText: {
      h2Color: "", // Taillwind format
      textColor: "text-gray-500",
      title: "Ut faucibus eu risus eu pretium. Morbi ante nunc, fermentum sit amet nisi vulputate",
      text: "Aenean viverra nibh nunc. Sed eu placerat odio. Duis condimentum sollicitudin mollis. Nunc eget nibh et risus tincidunt imperdiet. Cras quis luctus libero. Vestibulum eget rutrum sapien, et vulputate enim. Vivamus volutpat ligula suscipit quam sagittis cursus vel at leo. Nullam volutpat, felis nec posuere egestas, ante ligula posuere mauris, sit amet malesuada odio ligula pretium tellus."
    },
    bgColor: "bg-aliceBrown",
    index: null,
    articles: [
      {
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/weddings/wedding-1.jpg',
        paragraph: 'Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo., odio est pulvinar felis, et volutpat metus lectus sed leo.'
      },
      {
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/weddings/wedding-2.jpg',
        paragraph: 'Maecenas a felis at massa euismod facilisis. Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. Integer mollis neque ut felis maximus lobortis. Donec tincidunt facilisis felis, Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. non ornare sapien convallis sit amet. Aenean viverra nibh nunc.'
      },
      {
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/weddings/wedding-3.jpg',
        paragraph: 'Aenean viverra nibh nunc. Sed eu placerat odio. Duis condimentum sollicitudin mollis. Nunc eget nibh et risus tincidunt imperdiet. Cras quis luctus libero. Vestibulum eget rutrum sapien, et vulputate enim. Vivamus volutpat ligula suscipit quam sagittis cursus vel at leo. Nullam volutpat, felis nec posuere egestas, ante ligula posuere mauris, sit amet malesuada odio ligula pretium tellus.'
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
