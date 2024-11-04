import { BrowserRouter, Route } from "react-router-dom"

import NotFound from "./NotFound"

// modules
import { AuthContainer } from "../modules/auth"

interface AppProps {
    className?: string
}

const App: React.FC<AppProps> = ({ className }) => {
    return (
        <BrowserRouter>
            <Route path="/" Component={TodoContainer} />
            <Route path="/auth" Component={AuthContainer} />
            <Route path="/me" Component={ProfileContainer} />
            <Route path="*" Component={NotFound} />
        </BrowserRouter>
    )
}

export default App
