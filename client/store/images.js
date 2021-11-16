export const state = () => ({
  images: {}
})

export const mutations = {
  SET_IMAGES(state, value) {
    state.images = value
  },
  SET_CURRENT_PAGE(state, data) {
    state.images.meta.current_page = data;
  },
}

export const actions = {
  async getList({commit}, {pageNumber, category} ) {
    try {
      await this.$axios.$get('sanctum/csrf-cookie');

      await this.$axios.get(`/api/images?page=${pageNumber}&category=${category}`)
      .then(function(resp) {
        commit('SET_IMAGES', resp.data)
      })
    } catch (e) {
      console.log(e);
    }
  }
}

