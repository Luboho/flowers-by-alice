<template>
  <div class="mx-24px md:mx-64px pt-28 pb-28 sm:pt-20 md:pt-64px max-w-1800px h-auto">
    <ul class="flex justify-center sm:justify-start place-self-center space-x-3 flex-wrap font-overlockSC text-sm">
      <li class="px-3 py-2 my-1 bg-gray-100 text-aliceBlue tracking-wider bg-opacity-50 rounded-sm" :class="{'selected' : 'bg-alicePink text-white'}">Alldfasdf</li>
      <li class="px-3 py-2 my-1 bg-alicePink bg-opacity-50 text-white font-bold rounded-sm" :class="{'selected' : 'bg-alicePink text-white'}">Wedding</li>
      <li class="px-3 py-2 my-1 bg-gray-100 text-aliceBlue bg-opacity-50 rounded-sm" :class="{'selected' : 'bg-alicePink text-white'}">Workshop</li>
      <li class="px-3 py-2 my-1 bg-gray-100 text-aliceBlue bg-opacity-50 rounded-sm" :class="{'selected' : 'bg-alicePink text-white'}">Funeral</li>
      <li class="px-3 py-2 my-1 bg-gray-100 text-aliceBlue bg-opacity-50 rounded-sm" :class="{'selected' : 'bg-alicePink text-white'}">Occasion</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Filtering",


}
</script>

<style>

</style>
