import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
