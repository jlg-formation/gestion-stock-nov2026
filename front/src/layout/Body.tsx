import { Route, Routes } from "react-router";
import Home from "../routes/Home";
import About from "../routes/About";

export default function Body() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* <Route path="stock" element={<StockList />} /> */}
    </Routes>
  );
}
