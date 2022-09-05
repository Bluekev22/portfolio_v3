import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
const ReactSSLRedirect = require("require-ssl-redirect")

ReactSSLRedirect()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
