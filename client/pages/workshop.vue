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
  name: "Workshop",
  components: {
    Heading,
    Article,
    ImgGallery,
  },
  data: () => ({
    // bgImage: {
    //   sm: "/workshops/workshop-header-bg-sm.jpg",
    //   lg: "/workshops/workshop-header-bg-lg.jpg",
    // },
    headingText: {
      h2Color: "",  // Tailwind format
      textColor: "text-gray-500",
      title: "Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum fringilla ante. ",
      text: "Sed eu nisl id libero eleifend fringilla ac in nulla. Nunc ut commodo mi, id vestibulum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas imperdiet nulla id sagittis. Integer accumsan massa ex, at vulputate massa egestas vitae."
    },
    limit: 12,
    articles: [
      {
        id: 1,
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/workshops/1.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum,  veniam architecto repel'
      },
      {
        id: 2,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/workshops/2.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        id: 3,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/workshops/3.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        id: 4,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/workshops/4.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        id: 5,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/workshops/5.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
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
