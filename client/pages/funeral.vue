<template>
  <div>
    <div class="relative">
        <Heading :headingText="headingText" />
    </div>

    <div v-for="(article, index) in articles" :key="index" class="flex flex-col">
      <Article :article="article" :bgColor="bgColor" />
    </div>

    <ImgGallery />

    <div v-if="items" v-show="paginationTotal > 10">
        <Pagination store="images" collection="items" :filterByCategory="filterByCategory" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: "Funeral",
  components: {
    Heading,
    Article,
    ImgGallery,
  },
  data: () => ({
    // bgImage: {
    //   sm: "/funerals/funeral-header-sm.jpg",
    //   lg: "/funerals/funeral-header-lg.jpg",
    // },
    headingText: {
      h2Color: "text-gray-700", // Tailwind format
      textColor: "text-gray-200",
      title: "Vivamus sit amet metus dolor. Vestibulum varius volutpat sem, nec elementum leo viverra ut. ",
      text: " Vestibulum iaculis hendrerit leo, ut accumsan diam iaculis vitae. Mauris vel vestibulum est. Ut pellentesque aliquam eros, nec varius neque congue sed. Donec ipsum elit, finibus in est quis, elementum pellentesque nibh.!"
    },
    limit: 12,
    bgColor: "",
    articles: [
    {
      id: 1,
      title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
      url: '/weddings/1.jpg',
      paragraph: 'Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo., odio est pulvinar felis, et volutpat metus lectus sed leo.'
    },
    {
      id: 2,
      title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
      url: '/weddings/2.jpg',
      paragraph: 'Maecenas a felis at massa euismod facilisis. Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. Integer mollis neque ut felis maximus lobortis. Donec tincidunt facilisis felis, Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. non ornare sapien convallis sit amet. Aenean viverra nibh nunc.'
    },
    {
      id: 3,
      title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
      url: '/weddings/3.jpg',
      paragraph: 'Aenean viverra nibh nunc. Sed eu placerat odio. Duis condimentum sollicitudin mollis. Nunc eget nibh et risus tincidunt imperdiet. Cras quis luctus libero. Vestibulum eget rutrum sapien, et vulputate enim. Vivamus volutpat ligula suscipit quam sagittis cursus vel at leo. Nullam volutpat, felis nec posuere egestas, ante ligula posuere mauris, sit amet malesuada odio ligula pretium tellus.'
    },
  ]
  }),

  async fetch() {
      await this.$store.dispatch('images/getList', { pageNumber: 0, category: this.filterByCategory, qty: this.limit});
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

}
</script>

<style scoped>

</style>
