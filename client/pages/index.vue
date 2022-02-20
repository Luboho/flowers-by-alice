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
    <i class="fa-facebook-f"></i>
    <SocialSharing />
    <div v-if="items" v-show="paginationTotal > 18">
        <Pagination store="images" collection="items" :filterByCategory="filterByCategory" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import ImgGallery from '../components/ImgGallery.vue'
import SocialSharing from './../components/SocialSharing.vue'

export default {
  name: "Index",
  components: {
    Heading,
    Article,
    ImgGallery,
    SocialSharing
  },
  data: () => ({
    headingText: {
      h2Color: "text-yellow-300",  // Tailwind format
      textColor: "text-white",
      title: "Lorem Ipsum Dolor Natus cum aspernatur",
      text: "Batus! Natus, cum aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi quod esse mollitia dolore veniam architecto repellendus tenetur!"
    },
    smallScreen: false,
    page: 0,
    bgColor: "",
    articles: [
      {
        id: 1,
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/occasions/1.jpg',
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
        url: '/occasions/3.jpg',
        paragraph: 'us, cum aspernatur nSeque ipsum, ullam eos ex iluptatem commodim aspernatur neque ipsum, ullam eos ex itaque o obcaecati,  voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodim aspernatur neque ipsum, ullam eos ex itaque obcaecati, voluptatem commodi, voluptatem commodi quod esse mollitia dolore veniam architecto repel'
      },
    ]
  }),

  async fetch() {
      await this.$store.dispatch('images/getList', { page: 0, category: this.filterByCategory});
      await this.$store.dispatch('images/getNotPaginatedList')
  },
    head: {
    title: "Flowers by Alice - flowers for you, for every occasion",
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
        content: `${'https://www.flowersbyalice.online' +'/occasions/2.jpg'}`
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${'https://www.flowersbyalice.online' +'/occasions/2.jpg'}`
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
      spin: state => state.spinner.spin,
      filterByCategory: state => state.filterByCategory.filterByCategory,
      paginationTotal: state => state.images.items.meta.total,
      items: state => state.images.items.data,
      currentPage: state => state.images.items.meta.current_page,
      lastPage: state => state.images.items.meta.last_page,
      notPaginatedItems: state => state.images.notPaginatedItems.data
    }),
    bgImage() {
      if(this.smallScreen) {
        return "/occasions/header/sm.jpg"
      } else {
        return "/occasions/header/lg.jpg"
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
