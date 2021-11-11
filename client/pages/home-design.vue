<template>
  <div class="z-10 relative" >
    <div class="relative">
      <Heading :bgImage="bgImage" :textColor="textColor" />
    </div>
    <div class="border-2 border-red-500">
    <h1 class="">Hello World</h1>
    <h2 class="">Hello World</h2>
    <h3>Keep up to date </h3>
    <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    <p class="drop-cap">Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    </div>
  <div class="p-1 border-2 border-red-500">
    <h1 class="">Hello World</h1>
    <h2 class="">Hello World</h2>
    <h3>Keep up to date </h3>
    <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    <p class="drop-cap">Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    </div><div class="p-1 border-2 border-red-500">
    <h1 class="">Hello World</h1>
    <h2 class="">Hello World</h2>
    <h3>Keep up to date </h3>
    <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    <p class="drop-cap">Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    </div><div class="p-1 border-2 border-red-500">
    <h1 class="">Hello World</h1>
    <h2 class="">Hello World</h2>
    <h3>Keep up to date </h3>
    <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    <p class="drop-cap">Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    </div><div class="p-1 border-2 border-red-500">
    <h1 class="">Hello World</h1>
    <h2 class="">Hello World</h2>
    <h3>Keep up to date </h3>
    <p class="drop-cap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    <p class="drop-cap">Ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse unde reprehenderit saepe voluptate natus, similique vero error harum dolor aperiam voluptatibus debitis pariatur vitae? Aliquam perspiciatis itaque voluptatem exercitationem!</p>
    </div>
  </div>

</template>

<script>
import Heading from '../components/Heading.vue'
export default {
  name: "HomeDesign",
  components: {
    Heading
  },
  data: () => ({
    bgImage: {
      sm: "/home-design/home-design-header-bg-sm.jpg",
      lg: "/home-design/home-design-header-lg.jpg"
    },
    textColor: {
      h2: "",
      paragraph: "text-gray-500"
    } // TAilwind v-bind :class format
  })
}
</script>

<style scoped>

</style>
