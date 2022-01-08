export const state = () => ({
  filterByCategory: 'all'
})

export const mutations = {
  SET_CATEGORY(state, value) {
    state.filterByCategory = value;
  }
}

export const actions = {
  setCategory({commit}, category) {
    this.dispatch('spinner/setSpinner', true, { root: true });
    // this.dispatch('images/setLoaded', false, { root: true })
    commit('SET_CATEGORY', category)
    // this.dispatch('spinner/setSpinner', false, { root: true});
  }
}
