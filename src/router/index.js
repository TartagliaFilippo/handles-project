import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ProductsPage from "../pages/ProductsPage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import LocationPage from "../pages/LocationPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "products",
      path: "/products",
      component: ProductsPage,
    },
    {
      name: "contacts",
      path: "/contacts",
      component: ContactsPage,
    },
    {
      name: "location",
      path: "/location",
      component: LocationPage,
    },
  ],
});

export { router };
