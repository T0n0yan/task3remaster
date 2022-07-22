import { Route, Routes } from "react-router-dom";
import "./Components/assets/Styles/global.scss";
import Footer from "./Components/Footer/index";
import Nav from "./Components/Navigate";
import Author from "./Pages/Author";
import Post from "./Pages/Post";
import Stories from "./Pages/Stories";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/stories" element={<Stories />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;
