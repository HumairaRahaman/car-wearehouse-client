import React from "react"
import ReactDOM from "react-dom"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"
import reportWebVitals from "./reportWebVitals"


ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById("root")
);

reportWebVitals();
