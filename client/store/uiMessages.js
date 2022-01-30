export const state = () => ({
  uiMessage: {},
})

export const mutations = {
  SET_UI_MESSAGE(state, value) {
      state.uiMessage = value;
  }
}

export const actions = {
  getUiMessage({commit}, msg) {
      commit('SET_UI_MESSAGE', msg)
  }
}
