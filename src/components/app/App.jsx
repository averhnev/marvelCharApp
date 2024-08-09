import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MainPage, ComicsPage, SinglePageLogic, Page404} from "../pages";
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/characters/:id" element={<SinglePageLogic dataType='character' />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="/comics/:id" element={<SinglePageLogic dataType='comic' />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}


export default App;
