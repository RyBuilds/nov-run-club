import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";
import { AppContext } from "./context/Context";
// import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <AppContext>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </AppContext>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
