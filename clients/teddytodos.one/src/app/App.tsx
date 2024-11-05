import { BrowserRouter, Route, Routes } from "react-router-dom"

// routes
import NotFound from "./routes/404"

// modules
import { AuthContainer } from "../modules/auth"
import { TodoContainer } from "../modules/todo"
import Layout from "../modules/layout"

interface AppProps {
    className?: string
}

const App: React.FC<AppProps> = ({ className }) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Layout}>
                    <Route path="/" Component={TodoContainer} />
                    <Route path="/auth" Component={AuthContainer} />
                    <Route path="/me" Component={AuthContainer} />
                    <Route path="*" Component={NotFound} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
