import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/PageContent/HomePage.vue"
import CalendarPage from "../components/PageContent/CalendarPage.vue"
import LastPage from "../components/PageContent/LastPage.vue"
import LongestPage from "../components/PageContent/LongestPage.vue"
import TablesPage from "../components/PageContent/TablesPage.vue"
import PageNotFound from "../components/PageContent/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/calendarPage",
    name: "CalendarPage",
    component: CalendarPage,
  },
  {
    path: "/lastPage",
    name: "LastPage",
    component: LastPage,
  },
  {
    path: "/longestPage",
    name: "LongestPage",
    component: LongestPage,
  },
  {
    path: "/tablesPage",
    name: "TablesPage",
    component: TablesPage,
  },
  {
    path: "/:notFound(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory("/graduate-univ-project/"),
  routes,
});

export default router;
