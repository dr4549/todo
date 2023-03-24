import { createRouter, createWebHistory } from "vue-router";
import Home from "../jungHwan/Home.vue";
import Todos from "../jungHwan/todos/index.vue";
import Todo from "../jungHwan/todos/_id.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/todos",
      name: "Todos",
      component: Todos,
    },
    {
      path: "/todos/:id",
      name: "Todo",
      component: Todo,
    },
  ],
});

// 1 / home 2 /todos 3 /todos/create 4 /todos/:id

export default router;
