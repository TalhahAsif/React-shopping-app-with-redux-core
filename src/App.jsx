import { Route, Routes } from "react-router-dom";
import AddtoCart from "./screens/Cart/AddtoCart";
import Home from "./screens/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<AddtoCart/>} />
      </Routes>
    </>
  );
}

export default App;
