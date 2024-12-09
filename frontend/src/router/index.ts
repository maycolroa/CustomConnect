import { createRouter, createWebHistory } from "vue-router";
import LoginPages from "../components/LoginPage.vue";// Importa el nuevo componente
import DashboardpPages from "../components/DashboardpPages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login", // Redirige automáticamente al login
    },
    {
      path: "/login",
      name: "login",
      component: LoginPages,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardpPages, // Carga el componente Dashboard
    },
  ],
});

export default router;
