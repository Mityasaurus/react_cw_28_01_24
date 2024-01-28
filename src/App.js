import { Route, Routes } from "react-router-dom";
import News from "./pages/News";
import Weather from "./pages/Weather";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="news" element={<News />} />
          <Route path="weather" element={<Weather />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
