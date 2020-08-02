import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import todo from "./todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    todos: []
  },
  mutations: {
    SET_LOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    },
    SET_TODOS: (state, todos) => {
      state.todos = todos;
    }
  },
  actions: {
    getData({ commit }) {
      commit('SET_LOADING', true)
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(r => r.data)
        .then(data => {
          commit("SET_TODOS", data);
          commit('SET_LOADING', false)
        });
    }
  },
  modules: {
    todo
  }
});
