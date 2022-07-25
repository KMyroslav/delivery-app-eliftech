import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

import { persistor } from "./redux/store";
import { store } from "./redux/store";
import App from "./App";
import "./index.scss";
import { Bars } from "react-loader-spinner";

axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:8080";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="loader">
            <Bars
              height="150"
              width="150"
              color="#2196f3"
              ariaLabel="loading-indicator"
            />
          </div>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
