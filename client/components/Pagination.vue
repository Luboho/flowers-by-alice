<template>
  <div class="mt-24px pb-64px">
    <div class="text-center">
        <v-pagination
          v-model="currentPage"
          :length="lastPage"
          :total-visible="8"
          :dark="false"
          :color="'#7A9B76'"
        ></v-pagination>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name: "Pagination",
    props: {
      store: {
        required: true,
        type: String,
        default: function() {
          return ""
        }
      },
      collection: {
        required: true,
        type: String,
        default: function() {
          return ""
        }
      },
    },
      computed: {
        currentPage: {
          get() {
            return this.$store.state[this.store][this.collection].meta.current_page;
          },
          set( value ){
            this.$store.commit(this.store + '/SET_CURRENT_PAGE', value);
          }
        },
        lastPage: {
          get() {
            return this.$store.state[this.store][this.collection].meta.last_page;
          }
        },
        ...mapState({
          filterByCategory: state => state.filterByCategory.filterByCategory
        })
      },
    watch: {
      currentPage(newVal, oldVal) {
        this.paginatePage(newVal);
      }
    },

  methods: {
    paginatePage(pageNumber) {
      this.$store.dispatch(this.store + '/getList', { page: pageNumber, category: this.filterByCategory});
      this.$store.dispatch('images/setLoaded', {bool: false});
      this.scrollTo();
      // this.$store.dispatch('spinner/setSpinner', true);
    },
    scrollTo() {
      const gallery = document.getElementById("filterNav");
      return gallery.scrollIntoView();
    }
  }
}
</script>
