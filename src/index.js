import React from "react"
import ReactDOM from "react-dom"
import { SpeechProvider } from "@speechly/react-client"

import { Provider } from "./context/context"
import App from "./App"
import "./index.css"

ReactDOM.render(
    <SpeechProvider appId="5949b80c-d9f2-4ae7-8c0b-8bf0d1b74b24" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
)
