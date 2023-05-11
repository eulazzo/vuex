<template>
  <div>
    <todo-item v-for="todo in listTodos" :key="todo._id" :todo="todo"/>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters } from 'vuex'

export default {
  components: { TodoItem },

  computed:{
    ...mapGetters([
      'listTodos',
    ])
  }
};
</script>
<style></style>
