<template>
  <form class="form-container">
    <input
      class="input"
      v-model="newTodoItem"
      type="text"
      placeholder="Type a todo"
      :style="{ border: isEmpty ? '2px solid red' : '1px solid black' }"

    />
    <button class="button" @click.prevent="addTodo">Add Todo</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      newTodoItem: "",
      isEmpty:false
    };
  },

  methods: {
    getRandomInteger() {
      return Math.floor(Math.random() * (10000 - 6 + 1)) + 6;
    },

    resetInputButton() {
      this.newTodoItem = "";
    },

    addTodo() {
      if (!this.newTodoItem) {
        this.isEmpty = true
        return
      }

      this.$store.dispatch("addTodo", {
        _id: this.getRandomInteger(),
        title: this.newTodoItem,
        isDone: false,
      });

      this.resetInputButton();
    },
  },
};
</script>
<style scoped>
.form-container {
  background-color: #f8f8f8;
  padding: 2rem;
  max-width: 960px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.input {
  padding: 1rem;
  border: 0.3px solid grey;
}
.button {
  background-color: rgb(0, 0, 0);
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #f8f8f8;
  border: none;
  cursor: pointer;
}
</style>
