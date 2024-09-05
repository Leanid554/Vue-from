import { createRouter, createWebHistory } from "vue-router";
import BasicDataView from "../views/BasicDataView.vue";
import ContactDataView from "../views/ContactDataView.vue";
import ExperienceView from "../views/ExperienceView.vue";

const routes = [
  { path: "/", redirect: "/basic-data" },
  { path: "/basic-data", component: BasicDataView },
  { path: "/contact-data", component: ContactDataView },
  { path: "/experience", component: ExperienceView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
