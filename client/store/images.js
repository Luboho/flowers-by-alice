export const state = () => ({
  items: {},
  notPaginatedItems: [],
  loaded: false
})

export const mutations = {
  SET_ITEMS(state, value) {
    state.items = value
  },
  SET_NOT_PAGINATED_ITEMS(state, value) {
    state.notPaginatedItems = value;
  },
  SET_CURRENT_PAGE(state, data) {
    state.items.meta.current_page = data;
  },
  SET_LOADED(state, bool) {
    state.loaded = bool;
  }
}

export const actions = {

  async getList({commit}, {pageNumber, category} ) {
    this.dispatch('spinner/setSpinner', true, { root: true });
    try {
      await this.$axios.$get('sanctum/csrf-cookie');

     await this.$axios.$get(`/api/images?page=${pageNumber}&category=${category}`)
      .then(function(resp) {
        commit('SET_ITEMS', resp)
      })
    } catch (e) {
      console.log(e);
    }
    this.dispatch('filterByCategory/setCategory', category, { root: true })
    this.dispatch('spinner/setSpinner', false, { root: true});

  },

  async getNotPaginatedList({commit}) {
      try {
        await this.$axios.$get('sanctum/csrf-cookie');

        await this.$axios.get('api/not-paginated-items')
        .then(function(resp) {
          commit('SET_NOT_PAGINATED_ITEMS', resp.data)
        });
      } catch (e){
        console.log(e);
      }
  },

  setLoaded({commit}, {bool}) {
    commit('SET_LOADED', bool)
  }
}

