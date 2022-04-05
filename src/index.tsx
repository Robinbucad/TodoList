import { createRoot } from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"

import "./index.scss"
import App from "./App"

const container: any = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
