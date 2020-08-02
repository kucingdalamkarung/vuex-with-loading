<template>
  <div class="hello">
    {{todos}}
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  mounted() {
    this.getData
  },
  computed: {
    ...mapState({
      loading: 'isLoading',
      todos: 'todos'
    }),
    ...mapActions({
      getData: 'getData'
    })
  }
};
</script>
