<template>
  <div>
    <div class="relative">
        <Heading :headingText="headingText" :bgImage="bgImage" />
    </div>

    <div v-for="(article, index) in articles" :key="index" class="flex flex-col">
      <Article :bgColor="bgColor" :article="article" />
    </div>
    <div class="max-w-1800px">
      <ImgGallery />
    </div>

    <div v-if="items" v-show="paginationTotal > 18">
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
    headingText: {
      h2Color: "text-red-500",  // Tailwind format
      textColor: "text-gray-700",
      title: "Vestibulum eget lorem ac lorem posuere molestie eu sed nisl.",
      text: "Nunc ut commodo mi, id vestibulum mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam egestas imperdiet nulla id sagittis. Integer accumsan massa ex, at vulputate massa egestas vitae."
    },
    smallScreen: false,
    bgColor: "",
    limit: 12,
    articles: [
      // {
      //   id: 1,
      //   title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
      //   url: '/workshops/1.jpg',
      //   paragraph: 'us, cum aspernatur neque ipsum, ullam eos ex ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum,  veniam architecto repel'
      // },
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
      // {
      //   id: 4,
      //   title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
      //   url: '/workshops/4.jpg',
      //   paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      // },
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
    head: {
    title: "Flowers by Alice - join us and learn something new about creative work with flowers",
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: `${process.env.baseUrl}`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Flowers here, Flowers there, Flowers everywhere.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Get to know all about Flowers by Alice and its characters in tiny bits of info.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.baseUrl +'/logo.png'}`
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${process.env.baseUrl +'/logo.png'}`
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Flowers by Alice'
      }
    ]
  },
  computed: {
    ...mapState({
      filterByCategory: state => state.filterByCategory.filterByCategory,
      paginationTotal: state => state.images.items.meta.total,
      items: state => state.images.items.data,
      notPaginatedItems: state => state.images.notPaginatedItems.data
    }),
    bgImage() {
      if(this.smallScreen) {
        return "/workshops/header/sm.jpg"
      } else {
        return "/workshops/header/lg.jpg"
      }
    }
  },
  mounted() {
    if(process.browser) {
      if (window.innerWidth < 640){
        this.smallScreen = true;
      } else {
        this.smallScreen = false;
      }
    }

    window.onresize = () => {
      if (window.innerWidth < 640){
        this.smallScreen = true;
      } else {
        this.smallScreen = false;
      }
    };
  },
}
</script>

<style scoped>

</style>
