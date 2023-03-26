import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserPage from "./pages/UserPage";
import AppState from "./store/AppState";

const App = () => {
    return (
        <AppState>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:user_name" element={<UserPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </AppState>
    );
}

export default App;