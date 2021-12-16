import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@ml/react-login",
  app: () => System.import("@ml/react-login"),
  activeWhen: ["/react-login"]
});

registerApplication({
  name: "@ml/react-store",
  app: () => System.import("@ml/react-store"),
  activeWhen: ["/react-store"]
});



// registerApplication({
//   name: "@ml/navbar",
//   app: () => System.import("@ml/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
