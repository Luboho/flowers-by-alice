export const state = () => ({
  scrollNav: true
})

export const mutations = {
  SET_SCROLL_NAV(state, value) {
    state.scrollNav = value
  }
}

export const actions = {
  getScrollNav({commit, state}) {
    let lastScroll = 0;
    window.onscroll = () => {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
      if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          if(lastScroll > 100 && state.scrollNav !== false){
            commit('SET_SCROLL_NAV', false);
          }
          // document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
      } else if(lastScroll >= currentScroll) {
        lastScroll = currentScroll;
        if(state.scrollNav !== true) {
          commit('SET_SCROLL_NAV', true);
          // document.getElementById("scrollLoc").innerHTML = "Scrolling UP";
        }
      }
    }
  }
}
