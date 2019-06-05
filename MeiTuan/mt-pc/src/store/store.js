import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  position: '郑州',
};
const mutation = {
  setPosition(state, val) {
    state.position = val;
  },
};
const actions = {
  setPosition({ commit }, val) {
    commit('setPosition', val);
  },
};

export default new Vuex.Store({
  state,
  mutation,
  actions,
});
