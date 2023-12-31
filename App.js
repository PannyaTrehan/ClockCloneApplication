// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stopwatch from "./pages/Stopwatch";
import Timer from "./pages/Timer";
import Alarm from "./pages/Alarm";
import WorldClock from "./pages/WorldClock";
import NoPage from "./pages/NoPage";
import NavigationBar from "./NavigationBar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Alarm />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
          <Route path="/WorldClock" element={<WorldClock />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </div>
  );
}
