<template>
  <div class="z-10 relative" >
    <div class="relative">
      <Heading :bgImage="bgImage" :textColor="textColor" />
    </div>
    <Article />
    <Filtering />
  </div>

</template>

<script>
import Heading from '../components/Heading.vue'
import Article from '../components/Article.vue'
import Filtering from '../components/Filtering.vue'
export default {
  name: "Index",
  components: {
    Heading,
    Article,
    Filtering
  },
  data: () => ({
    bgImage: {
      sm: "/occasions/occasions-header-bg-sm.jpg",
      lg: "/occasions/occasions-header-bg-lg.jpg",
    },
    textColor: {
      h2: "",
      paragraph: "text-gray-500"
    } // TAilwind v-bind :class format
  }),
}
</script>

<style scoped>

</style>
