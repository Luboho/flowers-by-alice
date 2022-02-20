<template>
  <div class="bg-aliceBrown">
    <div class="relative">
        <Heading :headingText="headingText" :bgImage="bgImage" />
    </div>

    <div v-for="(article, index) in articles" :key="index" class="flex flex-col">
      <Article :bgColor="bgColor" :article="article" />
    </div>

    <ImgGallery />
    <SocialSharing />

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
import SocialSharing from './../components/SocialSharing.vue'

export default {
  name: "HomeDesing",
  components: {
    Heading,
    Article,
    ImgGallery,
    SocialSharing
  },

  data: () => ({
    smallScreen: false,
    headingText: {
      bgColor: "bg-aliceBrown",
      h2Color: "", // Taillwind format
      textColor: "text-gray-500",
      title: "Ut faucibus eu risus fermentum sit amet nisi vulputate",
      text: "Aenean viverra nibh nunc. Sed eu placerat odio.",
    },
    bgColor: "bg-aliceBrown",
    limit: 12,
    articles: [
      {
        id: 1,
        title: 'Vestibulum eget lorem ac lorem posuere molestie eu sed nisl. Aenean fermentum',
        url: '/home-design/1.jpg',
        paragraph: 'Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo., odio est pulvinar felis, et volutpat metus lectus sed leo.'
      },
      {
        id: 2,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/home-design/2.jpg',
        paragraph: 'Maecenas a felis at massa euismod facilisis. Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. Integer mollis neque ut felis maximus lobortis. Donec tincidunt facilisis felis, Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo.Quisque pretium ac leo in tempus. Sed in nunc non dolor congue pretium. Praesent vestibulum, nunc ut ultricies pretium, odio est pulvinar felis, et volutpat metus lectus sed leo. non ornare sapien convallis sit amet. Aenean viverra nibh nunc.'
      },
      {
        id: 3,
        title: 'Phasellus aliquam leo non lorem pulvinar fermentum',
        url: '/home-design/3.jpg',
        paragraph: 'Aenean viverra nibh nunc. Sed eu placerat odio. Duis condimentum sollicitudin mollis. Nunc eget nibh et risus tincidunt imperdiet. Cras quis luctus libero. Vestibulum eget rutrum sapien, et vulputate enim. Vivamus volutpat ligula suscipit quam sagittis cursus vel at leo. Nullam volutpat, felis nec posuere egestas, ante ligula posuere mauris, sit amet malesuada odio ligula pretium tellus.'
      },
    ]
  }) ,

  async fetch() {
      await this.$store.dispatch('images/getList', { pageNumber: 0, category: this.filterByCategory, qty: this.limit});
      await this.$store.dispatch('images/getNotPaginatedList')
  },
    head: {
    title: "Flowers by Alice - Home design by Alice.",
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
        content: `${'https://www.flowersbyalice.online' +'/home-design/2.jpg'}`
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${'https://www.flowersbyalice.online' +'/home-design/2.jpg'}`
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
        return "/home-design/header/sm.jpg"
      } else {
        return "/home-design/header/lg.jpg"
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
