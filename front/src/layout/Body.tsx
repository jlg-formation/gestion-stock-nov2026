import { Route, Routes } from "react-router";
import Home from "../routes/Home";
import About from "../routes/About";
import StockList from "../routes/StockList";
import { lazy, Suspense } from "react";

const StockAdd = lazy(() => import("../routes/StockAdd"));

export default function Body() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="stock" element={<StockList />} />
      <Route
        path="stock/add"
        element={
          <Suspense fallback={<p>Chargement...</p>}>
            <StockAdd />
          </Suspense>
        }
      />
    </Routes>
  );
}
