export const state = () => ({
  name: ""
})

export const mutations = {
  SET_NAME(state, value) {
    state.name = value
  },
}
