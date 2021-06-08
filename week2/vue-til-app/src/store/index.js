import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // data와 동일한 개념
    str: 'hello'
  },
  mutations: { // methods와 동일한 개념
    changeString(state) { // mutation에서는 state에 접근할 수 없음, state를 인자로 받아서 접근하는 것이 가능
      state.str = state.str + "!";
    },
    setToken(state, token) { // commit('setToken', 123) 과 같은 방식으로 사용하면 됨
      state.token = token;
    }
  }
  // actions: {

  // }
});

// commit('setToken', 123)
