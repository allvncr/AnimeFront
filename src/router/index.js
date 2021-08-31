import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue')
  },

  {
    path: "/search",
    name: "Search",
    component: () => import('../views/Search.vue')
  },

  {
    path: "/anime/:anime",
    name: "Anime",
    component: () => import('../views/Anime.vue')
  },

  {
    path: "/anime/:anime/:episode",
    name: "Episode",
    component: () => import('../views/Watch.vue')
  },

  {
    path: "/browse",
    name: "Browse",
    component: () => import('../views/Browse.vue')
  },

  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue')
  },

  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register.vue')
  },

  {
    path: "/channel",
    name: "Channel",
    component: () => import('../views/Channel.vue')
  },

  {
    path: "/account",
    name: "Account",
    component: () => import('../views/Account.vue')
  }

  

]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
