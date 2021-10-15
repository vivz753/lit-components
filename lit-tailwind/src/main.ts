import { Router } from "@vaadin/router";
import "./components/app-component";
import "./components/demo"
import "./components/ids-input"
import "./components/ids-card"

const routes = [
  {
    path: "/",
    component: "app-component",
    children: [
      {
        path: "/components",
        component: "demo-component",
      },
      // {
      //   path: "",
      //   component: "ids-input",
      // },
      // {
      //   path: "ids-card",
      //   component: "ids-card",
      // },
    ],
  },
  // {
  //   path: "/components",
  //   component: "demo-component",
  // },
  {
    path: "/components/ids-input",
    component: "ids-input",
  },
];

// const outlet = document.getElementById('outlet');
// export const router = new Router(outlet);
// router.setRoutes(routes);

const initRouter = () => {
  const outlet = document.querySelector("body");
  const router = new Router(outlet);
  router.setRoutes(routes);
};

window.addEventListener("load", () => {
  initRouter();
});
