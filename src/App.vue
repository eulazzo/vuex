<template>
  <div id="app">
    <h1>Todos</h1>
    <h2>Completed: {{isDoneTodos}}</h2>

    <h2>Pending {{isPending}}</h2>
    <todo-list  />
    <todo-form />      
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoForm from './components/TodoForm.vue';
import { mapGetters } from 'vuex'

export default {  
  components:{TodoList,TodoForm},
  name: 'App',

  computed:{
    ...mapGetters([
      'isDoneTodos',
      'isPending',
    ])
  }
}
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
