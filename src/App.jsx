import Chat from "./components/Chat";
import Chat1 from "./components/Chat1";
import Chat2 from "./components/Chat2";
import SideBar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <div className="container">
          <SideBar />
          <Routes>
          <Route index element={<Chat />} />
            <Route path="/behzad" element={<Chat />} />
            <Route path="/ali" element={<Chat1 />} />
            <Route path="/mehdi" element={<Chat2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
