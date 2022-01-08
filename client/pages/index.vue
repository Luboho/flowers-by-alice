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
import { mapState, mapActions, mapMutations } from 'vuex'
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import ImgGallery from '../components/ImgGallery.vue'

export default {
  name: "Index",
  components: {
    Heading,
    Article,
    ImgGallery,
  },
  data: () => ({
    // bgImage: {
    //   sm: "/occasions/occasions-header-bg-sm.jpg",
    //   lg: "/occasions/occasions-header-bg-lg.jpg",
    // },
    headingText: {
      h2Color: "",  // Tailwind format
      textColor: "text-gray-500",
      title: "Lorem Ipsum Dolor Natus cum aspernatur",
      text: "Batus! Natus, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repellendus tenetur!"
    },
    page: 0,
    bgColor: "",
    articles: [
      {
        id: 1,
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/occasions/2.jpg',
        paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum,  veniam architecto repel'
      },
      {
        id: 2,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/occasions/2.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
      {
        id: 3,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/occasions/2.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
    ]
  }),

  async fetch() {
      await this.$store.dispatch('images/getList', { page: 0, category: this.filterByCategory});
      await this.$store.dispatch('images/getNotPaginatedList')
  },

  computed: {
    ...mapState({
      spin: state => state.spinner.spin,
      filterByCategory: state => state.filterByCategory.filterByCategory,
      paginationTotal: state => state.images.items.meta.total,
      items: state => state.images.items.data,
      currentPage: state => state.images.items.meta.current_page,
      lastPage: state => state.images.items.meta.last_page,
      notPaginatedItems: state => state.images.notPaginatedItems.data
    }),
  },
  methods: {
    ...mapMutations({
      setItems: 'images/SET_ITEMS',
      setName: 'createPersistedState/SET_NAME'
    }),

    unduplicate(arr) {
      if(arr !== undefined) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
      }
    },

    ...mapActions({
      getList: 'images/getList',
    }),
    ...mapMutations({
      setItems: 'images/SET_ITEMS'
    })
  },

}
</script>

<style scoped>

</style>
