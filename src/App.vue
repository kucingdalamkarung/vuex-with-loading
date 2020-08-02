<template>
  <div id="app">
    <div v-if="loading">
      <h3>Loading</h3>
    </div>
    <div v-else>
      <div v-for="todo in todos" :key="todo.id">
        <p>{{ todo.title }}</p>
        <p>{{ todo.completed }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  mounted() {
    this.getData;
  },
  computed: {
    ...mapState({
      loading: "isLoading",
      todos: "todos"
    }),
    ...mapState("todo", {
      msg: "msg"
    }),
    ...mapActions({
      getData: "getData"
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
