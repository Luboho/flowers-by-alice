<template>
  <div v-if="items" v-show="items.length > 1" id="filterNav" class="mt-48px max-w-1800px h-auto">
    <div class="flex justify-center sm:justify-start place-self-center space-x-1 flex-wrap font-overlockSC text-sm">

      <ul  v-for="(category, index) in categories" :key="index"
           class="text-aliceBlue">
        <li class="px-3 py-2 my-1 bg-gray-100 cursor-pointer bg-opacity-50 tracking-wide rounded-sm transition duration-250 duration-300 ease-in-out transform active:scale-75"
            :class="{'bg-alicePink text-white font-semibold cursor-text isDisabled' : selected(category)}"
            @click="filterOut(category)"
            >{{ category }}
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Filtering",
  props: {

    items: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    },
    notPaginatedItems: {
      type: Array,
      required: true,
      default: function () {
        return [];
      }
    }
  },

  async fetch() {
      // await this.$store.dispatch('images/getList', { pageNumber: 0, category: this.selected.filterByCategory});
      // Get All Categories
      // await this.$store.dispatch('images/getNotPaginatedList');
  },

  computed: {
    ...mapState({
      filterByCategory: state => state.filterByCategory.filterByCategory
    }),

    categories() {
      let arrOfCategories;
      if(this.notPaginatedItems) {
        if(this.notPaginatedItems.length > 0) {

          arrOfCategories = this.notPaginatedItems.map((item) => item.category)
        }
      }
      // Unduplicate
      arrOfCategories = this.unduplicate(arrOfCategories);
      const all = ['all']
      return all.concat(arrOfCategories);
    },
  },
  methods: {
    filterOut(category) {
      this.$emit('update-limit', 12);
      this.$store.dispatch('filterByCategory/setCategory', category); // Change Active Category
      // this.$store.dispatch('images/setLoaded', {bool: false}); // Transition onLoad Images
      this.$store.dispatch('images/getList', { pageNumber: 0, category: category, qty:12}); //
    },
    unduplicate(arr) {
      if(arr !== undefined) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
      }
    },
    selected(category) {
        if(this.filterByCategory === category) {
          return true;
        } else {
          return false;
        }
    },
  },

  //   watch: {
  //     selected: {
  //         deep: true,
  //         handler(newVal, oldVal) {
  //             if(newVal) {
  //                 this.$store.dispatch('images/getList', { pageNumber: 0, category: 'all' })
  //             }
  //         }
  //     }
  // },
}
</script>

<style>
.isDisabled {
    pointer-events: none;
  }
</style>
