
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/posts/:id" element={<PostDetails/>}></Route>
      <Route path="*" element={<NoMatch/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
