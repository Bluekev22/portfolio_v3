import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import HttpsRedirect from "react-https-redirect"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <HttpsRedirect>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HttpsRedirect>
)
