import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import { AppProvider, useApp } from "./utils/context";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="news" element={<News />} />
            <Route path="/news/:title" element={<NewsDetails />} />
            <Route path="weather" element={<Weather />} />
            <Route path="blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
