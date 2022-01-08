<template>
  <div>
    <div class="relative">
        <Heading :headingText="headingText" />
    </div>

    <div v-for="(article, index) in articles" :key="index" class="flex flex-col">
      <Article :bgColor="bgColor" :article="article" />
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
  name: "Wedding",
  components: {
    Heading,
    Article,
    ImgGallery,
  },
  data: () => ({
    // bgImage: {
    //   sm: "/weddings/wedding-header-bg-sm.jpg",
    //   lg: "/weddings/wedding-header-bg-lg.jpg",
    // },
    headingText: {
      h2Color: "",  // Tailwind format
      textColor: "text-gray-900",
      title: "Lorem Ipsum Dolor Natus cum aspernatur",
      text: "Jatus! Natus, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repellendus tenetur!"
    },
    bgColor: "",
    articles: [
      {
        id: 1,
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/weddings/4.jpg',
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
      await this.$store.dispatch('images/getList', { pageNumber: 0, category: this.filterByCategory});
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
