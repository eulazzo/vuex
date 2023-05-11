<template>
  <div class="todo-container">
    <span
      :style="{ textDecoration: todo.isDone ? 'line-through' : 'none' }"
      class="todo"
      >{{ todo.title }}</span
    >
    <input @click="toggleTodoStatus" type="checkbox" v-model="isDone" :checked="todo.isDone"/>
    <button @click="removeTask" class="delete-btn">X Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: { type: Object, required: true, default: null },
  },

  methods: {
    toggleTodoStatus() {
      this.$store.dispatch("toggleTodoStatus", this.todo._id);
    },
    removeTask() {
      this.$store.dispatch("removeTodo", this.todo._id);
    },
  },
};
</script>

<style scoped>
.delete-btn {
  border: none;
  background-color: aqua;
  padding: 0.3rem 1.3rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
