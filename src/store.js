import { createStore } from "vuex";

export const store = createStore({
  state: {
    todos: [
      {
        _id: 0,
        title: "Go to gym 7:30pm",
        isDone: false,
      },
      {
        _id: 1,
        title: "Build a social media backend api with .NET",
        isDone: true,
      },
      {
        _id: 2,
        title: "Todo a tutorial video about vuejs or .Net",
        isDone: false,
      },
      {
        _id: 3,
        title: "Todo a SASS software",
        isDone: true,
      },
      {
        _id: 4,
        title: "Todo a sample app with flutter",
        isDone: false,
      },
    ],
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload);
    },
    removeTodo(state, payload) {
      state.todos = state.todos.filter((item) => item._id !== payload);
    },

    toggleTodoStatus(state, payload) {

      //payload.isDone = !todoItem.completed

      state.todos = state.todos.map((todo) => {
        if (todo._id === payload) return { ...todo, isDone: !todo.isDone };
        return { ...todo };
      });
    },
  },
  actions: {
    addTodo({ commit }, payload) {
      setTimeout(() => {
        commit("addTodo", payload);
      }, 1000);
    },

    removeTodo({ commit }, payload) {
      setTimeout(() => {
        commit("removeTodo", payload);
      }, 1000);
    },

    toggleTodoStatus({ commit }, payload) {
      setTimeout(() => {
        commit("toggleTodoStatus", payload);
      }, 1000);
    },
  },

  getters: {
    doneTodos(state) {
      return state.todos.filter((todo) => todo.isDone);
    },
    listTodos(state) {
      return state.todos;
    },
  },
});

export default store;
