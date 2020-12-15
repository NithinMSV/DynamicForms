import Vue from "vue";
import VueRouter from "vue-router";

import {
  Home,
  About,
  Qrmodule,
  Default,
  Dashboard,
  CCLayout,
  StyleOption,
  EasyMode,
  CustomMode,
  Account,
  DashAdmin,
  DashPublic,
} from "./allimports";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        components: About,
      },
    ],
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/admin",
        name: "admin",
        component: DashAdmin,
      },
      {
        path: "/dashboard/public",
        name: "Account",
        component: DashPublic,
      },
      {
        path: "/scannow",
        name: "QrScanner",
        component: Qrmodule,
      },
      {
        path: "/account",
        name: "Account",
        component: Account,
      },
    ],
  },
  {
    path: "/creator",
    component: CCLayout,
    children: [
      {
        path: "/",
        name: "Style Choice",
        component: StyleOption,
      },
      {
        path: "/easy",
        name: "easy",
        component: EasyMode,
      },
      {
        path: "/custom",
        name: "custom",
        component: CustomMode,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
