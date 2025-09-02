import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
//Root directory hai -> Project yaha se render hoga
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
